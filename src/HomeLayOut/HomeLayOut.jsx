import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer/Footer";
import Slider from "../Pages/Slider";
import About_Section from "../Pages/About_Section";
import SuccessSections from "../Pages/SuccessSections";
import OwnCreateSections1 from "../Pages/OwnCreateSections1";
import OwnCreateSections2 from "../Pages/OwnCreateSections2";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../Component/Header'/Header";

const HomeLayOut = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      easing: "ease-in-out", 
      once: true, 
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Header></Header>
      </header>

      <main className="flex-grow">
        {/* Slider Section */}
        <section className="bg-base-100" data-aos="fade-up">
          <Slider />
        </section>

        {/* About Section */}
        <section data-aos="fade-right">
          <About_Section />
        </section>

        {/* Success Sections */}
        <section data-aos="fade-left">
          <SuccessSections />
        </section>

        {/* Own Create Section 1 */}
        <section data-aos="zoom-in">
          <OwnCreateSections1 />
        </section>

        {/* Own Create Section 2 */}
        <section data-aos="fade-up">
          <OwnCreateSections2 />
        </section>

        {/* Outlet Section */}
        <section data-aos="flip-up">
          <Outlet />
        </section>
      </main>

      <footer className="mb-[300px] md:mb-0 ">
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayOut;
