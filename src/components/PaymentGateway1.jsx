import React, { useState } from 'react';
import Phonepe from './phonepe';
import NewPayment from './newphonepe';

const PaymentOptions1 = () => {
 
 
 

 

  
  

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Complete Your Payment</h1>
            <p className="text-gray-600 mt-2">Choose your preferred payment method</p>
          </div>

          <div className="space-y-4">

           <NewPayment/>
          

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions1;
