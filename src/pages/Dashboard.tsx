import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Dashboard = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.currentUser) {
      navigate("/signIn");
    }
  }, [auth, navigate]);

  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to Your Dashboard</h1>
      <p className="text-lg mb-6">You are signed in as {auth.currentUser?.displayName}</p>
      <button 
        onClick={handleSignOut} 
        className="px-6 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600"
      >
        Sign Out
      </button>
    </div>
  );
};

export default Dashboard;
