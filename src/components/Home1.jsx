import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">Payment Hub</h1>
          <nav className="space-x-6">
            <a
              href="#"
              className="text-gray-600 hover:text-indigo-600 transition duration-300"
            >
              Home
            </a>
            <a
              href="#features"
              className="text-gray-600 hover:text-indigo-600 transition duration-300"
            >
              Features
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-indigo-600 transition duration-300"
            >
              Contact
            </a>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition duration-300">
              Sign In
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 leading-snug">
          Welcome to <span className="text-indigo-600">Payment Hub</span>
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          The ultimate solution for secure, fast, and seamless online payments.
        </p>
        <div className="mt-8">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition duration-300">
          <Link to="/paymentOptions" className="hover:underline cursor-pointer">
            Get Started
          </Link>
          </button>
          <button className="ml-4 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg shadow hover:bg-gray-300 transition duration-300">
            Learn More
          </button>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-semibold text-gray-800 text-center">
            Why Choose Us?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <h4 className="text-xl font-bold text-indigo-600">Secure</h4>
              <p className="text-gray-600 mt-2">
                We ensure the highest level of security for all your transactions.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <h4 className="text-xl font-bold text-indigo-600">Fast</h4>
              <p className="text-gray-600 mt-2">
                Experience blazing-fast payment processing times.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <h4 className="text-xl font-bold text-indigo-600">User-Friendly</h4>
              <p className="text-gray-600 mt-2">
                Our intuitive interface makes payments easier than ever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Payment Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
