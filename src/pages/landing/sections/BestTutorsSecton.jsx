import React from "react";
import Container from "../../../components/globals/Container";
import BestTutorcCard from "../../../components/cards/BestTutorcCard";

const BestTutorsSection = () => {
  return (
    <div>
      <section className="bg-white pt-10">
        <Container>
          <div>
            <div className="max-w-3xl mb-8">
              <p className="text-primary-300 font-semibold">
                Shortlist best Instructors.
              </p>
              <h1 className="lg:text-4xl text-3xl font-bold lg:word-space text-gray-800 my-2">
                Best home{" "}
                <span className="text-primary-300 underline">Tutors</span>
              </h1>
            </div>
            <div className="grid grid-cols-1  gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-5">
              <div className="">
                <BestTutorcCard
                  level="Kids 6-12 years"
                  title="Written English"
                  skils="Grammar, Tenses, Vocabulary
                  write fluent english."
                  boximg="\images\boximg1.png"
                />
                <BestTutorcCard
                  level="Kids 4-5 years"
                  title="Spoken English"
                  skils="See your child read, and
                  pronounce independently"
                  boximg="\images\boximg2.png"
                />
              </div>
              <div className="">
                <BestTutorcCard
                  level="Primary Level"
                  title="Mental Maths"
                  skils="Whole numbers, real numbers
                  Fractions & Algebra"
                  boximg="\images\boximg3.png"
                />
                <BestTutorcCard
                  level="High School"
                  title="PCM Science"
                  skils="Physics, Chemisty
                  Mathematics & Competition"
                  boximg="\images\boximg4.png"
                />
              </div>
              <div className="mt-8 lg:mt-24 hidden lg:block">
                <img src="\images\kidimg.png" alt="" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default BestTutorsSection;
