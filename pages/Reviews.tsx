import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Review } from '../types';

const reviews: Review[] = Array.from({ length: 9 }).map((_, i) => ({
  id: i,
  name: `Client ${i + 1}`,
  date: "2 days ago",
  rating: 5,
  avatar: `https://i.pravatar.cc/150?u=${i}`,
  text: "YTpilot absolutely transformed my channel. The thumbnails are clicking at 12% CTR now, up from 4%. The team is responsive, creative, and they just 'get' the YouTube meta. Highly recommended!"
}));

const Reviews: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-3xl lg:text-5xl font-bold mb-8 max-w-3xl mx-auto leading-tight">
            What our clients are saying about us
          </h1>
          
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center -space-x-4">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=${i + 20}`} alt="User" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-2 border-white bg-black text-white flex items-center justify-center text-xs font-bold">
                +500
              </div>
            </div>
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-5 h-5 text-green-500 fill-green-500" />
              ))}
              <span className="font-bold ml-2">4.9/5 Rating</span>
            </div>
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mb-20">
          {reviews.map((review) => (
            <div key={review.id} className="break-inside-avoid bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-green-500 fill-green-500" />
                  ))}
                </div>
                <span className="text-xs text-gray-400">{review.date}</span>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                <div className="font-bold text-sm">{review.name}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2">
          <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-100">
            <ChevronLeft size={20} />
          </button>
          <button className="w-10 h-10 rounded-lg bg-black text-white font-bold flex items-center justify-center">1</button>
          <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-100 text-gray-600">2</button>
          <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-100 text-gray-600">3</button>
          <span className="text-gray-400 px-2">...</span>
          <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-100 text-gray-600">8</button>
          <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-100">
            <ChevronRight size={20} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Reviews;