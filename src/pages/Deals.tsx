import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, Tag } from 'lucide-react';

export default function Deals() {
  const [timeLeft, setTimeLeft] = useState(3600 * 5 + 1800); // 5.5 hours

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-[#d62300] rounded-3xl p-8 md:p-12 text-white mb-12 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-4 text-[#f5ebdc]">Flash Deals</h1>
            <p className="text-xl font-bold opacity-90 mb-6 max-w-lg">
              These offers won't last long. Claim them before the timer runs out!
            </p>
            <div className="inline-flex items-center bg-black/20 px-6 py-3 rounded-full font-mono text-2xl font-bold">
              <Clock className="mr-3" size={28} />
              {formatTime(timeLeft)}
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <Tag size={120} className="text-yellow-400 opacity-80 transform rotate-12" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { title: "BOGO Whopper®", desc: "Buy one Whopper, get one free. Limit one per customer.", code: "BOGO-WHOP" },
          { title: "Free Large Fries", desc: "With any purchase over $5.", code: "FRIES-YAY" },
          { title: "$3 Snack Box", desc: "Includes 4pc nuggets, small fries, small drink.", code: "SNACK-3" },
          { title: "20% Off Entire Order", desc: "Valid on mobile app orders only.", code: "APP-20" },
        ].map((deal, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl p-6 shadow-lg border-2 border-dashed border-[#d62300] flex flex-col sm:flex-row items-center"
          >
            <div className="w-full sm:w-1/3 h-32 bg-gray-100 rounded-xl mb-4 sm:mb-0 sm:mr-6 flex-shrink-0">
              <img 
                src={`https://picsum.photos/seed/deal${i}/300/300`} 
                alt={deal.title} 
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-grow text-center sm:text-left">
              <h3 className="text-2xl font-black text-[#502314] mb-2">{deal.title}</h3>
              <p className="text-[#502314] opacity-80 mb-4">{deal.desc}</p>
              <div className="bg-[#f5ebdc] text-[#d62300] font-mono font-bold px-4 py-2 rounded-lg inline-block border border-[#e5d5c5]">
                Code: {deal.code}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
