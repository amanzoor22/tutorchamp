import React from "react";
import LayoutOutSide from "../../components/Layouts/LayoutOutSide";
import HeroSection from "./sections/HeroSection";
import CoursesSection from "./sections/CoursesSection";
import BestHomeSection from "./sections/BestHomeSection";
import Preplyworksection from "./sections/Preplyworksection";
import BestTutorsSection from "./sections/BestTutorsSecton";
const LandingPage = () => {
  return (
    <LayoutOutSide>
      <HeroSection />
      <CoursesSection />
      <Preplyworksection />
      <BestTutorsSection />
      <BestHomeSection />
    </LayoutOutSide>
  );
};

export default LandingPage;
