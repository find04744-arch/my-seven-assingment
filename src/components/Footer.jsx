const Footer = () => {
  return (
    <footer className="bg-[#2D4A3E] text-white py-20 px-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* লোগো */}
        <h2 className="text-7xl font-extrabold mb-8 tracking-tighter">KeenKeeper</h2>
        
        {/* ট্যাগলাইন */}
        <p className="text-gray-300 text-lg max-w-2xl mb-12 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* সোশ্যাল লিংক সেকশন (টেক্সট বেসড - যাতে এরর না আসে) */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-6">Social Links</h3>
          <div className="flex gap-5">
            <a href="#" className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-[#2D4A3E] font-bold shadow-lg">IG</a>
            <a href="#" className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-[#2D4A3E] font-bold shadow-lg">FB</a>
            <a href="#" className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-[#2D4A3E] font-bold shadow-lg">X</a>
          </div>
        </div>

        {/* নিচের কপিরাইট এবং পলিসি বার */}
        <div className="w-full border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          
          <div className="flex gap-10 mt-6 md:mt-0 font-medium">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;