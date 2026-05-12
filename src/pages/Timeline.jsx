import React from 'react';

const Timeline = () => {
  
  const timelineData = [
    { id: 1, type: "Meetup", person: "Tom Baker", date: "March 29, 2026", icon: "🤝" },
    { id: 2, type: "Text", person: "Sarah Chen", date: "March 28, 2026", icon: "💬" },
    { id: 3, type: "Meetup", person: "Olivia Martinez", date: "March 26, 2026", icon: "🤝" },
    { id: 4, type: "Video", person: "Aisha Patel", date: "March 23, 2026", icon: "📹" },
    { id: 5, type: "Meetup", person: "Sarah Chen", date: "March 21, 2026", icon: "🤝" },
    { id: 6, type: "Call", person: "Marcus Johnson", date: "March 19, 2026", icon: "📞" },
    { id: 7, type: "Meetup", person: "Aisha Patel", date: "March 17, 2026", icon: "🤝" },
    { id: 8, type: "Text", person: "Olivia Martinez", date: "March 13, 2026", icon: "💬" },
    { id: 9, type: "Call", person: "Lisa Nakamura", date: "March 11, 2026", icon: "📞" },
    { id: 10, type: "Call", person: "Sarah Chen", date: "March 11, 2026", icon: "📞" },
    { id: 11, type: "Video", person: "Marcus Johnson", date: "March 6, 2026", icon: "📹" },
    { id: 12, type: "Video", person: "Ryan O'Brien", date: "February 24, 2026", icon: "📹" },
  ];

  return (
    <div className="bg-[#F9FAFB] min-h-screen py-12 px-4 md:px-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Title Section */}
        <h1 className="text-4xl font-black text-[#111827] mb-8">Timeline</h1>

        
        <div className="mb-8">
          <select className="bg-white border border-gray-200 text-gray-400 text-sm rounded-lg px-4 py-2.5 outline-none w-full md:w-64 shadow-sm">
            <option>Filter timeline</option>
            <option>Call</option>
            <option>Text</option>
            <option>Video</option>
            <option>Meetup</option>
          </select>
        </div>

        {/* Timeline List */}
        <div className="space-y-3">
          {timelineData.map((item) => (
            <div 
              key={item.id} 
              className="bg-white border border-gray-100 rounded-xl p-5 flex items-center gap-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow"
            >
              {/* Icon Section */}
              <div className="bg-gray-50 w-14 h-14 rounded-lg flex items-center justify-center text-2xl shadow-inner border border-gray-100">
                {item.icon}
              </div>

              {/* Content Section */}
              <div className="flex flex-col">
                <h3 className="text-lg font-bold text-slate-700">
                  <span className="text-slate-900">{item.type}</span> 
                  <span className="text-slate-400 font-medium ml-1">with {item.person}</span>
                </h3>
                <p className="text-gray-400 text-sm font-medium mt-0.5">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;