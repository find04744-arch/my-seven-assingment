import { useEffect, useState } from "react";
import { UserPlus, Clock, CheckCircle, AlertCircle } from "lucide-react";
import FriendCard from "../components/FriendCard";

const Home = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/src/data/friends.json")
      .then(res => res.json())
      .then(data => {
        setFriends(data);
        setTimeout(() => setLoading(false), 800); // loading animation simulation
      });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 🎯 Banner Section */}
      <section className="bg-white py-20 px-5 text-center border-b">
        <h1 className="text-5xl font-black text-gray-900 mb-4">Stay Connected, Stay Close</h1>
        <p className="text-gray-500 text-xl max-w-2xl mx-auto mb-8">
          Track your relationships and never let the bond fade away. 
          Get notified when it's time to reach out.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 mx-auto hover:bg-blue-700 transition shadow-lg shadow-blue-200">
          <UserPlus size={20} /> Add a Friend
        </button>
      </section>

      {/* 📋 Summary Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-10 -mt-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border flex flex-col items-center">
          <span className="text-gray-400 text-sm font-semibold">Total Friends</span>
          <span className="text-3xl font-bold text-gray-800">{friends.length}</span>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border flex flex-col items-center">
          <span className="text-green-500 text-sm font-semibold">On Track</span>
          <span className="text-3xl font-bold text-gray-800">1</span>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border flex flex-col items-center">
          <span className="text-red-500 text-sm font-semibold">Overdue</span>
          <span className="text-3xl font-bold text-gray-800">1</span>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border flex flex-col items-center">
          <span className="text-blue-500 text-sm font-semibold">Goals Met</span>
          <span className="text-3xl font-bold text-gray-800">85%</span>
        </div>
      </div>

      {/* 👫 Your Friends Section */}
      <div className="max-w-7xl mx-auto px-10 py-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-10">Your Friends</h2>
        {loading ? (
          <div className="flex justify-center py-20">
             <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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