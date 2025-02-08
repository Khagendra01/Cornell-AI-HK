import React from 'react';
import { ArrowRight, Shield, Stethoscope, Clock, Award } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">Abridge</div>
          <div className="space-x-8">
            <button className="hover:text-blue-200 transition">Solutions</button>
            <button className="hover:text-blue-200 transition">About</button>
            <button className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition">
              Get Started
            </button>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Transform Healthcare with AI-Powered Medical Documentation
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Streamline your medical documentation process with our advanced AI technology. 
              Save time, reduce burnout, and focus more on patient care.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-50 transition inline-flex items-center">
              Request Demo <ArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">HIPAA Compliant</h3>
              <p className="text-gray-600">
                Secure and compliant documentation that protects patient information
                at every step.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Stethoscope className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Clinical Accuracy</h3>
              <p className="text-gray-600">
                AI-powered technology that ensures precise and accurate medical documentation.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Clock className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Time Saving</h3>
              <p className="text-gray-600">
                Reduce documentation time by up to 50% and focus more on patient care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Trusted by Leading Healthcare Providers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of healthcare professionals who are already using Abridge
              to transform their medical documentation workflow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <Award className="w-8 h-8 text-blue-600 mb-4" />
              <p className="text-gray-700 mb-4">
                "Abridge has revolutionized how we handle medical documentation. 
                It's accurate, fast, and incredibly user-friendly."
              </p>
              <div>
                <p className="font-semibold">Dr. Sarah Johnson</p>
                <p className="text-sm text-gray-500">Chief of Medicine, Metro Hospital</p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <Award className="w-8 h-8 text-blue-600 mb-4" />
              <p className="text-gray-700 mb-4">
                "The time savings are incredible. We've seen a 40% reduction in 
                documentation time since implementing Abridge."
              </p>
              <div>
                <p className="font-semibold">Dr. Michael Chen</p>
                <p className="text-sm text-gray-500">Family Practice Physician</p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <Award className="w-8 h-8 text-blue-600 mb-4" />
              <p className="text-gray-700 mb-4">
                "The accuracy and compliance features give us peace of mind. 
                It's transformed our clinical workflow."
              </p>
              <div>
                <p className="font-semibold">Dr. Emily Rodriguez</p>
                <p className="text-sm text-gray-500">Director of Clinical Operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Medical Documentation?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of healthcare providers who are already saving time 
            and improving patient care with Abridge.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-50 transition inline-flex items-center">
            Get Started Today <ArrowRight className="ml-2" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Abridge</h3>
              <p className="text-sm">
                Transforming healthcare documentation with AI-powered solutions.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">For Doctors</a></li>
                <li><a href="#" className="hover:text-white">For Hospitals</a></li>
                <li><a href="#" className="hover:text-white">For Clinics</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">HIPAA Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            <p>&copy; 2024 Abridge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;