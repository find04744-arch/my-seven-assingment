import { useEffect, useState } from "react";
import FriendCard from "../components/FriendCard";
import { UserPlus } from "lucide-react";

const Home = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // JSON ডাটা সিমুলেশন (লোডিং দেখানোর জন্য ১ সেকেন্ড দেরি করা হয়েছে)
    fetch("/src/data/friends.json")
      .then(res => res.json())
      .then(data => {
        setFriends(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Banner Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-5 text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">Stay Connected, Stay Close</h1>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Track your friendships and never let the bond fade away. Get notified when it's time to reach out.</p>
        <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold flex items-center gap-2 mx-auto hover:bg-blue-50 transition shadow-lg">
          <UserPlus size={20} /> Add a Friend
        </button>
      </section>

      {/* Friends Section */}
      <div className="max-w-7xl mx-auto px-5 mt-16">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8 border-b-2 border-blue-500 inline-block pb-2">Your Friends</h2>
        
        {loading ? (
          /* Loading Animation (Requirement 10.2) */
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {friends.map(friend => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;