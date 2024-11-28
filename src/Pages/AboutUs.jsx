import React, { useEffect } from 'react';
import Footer from '../Component/Footer/Footer';
import Header from '../Component/Header\'/Header';

const AboutUs = () => {
  useEffect(() => {

    document.title = 'About Us';

  },[])
    return (
       <div>
        <Header></Header>
         <div className="bg-gray-50 min-h-screen">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900">Join our team</h1>
        <p className="text-gray-600 mt-4 max-w-2xl">
          We believe it takes great people to make a great product. That’s why we hire not only the perfect professional fits but people who embody our company values.
        </p>
        <a
          href="#"
          className="mt-4 inline-block text-blue-600 font-medium hover:underline"
        >
          See open positions &rarr;
        </a>
      </div>

      {/* Contact Section */}
      <div className="bg-teal-900 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
          {/* Text Section */}
          <div className="text-white">
            <h2 className="text-4xl font-bold leading-snug">
              Have a question? <br /> Our team is happy to assist you
            </h2>
            <p className="mt-4 text-gray-300">
              Ask about Yoora products, pricing, implementation, or anything else. Our highly trained reps are standing by, ready to help.
            </p>
            <div className="mt-6">
              <button className="bg-white text-teal-900 px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition">
                Meet Us &rarr;
              </button>
              <p className="mt-4 text-gray-300">
                Or call <a href="tel:+1234567890" className="text-white underline">+12 3476 7890</a>
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <img
              src="https://img.freepik.com/free-photo/business-finance-employment-female-successful-entrepreneurs-concept-confident-smiling-asian-businesswoman-office-worker-white-suit-glasses-using-laptop-help-clients_1258-59126.jpg?semt=ais_hybrid"
              alt="Support team"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-400 -z-10 rounded-full" />
          </div>
        </div>
      </div>
    </div>
   <div className='mb-[80px] lg:mb-0'>
   <Footer></Footer>
   </div>
       </div>
    );
};

export default AboutUs;