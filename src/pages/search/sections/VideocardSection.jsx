import React from "react";
import Container from "../../../components/globals/Container";
import VideoCard from "../../../components/cards/VideoCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard } from "swiper";

const tutorVideos = [
  {
    video: "/videos/testing.mp4",
    img: "/images/videoimg1.png",
    name: "Ayesha A.",
    flag: "/images/pkflag.svg",
    number: "5 (18)",
    para: "Speaks:English (B2)",
  },
  {
    video: "/videos/testing.mp4",
    img: "/images/videoimg2.png",
    name: "Rida Z.",
    flag: "/images/pkflag.svg",
    number: "5 (18)",
    para: "Speaks:English (B2)",
  },
  {
    video: "/videos/testing.mp4",
    img: "/images/videoimg3.png",
    name: "Huda T.",
    flag: "/images/pkflag.svg",
    number: "5 (18)",
    para: "Speaks:English (B2)",
  },
];

const VideocardSection = () => {
  return (
    <section className="relative py-16 bg-gray-50 lg:w-2/3">
      <Container>
        <div>
          <hr />
          <h2 className="flex my-5">
            Top 3 tutors for students from{" "}
            <img
              className="w-5 h-3 my-auto ml-3 mr-1"
              src="/images/pkflag.svg"
              alt="..."
            />
            <span className="font-bold my-auto">Pakistan</span>
          </h2>
          <Swiper
            spaceBetween={25}
            slidesPerView={1}
            keyboard={{
              enabled: true,
            }}
            modules={[Autoplay, Keyboard]}
            breakpoints={{
              576: {
                slidesPerView: 3,
              },
            }}
            className="py-4"
          >
            {tutorVideos.map((tutorVideo, index) => (
              <SwiperSlide key={`tutor-video-${index}`}>
                <VideoCard
                  video={tutorVideo.video}
                  img={tutorVideo.img}
                  name={tutorVideo.name}
                  flag={tutorVideo.flag}
                  number={tutorVideo.number}
                  para={tutorVideo.para}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default VideocardSection;
