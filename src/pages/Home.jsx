const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <section className="py-20 text-center bg-blue-50">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Connect with Friends</h1>
        <p className="text-xl text-gray-600 mb-8">Track your relationships and never miss a catch-up.</p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 mx-auto hover:bg-blue-700 transition">
          + Add a Friend
        </button>
      </section>

      {/* Friends Grid Section (এখানে পরে কার্ডগুলো আসবে) */}
      <div className="max-w-7xl mx-auto p-10">
        <h2 className="text-3xl font-bold mb-6">Your Friends</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Friends Card Component এখানে লুপ হবে */}
        </div>
      </div>
    </div>
  );
};

export default Home;