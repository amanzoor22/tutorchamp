import React from "react";
import Container from "../../../components/globals/Container";
import PatternParticles from "../../../components/patterns/PatternParticles";

const Preplyworksection = () => {
  return (
    <section className="relative py-16 bg-gray-50">
      <Container>
        <div className="relative overflow-hidden">
          <PatternParticles />
          <div className="relative">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h1 className="lg:text-4xl text-3xl font-bold lg:word-space text-gray-800 my-2">
                How Preply works
              </h1>
              <p className="leading-loose text-base lg:text-lg font-normal text-gray-500">
                Learn online with the world's best tutors
              </p>
            </div>
            <div className="bg-white/50 rounded shadow p-5">
              <div>
                <div className="md:grid md:grid-cols-2 md:gap-x-3 md:gap-y-10 items-center mt-10">
                  {/* row1 */}
                  <div
                    className="flex text-left justify-center "
                    data-aos="fade-left"
                  >
                    <div className="text-primary-300 bg-primary-50 rounded-full flex text-xl h-[48px] w-[48px] mr-5 items-center justify-center flex-none">
                      1
                    </div>
                    <div>
                      <h4 className="text-lg mb-2">Find the best tutor</h4>
                      <div className="text-gray-600">
                        Choose from over 32,000 online tutors. Use filters to
                        narrow your search and find the perfect fit
                      </div>
                    </div>
                  </div>
                  <div className="p-5 mb-5 " data-aos="fade-right">
                    <img src="/images/step1.webp" alt="" />
                  </div>

                  {/* row2 */}

                  <div className="p-5 mb-5 " data-aos="fade-right">
                    <img src="/images/step2.webp" alt="" />
                  </div>
                  <div
                    className="flex text-left justify-center pb-20 lg:pb-0"
                    data-aos="fade-left"
                  >
                    <div className="text-primary-300 bg-primary-50 rounded-full flex text-xl h-[48px] w-[48px] mr-5 items-center justify-center flex-none">
                      2
                    </div>
                    <div>
                      <h4 className="text-lg mb-2">Take lessons anytime</h4>
                      <div className="text-gray-600">
                        Find the perfect time for your busy schedule. Book
                        lessons in seconds via desktop or mobile
                      </div>
                    </div>
                  </div>
                  {/* row3 */}
                  <div
                    className="flex text-left justify-center"
                    data-aos="fade-left"
                  >
                    <div className="text-primary-300 bg-primary-50 rounded-full flex text-xl h-[48px] w-[48px] mr-5 items-center justify-center flex-none">
                      3
                    </div>
                    <div>
                      <h4 className="text-lg mb-2">Enter virtual classroom</h4>
                      <div className="text-gray-600">
                        When it’s lesson time, connect with your tutor through
                        our comprehensive video platform
                      </div>
                    </div>
                  </div>
                  <div className="p-5 mb-5" data-aos="fade-right">
                    <img src="/images/step3.webp" alt="" />
                  </div>

                  {/* row4 */}

                  <div className="p-5 mb-5" data-aos="fade-right">
                    <img src="/images/step4.webp" alt="" />
                  </div>
                  <div
                    className="flex text-left justify-center"
                    data-aos="fade-left"
                  >
                    <div className="text-primary-300 bg-primary-50 rounded-full flex text-xl h-[48px] w-[48px] mr-5 items-center justify-center flex-none">
                      4
                    </div>
                    <div>
                      <h4 className="text-lg mb-2">
                        Enjoy structured learning
                      </h4>
                      <div className="text-gray-600">
                        Keep track of your learning progress. Improve your
                        speaking and vocabulary with our Learning plans
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="m-auto flex flex-col items-center max-w-[632px] text-center">
                <svg
                  className="mb-3 mt-10"
                  xmlns="http://www.w3.org/2000/svg"
                  width="84"
                  height="84"
                  viewBox="0 0 40 40"
                >
                  <path
                    fill="#3bb3bd"
                    d="M.88 21.58a2.6 2.6 0 0 1 0-3.89l.76-.65a2.66 2.66 0 0 0 .71-2.95l-.41-.94a2.62 2.62 0 0 1 1.7-3.54l1-.29a2.59 2.59 0 0 0 1.88-2.36l.06-1a2.59 2.59 0 0 1 2.58-2.48c.18 0 .3 0 .47.06l1 .18.47.05c.94 0 1.82-.53 2.29-1.35l.47-.89C14.33.53 15.21 0 16.15 0c.53 0 1.06.18 1.53.47l.82.59c.47.36 1 .47 1.53.47s1.06-.17 1.53-.47l.82-.59c.47-.35 1-.47 1.53-.47.94 0 1.82.47 2.29 1.36l.47.88a2.66 2.66 0 0 0 2.29 1.36c.17 0 .29 0 .47-.06l1-.18.47-.06a2.59 2.59 0 0 1 2.58 2.48l.06 1a2.58 2.58 0 0 0 1.88 2.36l1 .3a2.61 2.61 0 0 1 1.7 3.53l-.41.95c-.41 1-.18 2.24.65 2.95l.76.7a2.6 2.6 0 0 1 0 3.9l-.76.64a2.67 2.67 0 0 0-.71 2.95l.41.95a2.6 2.6 0 0 1-1.7 3.53l-1.06.54a2.57 2.57 0 0 0-1.88 2.35l-.06 1.01a2.58 2.58 0 0 1-2.58 2.47c-.18 0-.3 0-.47-.06l-1-.17-.47-.06c-.94 0-1.82.53-2.29 1.35l-.47.89a2.56 2.56 0 0 1-2.29 1.36c-.53 0-1.06-.18-1.53-.48l-.82-.59c-.47-.35-1-.47-1.53-.47s-1.06.18-1.53.47l-.82.59c-.47.36-1 .48-1.52.48-.94 0-1.83-.48-2.3-1.36l-.47-.89a2.67 2.67 0 0 0-2.29-1.35c-.17 0-.29 0-.47.06l-.99.17-.47.06a2.59 2.59 0 0 1-2.59-2.47v-1.06a2.57 2.57 0 0 0-1.88-2.36l-1-.3a2.62 2.62 0 0 1-1.7-3.54l.41-.94c.41-1 .18-2.24-.65-2.95z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M12.03 14.01a46.6 46.6 0 0 0 .31 7.47 8.64 8.64 0 0 0 2.35 5.04 13.6 13.6 0 0 0 2.86 2.14c.83.49 1.69.93 2.56 1.35.08.04.14.06.24.02a21.71 21.71 0 0 0 4.81-3.04 8.54 8.54 0 0 0 2.59-4.36c.37-1.35.5-2.73.57-4.13.04-.66.04-1.31.04-1.97.01-.82 0-1.65-.04-2.47 0-.16-.06-.21-.22-.23a4.6 4.6 0 0 1-1.93-.64c-.7-.44-1.02-1.12-1.24-1.87-.07-.24-.12-.5-.16-.75-.02-.11-.06-.16-.17-.17a28.37 28.37 0 0 0-4.01-.4c-1.61-.03-3.2.13-4.78.38-.19.03-.22.13-.24.28a4.2 4.2 0 0 1-.79 2.01c-.42.55-1.02.81-1.67.99-.3.09-.61.15-.92.18-.11.01-.16.04-.16.17zm8.01 5.71.01-3.88-.01-3.91c0-.16.04-.21.21-.2 1.09.01 2.18.12 3.26.29.43.06.43.07.51.49.22 1.15.83 1.96 2.01 2.26.2.05.4.12.6.12.25.01.28.13.29.33.04 1.51.05 3.01-.07 4.51-.01.18-.08.23-.26.23h-6.31c-.18 0-.24-.05-.24-.24zm-6.46.48c-.02-.17.03-.22.2-.22l6.01-.01c.19 0 .25.04.25.24l-.01 7.77v.26a20.8 20.8 0 0 1-3.51-2.08 7.47 7.47 0 0 1-1.74-1.85 8.79 8.79 0 0 1-1.2-4.11z"
                  ></path>
                </svg>
                <div className="font-sans">
                  <h1 className="text-3xl mb-2">100% Satisfaction Guarantee</h1>
                  <p className="text-lg text-gray-500">
                    If you are not satisfied with your trial lesson, we will
                    give you a free replacement with another tutor or a full
                    refund
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Preplyworksection;
