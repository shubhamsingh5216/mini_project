import React from "react";

const PaymentForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-lg p-6 bg-gray-800 rounded-lg shadow-lg">
        {/* Payment Method */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Payment Method</h2>
          <div className="flex space-x-2">
            <img src="/visa.png" alt="Visa" className="h-6" />
            <img src="/mastercard.png" alt="MasterCard" className="h-6" />
            <img src="/amex.png" alt="Amex" className="h-6" />
            <img src="/discover.png" alt="Discover" className="h-6" />
          </div>
        </div>

        {/* Credit Card Details */}
        <form>
          <div className="space-y-4">
            <div>
              <label className="block text-sm">Name on card</label>
              <input
                type="text"
                placeholder="Meet Patel"
                className="w-full p-2 bg-gray-700 rounded border border-gray-600"
              />
            </div>

            <div>
              <label className="block text-sm">Card number</label>
              <input
                type="text"
                placeholder="0000 0000 0000 0000"
                className="w-full p-2 bg-gray-700 rounded border border-gray-600"
              />
            </div>

            <div className="flex space-x-2">
              <div className="w-1/2">
                <label className="block text-sm">Card expiration</label>
                <div className="flex space-x-2">
                  <select className="w-full p-2 bg-gray-700 rounded border border-gray-600">
                    <option>Month</option>
                    <option>01</option>
                    <option>02</option>
                    {/* More months */}
                  </select>
                  <select className="w-full p-2 bg-gray-700 rounded border border-gray-600">
                    <option>Year</option>
                    <option>2024</option>
                    <option>2025</option>
                    {/* More years */}
                  </select>
                </div>
              </div>
              <div className="w-1/2">
                <label className="block text-sm">Card Security Code</label>
                <input
                  type="text"
                  placeholder="Code"
                  className="w-full p-2 bg-gray-700 rounded border border-gray-600"
                />
              </div>
            </div>
          </div>

          {/* Billing Address */}
          <div className="mt-6 space-y-4">
            <h3 className="text-lg font-semibold">Billing address</h3>
            <div>
              <label className="block text-sm">Country</label>
              <select className="w-full p-2 bg-gray-700 rounded border border-gray-600">
                <option>Country</option>
                {/* Add more countries */}
              </select>
            </div>
            <div>
              <label className="block text-sm">Address</label>
              <input
                type="text"
                placeholder="Address"
                className="w-full p-2 bg-gray-700 rounded border border-gray-600"
              />
            </div>
            <div className="flex space-x-2">
              <div className="w-1/2">
                <label className="block text-sm">City</label>
                <input
                  type="text"
                  placeholder="City"
                  className="w-full p-2 bg-gray-700 rounded border border-gray-600"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm">State</label>
                <input
                  type="text"
                  placeholder="State"
                  className="w-full p-2 bg-gray-700 rounded border border-gray-600"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm">ZIP Code</label>
              <input
                type="text"
                placeholder="ZIP Code"
                className="w-full p-2 bg-gray-700 rounded border border-gray-600"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-6 space-y-4">
            <h3 className="text-lg font-semibold">Contact information</h3>
            <div>
              <label className="block text-sm">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 bg-gray-700 rounded border border-gray-600"
              />
            </div>
            <div>
              <label className="block text-sm">Phone</label>
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-2 bg-gray-700 rounded border border-gray-600"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-500 p-3 rounded text-white font-semibold hover:bg-blue-600"
            >
              Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
