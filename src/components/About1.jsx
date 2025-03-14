import React from "react";

const About = () => {
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
              href="#about"
              className="text-gray-600 hover:text-indigo-600 transition duration-300"
            >
              About
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

      {/* About Section */}
      <main className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center leading-snug">
          About <span className="text-indigo-600">Payment Hub</span>
        </h2>
        <p className="text-lg text-gray-600 text-center mt-4">
          Payment Hub is your trusted partner for secure, fast, and reliable online transactions.
          With cutting-edge technology and a user-first approach, we aim to simplify payments for everyone.
        </p>

        {/* Vision and Mission */}
        <section className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-2xl font-semibold text-indigo-600">Our Mission</h3>
              <p className="text-gray-600 mt-4">
                To empower businesses and individuals with seamless and secure payment solutions
                that drive growth and trust in the digital economy.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-2xl font-semibold text-indigo-600">Our Vision</h3>
              <p className="text-gray-600 mt-4">
                To be the global leader in online payment solutions by consistently delivering
                innovative services that exceed customer expectations.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="mt-16">
          <h3 className="text-3xl font-semibold text-gray-800 text-center">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-indigo-100"></div>
              <h4 className="mt-4 text-xl font-bold text-gray-800">Suruti kumari</h4>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-indigo-100"></div>
              <h4 className="mt-4 text-xl font-bold text-gray-800">Sonali shet</h4>
              <p className="text-gray-600">CTO</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-indigo-100"></div>
              <h4 className="mt-4 text-xl font-bold text-gray-800">Sujal gc</h4>
              <p className="text-gray-600">Head of Design</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-indigo-100"></div>
              <h4 className="mt-4 text-xl font-bold text-gray-800">Shubham</h4>
              <p className="text-gray-600">Tecnical member</p>
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

export default About;
