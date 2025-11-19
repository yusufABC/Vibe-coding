import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const works = [
  { title: "Logo & Branding", color: "bg-pink-100", img: "https://picsum.photos/600/400?random=1" },
  { title: "Thumbnail Design", color: "bg-blue-100", img: "https://picsum.photos/600/400?random=2" },
  { title: "Video Editing", color: "bg-orange-100", img: "https://picsum.photos/600/400?random=3" },
  { title: "Channel Art", color: "bg-purple-100", img: "https://picsum.photos/600/400?random=4" },
  { title: "Motion Graphics", color: "bg-green-100", img: "https://picsum.photos/600/400?random=5" },
  { title: "Strategy Guide", color: "bg-yellow-100", img: "https://picsum.photos/600/400?random=6" },
  { title: "Sound Design", color: "bg-red-100", img: "https://picsum.photos/600/400?random=7" },
  { title: "Consultation", color: "bg-teal-100", img: "https://picsum.photos/600/400?random=8" },
];

const Work: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 lg:py-32 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-6xl lg:text-8xl font-black tracking-tighter mb-6">
            YTPixel
          </h1>
          <p className="text-xl lg:text-2xl text-gray-500 font-medium">
            Elevate Your Youtube Channel With Premium Assets
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-32 px-6 lg:px-12">
        <div className="container mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {works.map((work, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className={`aspect-[4/3] ${work.color} rounded-t-2xl overflow-hidden relative`}>
                   <img src={work.img} alt={work.title} className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-110 transition-transform duration-500" />
                   <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-lg">
                     <ArrowUpRight className="w-5 h-5" />
                   </div>
                </div>
                <div className="bg-white border border-gray-200 border-t-0 rounded-b-2xl p-6 shadow-sm group-hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-lg mb-3">{work.title}</h3>
                  <ul className="space-y-2">
                    {["High Quality", "Fast Turnaround", "Source Files"].map((item, i) => (
                      <li key={i} className="flex items-center text-xs text-gray-500">
                        <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;