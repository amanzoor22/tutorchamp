import React from "react";
import CourseCard from "../../components/cards/CourseCard";
import Container from "../../components/globals/Container";
import LayoutOutSide from "../../components/Layouts/LayoutOutSide";

const CoursesPage = () => {
  return (
    <LayoutOutSide>
      <div>
        <Container>
          {/* Fundamentals of English Fluency */}
          <div className=" my-10">
            <div className="lg:w-1/2 text-center lg:text-left w-full my-10">
              <h1 className="text-2xl">Discover Courses</h1>
              <h1 className=" text-2xl mt-2 ">
                Fundamentals of English Fluency
              </h1>
              <h1 className="text-sm">
                Gain confidence and fluency in conversational English. There is
                something for everyone, with courses for all skill levels
                covering everything from the basics of smalltalk to crafting
                well-formed opinions about complex, topical issues.
              </h1>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-start justify-center ">
              <div className="sm:min-w-[170px] w-[225px]">
                <CourseCard
                  title="Life in the internet Age"
                  text="INTERMEDIATE-9 LESSONS"
                  decsheight="80"
                  desc="Gain confidence speaking about familar topic"
                  cardimg="/images/cardimg1.png"
                />
              </div>
              <div className="sm:min-w-[170px] w-[225px]">
                <CourseCard
                  title="Basic Conversation topics"
                  neww="New"
                  decsheight="80"
                  text="BEGAINNER-10 LESSONS"
                  desc="Gain confidence speaking about familar topic"
                  cardimg="/images/cardimg2.png"
                />
              </div>
              <div className="sm:min-w-[170px] w-[225px]">
                <CourseCard
                  title="Intermediate Conversation Topics"
                  text="INTERMEDIATE-10 LESSONS"
                  decsheight="80"
                  cardimg="/images/cardimg3.png"
                  desc="Gain confidence speaking about familar topic"
                />
              </div>
              <div className="sm:min-w-[170px] w-[225px]">
                <CourseCard
                  title="Advanced Conversation Topics"
                  decsheight="80"
                  text="INTERMEDIATE-10 LESSONS"
                  desc="Gain confidence speaking about familar topic"
                  cardimg="/images/cardimg4.png"
                />
              </div>
              <div className="sm:min-w-[170px] w-[225px]">
                <CourseCard
                  decsheight="80"
                  title="Caring for Our Planet"
                  neww="New"
                  text="INTERMEDIATE-7 LESSONS"
                  desc="Gain confidence speaking about familar topic Gain confidence speaking about familar topic"
                  cardimg="/images/cardimg5.png"
                />
              </div>
              <div className="sm:min-w-[170px] w-[225px]">
                <CourseCard
                  title="Healthy Mind, Healthy Body"
                  decsheight="80"
                  text="INTERMEDIATE-6 LESSONS"
                  desc="Gain confidence speaking about familar topic"
                  cardimg="/images/cardimg6.png"
                />
              </div>
              <div className="sm:min-w-[170px] w-[225px]">
                <CourseCard
                  decsheight="80"
                  title="Business English"
                  desc="Gain confidence speaking about familar topic"
                  text="INTERMEDIATE - 9LESSONS"
                  cardimg="/images/cardimg7.png"
                />
              </div>
              <div className="sm:min-w-[170px] w-[225px]">
                <CourseCard
                  title="Life in the internet Age"
                  text="INTERMEDIATE-9 LESSONS"
                  decsheight="80"
                  desc="Gain confidence speaking about familar topic"
                  cardimg="/images/cardimg1.png"
                />
              </div>
              <div className="sm:min-w-[170px] w-[225px]">
                <CourseCard
                  title="Basic Conversation topics"
                  decsheight="80"
                  text="BEGAINNER-10 LESSONS"
                  desc="Gain confidence speaking about familar topic"
                  cardimg="/images/cardimg2.png"
                />
              </div>
              <div className="sm:min-w-[170px] w-[225px]">
                <CourseCard
                  title="Intermediate Conversation Topics"
                  text="INTERMEDIATE-10 LESSONS"
                  neww="New"
                  decsheight="80"
                  cardimg="/images/cardimg3.png"
                  desc="Gain confidence speaking about familar topic"
                />
              </div>
              <div className="sm:min-w-[170px] w-[225px]">
                <CourseCard
                  title="Advanced Conversation Topics"
                  decsheight="80"
                  text="INTERMEDIATE-10 LESSONS"
                  desc="Gain confidence speaking about familar topic"
                  cardimg="/images/cardimg4.png"
                />
              </div>
              <div className="sm:min-w-[170px] w-[225px]">
                <CourseCard
                  decsheight="80"
                  neww="New"
                  title="Caring for Our Planet"
                  text="INTERMEDIATE-7 LESSONS"
                  desc="Gain confidence speaking about familar topic Gain confidence speaking about familar topic"
                  cardimg="/images/cardimg5.png"
                />
              </div>
              <div className="sm:min-w-[170px] w-[225px]">
                <CourseCard
                  title="Healthy Mind, Healthy Body"
                  decsheight="80"
                  text="INTERMEDIATE-6 LESSONS"
                  desc="Gain confidence speaking about familar topic"
                  cardimg="/images/cardimg6.png"
                />
              </div>
              <div className="sm:min-w-[170px] w-[225px]">
                <CourseCard
                  decsheight="80"
                  title="Business English"
                  desc="Gain confidence speaking about familar topic"
                  text="INTERMEDIATE - 9LESSONS"
                  cardimg="/images/cardimg7.png"
                />
              </div>
            </div>
          </div>
          {/* Professional Development */}
          <div className=" mb-10 mt-14">
            <div className="lg:w-1/2 text-center lg:text-left w-full my-10">
              <h1 className=" text-2xl mt-2 ">Professional Development</h1>
              <h1 className="text-sm">
                Business communication in an international setting requires more
                than just strong English language skills. Effective
                cross-cultural communication, both verbal and non-verbal, is a
                powerful tool for career growth
              </h1>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-start justify-center ">
              <div className="sm:min-w-[170px] w-[225px]">
                <CourseCard
                  title="Life in the internet Age"
                  text="INTERMEDIATE-9 LESSONS"
                  neww="New"
                  decsheight="80"
                  desc="Gain confidence speaking about familar topic"
                  cardimg="/images/cardimg1.png"
                />
              </div>

              <div className="sm:min-w-[170px] w-[225px]">
                <CourseCard
                  decsheight="80"
                  title="Caring for Our Planet"
                  text="INTERMEDIATE-7 LESSONS"
                  desc="Gain confidence speaking about familar topic Gain confidence speaking about familar topic"
                  cardimg="/images/cardimg5.png"
                />
              </div>
              <div className="sm:min-w-[170px] w-[225px]">
                <CourseCard
                  title="Healthy Mind, Healthy Body"
                  decsheight="80"
                  text="INTERMEDIATE-6 LESSONS"
                  desc="Gain confidence speaking about familar topic"
                  cardimg="/images/cardimg6.png"
                />
              </div>
              <div className="sm:min-w-[170px] w-[225px]">
                <CourseCard
                  neww="New"
                  decsheight="80"
                  title="Business English"
                  desc="Gain confidence speaking about familar topic"
                  text="INTERMEDIATE - 9LESSONS"
                  cardimg="/images/cardimg7.png"
                />
              </div>
              <div className="sm:min-w-[170px] w-[225px]">
                <CourseCard
                  title="Life in the internet Age"
                  text="INTERMEDIATE-9 LESSONS"
                  neww="New"
                  decsheight="80"
                  desc="Gain confidence speaking about familar topic"
                  cardimg="/images/cardimg1.png"
                />
              </div>
              <div className="sm:min-w-[170px] w-[225px]">
                <CourseCard
                  title="Basic Conversation topics"
                  decsheight="80"
                  text="BEGAINNER-10 LESSONS"
                  desc="Gain confidence speaking about familar topic"
                  cardimg="/images/cardimg2.png"
                />
              </div>
              <div className="sm:min-w-[170px] w-[225px]">
                <CourseCard
                  title="Intermediate Conversation Topics"
                  text="INTERMEDIATE-10 LESSONS"
                  decsheight="80"
                  cardimg="/images/cardimg3.png"
                  desc="Gain confidence speaking about familar topic"
                />
              </div>
              <div className="sm:min-w-[170px] w-[225px]">
                <CourseCard
                  title="Advanced Conversation Topics"
                  decsheight="80"
                  text="INTERMEDIATE-10 LESSONS"
                  desc="Gain confidence speaking about familar topic"
                  cardimg="/images/cardimg4.png"
                />
              </div>
              <div className="sm:min-w-[170px] w-[225px]">
                <CourseCard
                  decsheight="80"
                  title="Caring for Our Planet"
                  text="INTERMEDIATE-7 LESSONS"
                  desc="Gain confidence speaking about familar topic Gain confidence speaking about familar topic"
                  cardimg="/images/cardimg5.png"
                />
              </div>
              <div className="sm:min-w-[170px] w-[225px]">
                <CourseCard
                  title="Healthy Mind, Healthy Body"
                  neww="New"
                  decsheight="80"
                  text="INTERMEDIATE-6 LESSONS"
                  desc="Gain confidence speaking about familar topic"
                  cardimg="/images/cardimg6.png"
                />
              </div>
              <div className="sm:min-w-[170px] w-[225px]">
                <CourseCard
                  decsheight="80"
                  title="Business English"
                  desc="Gain confidence speaking about familar topic"
                  text="INTERMEDIATE - 9LESSONS"
                  cardimg="/images/cardimg7.png"
                />
              </div>
            </div>
          </div>
          {/* Exam Preparation */}
          <div className="mb-10 mt-14">
            <div className="lg:w-1/2 text-center lg:text-left w-full my-10">
              <h1 className=" text-2xl mt-2 ">Exam Preparation</h1>
              <h1 className="text-sm">
                Prepare for an upcoming English speaking assessment with
                up-to-date practice questions from past exams.
              </h1>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-start justify-center ">
              <div className="sm:min-w-[170px] w-[225px]">
                <CourseCard
                  title="Life in the internet Age"
                  text="INTERMEDIATE-9 LESSONS"
                  decsheight="80"
                  desc="Gain confidence speaking about familar topic"
                  cardimg="/images/cardimg8.png"
                />
              </div>

              <div className="sm:min-w-[170px] w-[225px]">
                <CourseCard
                  decsheight="80"
                  title="Caring for Our Planet"
                  text="INTERMEDIATE-7 LESSONS"
                  desc="Gain confidence speaking about familar topic Gain confidence speaking about familar topic"
                  cardimg="/images/cardimg9.png"
                />
              </div>
              <div className="sm:min-w-[170px] w-[225px]">
                <CourseCard
                  title="Healthy Mind, Healthy Body"
                  neww="New"
                  decsheight="80"
                  text="INTERMEDIATE-6 LESSONS"
                  desc="Gain confidence speaking about familar topic"
                  cardimg="/images/cardimg10.png"
                />
              </div>
              <div className="sm:min-w-[170px] w-[225px]">
                <CourseCard
                  decsheight="80"
                  title="Business English"
                  desc="Gain confidence speaking about familar topic"
                  text="INTERMEDIATE - 9LESSONS"
                  neww="New"
                  cardimg="/images/cardimg8.png"
                />
              </div>
              <div className="sm:min-w-[170px] w-[225px]">
                <CourseCard
                  title="Life in the internet Age"
                  text="INTERMEDIATE-9 LESSONS"
                  decsheight="80"
                  desc="Gain confidence speaking about familar topic"
                  cardimg="/images/cardimg10.png"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </LayoutOutSide>
  );
};

export default CoursesPage;
