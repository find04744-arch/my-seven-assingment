import { Plus } from "lucide-react";

const Home = () => {
  // সামারি কার্ডের ডাটা
  const summaries = [
    { label: "Total Friends", value: 10 },
    { label: "On Track", value: 3 },
    { label: "Need Attention", value: 6 },
    { label: "Interactions This Month", value: 12 },
  ];

  return (
    <div className="bg-[#F9FAFB] min-h-screen pb-20">
      {/* 🎯 Banner Section */}
      <section className="pt-20 pb-12 px-5 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#111827] mb-6">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the 
          relationships that matter most.
        </p>
        
        {/* Add Friend Button */}
        <button className="bg-[#2D4A3E] text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 mx-auto hover:opacity-90 transition shadow-sm">
          <Plus size={20} />
          <span>Add a Friend</span>
        </button>
      </section>

      {/* 📊 Summary Cards (Figma Design) */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-10 mb-20">
        {summaries.map((item, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50 text-center">
            <div className="text-4xl font-bold text-[#374151] mb-2">{item.value}</div>
            <div className="text-gray-400 font-medium text-sm">{item.label}</div>
          </div>
        ))}
      </div>

      {/* 👫 Your Friends List Section */}
      <div className="max-w-6xl mx-auto px-10">
        <h2 className="text-2xl font-bold text-[#111827] mb-10 text-left">Your Friends</h2>
        
        {/* এখানে আপনার Friend কার্ডের গ্রিড বসবে */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* FriendCard Mapping code goes here */}
        </div>
      </div>
    </div>
  );
};

export default Home;