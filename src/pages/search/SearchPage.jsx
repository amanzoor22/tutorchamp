import LayoutOutSide from "../../components/Layouts/LayoutOutSide";
import Container from "../../components/globals/Container";

import VideocardSection from "./sections/VideocardSection";
import GroupClasses from "./sections/GroupClasses";
import AvailableTeachersCards from "../../components/cards/AvailableTeachersCards";
import {
  DropDownFilterBar,
  DropDownMobFilterBar,
} from "../../components/globals/DropDownFilterBar";
import SearchSectiontop from "./sections/SearchSectiontop";
import SideCard from "../../components/cards/SideCard";
import { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import { getDoc, getDocs, query, where } from "firebase/firestore";
import { collection } from "firebase/firestore";
let userdata = {};
const SearchPage = () => {
  const teacherCards = [
    {
      idImg: "/images/idimg1.webp",
      firstname: "Robert",
      lastname: "mark",
      country: "/images/ukflag.png",
      video: "/videos/testing.mp4",
      language: "English",
      level: "Native",
      subject: "Introduction to Management",
      rating: "5",
      reviews: "14",
      pricehourly: "21",
      lessonTime: "50",
      lessons: "51",
      activeStudents: "26",
      experienceDescription:
        "An exceptional English language teacher with a degree in teaching English as second language, and with 26 years of extensive experience in a vast range of types of schools in UK and in EU",
      timeSlots: [
        {
          time: "Morning",
          range: "06:00—12:00",
          slots: [
            "bg-gray-100",
            "bg-gray-100",
            "bg-green-100",
            "bg-green-100",
            "bg-green-400",
            "bg-green-500",
            "bg-green-500",
          ],
        },
        {
          time: "Afternoon",
          range: "12:00—18:00",
          slots: [
            "bg-green-400",
            "bg-green-400",
            "bg-green-400",
            "bg-green-400",
            "bg-green-400",
            "bg-green-400",
            "bg-green-400",
          ],
        },
        {
          time: "Evening",
          range: "18:00—24:00",
          slots: [
            "bg-green-100",
            "bg-green-100",
            "bg-green-100",
            "bg-green-500",
            "bg-green-500",
            "bg-green-500",
            "bg-green-500",
          ],
        },
        {
          time: "Night",
          range: "00:00—06:00",
          slots: [
            "bg-green-500",
            "bg-green-500",
            "bg-green-500",
            "bg-green-500",
            "bg-green-500",
            "bg-green-500",
            "bg-green-500",
          ],
        },
      ],
    },
    {
      idImg: "/images/idimg2.webp",
      firstname: "Harry ",
      lastname: "mark",
      country: "/images/ukflag.png",
      video: "/videos/testing.mp4",
      language: "French",
      subject: "English",
      level: "Native",
      rating: "4.8",
      reviews: "17",
      pricehourly: "23",
      lessonTime: "50",
      lessons: "1,601",
      activeStudents: "51",
      experienceDescription:
        "Certified Teacher with 6 Years Experience  have been a teacher for 6 years and for the past 3 years I",
      timeSlots: [
        {
          time: "Morning",
          range: "06:00—12:00",
          slots: [
            "bg-gray-100",
            "bg-gray-100",
            "bg-green-100",
            "bg-green-100",
            "bg-green-400",
            "bg-green-500",
            "bg-green-500",
          ],
        },
        {
          time: "Afternoon",
          range: "12:00—18:00",
          slots: [
            "bg-green-400",
            "bg-green-400",
            "bg-green-400",
            "bg-green-400",
            "bg-green-400",
            "bg-green-400",
            "bg-green-400",
          ],
        },
        {
          time: "Evening",
          range: "18:00—24:00",
          slots: [
            "bg-green-500",
            "bg-green-500",
            "bg-green-500",
            "bg-green-500",
            "bg-green-500",
            "bg-green-500",
            "bg-green-500",
          ],
        },
        {
          time: "Night",
          range: "00:00—06:00",
          slots: [
            "bg-green-500",
            "bg-green-500",
            "bg-green-100",
            "bg-green-100",
            "bg-green-100",
            "bg-green-500",
            "bg-green-500",
          ],
        },
      ],
    },
    {
      idImg: "/images/idimg3.webp",
      firstname: "Vera",
      lastname: "mark",
      country: "/images/ukflag.png",
      video: "/videos/testing.mp4",
      language: "English",
      subject: "Computers",
      level: "Native",
      rating: "5",
      reviews: "4",
      pricehourly: "25",
      lessonTime: "50",
      lessons: "313",
      activeStudents: "20",
      experienceDescription:
        "Certified Tutor with 8 years of experience! 🌼🌼🌼 A little about me and what I do:",
      timeSlots: [
        {
          time: "Morning",
          range: "06:00—12:00",
          slots: [
            "bg-gray-100",
            "bg-gray-100",
            "bg-green-100",
            "bg-green-100",
            "bg-green-400",
            "bg-green-500",
            "bg-green-500",
          ],
        },
        {
          time: "Afternoon",
          range: "12:00—18:00",
          slots: [
            "bg-green-100",
            "bg-green-100",
            "bg-green-100",
            "bg-green-400",
            "bg-green-400",
            "bg-green-400",
            "bg-green-400",
          ],
        },
        {
          time: "Evening",
          range: "18:00—24:00",
          slots: [
            "bg-green-100",
            "bg-green-100",
            "bg-green-100",
            "bg-green-500",
            "bg-green-500",
            "bg-green-500",
            "bg-green-500",
          ],
        },
        {
          time: "Night",
          range: "00:00—06:00",
          slots: [
            "bg-green-500",
            "bg-green-500",
            "bg-green-500",
            "bg-green-500",
            "bg-green-500",
            "bg-green-500",
            "bg-green-500",
          ],
        },
      ],
    },
  ];
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [employees, setEmployees] = useState(teacherCards);
  const registerRef = collection(db, "users");
  const q = query(collection(db, "users"), where("role", "==", "tutor"));
  const fetchData = async () => {
    const querySnapshot = await getDocs(q);
    console.log("this is query shor", querySnapshot.docs.length);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      userdata = doc.data();
      console.log("after", userdata);
      setEmployees((current) => [...current, doc.data()]);
      console.log("EMPLOYEES", employees);
      console.log("number of employees", employees.length);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <LayoutOutSide>
        <Container>
          <SearchSectiontop />
          <div>
            <div className="lg:block hidden  bg-gray-100 p-4 rounded-lg shadow-sm">
              <DropDownFilterBar />
            </div>
            <DropDownMobFilterBar />
          </div>
          <div className="py-14 relative z-0">
            <h1 className="mb-4 text-xl font-medium">
              {employees.length} teachers available
            </h1>
            <div
              className="flex sm:gap-6"
              onMouseLeave={() => setHoveredIndex(0)}
            >
              <div className="lg:flex-[2]">
                <div className="space-y-8">
                  {employees.map((card, index) => (
                    <div onMouseEnter={() => setHoveredIndex(index)}>
                      <AvailableTeachersCards
                        key={`teacher-card-${index}`}
                        //idImg={card.idImg}
                        firstname={card.firstname}
                        lastname={card.lastname}
                        //country={card.country}
                        language={card.language}
                        level={card.level}
                        subject={card.subject}
                        rating={card.rating}
                        reviews={card.reviews}
                        pricehourly={card.pricehourly}
                        //lessonTime={card.lessonTime}
                        //lessons={card.lessons}
                        //activeStudents={card.activeStudents}
                        experienceDescription={card.description}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:flex-[1]">
                <div className="sticky top-24">
                  {/* Sidecard */}
                  {hoveredIndex !== null && (
                    <div className="bg-white shadow-lg p-3 rounded-2xl lg:block hidden"></div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <GroupClasses />
          <VideocardSection />
        </Container>
      </LayoutOutSide>
    </div>
  );
};

export default SearchPage;
