import React from "react";

const Payments1 = () => {
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
              href="/payments"
              className="text-gray-600 hover:text-indigo-600 transition duration-300"
            >
              Payments
            </a>
          </nav>
        </div>
      </header>

      {/* Payments Section */}
      <main className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center leading-snug">
          Payment <span className="text-indigo-600">Methods</span>
        </h2>
        <p className="text-lg text-gray-600 text-center mt-4">
          Choose from a wide range of payment methods to make transactions
          seamless and convenient.
        </p>

        {/* Payment Methods */}
        <section className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-full mb-4 font-bold text-lg">
                <img src="https://th.bing.com/th?id=OIP.q5lnS8aPFajyxhlJo4KD3AHaDX&w=349&h=159&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="U" />
              </div>
              <h3 className="text-xl font-semibold text-indigo-600">UPI</h3>
              <p className="text-gray-600 mt-2">
                Transfer funds instantly using Unified Payments Interface (UPI)
                with zero hassle.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-full mb-4 font-bold text-lg">
                <img src="https://th.bing.com/th?id=OIP.x7hVJon8m_LPVB2AyBfYwgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
              </div>
              <h3 className="text-xl font-semibold text-indigo-600">
                Debit Cards/Credit Cards
              </h3>
              <p className="text-gray-600 mt-2">
                Use your debit card to make secure and fast payments with ease.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-full mb-4 font-bold text-lg">
                <img src="https://th.bing.com/th?id=OIP.jri_Zx4aSK98p_mSjHdKKAHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
              </div>
              <h3 className="text-xl font-semibold text-indigo-600">
                Internet Banking
              </h3>
              <p className="text-gray-600 mt-2">
                Pay directly from your bank account using our secure internet
                banking options.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-full mb-4 font-bold text-lg">
                <img src="https://th.bing.com/th?id=OIP.tK9_1s9dclQIDMlPxc5QuwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
              </div>
              <h3 className="text-xl font-semibold text-indigo-600">PayPal</h3>
              <p className="text-gray-600 mt-2">
                Use your PayPal account for fast and secure international
                transactions.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-full mb-4 font-bold text-lg">
                <img src="data:image/jpeg;base64,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" alt="" />
              </div>
              <h3 className="text-xl font-semibold text-indigo-600">Stripe</h3>
              <p className="text-gray-600 mt-2">
                Seamlessly process credit card payments with Stripe’s secure
                system.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-full mb-4 font-bold text-lg">
                <img src="https://th.bing.com/th?id=OIP.aeHvnFKyesLUoES72tc1owHaEc&w=322&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
              </div>
              <h3 className="text-xl font-semibold text-indigo-600">
                Razorpay
              </h3>
              <p className="text-gray-600 mt-2">
                Experience hassle-free payments with Razorpay’s robust payment
                gateway.
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

export default Payments1;
