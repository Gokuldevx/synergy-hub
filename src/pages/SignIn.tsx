import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { app } from "../auth/firebase";

const SignIn = () => {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/dashboard");
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) navigate("/dashboard");
    });
    return () => unsubscribe();
  }, [auth, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Sign In</h1>
      <button
        onClick={handleSignIn}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default SignIn;
