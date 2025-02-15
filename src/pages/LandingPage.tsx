import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Synergy Hub</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        A platform connecting sustainability initiatives, cultural innovation, and digital well-being.
      </p>
      <div className="flex space-x-4">
        <button 
          className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
          onClick={() => navigate("/signIn")}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
