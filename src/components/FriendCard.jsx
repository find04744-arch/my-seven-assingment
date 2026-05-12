const FriendCard = ({ friend }) => {
  const statusStyles = {
    "on-track": "bg-[#2D4A3E] text-white", 
    "almost due": "bg-[#FBBF24] text-white", 
    "overdue": "bg-[#EF4444] text-white", 
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col items-center text-center">
      {/* Profile Pic */}
      <img src={friend.picture} alt={friend.name} className="w-16 h-16 rounded-full mb-4 object-cover border border-gray-100" />
      
      {/* Name and Days */}
      <h3 className="text-[#111827] font-bold text-lg mb-0.5">{friend.name}</h3>
      <p className="text-gray-400 text-[10px] mb-4 uppercase tracking-tighter">{friend.days_since_contact}d ago</p>
      
      {/* Tags */}
      <div className="flex gap-2 mb-5">
        {friend.tags.map(tag => (
          <span key={tag} className="bg-[#DCFCE7] text-[#166534] px-3 py-0.5 rounded text-[9px] font-black uppercase tracking-widest">
            {tag}
          </span>
        ))}
      </div>
      
      {/* Status Badge */}
      <div className={`px-5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${statusStyles[friend.status]}`}>
        {friend.status}
      </div>
    </div>
  );
};

export default FriendCard;