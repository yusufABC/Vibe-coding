import React from 'react';
import { Mail, Twitter, Youtube, Instagram, Globe, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12 max-w-[900px]">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">Get in Touch</h1>
          <p className="text-gray-500 text-lg">We'd love to hear from you. Here's how you can reach us.</p>
        </div>

        {/* Common Issues List */}
        <div className="mb-20 space-y-6">
          <h2 className="text-2xl font-bold mb-8 text-center">Before you ask...</h2>
          <div className="grid gap-6 md:grid-cols-2">
             <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
               <h3 className="font-bold text-lg mb-2">Where is my order?</h3>
               <p className="text-sm text-gray-500">Check your dashboard for real-time status updates.</p>
             </div>
             <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
               <h3 className="font-bold text-lg mb-2">Do you offer refunds?</h3>
               <p className="text-sm text-gray-500">Yes, read our refund policy in the footer.</p>
             </div>
          </div>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-20">
          {[
            { name: 'Discord', icon: <MessageCircle className="w-8 h-8" />, handle: '@ytpilot', bg: 'bg-[#5865F2]/10', color: 'text-[#5865F2]' },
            { name: 'Twitter', icon: <Twitter className="w-8 h-8" />, handle: '@ytpilot_off', bg: 'bg-[#1DA1F2]/10', color: 'text-[#1DA1F2]' },
            { name: 'YouTube', icon: <Youtube className="w-8 h-8" />, handle: 'YTpilot', bg: 'bg-[#FF0000]/10', color: 'text-[#FF0000]' },
            { name: 'Instagram', icon: <Instagram className="w-8 h-8" />, handle: '@ytpilot_gram', bg: 'bg-[#E4405F]/10', color: 'text-[#E4405F]' },
            { name: 'YTJobs', icon: <Globe className="w-8 h-8" />, handle: 'YTpilot Agency', bg: 'bg-gray-100', color: 'text-black' },
            { name: 'Support', icon: <Mail className="w-8 h-8" />, handle: 'help@ytpilot.com', bg: 'bg-green-50', color: 'text-green-600' },
          ].map((social, idx) => (
            <div key={idx} className={`${social.bg} p-8 rounded-2xl flex flex-col items-center text-center hover:scale-105 transition-transform cursor-pointer`}>
              <div className={`mb-4 ${social.color}`}>{social.icon}</div>
              <div className="font-bold text-lg mb-1">{social.name}</div>
              <div className="text-xs text-gray-500 font-medium">{social.handle}</div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-xl">
          <h2 className="text-2xl font-bold mb-8">Send us a message</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Channel Name</label>
                <input 
                  type="text" 
                  placeholder="Your Channel" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-accent transition-all"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="example@gmail.com" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-accent transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea 
                rows={6}
                placeholder="How can we help you?" 
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-accent transition-all resize-none"
              ></textarea>
            </div>
            <button className="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition-colors shadow-lg">
              Submit Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;