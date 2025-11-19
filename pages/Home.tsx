import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, BarChart, Users, Zap, Globe, ShieldCheck, Clock, Plus } from 'lucide-react';
import { Service, FAQItem } from '../types';

const services: Service[] = [
  { id: 1, title: "Video Editing", image: "https://picsum.photos/800/450?random=1", price: "From $50" },
  { id: 2, title: "Thumbnail Design", image: "https://picsum.photos/800/450?random=2", price: "From $15" },
  { id: 3, title: "Channel Audit", image: "https://picsum.photos/800/450?random=3", price: "From $100" },
  { id: 4, title: "Script Writing", image: "https://picsum.photos/800/450?random=4", price: "From $30" },
  { id: 5, title: "SEO Optimization", image: "https://picsum.photos/800/450?random=5", price: "From $40" },
];

const faqs: FAQItem[] = [
  { question: "What is the turnaround time for services?", answer: "Most design tasks are completed within 24-48 hours. Video editing typically takes 2-4 days depending on complexity." },
  { question: "Do you offer revisions?", answer: "Yes! We offer unlimited revisions until you are 100% satisfied with the result." },
  { question: "How do I communicate with my editor?", answer: "We have a dedicated dashboard and Discord channel for direct communication with your assigned creative team." },
  { question: "Is there a money-back guarantee?", answer: "Absolutely. If we can't meet your requirements after revisions, we provide a full refund." },
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (services.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? services.length - 3 : prev - 1));
  };

  return (
    <div className="bg-white">
      {/* Hero / Carousel Section */}
      <section className="py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-[1.1]">
              Our Popular <span className="text-primary-accent">YouTube Services</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Scale your channel faster with professional editing, design, and strategy.
            </p>
          </div>

          {/* Custom Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out gap-6"
                style={{ transform: `translateX(-${currentSlide * 33.33}%)` }}
              >
                {services.map((service) => (
                  <div key={service.id} className="min-w-[100%] md:min-w-[48%] lg:min-w-[32%] relative group cursor-pointer">
                    <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden relative">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                          <Play className="w-6 h-6 text-white fill-white ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-bold text-xl shadow-sm">{service.title}</h3>
                        <p className="text-primary-accent text-sm font-medium">{service.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <button 
              onClick={prevSlide}
              className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
               {Array.from({ length: services.length - 2 }).map((_, idx) => (
                 <button 
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${currentSlide === idx ? 'w-6 bg-primary-accent' : 'bg-gray-300'}`}
                 />
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Showcase */}
      <section className="py-20 px-6 lg:px-12">
        <div className="container mx-auto max-w-[1400px]">
          <div className="bg-primary-black rounded-[32px] p-12 lg:p-20 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gray-800">
              <div className="p-6">
                <div className="text-5xl lg:text-6xl font-extrabold mb-4 text-white">
                  5500<span className="text-primary-accent">+</span>
                </div>
                <div className="text-gray-400 font-medium uppercase tracking-wider text-sm">Clients Served</div>
              </div>
              <div className="p-6">
                <div className="text-5xl lg:text-6xl font-extrabold mb-4 text-white">
                  20k<span className="text-primary-accent">+</span>
                </div>
                <div className="text-gray-400 font-medium uppercase tracking-wider text-sm">Graphics & Videos</div>
              </div>
              <div className="p-6">
                <div className="text-5xl lg:text-6xl font-extrabold mb-4 text-white">
                  100<span className="text-primary-accent">+</span>
                </div>
                <div className="text-gray-400 font-medium uppercase tracking-wider text-sm">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="text-center mb-20">
             <h2 className="text-3xl lg:text-4xl font-bold uppercase tracking-wide">Why Choose Us?</h2>
             <div className="w-20 h-1 bg-primary-accent mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {[
              { icon: <Zap className="w-12 h-12" />, title: "Fast Delivery", desc: "Get your assets delivered in record time without compromising quality." },
              { icon: <Users className="w-12 h-12" />, title: "Dedicated Team", desc: "A full team of designers and editors assigned specifically to your channel." },
              { icon: <ShieldCheck className="w-12 h-12" />, title: "Quality Guarantee", desc: "We don't stop until you're completely satisfied with the final output." },
              { icon: <BarChart className="w-12 h-12" />, title: "Data Driven", desc: "Designs backed by analytics to maximize your Click-Through Rate." },
              { icon: <Globe className="w-12 h-12" />, title: "Global Reach", desc: "Content adapted for international audiences and multiple languages." },
              { icon: <Clock className="w-12 h-12" />, title: "24/7 Support", desc: "Our support team is always available to answer your questions." },
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center text-black mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed max-w-xs">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-[800px]">
          <div className="text-center mb-12">
             <h2 className="text-3xl lg:text-4xl font-bold">Q&A</h2>
             <p className="text-gray-500 mt-4">Common questions about our services</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-gray-200">
                <button 
                  className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                  onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
                >
                  <span className={`text-lg font-semibold transition-colors ${activeAccordion === idx ? 'text-primary-accent' : 'text-black'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${activeAccordion === idx ? 'bg-primary-accent text-white' : 'bg-gray-100 text-gray-500'}`}>
                    <Plus className={`w-5 h-5 transition-transform duration-300 ${activeAccordion === idx ? 'rotate-45' : ''}`} />
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${activeAccordion === idx ? 'max-h-40 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-500 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;