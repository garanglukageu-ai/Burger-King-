import { useState } from 'react';
import { Crown, Star, Gift } from 'lucide-react';

export default function Rewards() {
  const [spendAmount, setSpendAmount] = useState(15);
  const pointsEarned = spendAmount * 10;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <Crown size={64} className="mx-auto text-yellow-500 mb-6" />
        <h1 className="text-5xl md:text-6xl font-black text-[#502314] uppercase tracking-tight mb-4">Royal Perks</h1>
        <p className="text-xl text-[#502314] opacity-80 max-w-2xl mx-auto">
          Earn Crowns. Get Free BK®. It's that simple.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          { icon: <Star size={40} />, title: "Earn Crowns", desc: "Get 10 Crowns for every $1 you spend." },
          { icon: <Gift size={40} />, title: "Get Free Food", desc: "Redeem Crowns for your favorite menu items." },
          { icon: <Crown size={40} />, title: "Exclusive Perks", desc: "Access to members-only deals and early releases." }
        ].map((perk, i) => (
          <div key={i} className="bg-white rounded-2xl p-8 text-center shadow-md border border-[#e5d5c5]">
            <div className="w-20 h-20 mx-auto bg-[#f5ebdc] rounded-full flex items-center justify-center text-[#d62300] mb-6">
              {perk.icon}
            </div>
            <h3 className="text-2xl font-black text-[#502314] mb-3">{perk.title}</h3>
            <p className="text-[#502314] opacity-80">{perk.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#502314] rounded-3xl p-8 md:p-12 text-white shadow-2xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <h2 className="text-4xl font-black uppercase tracking-tight mb-4 text-yellow-400">Points Calculator</h2>
            <p className="text-lg opacity-90 mb-8">
              See how fast your Crowns add up. Slide to estimate your rewards.
            </p>
            
            <div className="mb-6">
              <div className="flex justify-between mb-2 font-bold">
                <span>Monthly Spend</span>
                <span className="text-yellow-400">${spendAmount}</span>
              </div>
              <input 
                type="range" 
                min="5" 
                max="100" 
                value={spendAmount}
                onChange={(e) => setSpendAmount(parseInt(e.target.value))}
                className="w-full h-3 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-yellow-400"
              />
            </div>
            
            <div className="bg-black/30 rounded-xl p-6 text-center">
              <div className="text-sm font-bold uppercase tracking-wider opacity-80 mb-2">You could earn</div>
              <div className="text-5xl font-black text-yellow-400 flex items-center justify-center">
                <Crown size={36} className="mr-3" /> {pointsEarned} <span className="text-2xl ml-2">Crowns</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 bg-white rounded-2xl p-6 text-[#502314]">
            <h3 className="text-xl font-black mb-6 uppercase border-b-2 border-[#f5ebdc] pb-4">What you can get</h3>
            <ul className="space-y-4">
              <li className={`flex items-center justify-between p-3 rounded-lg ${pointsEarned >= 250 ? 'bg-green-50 border border-green-200' : 'opacity-50'}`}>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-md mr-4 overflow-hidden">
                    <img src="https://picsum.photos/seed/fries/100/100" alt="Fries" referrerPolicy="no-referrer" />
                  </div>
                  <span className="font-bold">Value Fries</span>
                </div>
                <span className="font-black text-[#d62300]">250 Crowns</span>
              </li>
              <li className={`flex items-center justify-between p-3 rounded-lg ${pointsEarned >= 400 ? 'bg-green-50 border border-green-200' : 'opacity-50'}`}>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-md mr-4 overflow-hidden">
                    <img src="https://picsum.photos/seed/whopperjr/100/100" alt="Whopper Jr" referrerPolicy="no-referrer" />
                  </div>
                  <span className="font-bold">Whopper Jr.®</span>
                </div>
                <span className="font-black text-[#d62300]">400 Crowns</span>
              </li>
              <li className={`flex items-center justify-between p-3 rounded-lg ${pointsEarned >= 750 ? 'bg-green-50 border border-green-200' : 'opacity-50'}`}>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-md mr-4 overflow-hidden">
                    <img src="https://picsum.photos/seed/whopper/100/100" alt="Whopper" referrerPolicy="no-referrer" />
                  </div>
                  <span className="font-bold">Whopper®</span>
                </div>
                <span className="font-black text-[#d62300]">750 Crowns</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
