import React from "react";
import { FaUserCircle, FaEnvelope, FaPhoneAlt, FaLock } from "react-icons/fa";
import { MdSettings } from "react-icons/md";

const Profile1 = () => {
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
              href="/profile"
              className="text-gray-600 hover:text-indigo-600 transition duration-300"
            >
              Profile
            </a>
          </nav>
        </div>
      </header>

      {/* Profile Section */}
      <main className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center leading-snug">
          User <span className="text-indigo-600">Profile</span>
        </h2>
        <p className="text-lg text-gray-600 text-center mt-4">
          Manage your account details, settings, and security preferences.
        </p>

        {/* Profile Details */}
        <section className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Personal Information */}
            <div className="p-6 bg-white rounded-lg shadow">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-full mb-4">
                <FaUserCircle size={24} />
              </div>
              <h3 className="text-xl font-semibold text-indigo-600">
                Personal Information
              </h3>
              <p className="text-gray-600 mt-2">
                Update your name, email, phone number, and other personal
                details.
              </p>
            </div>

            {/* Account Settings */}
            <div className="p-6 bg-white rounded-lg shadow">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-full mb-4">
                <MdSettings size={24} />
              </div>
              <h3 className="text-xl font-semibold text-indigo-600">
                Account Settings
              </h3>
              <p className="text-gray-600 mt-2">
                Customize your account preferences and notification settings.
              </p>
            </div>

            {/* Security Settings */}
            <div className="p-6 bg-white rounded-lg shadow">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-full mb-4">
                <FaLock size={24} />
              </div>
              <h3 className="text-xl font-semibold text-indigo-600">
                Security Settings
              </h3>
              <p className="text-gray-600 mt-2">
                Manage your password, two-factor authentication, and account
                recovery options.
              </p>
            </div>

            {/* Contact Information */}
            <div className="p-6 bg-white rounded-lg shadow">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-full mb-4">
                <FaEnvelope size={24} />
              </div>
              <h3 className="text-xl font-semibold text-indigo-600">
                Contact Information
              </h3>
              <p className="text-gray-600 mt-2">
                Keep your email and phone number up-to-date for important
                alerts.
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

export default Profile1;
