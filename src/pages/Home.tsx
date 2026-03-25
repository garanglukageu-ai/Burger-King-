import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Flame, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#d62300] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/flames/1920/1080')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6 text-[#f5ebdc]">
                Flame-Grilled <br/>
                <span className="text-yellow-400">Since 1954</span>
              </h1>
              <p className="text-xl md:text-2xl font-bold mb-8 text-[#f5ebdc] opacity-90">
                Get the new Fiery Whopper® Meal for just $8.99. Only on the app.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/menu" className="bg-[#f5ebdc] text-[#d62300] px-8 py-4 rounded-full font-black text-xl hover:bg-white transition-colors flex items-center justify-center shadow-lg">
                  Order Now
                </Link>
                <Link to="/deals" className="bg-transparent border-2 border-[#f5ebdc] text-[#f5ebdc] px-8 py-4 rounded-full font-black text-xl hover:bg-[#f5ebdc] hover:text-[#d62300] transition-colors flex items-center justify-center">
                  View Offers
                </Link>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative z-10"
            >
              <img 
                src="https://picsum.photos/seed/burgerking/800/600" 
                alt="Delicious Whopper" 
                className="rounded-2xl shadow-2xl transform -rotate-2 border-8 border-[#f5ebdc]"
                referrerPolicy="no-referrer"
              />
              
              {/* Animated Flames */}
              <motion.div 
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 text-yellow-400 drop-shadow-lg"
              >
                <Flame size={80} fill="currentColor" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Deals */}
      <section className="py-16 bg-[#f5ebdc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-4xl font-black text-[#502314] uppercase tracking-tight">Hot Offers</h2>
            <Link to="/deals" className="text-[#d62300] font-bold flex items-center hover:underline">
              See All <ArrowRight size={20} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Free Fries on Friday", desc: "With any purchase of $1 or more.", img: "fries" },
              { title: "2 for $5 Mix n' Match", desc: "Choose between Whopper Jr., Chicken Jr., and more.", img: "mixmatch" },
              { title: "$0 Delivery Fee", desc: "On your first order of $15+.", img: "delivery" }
            ].map((deal, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-[#e5d5c5] flex flex-col"
              >
                <div className="h-48 bg-gray-200 relative">
                  <img 
                    src={`https://picsum.photos/seed/${deal.img}/600/400`} 
                    alt={deal.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-[#d62300] text-white font-black px-3 py-1 rounded-full text-sm uppercase">
                    Limited Time
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-black text-[#502314] mb-2 leading-tight">{deal.title}</h3>
                  <p className="text-[#502314] opacity-80 mb-6 flex-grow">{deal.desc}</p>
                  <Link to="/menu" className="w-full bg-[#502314] text-white font-bold py-3 rounded-full hover:bg-[#d62300] transition-colors text-center block">
                    Add to Order
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Promo */}
      <section className="py-20 bg-[#f5ebdc] border-t-4 border-[#d62300]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-[#502314] uppercase tracking-tight mb-6">
            Save your crowns. <br/> Get free food.
          </h2>
          <p className="text-xl text-[#502314] opacity-80 mb-10 max-w-2xl mx-auto">
            Earn 10 Crowns for every $1 spent. Redeem for your BK® favorites.
          </p>
          <Link to="/rewards" className="inline-block bg-[#d62300] text-white px-10 py-4 rounded-full font-black text-xl hover:bg-[#b01c00] transition-colors shadow-lg">
            Join Royal Perks
          </Link>
        </div>
      </section>
    </div>
  );
}
