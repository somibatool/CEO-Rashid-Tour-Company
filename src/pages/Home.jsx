import React from "react";
import Hero from "../components/Hero/Hero";
import NatureVid from "../assets/video/main.mp4";
import BlogsComp from "../components/Blogs/BlogsComp";
import Places from "../components/Places/Places";
import Testimonial from "../components/Testimonial/Testimonial";
import Banner from "../components/Banner/Banner";
import BannerPic from "../components/BannerPic/BannerPic";
import BannerImg from "../assets/cover-women.jpg";
import Banner2 from "../assets/travel-cover2.jpg";
import OrderPopup from "../components/OrderPopup/OrderPopup";

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <div>
      <div className="h-[700px] relative">
  {/* Video Background */}
  <video
    autoPlay
    loop
    muted
    className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
  >
    <source src={NatureVid} type="video/mp4" />
  </video>

  {/* Bluish Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-blue-900/60 to-transparent z-0"></div>

  {/* Hero Section */}
  <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
    <Hero />
  </div>
</div>

        <Places handleOrderPopup={handleOrderPopup} />
        <BannerPic img={BannerImg} />
        <BlogsComp />
        <Banner />
        <BannerPic img={Banner2} />
        <Testimonial />
        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />1
      </div>
    </>
  );
};

export default Home;
