import os
from typing import Dict, TypedDict, List, Union
from dotenv import load_dotenv
from langchain_core.messages import HumanMessage, AIMessage
from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain_core.output_parsers import StrOutputParser
from langchain_chroma import Chroma
from langchain_openai import OpenAIEmbeddings
from langchain_text_splitters import RecursiveCharacterTextSplitter
import chromadb
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain_core.documents import Document
import argparse

# Load environment variables
load_dotenv()

# Initialize OpenAI client
llm = ChatOpenAI(
    model="gpt-4o",
    temperature=0,
    api_key=os.getenv("OPENAI_API_KEY")
)

# Initialize embeddings
embeddings = OpenAIEmbeddings(api_key=os.getenv("OPENAI_API_KEY"))

# Initialize ChromaDB
chroma_client = chromadb.PersistentClient(path="./chroma_db")

def feed_data(file_path: str, collection_name: str = "documents"):
    """
    Feed data into ChromaDB from a text file
    """
    # Read the content of the file
    with open(file_path, 'r', encoding='utf-8') as file:
        text = file.read()

    # Split text into chunks
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=200
    )
    chunks = text_splitter.split_text(text)

    # Convert chunks to documents
    documents = [Document(page_content=chunk) for chunk in chunks]

    # Create or get the collection
    vectorstore = Chroma.from_documents(
        documents=documents,
        embedding=embeddings,
        persist_directory="./chroma_db",
        collection_name=collection_name
    )

    print(f"Successfully added {len(chunks)} documents to ChromaDB collection '{collection_name}'")
    return vectorstore

class AgentState(TypedDict):
    messages: List[Union[HumanMessage, AIMessage]]
    context: List[Document]

def create_rag_chain():
    """
    Create the RAG chain using LangGraph
    """
    # Create the retrieval chain
    prompt = ChatPromptTemplate.from_messages([
        ("system", "You are a helpful AI assistant. Use the following context to answer the user's question.\n\nContext: {context}"),
        MessagesPlaceholder(variable_name="messages"),
    ])

    # Create the document chain
    document_chain = create_stuff_documents_chain(
        llm=llm,
        prompt=prompt,
    )

    return document_chain

def ask_question(question: str, collection_name: str = "documents"):
    """
    Ask a question and get a response using the RAG system
    """
    # Initialize vector store
    vectorstore = Chroma(
        persist_directory="./chroma_db",
        embedding_function=embeddings,
        collection_name=collection_name
    )

    # Create RAG chain
    chain = create_rag_chain()

    # Retrieve relevant documents
    retrieved_docs = vectorstore.similarity_search(question, k=3)

    # Initialize agent state
    state = AgentState(
        messages=[HumanMessage(content=question)],
        context=retrieved_docs
    )

    # Get response
    response = chain.invoke(state)
    return response

def main():
    parser = argparse.ArgumentParser(description='RAG System using ChromaDB')
    parser.add_argument('--feed', type=str, help='Path to the file to feed into the system')
    parser.add_argument('--ask', type=str, help='Question to ask the system')
    parser.add_argument('--collection', type=str, default="documents", help='Collection name')

    args = parser.parse_args()

    if args.feed:
        feed_data(args.feed, args.collection)
    elif args.ask:
        response = ask_question(args.ask, args.collection)
        print("\nQuestion:", args.ask)
        print("\nAnswer:", response)
    else:
        print("Please provide either --feed or --ask argument")

if __name__ == "__main__":
    main()
