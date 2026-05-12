import { Link } from "react-router-dom";

const FriendCard = ({ friend }) => {
  // স্ট্যাটাস অনুযায়ী কালার সেট করা
  const statusColors = {
    "on-track": "bg-green-100 text-green-700 border-green-500",
    "almost due": "bg-yellow-100 text-yellow-700 border-yellow-500",
    overdue: "bg-red-100 text-red-700 border-red-500",
  };

  return (
    <Link
      to={`/friend/${friend.id}`}
      className="block transform hover:scale-105 transition duration-300"
    >
      <div
        className={`border-l-4 p-5 bg-white shadow-lg rounded-xl ${statusColors[friend.status]}`}
      >
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-gray-200"
        />
        <h3 className="text-center font-bold text-gray-800 text-xl">
          {friend.name}
        </h3>
        <p className="text-center text-gray-500 text-sm mb-3">
          Last contact: {friend.days_since_contact} days ago
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-3">
          {friend.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-xs rounded-md text-gray-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div
          className={`text-center py-1 rounded-full text-xs font-bold uppercase tracking-wider ${statusColors[friend.status]}`}
        >
          {friend.status}
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;
