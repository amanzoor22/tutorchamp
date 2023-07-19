import React from "react";
import LayoutOutSide from "../../components/Layouts/LayoutOutSide";
import Container from "../../components/globals/Container";
import Detailprofilecard from "./sections/Detailprofilecard";
import Studentsay from "./sections/Studentsay";
import Oleksicard from "./sections/Oleksicard";
import Tabs from "./sections/Tabs";
import Abouttutor from "./sections/Abouttutor";
import Subjects from "./sections/Subjects";
import Sidecard2 from "./sections/Sidecard2";
import Comments from "./sections/Comments";
import ScheduleSection from "./sections/ScheduleSection";

const Detailprofile = () => {
  return (
    <div>
      <LayoutOutSide>
        <Container>
          <div className="lg:flex">
            <div className="lg:flex-[2]">
              <Detailprofilecard />
              <Oleksicard />
              <Tabs />
              <section id="About" className="mt-[-8rem] pt-[8rem]">
                <Abouttutor />
              </section>
              <section id="Schedule" className="mt-[-8rem] pt-[8rem]">
                <ScheduleSection />
              </section>
              <section id="Reviews" className="mt-[-8rem] pt-[8rem]">
                <Studentsay />
              </section>
              <Comments />
              <section id="Subjects" className="mt-[-8rem] pt-[8rem]">
                <Subjects />
              </section>
            </div>
            <div className="lg:flex-1">
              <Sidecard2 />
            </div>
          </div>
        </Container>
      </LayoutOutSide>
    </div>
  );
};

export default Detailprofile;
