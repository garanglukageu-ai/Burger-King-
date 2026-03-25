import { useState } from 'react';
import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';
import { Plus } from 'lucide-react';

const CATEGORIES = ["Flame Grilled Burgers", "Chicken & More", "Sides", "Drinks", "Sweets"];

const MENU_ITEMS = [
  { id: '1', name: 'Whopper®', desc: 'A ¼ lb* of savory flame-grilled beef topped with juicy tomatoes, fresh lettuce, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions on a soft sesame seed bun.', price: 6.99, category: 'Flame Grilled Burgers', img: 'whopper' },
  { id: '2', name: 'Double Whopper®', desc: 'Two ¼ lb* savory flame-grilled beef patties topped with juicy tomatoes, fresh lettuce, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions.', price: 8.49, category: 'Flame Grilled Burgers', img: 'doublewhopper' },
  { id: '3', name: 'Bacon King', desc: 'Two ¼ lb* savory flame-grilled beef patties, topped with hearty portion of thick-cut smoked bacon, melted American cheese and topped with ketchup and creamy mayonnaise.', price: 9.29, category: 'Flame Grilled Burgers', img: 'baconking' },
  { id: '4', name: 'Original Chicken Sandwich', desc: 'Lightly breaded chicken breast topped with crisp lettuce and creamy mayonnaise on a sesame seed bun.', price: 5.99, category: 'Chicken & More', img: 'chicken' },
  { id: '5', name: 'Chicken Fries', desc: 'Breaded, crispy white meat chicken perfect for dipping in any of our delicious dipping sauces.', price: 4.49, category: 'Chicken & More', img: 'chickenfries' },
  { id: '6', name: 'French Fries', desc: 'More delicious than ever, our signature piping hot, thick cut Salted French Fries are golden on the outside and fluffy on the inside.', price: 2.99, category: 'Sides', img: 'fries' },
  { id: '7', name: 'Onion Rings', desc: 'Served hot and crisp, our golden Onion Rings are the perfect treat for plunging into one of our bold or classic sauces.', price: 3.29, category: 'Sides', img: 'onionrings' },
  { id: '8', name: 'Coca-Cola®', desc: 'Perfect with any meal, enjoy the genuine taste of Coca-Cola®.', price: 2.49, category: 'Drinks', img: 'coke' },
  { id: '9', name: 'Hershey\'s® Sundae Pie', desc: 'One part crunchy chocolate crust and one part chocolate crème filling, garnished with a delicious topping and real HERSHEY’S® Chocolate Chips.', price: 2.99, category: 'Sweets', img: 'pie' },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const { addToCart } = useCart();

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-5xl font-black text-[#502314] uppercase tracking-tight mb-8">Menu</h1>
      
      {/* Category Navigation */}
      <div className="flex overflow-x-auto pb-4 mb-8 hide-scrollbar space-x-4">
        {CATEGORIES.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`whitespace-nowrap px-6 py-3 rounded-full font-bold text-lg transition-colors ${
              activeCategory === category 
                ? 'bg-[#502314] text-white' 
                : 'bg-white text-[#502314] border-2 border-[#e5d5c5] hover:border-[#502314]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl overflow-hidden shadow-md border border-[#e5d5c5] flex flex-col"
          >
            <div className="h-48 bg-gray-100 p-4 flex items-center justify-center">
              <img 
                src={`https://picsum.photos/seed/${item.img}/400/300`} 
                alt={item.name} 
                className="max-h-full object-contain mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-black text-[#502314] leading-tight pr-4">{item.name}</h3>
                <span className="font-bold text-[#d62300]">${item.price.toFixed(2)}</span>
              </div>
              <p className="text-[#502314] opacity-70 text-sm mb-6 flex-grow line-clamp-3">{item.desc}</p>
              <button 
                onClick={() => addToCart({ ...item, quantity: 1, image: `https://picsum.photos/seed/${item.img}/400/300` })}
                className="w-full bg-[#f5ebdc] text-[#502314] font-bold py-3 rounded-full hover:bg-[#d62300] hover:text-white transition-colors flex items-center justify-center"
              >
                <Plus size={20} className="mr-2" /> Add to Order
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
