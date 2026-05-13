import { useState } from "react";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom"; 
import FriendCard from "../components/FriendCard";

/** 
 * আপনার image_39643f.png অনুযায়ী ফাইলটি src/data/friends.json এ আছে।
 * তাই আমরা সরাসরি এখান থেকে ইমপোর্ট করছি।
 */
import friendsData from "../data/friends.json"; 

const Home = () => {
  // সরাসরি ইমপোর্ট করা ডাটা স্টেটে রাখা হলো
  const [friends] = useState(friendsData);

  const stats = [
    { label: "Total Friends", value: 10 },
    { label: "On Track", value: 3 },
    { label: "Need Attention", value: 6 },
    { label: "Interactions This Month", value: 12 },
  ];

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      {/* Banner Section */}
      <div className="pt-24 pb-12 text-center px-4">
        <h1 className="text-[42px] font-black text-[#111827] mb-5 tracking-tight">
          Friends to keep close in your life
        </h1>
        <p className="text-[#6B7280] text-sm max-w-xl mx-auto leading-relaxed mb-10">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        
        <button className="bg-[#2D4A3E] text-white px-5 py-2.5 rounded-md font-bold text-sm flex items-center gap-2 mx-auto hover:opacity-90 transition">
          <Plus size={16} strokeWidth={3} />
          Add a Friend
        </button>
      </div>

      {/* Summary Stats */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 px-10 mb-24">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-10 rounded-xl shadow-[0_2px_15px_rgba(0,0,0,0.02)] border border-gray-50 text-center">
            <div className="text-[34px] font-bold text-[#374151] mb-2">{stat.value}</div>
            <div className="text-[#9CA3AF] text-xs font-semibold uppercase tracking-wide">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Friends List */}
      <div className="max-w-6xl mx-auto px-10 pb-32">
        <h2 className="text-xl font-black text-[#111827] mb-10">Your Friends</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {friends && friends.length > 0 ? (
            friends.map((friend) => (
              <Link 
                to={`/friend/${friend.id}`} 
                key={friend.id} 
                className="block transition-transform hover:scale-[1.02]"
              >
                <FriendCard friend={friend} />
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-10 text-gray-500">
              কোনো বন্ধু খুঁজে পাওয়া যায়নি।
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;