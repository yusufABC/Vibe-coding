import React from 'react';
import { CreditCard, Lock } from 'lucide-react';

const Checkout: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column - Form */}
          <div className="lg:w-[60%] space-y-8">
            
            {/* Payment Methods */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
               <div className="text-center text-sm text-gray-500 mb-4">Express Checkout</div>
               <div className="flex gap-3">
                 <button className="flex-1 bg-[#5A31F4] text-white h-12 rounded-lg font-bold hover:opacity-90 transition-opacity">Shop Pay</button>
                 <button className="flex-1 bg-[#FFC439] text-black h-12 rounded-lg font-bold hover:opacity-90 transition-opacity italic">PayPal</button>
                 <button className="flex-1 bg-black text-white h-12 rounded-lg font-bold hover:opacity-90 transition-opacity">GPay</button>
               </div>
            </div>

            <div className="relative flex items-center py-4">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="flex-shrink-0 mx-4 text-gray-400 text-sm">OR</span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>

            {/* Contact & Shipping */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
              <h2 className="text-xl font-bold">Contact Information</h2>
              <input type="email" placeholder="Email address" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-accent outline-none" />
              
              <h2 className="text-xl font-bold pt-4">Shipping Address</h2>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First name" className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-accent outline-none" />
                <input type="text" placeholder="Last name" className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-accent outline-none" />
              </div>
              <input type="text" placeholder="Address" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-accent outline-none" />
              <div className="grid grid-cols-3 gap-4">
                <input type="text" placeholder="City" className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-accent outline-none" />
                <input type="text" placeholder="State" className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-accent outline-none" />
                <input type="text" placeholder="ZIP" className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-accent outline-none" />
              </div>
            </div>

            {/* Payment Form */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold mb-6">Payment</h2>
              <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-white">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full border-4 border-primary-accent"></div>
                    <span className="font-medium">Credit Card</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-5 bg-gray-200 rounded"></div>
                    <div className="w-8 h-5 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="p-6 space-y-4 bg-gray-50/50">
                  <div className="relative">
                     <input type="text" placeholder="Card number" className="w-full bg-white border border-gray-200 rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-primary-accent outline-none" />
                     <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                     <Lock className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Expiration date (MM / YY)" className="bg-white border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-accent outline-none" />
                    <input type="text" placeholder="Security code" className="bg-white border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-accent outline-none" />
                  </div>
                  <input type="text" placeholder="Name on card" className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-accent outline-none" />
                </div>
              </div>
              
              <button className="w-full bg-black text-white font-bold h-14 rounded-xl mt-8 hover:bg-gray-800 transition-colors text-lg shadow-lg">
                Pay Now
              </button>
            </div>
          </div>

          {/* Right Column - Summary */}
          <div className="lg:w-[40%]">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              
              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                <div className="flex gap-4 items-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                      <img src="https://picsum.photos/100/100?random=1" className="w-full h-full object-cover" alt="Product" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-gray-500 text-white text-xs font-bold rounded-full flex items-center justify-center">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-sm">Premium Thumbnail Pack</h3>
                    <p className="text-xs text-gray-500">Pack of 5</p>
                  </div>
                  <div className="font-bold">$75.00</div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                      <img src="https://picsum.photos/100/100?random=2" className="w-full h-full object-cover" alt="Product" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-gray-500 text-white text-xs font-bold rounded-full flex items-center justify-center">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-sm">Channel Audit</h3>
                    <p className="text-xs text-gray-500">Video Call (1hr)</p>
                  </div>
                  <div className="font-bold">$150.00</div>
                </div>
              </div>

              <div className="border-t border-gray-100 my-6"></div>

              {/* Discount */}
              <div className="flex gap-2 mb-6">
                <input type="text" placeholder="Gift card or discount code" className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-black" />
                <button className="bg-gray-200 text-gray-600 font-bold px-4 rounded-lg text-sm hover:bg-gray-300">Apply</button>
              </div>

              <div className="border-t border-gray-100 my-6"></div>

              {/* Totals */}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>$225.00</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>Calculated at next step</span>
                </div>
              </div>

              <div className="border-t border-gray-100 my-6"></div>

              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">Total</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-gray-500 text-xs">USD</span>
                  <span className="text-2xl font-black">$225.00</span>
                </div>
              </div>

              {/* Upsell */}
              <div className="mt-8 bg-blue-50 p-4 rounded-xl border border-blue-100">
                <h4 className="text-sm font-bold text-blue-900 mb-2">Wait! Don't miss this</h4>
                <div className="flex items-center gap-3">
                   <div className="w-12 h-12 bg-white rounded-lg overflow-hidden">
                     <img src="https://picsum.photos/100/100?random=3" alt="Upsell" className="w-full h-full object-cover"/>
                   </div>
                   <div className="flex-1">
                     <div className="text-xs font-bold text-blue-900">SEO Checklist PDF</div>
                     <div className="text-xs text-blue-700">$9.99</div>
                   </div>
                   <button className="text-xs bg-blue-600 text-white px-3 py-1.5 rounded font-bold hover:bg-blue-700">Add</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;