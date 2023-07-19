import React, { useState, useEffect } from "react";
import Setting from "../Setting";
import LayoutOutSide from "../../../components/Layouts/LayoutOutSide";
import Container from "../../../components/globals/Container";
//import { userdata } from "../Setting";
import firebase from "firebase/compat/app";
import { useDispatch, useSelector } from "react-redux";
import { getDoc, getDocs, query, where, doc } from "firebase/firestore";
import { db } from "../../../config/firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
export let docSnap = [{}];
let userdata = {};

const Account = () => {
  const currentuser = useSelector((state) => state.firebase.auth);
  const userprofile = useSelector((state) => state.firebase.profile);
  const [photoUrl, setPhotoUrl] = useState("/images/avatar.svg");
  const user = useSelector((state) => state.firebase.auth);

  const storage = getStorage();
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
            firebase
              .firestore()
              .collection("users")
              .doc(currentuser.userId)
              .update({
                profileImage: downloadURL,
              })
              .then((res) => console.log("success"))
              .catch((err) => console.log("err"));
          });
        }
      );
    }
  }

  const fetchData = async () => {
    const docRef = doc(db, "users", currentuser.uid);
    docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      userdata = docSnap.data();
      // alert(userdata.firstname);
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <LayoutOutSide>
        <Container>
          <div className="sm:flex py-8">
            <div>
              <Setting />
            </div>
            <form className="bg-white rounded-md p-5 w-full">
              <h1 className="text-2xl font-semibold mb-4">Account Settings</h1>
              {userdata.role !== "student"}

              <hr />
              <div className="flex mt-5 pt-3">
                <div className="flex flex-wrap">
                  <p className="">Profile image</p>
                  <div className=" w-40 h-40 sm:mx-auto lg:ml-48 mb-3">
                    <img
                      src={photoUrl}
                      className="min-w-full min-h-full lg:ml-10"
                      alt=""
                    />
                  </div>
                </div>
                <div className="ml-auto lg:w-1/6">
                  <label
                    htmlFor="upload-photo"
                    className="inline-block mb-2 border border-gray-300 text-gray-500 hover:border-primary-200 hover:bg-primary-200 hover:text-white  px-4 py-2"
                  >
                    Upload photo
                  </label>
                  <input
                    hidden
                    type="file"
                    name="upload-photo"
                    id="upload-photo"
                    onChange={handleFileChange}
                  />
                  <p className="text-gray-500">
                    Maximum size - 2MB. JPG or PNG format.
                  </p>
                </div>
              </div>
              <div className="min-w-full lg:flex py-3">
                <div className="lg:w-1/3 my-auto">
                  {" "}
                  <label htmlFor="">First name</label>
                </div>
                <div className=" lg:w-2/3 ">
                  <input
                    disabled
                    type="text"
                    //placeholder={userdata.firstname}
                    className="border border-gray-300 min-w-full   rounded"
                    value={userprofile.firstname}
                  />
                </div>
              </div>
              {/* 2ndinput */}
              <div className="w-full lg:flex py-3">
                <div className="lg:w-1/3 my-auto">
                  {" "}
                  <label htmlFor="">Last name</label>
                </div>
                <div className=" lg:w-2/3 ">
                  <input
                    disabled
                    type="text"
                    //placeholder="Mughal"
                    className="border border-gray-300 min-w-full   rounded"
                    value={userprofile.lastname}
                  />
                </div>
              </div>
              {/* 3rdinput */}
              <div className="w-full lg:flex py-3">
                <div className="lg:w-1/3 my-auto">
                  {" "}
                  <label htmlFor="">Phone number</label>
                </div>
                <div className=" lg:w-2/3">
                  <input
                    type="number"
                    className="border border-gray-300 min-w-full   rounded"
                  />
                </div>
              </div>
              {/* 4thinput */}
              <div className="w-full lg:flex py-3">
                <div className="w-1/3 my-auto">
                  <label>Timezone</label>
                </div>
                <div className="lg:w-2/3">
                  <select
                    className="  min-w-full border border-gray-300 text-gray-500  shadow-sm   rounded "
                    type="search"
                    placeholder=""
                  >
                    <option value="America/Loss_Angeles GMT -7:00">
                      America/Loss_Angeles GMT -7:00
                    </option>
                    <option value=" America/Lima GMT -5:00">
                      {" "}
                      America/Lima GMT -5:00
                    </option>
                  </select>
                </div>
              </div>
              <div className="w-full lg:flex py-3">
                <div className=" lg:w-1/3 my-auto">
                  {" "}
                  <label htmlFor="">Social networks</label>
                </div>
                <div className="flex">
                  <img src="/images/fb.svg" alt="" />
                  <p className="ml-2 ">Not connected to Facebook account</p>
                </div>
              </div>
              <button type="button" className="w-full lg:flex ">
                <div className=" lg:w-1/3 my-auto">
                  {" "}
                  <label htmlFor=""></label>
                </div>
                <div className="flex">
                  <img src="/images/google.svg" alt="" />
                  <p className="ml-2 ">Not connected to Google account</p>
                </div>
              </button>
              {/* buttons */}
              <div className="w-full lg:flex mt-5">
                <div className="lg:w-1/3 my-auto" />
                <div className="lg:flex lg:space-x-4 ">
                  <button
                    type="submit"
                    className="bg-primary-300 hover:bg-primary-400 min-w-full py-2 rounded text-white"
                  >
                    Save changes
                  </button>
                  <button
                    type="button"
                    className="bg-red-500 hover:bg-red-600 min-w-full py-2 mt-4 lg:mt-0 rounded text-white"
                  >
                    Delete account
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

export default Account;
