import React from "react";
import { FaPhoneAlt, FaEnvelope, FaHeadset, FaQuestionCircle } from "react-icons/fa";
import { MdChatBubbleOutline } from "react-icons/md";
import { BiBrain } from "react-icons/bi";  // AI Icon

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">Payment Hub</h1>
          <nav className="space-x-6">
            <a
              href="/"
              className="text-gray-600 hover:text-indigo-600 transition duration-300"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-gray-600 hover:text-indigo-600 transition duration-300"
            >
              About
            </a>
            <a
              href="/services"
              className="text-gray-600 hover:text-indigo-600 transition duration-300"
            >
              Services
            </a>
            <a
              href="/contact"
              className="text-gray-600 hover:text-indigo-600 transition duration-300"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Contact Section */}
      <main className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center leading-snug">
          Contact <span className="text-indigo-600">Us</span>
        </h2>
        <p className="text-lg text-gray-600 text-center mt-4">
          Get in touch with our team for assistance, inquiries, or feedback.
        </p>

        {/* Contact Options */}
        <section className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Help Centers */}
            <div className="p-6 bg-white rounded-lg shadow">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-full mb-4">
                <FaHeadset size={24} />
              </div>
              <h3 className="text-xl font-semibold text-indigo-600">
                Help Centers
              </h3>
              <p className="text-gray-600 mt-2">
                Access our help centers for answers to common queries and
                troubleshooting tips.
              </p>
            </div>

            {/* Contact Us */}
            <div className="p-6 bg-white rounded-lg shadow">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-full mb-4">
                <FaEnvelope size={24} />
              </div>
              <h3 className="text-xl font-semibold text-indigo-600">
                Contact Us
              </h3>
              <p className="text-gray-600 mt-2">
                Reach out via email or phone for personalized support.
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>
                  <FaPhoneAlt className="inline-block mr-2" />
                  +1-800-123-4567
                </li>
                <li>
                  <FaEnvelope className="inline-block mr-2" />
                  support@paymenthub.com
                </li>
              </ul>
            </div>

            {/* FAQs */}
            <div className="p-6 bg-white rounded-lg shadow">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-full mb-4">
                <FaQuestionCircle size={24} />
              </div>
              <h3 className="text-xl font-semibold text-indigo-600">FAQs</h3>
              <p className="text-gray-600 mt-2">
                Find quick answers to frequently asked questions about our
                services.
              </p>
            </div>
          </div>

          {/* Live Chat & Ask AI - Centered */}
          <div className="flex justify-center mt-16 gap-8">
            {/* Live Chat */}
            <div className="p-6 bg-white rounded-lg shadow w-full max-w-xs text-center">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-full mb-4 mx-auto">
                <MdChatBubbleOutline size={24} />
              </div>
              <h3 className="text-xl font-semibold text-indigo-600">Live Chat</h3>
              <p className="text-gray-600 mt-2">
                Chat with our support team in real-time for immediate help.
              </p>
            </div>

            {/* Ask AI */}
            <div className="p-6 bg-white rounded-lg shadow w-full max-w-xs text-center">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-full mb-4 mx-auto">
                <BiBrain size={24} />
              </div>
              <h3 className="text-xl font-semibold text-indigo-600">Ask AI</h3>
              <p className="text-gray-600 mt-2">
                Get answers to your questions instantly with our AI-powered
                assistant.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Payment Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
