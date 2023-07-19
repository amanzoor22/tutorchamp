import { ArrowUpTrayIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { AppContext } from "../TutorSignupPage";
import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import firebase from "firebase/compat/app";
import { useDispatch, useSelector } from "react-redux";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const PhoneAndVideo = ({ setProfileImage }) => {
  const currentuser = useSelector((state) => state.firebase.auth);
  const storage = getStorage();
  const { step, setSteps } = useContext(AppContext);
  const [photoUrl, setPhotoUrl] = useState("/images/avatar.svg");
  const [image, setImage] = useState(null);
  const [videoSrc, setVideoSrc] = useState(null);

  function handleImageChange(event) {
    const file = event.target.files[0];
    console.log("file", file);

    if (
      file &&
      file.size <= 2 * 1024 * 1024 &&
      (file.type === "image/jpeg" || file.type === "image/png")
    ) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhotoUrl(event.target.result);
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
            setProfileImage(downloadURL);

            // firebase
            //   .firestore()
            //   .collection("users")
            //   .doc(currentuser.userId)
            //   .update({
            //     profileImage: downloadURL,
            //   })
            //   .then((res) => console.log("success"))
            //   .catch((err) => console.log("err"));
          });
        }
      );
    }

    const reader = new FileReader();

    reader.onload = function (event) {
      setImage(event.target.result);
    };

    reader.readAsDataURL(file);
  }
  // const schema = yup.object().shape({
  //   image: yup.string().required("Image is required"),
  //   video: yup.string(),

  //   //password: yup.string().min(8).required("Password is required")
  // });
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(schema),
  // });

  const handleSubmit = (data) => {
    console.log(data);
    setSteps(step + 1);
  };

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.includes("video")) {
      const src = URL.createObjectURL(file);
      setVideoSrc(src);
    } else {
      setVideoSrc("");
    }
  };
  const handlePrev = () => {
    setSteps(step - 1);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 lg:shadow lg:max-w-2xl mx-auto"
    >
      <fieldset>
        <h1 className="text-xl font-semibold mb-4">Phone & Video</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="item">
            <div>
              {image ? (
                <span className="block w-full h-64 relative">
                  <img
                    className="block w-full h-full object-cover"
                    src={image}
                    alt="..."
                  />
                  <label
                    className="absolute top-0 start-0 w-full p-3 text-center bg-black/40 text-white font-medium cursor-pointer"
                    htmlFor="upload-photo"
                  >
                    Change photo
                  </label>
                </span>
              ) : (
                <span className="flex items-center justify-center w-full">
                  <label
                    htmlFor="upload-photo"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <ArrowUpTrayIcon className="w-8 h-8 mb-3 text-gray-400" />
                      <p className="mb-2 text-sm text-gray-500">
                        Upload a photo
                      </p>
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 uppercase">
                        SVG, PNG, JPG
                      </p>
                    </div>
                  </label>
                </span>
              )}
              <input
                id="upload-photo"
                type="file"
                className="hidden"
                onChange={handleImageChange}
                //{...register("image")}
              />
            </div>

            <ul className="space-y-2 mt-3">
              <li className="relative">
                <div className="flex gap-2">
                  <CheckCircleIcon className="h-6 w-6 min-w-[1.5rem] text-primary-300" />
                  <span className="font-medium text-sm">
                    Allows the user to upload photos to their account
                  </span>
                </div>
              </li>
              <li className="relative">
                <div className="flex gap-2">
                  <CheckCircleIcon className="h-6 w-6 min-w-[1.5rem] text-primary-300" />
                  <span className="font-medium text-sm">
                    Allows the user to upload photos to their account
                  </span>
                </div>
              </li>
              <li className="relative">
                <div className="flex gap-2">
                  <CheckCircleIcon className="h-6 w-6 min-w-[1.5rem] text-primary-300" />
                  <span className="font-medium text-sm">
                    Allows the user to upload photos to their account
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* == */}

          <div className="item">
            <div>
              {videoSrc ? (
                <span className="block w-full h-64 relative">
                  <video
                    controls
                    className="block w-full h-full bg-black"
                    src={videoSrc}
                  ></video>

                  <label
                    className="absolute top-0 start-0 w-full p-3 text-center bg-black/40 text-white font-medium cursor-pointer"
                    htmlFor="upload-video"
                  >
                    Change video
                  </label>
                </span>
              ) : (
                <label
                  htmlFor="upload-video"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <ArrowUpTrayIcon className="w-8 h-8 mb-3 text-gray-400" />
                    <p className="mb-2 text-sm text-gray-500">Upload a video</p>
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 uppercase">
                      mp3, webm, mkv, .ogv, .ogg
                    </p>
                  </div>
                </label>
              )}
              <input
                id="upload-video"
                type="file"
                accept="video/*"
                onChange={handleVideoUpload}
                className="hidden"
                //{...register("video")}
              />
            </div>
            <ul className="space-y-2 mt-3">
              <li className="relative">
                <div className="flex gap-2">
                  <CheckCircleIcon className="h-6 w-6 min-w-[1.5rem] text-primary-300" />
                  <span className="font-medium text-sm">
                    Allows the user to upload video to their account
                  </span>
                </div>
              </li>
              <li className="relative">
                <div className="flex gap-2">
                  <CheckCircleIcon className="h-6 w-6 min-w-[1.5rem] text-primary-300" />
                  <span className="font-medium text-sm">
                    Allows the user to upload video to their account
                  </span>
                </div>
              </li>
              <li className="relative">
                <div className="flex gap-2">
                  <CheckCircleIcon className="h-6 w-6 min-w-[1.5rem] text-primary-300" />
                  <span className="font-medium text-sm">
                    Allows the user to upload video to their account
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </fieldset>
      <div className="mt-6 w-full flex gap-6">
        <button
          type="button"
          onClick={handlePrev}
          className="rounded w-1/2 bg-white disabled:hover:bg-transparent disabled:text-gray-600 text-primary-400 border-2 border-primary-300 hover:text-white hover:bg-primary-300 mx-auto px-3 py-2 disabled:border-gray-400 disabled:opacity-40"
        >
          Back
        </button>
        <button
          type="submit"
          className="rounded w-1/2 bg-primary-300 hover:bg-primary-400 text-white mx-auto px-3 py-2"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default PhoneAndVideo;
