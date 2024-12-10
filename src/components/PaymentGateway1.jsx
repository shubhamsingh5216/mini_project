import React, { useState } from 'react';

const PaymentOptions1 = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [upiId, setUpiId] = useState('');
  const [cardData, setCardData] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target); // Access the form that triggered the event
    const UPIID = formData.get("upiId"); // Get the input value
    setUpiId(UPIID);
    console.log("UPI ID submitted:", upiId); // Check if the UPI ID is correct

    //PAYMENT started
    //u have UPI id of sender and amount ( hardcode)
    // u have got upi id of buyer ( input box)
    // send these 3 values to a backed service where the payment will be done
    //example code is like this:->
    //         fetch('url')
    //          on success-> call success message
    //          on failure-> call a pop of to select new payment method
    //...

    // Payment completed or failure information retreived from the backed server.


    alert("Payment Successful!");
  };
  React.useEffect(() => {
    console.log("UPI ID updated to:", upiId); // Logs the updated state
  }, [upiId]);
  

  const PaymentOption = React.memo(({ method, title, icon, children }) => (
    <div
      className={`border rounded-xl p-5 transition-all duration-300 ${
        selectedMethod === method
          ? 'border-blue-500 bg-blue-50'
          : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
      }`}
    >
      <button
        className="w-full text-left"
        onClick={() => setSelectedMethod(selectedMethod === method ? '' : method)}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm">
            {icon}
          </div>
          <span className="font-semibold text-lg">{title}</span>
        </div>
      </button>

      <div
        className={`mt-4 transition-all duration-300 ${
          selectedMethod === method ? 'block' : 'hidden'
        }`}
      >
        {children}
      </div>
    </div>
  ));

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Complete Your Payment</h1>
            <p className="text-gray-600 mt-2">Choose your preferred payment method</p>
          </div>

          <div className="space-y-4">
            <PaymentOption
              method="upi"
              title="UPI Payment"
              icon={
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
            > 
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Enter UPI ID (e.g., username@upi)"
                  name="upiId"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  autoComplete="username" // Use "username" or another appropriate autocomplete type

                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Pay Now
                </button>
              </form>
            </PaymentOption>

            <PaymentOption
              method="gpay"
              title="Google Pay"
              icon={
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              }
            >
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-red-600 text-center">Currently unavailable</p>
              </div>
            </PaymentOption>

            <PaymentOption
              method="phonepe"
              title="PhonePe"
              icon={
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              }
            >
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-red-600 text-center">Currently unavailable</p>
              </div>
            </PaymentOption>

            <PaymentOption
              method="card"
              title="Credit/Debit Card"
              icon={
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              }
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Card Number"
                  value={cardData.number}
                  onChange={(e) => setCardData({ ...cardData, number: e.target.value })}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={cardData.expiry}
                    onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                    className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="password"
                    placeholder="CVV"
                    maxLength={3}
                    value={cardData.cvv}
                    onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                    className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Cardholder Name"
                  value={cardData.name}
                  onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Pay Now
                </button>
              </form>
            </PaymentOption>

            <PaymentOption
              method="netbanking"
              title="Internet Banking"
              icon={
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              }
            >
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-red-600 text-center">Currently unavailable</p>
              </div>
            </PaymentOption>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions1;
