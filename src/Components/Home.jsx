import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <h1 className="text-3xl font-bold">Connecting People Across Faiths & Interests</h1>
      <p className="mt-2 text-gray-600">Connecting people of all faiths through events and community support</p>
      <button onClick={() => navigate("/events")} className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700">
        Explore Events
      </button>
    </div>
  );
};

export default Home;
