import React from "react";
import Header from "../components/Header";
import EventSection from "../components/EventSection";
import Classes from "../components/Classes";
import ImgFirstDiv from "../components/ImgFirstDiv";
import RecoverSection from "../components/RecoverSection";
import MiddleSection from "../components/MiddleSection";
import Places from "../components/Places";
import Climbing from "../components/Climbing";
import ImgSecondDiv from "../components/ImgSecondDiv";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <EventSection />
      <Classes />
      <ImgFirstDiv />
      <RecoverSection />
      <MiddleSection />
      <Places />
      <Climbing />
      <ImgSecondDiv />
      <Footer />
    </>
  );
};

export default Home;
