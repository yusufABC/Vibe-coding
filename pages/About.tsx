import React from 'react';
import { Target, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-3/5">
              <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 leading-tight">
                Making A <br/>
                <span className="text-primary-accent">Global Impact</span>
              </h1>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed max-w-2xl">
                <p>
                  YTpilot was founded with a single mission: to empower creators to reach their full potential. 
                  We believe that great content deserves to be seen, and we provide the tools and expertise to make that happen.
                </p>
                <p>
                  From humble beginnings, we've grown into a global team of creative professionals, 
                  serving thousands of channels across every niche imaginable.
                </p>
              </div>
            </div>
            <div className="lg:w-2/5 relative">
              <div className="aspect-square bg-gray-100 rounded-[40px] overflow-hidden relative z-10">
                <img src="https://picsum.photos/800/800?random=10" alt="Team working" className="w-full h-full object-cover" />
              </div>
              {/* Decorative Floating Elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-accent/10 rounded-full blur-2xl z-0"></div>
              <div className="absolute bottom-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl z-0"></div>
              
              <div className="absolute top-1/4 -right-8 bg-white shadow-xl p-4 rounded-2xl flex items-center gap-3 animate-bounce duration-[3000ms] z-20">
                <div className="bg-green-100 p-2 rounded-full text-green-600"><Target size={20}/></div>
                <div>
                  <div className="text-xs text-gray-500">Goal Reached</div>
                  <div className="font-bold">1M+ Views</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-10 px-6 lg:px-12">
        <div className="container mx-auto max-w-[1400px]">
          <div className="bg-black rounded-3xl p-12 text-white grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">45<span className="text-primary-accent">+</span></div>
              <div className="text-sm text-gray-400">Team Members</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">5.5k<span className="text-primary-accent">+</span></div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
             <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">10k<span className="text-primary-accent">+</span></div>
              <div className="text-sm text-gray-400">Videos Edited</div>
            </div>
             <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">99<span className="text-primary-accent">%</span></div>
              <div className="text-sm text-gray-400">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1200px]">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold">Our Journey</h2>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-400 via-primary-accent to-purple-600 rounded-full hidden md:block"></div>

            {/* Timeline Items */}
            <div className="space-y-12 md:space-y-24">
              {[
                { year: '2020', title: 'The Beginning', desc: 'Started as a small freelance group helping local creators.', align: 'left' },
                { year: '2021', title: 'Rapid Expansion', desc: 'Scaled to 100+ monthly clients and hired first full-time designers.', align: 'right' },
                { year: '2022', title: 'Global Reach', desc: 'Expanded services to 50+ countries and introduced automation tools.', align: 'left' },
                { year: '2024', title: 'Enterprise Solutions', desc: 'Partnering with major brands and media houses for content strategy.', align: 'right' },
              ].map((item, idx) => (
                <div key={idx} className={`flex flex-col md:flex-row items-center ${item.align === 'right' ? 'md:flex-row-reverse' : ''} gap-8 md:gap-0`}>
                  <div className="w-full md:w-1/2 px-8 text-center md:text-left">
                    <div className={`${item.align === 'right' ? 'md:text-right' : ''}`}>
                      <span className="inline-block px-4 py-1 rounded-full bg-white shadow-sm text-primary-accent font-bold mb-4 border border-gray-100">{item.year}</span>
                      <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                  
                  {/* Dot */}
                  <div className="w-8 h-8 bg-white border-4 border-primary-accent rounded-full z-10 shadow-lg relative hidden md:block">
                     <div className="absolute inset-0 bg-primary-accent opacity-20 animate-ping rounded-full"></div>
                  </div>

                  <div className="w-full md:w-1/2 px-8">
                    {/* Empty side for spacing */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metric Highlights */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             <div className="bg-white border border-gray-100 p-10 rounded-3xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award size={32} />
                </div>
                <h3 className="text-4xl font-extrabold mb-2">4.9/5</h3>
                <p className="text-gray-500">Average Client Rating</p>
             </div>
             <div className="bg-white border border-gray-100 p-10 rounded-3xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users size={32} />
                </div>
                <h3 className="text-4xl font-extrabold mb-2">300+</h3>
                <p className="text-gray-500">Creative Experts</p>
             </div>
             <div className="bg-white border border-gray-100 p-10 rounded-3xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target size={32} />
                </div>
                <h3 className="text-4xl font-extrabold mb-2">24/7</h3>
                <p className="text-gray-500">Support Availability</p>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;