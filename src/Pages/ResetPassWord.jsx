import { sendPasswordResetEmail } from "firebase/auth";
import React, { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Provider/AuthProvider";

const ResetPassWord = () => {
  const { auth } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePasswordReset = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email format.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    setLoading(true);

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setLoading(false);
        toast.success("Password reset email sent. Redirecting to Gmail...", {
          position: "top-right",
          autoClose: 3000,
        });
        setEmail("");

        // Redirect to Gmail after a short delay
        setTimeout(() => {
          window.location.href = "https://mail.google.com";
        }, 3500);
      })
      .catch((error) => {
        setLoading(false);
        toast.error(`Error: ${error.message}`, {
          position: "top-right",
          autoClose: 3000,
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ToastContainer />
      <div className="bg-white border rounded-lg shadow-md p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Reset Password</h1>
        <form onSubmit={handlePasswordReset}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              aria-label="Email Address"
              placeholder="Enter your email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 font-semibold rounded-lg transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            {loading ? "Sending..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassWord;
