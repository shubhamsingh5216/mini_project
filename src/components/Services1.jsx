import React from "react";

const Services1 = () => {
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
              href="#contact"
              className="text-gray-600 hover:text-indigo-600 transition duration-300"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Services Section */}
      <main className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center leading-snug">
          Our <span className="text-indigo-600">Services</span>
        </h2>
        <p className="text-lg text-gray-600 text-center mt-4">
          Explore the wide range of services we offer to make online payments
          easy, secure, and efficient for you.
        </p>

        {/* Services List */}
        <section className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-full mb-4 font-bold text-lg">
                S
              </div>
              <h3 className="text-xl font-semibold text-indigo-600">
                Secure Transactions
              </h3>
              <p className="text-gray-600 mt-2">
                Enjoy peace of mind with our industry-leading security measures
                that protect your payments and data.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-full mb-4 font-bold text-lg">
                I
              </div>
              <h3 className="text-xl font-semibold text-indigo-600">
                Instant Processing
              </h3>
              <p className="text-gray-600 mt-2">
                Process your payments instantly with our optimized and
                high-speed system.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-full mb-4 font-bold text-lg">
                M
              </div>
              <h3 className="text-xl font-semibold text-indigo-600">
                Multi-User Support
              </h3>
              <p className="text-gray-600 mt-2">
                Easily manage multiple user accounts for businesses and teams
                with our secure platform.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-full mb-4 font-bold text-lg">
                F
              </div>
              <h3 className="text-xl font-semibold text-indigo-600">
                Mobile-Friendly
              </h3>
              <p className="text-gray-600 mt-2">
                Access our services anytime, anywhere with our mobile-optimized
                platform.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-full mb-4 font-bold text-lg">
                A
              </div>
              <h3 className="text-xl font-semibold text-indigo-600">
                Advanced Analytics
              </h3>
              <p className="text-gray-600 mt-2">
                Gain valuable insights with our analytics tools to track
                payments and optimize your operations.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-full mb-4 font-bold text-lg">
                G
              </div>
              <h3 className="text-xl font-semibold text-indigo-600">
                Global Reach
              </h3>
              <p className="text-gray-600 mt-2">
                Send and receive payments worldwide with ease and reliability.
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

export default Services1;
