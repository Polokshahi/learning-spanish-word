import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Component/Header'/Header";
import Footer from "../Component/Footer/Footer";

const Tutorials = () => {
  const navigate = useNavigate();

  // List of video URLs in embed format
  const videos = [
    "https://www.youtube.com/embed/JTrjZNspkWA?autoplay=1", // Autoplay for the first video
    "https://www.youtube.com/embed/8FmT4sIdZx0?si=Tl2JOCf7QbQdowtB",
    "https://www.youtube.com/embed/gBJMt1_xjTM",
    "https://www.youtube.com/embed/Fkoansd4Ni0",
    "https://www.youtube.com/embed/HHzWzVsKSQM",
    "https://www.youtube.com/embed/FX-0lpSohsk",
    "https://www.youtube.com/embed/aPtrQEjs3BU",
    "https://www.youtube.com/embed/pUnLWLc49Zo",
    "https://www.youtube.com/embed/QdcCuwTVUSE?si=13l8bgTgic54R5c1",
  ];

  useEffect(() => {

    document.title = 'Tutorials';

  },[])

  return (
    <div>

        <Header></Header>


<div className="min-h-screen bg-gray-200 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Language Learning Tutorials
        </h1>

        {/* Video Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:px-0 px-3">
          {videos.map((video, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-md">
              <iframe
                src={video}
                title={`Tutorial Video ${index + 1}`}
                className="w-full h-64"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>

        {/* Navigation Button */}
        <div className="mt-10 text-center">
          <Link to={'/start-lesson'}
            onClick={() => navigate("/start-lesson")}
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Learn Vocabularies
          </Link>
        </div>
      </div>
    </div>

   <div className="mb-[80px] lg:mb-0">
   <Footer></Footer>
   </div>


    </div>
  );
};

export default Tutorials;
