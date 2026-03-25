import { Link } from 'react-router-dom';
import { ShoppingBag, Menu as MenuIcon, User, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const { items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#f5ebdc] z-50 border-b border-[#e5d5c5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button 
              className="p-2 -ml-2 mr-2 md:hidden text-[#d62300]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <MenuIcon size={24} />
            </button>
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="font-black text-2xl text-[#d62300] tracking-tighter">BURGER KING</span>
            </Link>
            <div className="hidden md:ml-8 md:flex md:space-x-8">
              <Link to="/menu" className="text-[#502314] hover:text-[#d62300] px-3 py-2 rounded-md font-bold text-lg transition-colors">Order</Link>
              <Link to="/deals" className="text-[#502314] hover:text-[#d62300] px-3 py-2 rounded-md font-bold text-lg transition-colors">Offers</Link>
              <Link to="/rewards" className="text-[#502314] hover:text-[#d62300] px-3 py-2 rounded-md font-bold text-lg transition-colors">Rewards</Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center text-sm font-bold text-[#502314] bg-white px-3 py-1.5 rounded-full shadow-sm cursor-pointer hover:bg-gray-50">
              <MapPin size={16} className="mr-1 text-[#d62300]" />
              <span>Find a BK</span>
            </div>
            <button className="p-2 text-[#d62300] hover:bg-[#e5d5c5] rounded-full transition-colors">
              <User size={24} />
            </button>
            <Link to="/checkout" className="p-2 text-[#d62300] hover:bg-[#e5d5c5] rounded-full transition-colors relative">
              <ShoppingBag size={24} />
              {itemCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-[#d62300] rounded-full">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#f5ebdc] border-t border-[#e5d5c5] overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/menu" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-bold text-[#502314] hover:text-[#d62300] hover:bg-[#e5d5c5]">Order</Link>
              <Link to="/deals" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-bold text-[#502314] hover:text-[#d62300] hover:bg-[#e5d5c5]">Offers</Link>
              <Link to="/rewards" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-bold text-[#502314] hover:text-[#d62300] hover:bg-[#e5d5c5]">Rewards</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
