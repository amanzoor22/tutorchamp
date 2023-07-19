import { useState } from "react";

const Aboutjames = () => {
  const [show, setshow] = useState(false);
  return (
    <div>
      <div className="lg:px-4 pb-16  max-w-3xl flex flex-col bg-white shadow-md rounded-xl mt-10 px-2 py-4">
        <h1 className="font-bold mb-3">About the tutor</h1>
        <p className="text-sm">
          Hi girls and guys, so here’s the deal; I can teach anyone how to
          communicate effectively in any English speaking country using only 5
          pronouns, 10 verbs and about 12 nouns, HOWEVER, if you really want to
          find YOUR personality; the one that is a true reflection of who YOU
          are in your native language, let me help you find your TRUE ENGLISH
          VOICE. . . I have 8 years of business experience (finance industry), 4
          years of online teaching, vocal coaching for specialty schools, degree
          in Finance and Economics and I write the business lessons for one of
          the biggest ESL
          {show && (
            <p>
              learning platforms on the internet. And if there are any doubts
              please check my reviews. My students learning is my top priority
              and I provide every tool possible to ensure they learn to speak
              FLUENTLY! So, if you really want to learn English and you are
              looking for someone that is willing to work as hard as you do,
              please let me know. I am looking forward to seeing how quickly you
              can make progress! Thank you so much for reading this! -Aaron I
              use a combination of eliciting/ communicative and structural
              approach which basically means that we focus on having natural
              conversations, and incorporate grammar structures, new vocabulary
              and phrasal language as we talk . . . then I show you how, why and
              where to make changes and improve. . . For the format of our
              lessons - I use the flipped classroom technique which means you
              will receive all your materials in advance; tailored to your
              specific needs, at the end of each lesson we will talk about what
              materials to study so that in the beginning of the next lesson we
              can practice using what you have just learned. I have found this
              approach to be by far the most productive way of learning and
              improving as quickly as possible. I have around 8000 hours of
              teaching experience so you can be confident that this strategy
              really works! So there we have it and if you still have doubts . .
              . again, I encourage you to check my reviews and if you have any
              questions about lessons or even just want some study materials,
              just let me know. .So now I am challenging you to do what it takes
              to be the best version of yourself possible and Schedule a trial
              class with me . . . "Success is what happens when preparation
              meets opportunity" ~Seneca
            </p>
          )}
          <div className="text-primary-400 mt-2" onClick={() => setshow(!show)}>
            {show === true ? "Hide" : "Show more"}
          </div>
        </p>
      </div>
    </div>
  );
};

export default Aboutjames;
