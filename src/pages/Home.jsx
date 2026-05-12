import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom"; 
import FriendCard from "../components/FriendCard";

const Home = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/src/data/friends.json")
      .then(res => res.json())
      .then(data => {
        setFriends(data);
        setLoading(false);
      });
  }, []);

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
        
        {/* Dark Green Add Button */}
        <button className="bg-[#2D4A3E] text-white px-5 py-2.5 rounded-md font-bold text-sm flex items-center gap-2 mx-auto hover:opacity-90 transition">
          <Plus size={16} strokeWidth={3} />
          Add a Friend
        </button>
      </div>

      {/* 4 Summary Cards Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 px-10 mb-24">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-10 rounded-xl shadow-[0_2px_15px_rgba(0,0,0,0.02)] border border-gray-50 text-center">
            <div className="text-[34px] font-bold text-[#374151] mb-2">{stat.value}</div>
            <div className="text-[#9CA3AF] text-xs font-semibold uppercase tracking-wide">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Friends Grid Section */}
      <div className="max-w-6xl mx-auto px-10 pb-32">
        <h2 className="text-xl font-black text-[#111827] mb-10">Your Friends</h2>
        
        {loading ? (
          <div className="text-center py-20 font-bold text-gray-400">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {friends.map(friend => (
             
              <Link to={`/friend/${friend.id}`} key={friend.id} className="block transition-transform hover:scale-[1.02]">
                <FriendCard friend={friend} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;