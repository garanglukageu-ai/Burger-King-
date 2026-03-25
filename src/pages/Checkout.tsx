import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ArrowRight, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion } from 'motion/react';

export default function Checkout() {
  const { items, updateQuantity, removeFromCart, total, clearCart } = useCart();
  const [step, setStep] = useState(1); // 1: Cart, 2: Details, 3: Success

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
    clearCart();
    
    // Trigger confetti
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
  };

  if (step === 3) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-3xl p-12 shadow-2xl border-2 border-green-500"
        >
          <CheckCircle size={80} className="mx-auto text-green-500 mb-6" />
          <h1 className="text-5xl font-black text-[#502314] uppercase tracking-tight mb-4">Order Confirmed!</h1>
          <p className="text-xl text-[#502314] opacity-80 mb-8">
            Your flame-grilled goodness is being prepared. Order #BK-{Math.floor(Math.random() * 10000)}
          </p>
          <div className="bg-[#f5ebdc] p-6 rounded-xl mb-8 inline-block text-left">
            <p className="font-bold text-[#502314] mb-2">Estimated Pickup Time:</p>
            <p className="text-3xl font-black text-[#d62300]">10 - 15 mins</p>
          </div>
          <div>
            <Link to="/" className="inline-block bg-[#502314] text-white px-8 py-4 rounded-full font-bold hover:bg-[#d62300] transition-colors">
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-black text-[#502314] uppercase tracking-tight mb-8">
        {step === 1 ? 'Your Order' : 'Checkout Details'}
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          {step === 1 ? (
            <div className="bg-white rounded-2xl shadow-md border border-[#e5d5c5] overflow-hidden">
              {items.length === 0 ? (
                <div className="p-12 text-center">
                  <p className="text-xl text-[#502314] opacity-70 mb-6">Your cart is empty.</p>
                  <Link to="/menu" className="inline-block bg-[#d62300] text-white px-8 py-3 rounded-full font-bold hover:bg-[#b01c00] transition-colors">
                    Start Order
                  </Link>
                </div>
              ) : (
                <div className="divide-y divide-[#e5d5c5]">
                  {items.map((item) => (
                    <div key={item.id} className="p-6 flex flex-col sm:flex-row items-center">
                      <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-6" referrerPolicy="no-referrer" />
                      <div className="flex-grow text-center sm:text-left mb-4 sm:mb-0">
                        <h3 className="text-xl font-black text-[#502314]">{item.name}</h3>
                        <p className="font-bold text-[#d62300]">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center border-2 border-[#e5d5c5] rounded-full">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 text-[#502314] hover:text-[#d62300]">
                            <Minus size={16} />
                          </button>
                          <span className="w-8 text-center font-bold text-[#502314]">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 text-[#502314] hover:text-[#d62300]">
                            <Plus size={16} />
                          </button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="p-2 text-gray-400 hover:text-red-500">
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-md border border-[#e5d5c5] p-8">
              <form id="checkout-form" onSubmit={handleCheckout} className="space-y-6">
                <div>
                  <h3 className="text-xl font-black text-[#502314] mb-4 border-b pb-2">Contact Info</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input required type="text" placeholder="First Name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d62300] focus:border-transparent outline-none" />
                    <input required type="text" placeholder="Last Name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d62300] focus:border-transparent outline-none" />
                    <input required type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d62300] focus:border-transparent outline-none md:col-span-2" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#502314] mb-4 border-b pb-2">Payment</h3>
                  <div className="space-y-4">
                    <input required type="text" placeholder="Card Number" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d62300] focus:border-transparent outline-none" />
                    <div className="grid grid-cols-2 gap-4">
                      <input required type="text" placeholder="MM/YY" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d62300] focus:border-transparent outline-none" />
                      <input required type="text" placeholder="CVC" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d62300] focus:border-transparent outline-none" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>

        <div className="lg:w-1/3">
          <div className="bg-white rounded-2xl shadow-md border border-[#e5d5c5] p-6 sticky top-24">
            <h3 className="text-xl font-black text-[#502314] mb-4 border-b pb-2">Order Summary</h3>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-[#502314]">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[#502314]">
                <span>Tax</span>
                <span>${(total * 0.08).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xl font-black text-[#502314] pt-4 border-t border-[#e5d5c5]">
                <span>Total</span>
                <span>${(total * 1.08).toFixed(2)}</span>
              </div>
            </div>
            
            {items.length > 0 && (
              step === 1 ? (
                <button 
                  onClick={() => setStep(2)}
                  className="w-full bg-[#d62300] text-white py-4 rounded-full font-black text-lg hover:bg-[#b01c00] transition-colors flex items-center justify-center"
                >
                  Proceed to Checkout <ArrowRight size={20} className="ml-2" />
                </button>
              ) : (
                <button 
                  type="submit"
                  form="checkout-form"
                  className="w-full bg-[#d62300] text-white py-4 rounded-full font-black text-lg hover:bg-[#b01c00] transition-colors flex items-center justify-center"
                >
                  Place Order
                </button>
              )
            )}
            
            {step === 2 && (
              <button 
                onClick={() => setStep(1)}
                className="w-full mt-4 bg-transparent text-[#502314] py-2 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Back to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
