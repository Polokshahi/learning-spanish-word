// this is Routes


import {
    createBrowserRouter,
    Navigate,

} from "react-router-dom";
import HomeLayOut from "../HomeLayOut/HomeLayOut";
import Error from "../Component/Error/Error";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import My_Profile from "../Pages/My_Profile";
import UpdateProfile from "../Pages/UpdateProfile";
import Tutorials from "../Pages/Tutorials";
import PrivateRoutes from "./PrivateRoutes";
import ResetPassWord from "../Pages/ResetPassWord";
import AboutUs from "../Pages/AboutUs";
import StartLearning from "../Component/StartLearning/StartLearning";
import LessonPage from "../Pages/LessonPage";
import ShowVucaVulary from "../Pages/ShowVucaVulary";




const Router = createBrowserRouter([


    {
        path: '*',
        element: <Error></Error>,
    },

    {
        path: "/",
        element: <HomeLayOut></HomeLayOut>,
        children: [

           

           

        ],

    },

    {
        path: '/login',
        element: <Login></Login>
    },

    {
        path: '/register',
        element: <Register></Register>
    },

    {
        path: '/my_profile',
        element: <PrivateRoutes><My_Profile></My_Profile></PrivateRoutes>
    },

    {
        path:"/update-profile",
        element: <UpdateProfile></UpdateProfile>
    },

    {

        path: '/tutorials',
        element: <PrivateRoutes><Tutorials></Tutorials></PrivateRoutes>


    },

    {
        path: '/forget-password',
        element: <ResetPassWord></ResetPassWord>
    },

    {
        path: '/about-us',
        element: <AboutUs></AboutUs>
    },

    {
        path: '/learning/',
        element: <StartLearning></StartLearning>,
        children: [
        
            {
                path: 'learning/vucavulary',
                element: <ShowVucaVulary></ShowVucaVulary>
            }
        ]
      
    },

{
    path: '/lesson/:lessonNo',
    element: <PrivateRoutes><LessonPage /></PrivateRoutes>,
    loader: () =>fetch('/SpanishVocabulary.json'),
   

   
      
      
}


])

export default Router;




// This is my_profile
import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

import Footer from '../Component/Footer/Footer';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../Component/Header\'/Header';

const My_Profile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate(); 

  const handleUpdateProfile = () => {
    navigate('/update-profile'); 
  };

  return (
    <div>
     <Header></Header>

     

      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md -mt-16">
          <h2 className="text-center mb-5 text-3xl font-semibold">User Info</h2>
          <div className="flex flex-col items-center">
            {/* Profile Image */}
            <img
              src={user?.photoURL || 'https://via.placeholder.com/150'}
              alt="Profile"
              className="w-32 h-32 rounded-full shadow-md mb-4"
            />
            {/* Name */}
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {user?.displayName || 'Guest User'}
            </h2>
            {/* Email */}
            <p className="text-gray-500 mb-6">
              {user?.email || 'No email available'}
            </p>
            {/* Update Button */}
            <button
              onClick={handleUpdateProfile}
              className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition"
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default My_Profile;


// this is provider

import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from "../FireBase.Config";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [items, setItems] =useState([])
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState("");


    useEffect(() => {
        fetch('../../public/SpanishVocabulary.json')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])






// signUp for a new user


const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)


}


// login

const login = (email, password) => {
    setLoading(true)
  return signInWithEmailAndPassword(auth, email, password)

}

// signOut

 const logOut = () => {
    setLoading(true);
    return signOut(auth);
 }



    // observer 


    useEffect(() => {

        const unSubscribe =  onAuthStateChanged(auth, curentUser => {
              setUser(curentUser);
              setLoading(false)
          
             
          })
  
          return () => {
  
              unSubscribe()
  
          }
  
      },[auth])


     









    // shared data

    const sharedData = {
        items,
        signUp,
        user,
        setUser,
        setError,
        error,
        login,
        auth,
        setSuccess,
        success,
        logOut,
        loading
      
       
        
    }




    return <AuthContext.Provider value={sharedData}>{children}</AuthContext.Provider>
}
    

export default AuthProvider;