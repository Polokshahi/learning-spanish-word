import React, { useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { sendPasswordResetEmail } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaArrowAltCircleDown, FaArrowAltCircleRight, FaRegArrowAltCircleRight } from 'react-icons/fa';

const Login = () => {
  const { login, user, setUser, setError, error, auth } = useContext(AuthContext);
  const emailRef = useRef();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // Attempt login
    login(email, password)
      .then((result) => {
        setUser(result.user);
        const userEmail = result.user?.email;
        toast.success(`${userEmail} Login successful! Redirecting...`, {
          position: 'top-right',
          autoClose: 3000,
        });
        navigate('/');
      })
      .catch((err) => {
        setError(err.message);
        toast.error('Login failed. Please check your credentials.', {
          position: 'top-right',
          autoClose: 5000,
        });
        console.error('Login error:', err);
      });
  };

  const handleForgotPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast.info('Please enter your email address to reset your password.', {
        position: 'top-right',
        autoClose: 5000,
      });
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success('Password reset email sent successfully. Check your inbox.', {
          position: 'top-right',
          autoClose: 5000,
        });
      })
      .catch((err) => {
        toast.error('Error sending password reset email. Try again later.', {
          position: 'top-right',
          autoClose: 5000,
        });
        console.error('Password reset error:', err);
      });
  };

  return (
   <div>

     <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <div className="bg-white border-2 rounded-lg max-w-md w-full p-8 shadow-lg">
        <ToastContainer />
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4 text-right">
            <Link 
              to='/forget-password'
              type="Link"
              onClick={handleForgotPassword}
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-5">
          Don't have an account?{' '}
          <Link className="text-blue-700 font-semibold underline" to="/register">
            Register
          </Link>
        </p>

        <div className='text-center mt-4 font-semibold'>
          <Link  to={'/'}>Back to Home</Link>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Login;
