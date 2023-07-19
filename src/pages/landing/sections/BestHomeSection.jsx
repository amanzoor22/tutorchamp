import React from "react";
import Container from "../../../components/globals/Container";
import PatternParticles from "../../../components/patterns/PatternParticles";

//  Swiper
import { Autoplay, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// array reviews
const reviews = [{}, {}, {}, {}, {}, {}];

const CoursesSection = () => {
  return (
    <section className="relative py-16 bg-gray-50">
      <Container>
        <div className="relative overflow-hidden">
          <PatternParticles />
          <div className="relative">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h1 className="lg:text-4xl text-3xl font-bold lg:word-space text-gray-800 my-2">
                This is why we do what we do
              </h1>
            </div>
            <div className="bg-white/50 border border-gray-300 md:w-[100%] ">
              <div className="md:flex md:flex-row">
                <div className="flex m-auto p-5 text-xl text-center w-100 text-gray-700 font-sans lg:w-[66.6%]">
                  <p>
                    After I joined Tutorly master class, I really enjoyed the
                    classes here. This has given me new perspective on how to
                    learn new things.
                    <br />
                    <br />
                    <div className=" flex flex-col items-center">
                      Chinmoy Roy
                      <br />
                      <strong>
                        <small>Student, May 2022</small>
                      </strong>
                    </div>
                  </p>
                </div>
                <div className="p-5 lg:w-[33.3%] ">
                  <img
                    className="rounded flex items-center m-auto md:max-w-[100%]"
                    src="/images/student.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* cards */}
            <Swiper
              spaceBetween={15}
              slidesPerView={1}
              autoplay={{ delay: 2500 }}
              loop={true}
              keyboard={{
                enabled: true,
              }}
              modules={[Autoplay, Keyboard]}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                1100: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1350: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
              }}
              className="py-16"
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={`review-${index}`}>
                  <div className="border-gray-500 shadow rounded p-5 bg-secondary-50/40">
                    <div>
                      <p className="text-center p-4 text-lg">
                        I received an A in chemistry. I am so thrilled the
                        instructor rocks. I never thought this was possible.
                        Thank you tutorly for your service and thank you Lou for
                        being there for me. Highly recommended.
                      </p>
                      <span className="flex gap-4 items-center justify-center mt-4">
                        <img
                          className="rounded-full w-[64px] h-[64px]"
                          src="/images/card1.png"
                          alt=""
                        />
                        <span className="flex flex-col align-center gap-2 justify-start">
                          <strong>Abrahamnov Kyle </strong>
                          <small>GMAT . Student</small>
                        </span>
                      </span>{" "}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CoursesSection;
