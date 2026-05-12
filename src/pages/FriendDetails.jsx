import React from 'react';
import { useParams, Link } from 'react-router-dom';

const FriendDetails = () => {
  const { id } = useParams(); 

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-10">
      <div className="max-w-6xl mx-auto">
        
        
        <Link to="/" className="inline-block mb-6 text-[#2D4A3E] font-bold hover:underline">
          ← Back to Home
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          <div className="md:col-span-4 space-y-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center">
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="Emma Wilson" 
                className="w-24 h-24 rounded-full mb-4 object-cover ring-4 ring-gray-50"
              />
              <h2 className="text-2xl font-bold text-slate-800">Emma Wilson</h2>
              <div className="flex flex-col items-center gap-2 mt-3">
                <span className="px-4 py-1 bg-red-100 text-red-500 text-[10px] font-bold rounded-full uppercase">Overdue</span>
                <span className="px-4 py-1 bg-emerald-100 text-emerald-600 text-[10px] font-bold rounded-full uppercase">Family</span>
              </div>
              <p className="mt-6 text-slate-400 italic text-center">"Former colleague, great mentor"</p>
              <p className="mt-2 text-slate-400 text-sm">Preferred: email</p>
            </div>

            <div className="space-y-2">
              <button className="w-full bg-white border border-gray-200 py-3 rounded-xl flex items-center justify-center gap-2 font-bold text-slate-700 hover:bg-gray-50 transition">
                🔔 Snooze 2 Weeks
              </button>
              <button className="w-full bg-white border border-gray-200 py-3 rounded-xl flex items-center justify-center gap-2 font-bold text-slate-700 hover:bg-gray-50 transition">
                📦 Archive
              </button>
              <button className="w-full bg-white border border-gray-200 py-3 rounded-xl flex items-center justify-center gap-2 font-bold text-red-500 hover:bg-red-50 transition">
                🗑️ Delete
              </button>
            </div>
          </div>

          
          <div className="md:col-span-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
                <h3 className="text-5xl font-bold text-[#2D4A3E]">62</h3>
                <p className="text-slate-400 text-sm mt-3 font-semibold text-[13px]">Days Since Contact</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
                <h3 className="text-5xl font-bold text-[#2D4A3E]">30</h3>
                <p className="text-slate-400 text-sm mt-3 font-semibold text-[13px]">Goal (Days)</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
                <h3 className="text-2xl font-bold text-[#2D4A3E] mt-2">Feb 27, 2026</h3>
                <p className="text-slate-400 text-sm mt-5 font-semibold text-[13px]">Next Due</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center">
              <div>
                <h4 className="text-[#2D4A3E] font-bold text-xl">Relationship Goal</h4>
                <p className="text-slate-500 mt-3 text-lg">Connect every <span className="font-bold text-slate-800">30 days</span></p>
              </div>
              <button className="px-6 py-2 bg-gray-50 border border-gray-200 rounded-lg font-bold text-sm text-slate-700 hover:bg-gray-100">Edit</button>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h4 className="text-[#2D4A3E] font-bold text-xl mb-8">Quick Check-In</h4>
              <div className="grid grid-cols-3 gap-6">
                <button className="flex flex-col items-center justify-center py-10 bg-slate-50/50 rounded-2xl hover:bg-slate-100 transition group border border-transparent hover:border-gray-200">
                  <span className="text-3xl mb-2">📞</span>
                  <span className="font-bold text-slate-700">Call</span>
                </button>
                <button className="flex flex-col items-center justify-center py-10 bg-slate-50/50 rounded-2xl hover:bg-slate-100 transition group border border-transparent hover:border-gray-200">
                  <span className="text-3xl mb-2">💬</span>
                  <span className="font-bold text-slate-700">Text</span>
                </button>
                <button className="flex flex-col items-center justify-center py-10 bg-slate-50/50 rounded-2xl hover:bg-slate-100 transition group border border-transparent hover:border-gray-200">
                  <span className="text-3xl mb-2">🎥</span>
                  <span className="font-bold text-slate-700">Video</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;