import React from "react";

const SuccessPayment = ({ transactionId, amount, date }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
        <div className="text-green-500 text-6xl mb-4">✅</div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Payment Successful!
        </h2>
        <p className="text-gray-600 mb-6">
          Thank you for your payment. Your transaction was processed
          successfully.
        </p>
        <div className="text-left mb-4">
          <p className="text-sm text-gray-700">
            <strong>Transaction ID:</strong> {transactionId}
          </p>
          <p className="text-sm text-gray-700">
            <strong>Amount Paid:</strong> ${amount}
          </p>
          <p className="text-sm text-gray-700">
            <strong>Date:</strong> {date}
          </p>
        </div>
        <button
          className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          onClick={() => window.location.href = '/'}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default SuccessPayment;
