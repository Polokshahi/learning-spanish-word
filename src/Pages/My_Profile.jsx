import React, { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

import Footer from "../Component/Footer/Footer";
import Header from "../Component/Header'/Header";

const My_Profile = () => {
    const { user, loading } = useContext(AuthContext);
    const navigate = useNavigate();

    if (loading) {
        return <div>Loading...</div>; 
    }

    if (!user) {
        return <Navigate to="/login" />; 
    }

    useEffect(() => {

        document.title = 'My Profile';
    
      },[])

    return (
        <div>
            <Header />
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md -mt-[300px]">
                    <h2 className="text-center mb-5 text-3xl font-semibold">User Info</h2>
                    <div className="flex flex-col items-center">
                        {/* Profile Image */}
                        <img
                            src={user?.photoURL || "https://via.placeholder.com/150"}
                            alt="Profile"
                            className="w-32 h-32 rounded-full shadow-md mb-4"
                        />
                        {/* Display Name */}
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">
                            {user?.displayName || "Guest User"}
                        </h2>
                        {/* Email */}
                        <p className="text-gray-500 mb-6">
                            {user?.email || "No email available"}
                        </p>
                        {/* Update Profile Button */}
                        <button
                            onClick={() => navigate("/update-profile")}
                            className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition"
                        >
                            Update Profile
                        </button>
                    </div>
                </div>


            </div>
            <div className='mb-[80px]  -mt-[300px] lg:-mt-[0px] lg:mb-0'>
            <Footer />
            </div>
        </div>
    );
};

export default My_Profile;
