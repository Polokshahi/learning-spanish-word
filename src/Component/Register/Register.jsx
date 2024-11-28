import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FaGoogle } from 'react-icons/fa';

const Register = () => {
    const { signUp, setUser, auth } = useContext(AuthContext);
    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;

        // Sign up with email and password
        signUp(email, password)
            .then(result => {
                setUser(result.user);

                // Update user profile
                const profile = {
                    displayName: name,
                    photoURL: photo,
                };

                updateProfile(auth.currentUser, profile)
                    .then(() => {
                        console.log('User profile updated');
                        navigate('/login');
                    })
                    .catch(err => console.log('Error updating profile: ' + err));
            })
            .catch(error => {
                console.log('Error during registration: ' + error);
            });
    };

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            setUser(user);

    
            const photoURL = user.photoURL;

            const profile = {
                displayName: user.displayName,
                photoURL: photoURL, 
            };

            updateProfile(user, profile)
                .then(() => {
                    console.log('User profile updated with Google photo');
                    navigate('/');
                })
                .catch(error => console.log('Error updating profile: ' + error));
        })
        .catch(error => console.log('Google Login Error: ' + error));
    };

    return (
        <div className=''>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="bg-white shadow-md rounded-lg max-w-md w-full p-6">
                    <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">
                        Create Your Account
                    </h1>
                    <form onSubmit={handleRegister}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Photo URL</label>
                            <input
                                type="url"
                                name="photo"
                                placeholder="Paste your photo URL"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
                        >
                            
                            Register
                        </button>
                    </form>

                    <div className="mt-6">
                        <button
                            onClick={handleGoogleLogin}
                            className="w-full py-2 px-4 bg-red-500 text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-red-600 transition"
                        >
                            <FaGoogle></FaGoogle>
                            Sign in with Google
                        </button>
                    </div>

                    <p className="text-center mt-5">
                        Already have an account?{' '}
                        <Link className="text-red-600 font-semibold underline" to={'/login'}>
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
