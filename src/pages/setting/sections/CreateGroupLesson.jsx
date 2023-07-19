import React, { useState, useEffect } from "react";
import Setting from "../Setting";
import LayoutOutSide from "../../../components/Layouts/LayoutOutSide";
import Container from "../../../components/globals/Container";
import { useDispatch, useSelector } from "react-redux";
import TimePicker from "react-times";
import "react-times/css/material/default.css";
// or you can use classic theme
import "react-times/css/classic/default.css";
import { db } from "../../../config/firebase";
import { getDoc, getDocs, query, where, addDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { current } from "@reduxjs/toolkit";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
let userdata = {};
let groupLessonImage = "";
const CreateGroupLesson = () => {
  const currentuser = useSelector((state) => state.firebase.auth);
  const [photoUrl, setPhotoUrl] = useState("/images/avatar.svg");

  console.log("createlesson", currentuser.uid);
  const navigate = useNavigate();
  const schema = yup.object().shape({
    title: yup.string().required("Title is required"),

    classlength: yup.string().required("Class Length is required"),
    description: yup.string().required("Description is required"),
    // level: yup
    //   .string()
    //   .required("Level is required")
    //   .oneOf(["native", "basic", "bilingual"]),
    //groupsize: yup.required("Groupsize is required"),
    //age: yup.bool(true).required("Please check that you are above 18"),

    //password: yup.string().min(8).required("Password is required")
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const registerRef = collection(db, "grouplessons");
  const storage = getStorage();

  function getWeekdayNumber(weekdayName) {
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const lowercaseName = weekdayName.toLowerCase();
    const index = weekdays.findIndex(
      (weekday) => weekday.toLowerCase() === lowercaseName
    );

    return index !== -1 ? index : -1;
  }

  const getDates = (startDate, weekday, noOfClasses) => {
    //functionality goes here

    const dates = [];
    const targetWeekday = getWeekdayNumber(weekday) % 7; // Normalize weekday input

    // Clone the start date to avoid modifying the original date
    const currentDate = new Date(startDate);

    while (dates.length < noOfClasses) {
      if (currentDate.getDay() === targetWeekday) {
        dates.push(new Date(currentDate)); // Add the current date to the array
      }

      currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
    }

    return dates;
  };

  console.log("errors", errors);

  console.log("getDate", getDates("2023-07-14", "Monday", 10));
  function handleFileChange(event) {
    const file = event.target.files[0];

    if (
      file &&
      file.size <= 2 * 1024 * 1024 &&
      (file.type === "image/jpeg" || file.type === "image/png")
    ) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhotoUrl(e.target.result);
      };
      reader.readAsDataURL(file);
      const storageRef = ref(storage, `files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          // setProgresspercent(progress);
        },
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            groupLessonImage = downloadURL;
          });
        }
      );
    }
  }

  const groupLessonSubmit = async (data) => {
    // console.log(
    //   "data",
    //   data,
    //   getDates(data.startDate, data.weekday, data.classnumber)
    // );

    console.log("data", data);

    alert(data);
    try {
      if (data) {
        await addDoc(registerRef, {
          title: data.title,
          level: data.level,
          classnumber: data.classnumber,
          classlength: data.classlength,
          frequency: data.frequency,
          startDate: data.startDate,
          dates:
            data.frequency === "One Time"
              ? data?.startDate
              : getDates(data.startDate, data.weekday, data.classnumber),
          coverImage: groupLessonImage,
          groupsize: data.groupsize,
          description: data.description,
          userId: currentuser.uid,
          starttime: data.starttime,
          endtime: data.endtime,
        });
      }
    } catch (e) {
      alert(e);
    }
    navigate("/setting/creategrouplesson");
    reset();
  };

  const [Freq, setFreq] = useState("");
  //const [startDate, setStartDate] = useState(new Date());
  const renderElement = () => {
    if (Freq === "Weekly")
      return (
        <div>
          <div className="w-full lg:flex py-3">
            <div className="lg:w-1/4 my-auto">
              {" "}
              <label className="mb-1 line-clamp-1">Select Day</label>
            </div>
            <div className=" lg:w-2/4 ">
              <select
                className="w-full rounded"
                placeholder="Search by language or specialty"
                {...register("weekday")}
              >
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
              </select>
            </div>
          </div>
          <div className="w-full lg:flex py-3">
            <div className="lg:w-1/4 my-auto">
              {" "}
              <label htmlFor="">Number of Classes</label>
            </div>
            <div className=" lg:w-2/4">
              <input
                type="number"
                className="border border-gray-300 min-w-full   rounded"
                {...register("classnumber")}
              />
              <p className="text-red-400"> {errors.classnumber?.message}</p>
            </div>
          </div>
        </div>
      );
  };
  return (
    <div>
      <LayoutOutSide>
        <Container>
          <div className="sm:flex py-8">
            <div>
              <Setting />
            </div>
            <form
              onSubmit={handleSubmit(groupLessonSubmit)}
              className="bg-white rounded-md p-5 w-full"
            >
              <h1 className="text-2xl font-semibold mb-4">
                Create Group Lesson
              </h1>
              <hr />
              <div className="min-w-full lg:flex py-3">
                <div className="lg:w-1/4 my-auto">
                  {" "}
                  <label htmlFor="">Title</label>
                </div>
                <div className=" lg:w-2/4 ">
                  <input
                    type="text"
                    placeholder="Everyday Conversations"
                    className="border border-gray-300 min-w-full   rounded"
                    {...register("title")}
                  />
                  <p className="text-red-400"> {errors.title?.message}</p>
                </div>
              </div>
              {/* 2ndinput */}
              <div className="w-full lg:flex py-3">
                <div className="lg:w-1/4 my-auto">
                  {" "}
                  <label className="mb-1 line-clamp-1">Level</label>
                </div>
                <div className=" lg:w-2/4 ">
                  <select
                    className="w-full rounded"
                    placeholder="Search by language or specialty"
                    {...register("level")}
                  >
                    <option value="Native">Native</option>
                    <option value="Basic">Basic</option>
                    <option value="Bilingual">Bilingual</option>
                  </select>
                  <p className="text-red-400"> {errors.level?.message}</p>
                </div>
              </div>
              {/* 3rdinput */}

              {/* 4thinput */}
              <div className="w-full lg:flex py-3">
                <div className=" lg:w-1/4 my-auto">
                  {" "}
                  <label htmlFor="">Start Date</label>
                </div>
                <div className="lg:w-2/4">
                  <input
                    type="date"
                    className="rounded"
                    {...register("startDate")}
                  />
                  <p className="text-red-400"> {errors.groupsize?.message}</p>
                </div>
              </div>
              <div className="w-full lg:flex py-3">
                <div className="w-1/4 my-auto">
                  <label>Class Length</label>
                </div>
                <div className="lg:w-2/4">
                  <input
                    type="number"
                    className="border border-gray-300 min-w-full   rounded"
                    {...register("classlength")}
                  />
                  <p className="text-red-400"> {errors.classlength?.message}</p>
                </div>
              </div>
              <div className="w-full lg:flex py-3">
                <div className="lg:w-1/4 my-auto">
                  {" "}
                  <label className="mb-1 line-clamp-1">Frequency</label>
                </div>
                <div className=" lg:w-2/4 ">
                  <select
                    className="w-full rounded"
                    placeholder="Search by language or specialty"
                    {...register("frequency")}
                    onChange={(event) => {
                      setFreq(event.target.value);
                      //alert(Freq);
                    }}
                  >
                    <option value="One Time">One Time</option>
                    <option value="Weekly">Weekly</option>
                  </select>
                </div>
              </div>

              {renderElement()}

              <div className="w-full lg:flex py-3">
                <div className=" lg:w-1/4 my-auto">
                  {" "}
                  <label htmlFor="">Group Size</label>
                </div>
                <div className="lg:w-2/4">
                  <input
                    type="number"
                    className="border border-gray-300 min-w-full   rounded"
                    {...register("groupsize")}
                  />
                  <p className="text-red-400"> {errors.groupsize?.message}</p>
                </div>
              </div>
              <div className="w-full lg:flex py-3">
                <div className=" lg:w-1/4 my-auto">
                  {" "}
                  <label htmlFor="">Cover Image</label>
                </div>
                <div className="lg:w-2/4">
                  <input
                    type="file"
                    id="img"
                    name="img"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
              <div className="w-full lg:flex py-3">
                <div className=" lg:w-1/4 my-auto">
                  {" "}
                  <label htmlFor="">Description</label>
                </div>
                <div className="lg:w-2/4">
                  <textarea
                    rows={5}
                    className="w-full rounded"
                    {...register("description")}
                  ></textarea>
                  <p className="text-red-400"> {errors.description?.message}</p>
                </div>
              </div>

              <div className="w-full lg:flex py-3">
                <div className=" lg:w-2/5 my-auto">
                  {" "}
                  <label htmlFor="">Class Timings</label>
                </div>
                <div className="lg:w-3/5" style={{ paddingLeft: "30px" }}>
                  <input
                    type="time"
                    className="rounded"
                    {...register("starttime")}
                  />
                </div>
                <div className="lg:w-4/5">
                  <input
                    type="time"
                    className="rounded"
                    {...register("endtime")}
                  />
                </div>
              </div>
              {/* buttons */}
              <div className="w-full lg:flex mt-5">
                <div className="lg:w-1/3 my-auto" />
                <div className="lg:flex lg:space-x-4 ">
                  <button
                    type="submit"
                    className="bg-primary-300 hover:bg-primary-400 min-w-full py-2 px-5 rounded text-white"
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Container>
      </LayoutOutSide>
    </div>
  );
};

export default CreateGroupLesson;
