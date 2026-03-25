export default function Footer() {
  return (
    <footer className="bg-[#2b0200] text-[#f5ebdc] py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-black mb-4 text-white">BURGER KING</h3>
            <p className="text-sm opacity-80">Home of the Whopper®</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">BK® AND YOU</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">BK® Cares</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:underline">Nutrition Explorer</a></li>
              <li><a href="#" className="hover:underline">Download App</a></li>
              <li><a href="#" className="hover:underline">Gift Cards</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Connect</h4>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#2b0200] font-bold cursor-pointer hover:bg-gray-200">f</div>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#2b0200] font-bold cursor-pointer hover:bg-gray-200">t</div>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#2b0200] font-bold cursor-pointer hover:bg-gray-200">in</div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm opacity-60">
          <p>TM & Copyright 2026 Burger King Company LLC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
