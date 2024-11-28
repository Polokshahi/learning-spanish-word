
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
import StartLeason from "../Component/StartLeason/StartLeason";




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
   

   
      
      
},

{
    path: '/start-lesson',
    element:<StartLeason></StartLeason>
}


])

export default Router;