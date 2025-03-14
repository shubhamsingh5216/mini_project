import React from 'react';

function FailurePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Transaction Failed</h1>
        <p className="text-gray-700 text-lg mb-6">
          Unfortunately, your transaction could not be processed. Please try again later or contact support for assistance.
        </p>
        <button
          onClick={() => window.location.replace('/')} // Replace with your desired route
          className="px-6 py-3 bg-red-500 text-white font-medium rounded hover:bg-red-600 transition"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
}

export default FailurePage;
