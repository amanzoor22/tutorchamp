import React from "react";
import LayoutOutSide from "../../components/Layouts/LayoutOutSide";
import Container from "../../components/globals/Container";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { db } from "../../config/firebase";
import { storage } from "../../config/firebase";
import { addDoc, collection, setDoc, doc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { registerInitiate } from "../../redux/actions";
import { current } from "@reduxjs/toolkit";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useFirestore } from "react-redux-firebase";
import firebase from "../../config/firebase";
import { ref } from "firebase/storage";

import { toast } from "react-toastify";

// Import toastify css file
import "react-toastify/dist/ReactToastify.css";

// toast-configuration method,
// it is compulsory method.
//toast.configure();
let userid = "";
const SignUpPage = () => {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const { currentuser } = useSelector((state) => state.firebase.auth);
  //console.log("current", currentuser);
  const dispatch = useDispatch();
  const { firstname, lastname, email, password } = state;
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter correct email format")
      .required("Email is required"),
    firstname: yup.string().required("First name is required"),
    lastname: yup.string().required("Last name is required"),
    password: yup.string().min(8).required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
  //const [firstname, setfirstname] = useState("");
  //const [lastname, setlastname] = useState("");
  /*const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/sign-in");
    console.log("FirstName:", firstname);
    console.log("LastName:", lastname);
    console.log("Email:", email);
    console.log("Password:", password);
  };
  */
  const firestore = useFirestore();
  const registerRef = collection(db, "users");
  const registerForm = async (data) => {
    /* setState({
      firstname: data.firstname, // New first name from the input
      lastname: data.lastname,
      email: data.email,
      password: data.password,
    });
    /*console.log(data);
    console.log("first", firstname);
    dispatch(
      registerInitiate(data.firstname, data.lastname, data.email, data.password)
    );
    setState({ firstname: "", lastname: "", email: "", password: "" });
    // console.log("current", currentuser);
*/

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password).then(
      ({ user }) => {
        // userCredential.displayName = data.firstname;
        console.log("Credentials", user);
        userid = user.uid;
        // console.log( userid);
        alert(userid);
        alert(data.firstname);
        alert(user.displayName);
        alert("Successfully Registered");
        navigate("/setting/account");
        firebase
          .firestore()
          .collection("users")
          .doc(userid)
          .set({
            userId: userid,
            role: "student",
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            password: data.password,
          })
          .then((res) => {
            //checkout goes here
            console.log("res", res);
            toast.success("Account Created Successfully!");
            //handleClose();
          })
          .catch((err) => {
            // toast.error(err.message);
            //setLoading(false);
            toast.error(err.message);
            //handleClose();
          });
      }
    );
    // try {
    //   await setDoc(doc(registerRef), {
    //     userId: userid,
    //     role: "student",
    //     firstname: data.firstname,
    //     lastname: data.lastname,
    //     email: data.email,
    //     password: data.password,
    //     //photoUrl: "",
    //   });
    // } catch (e) {
    //   alert(e);
    //   navigate("/sign-up");
    // }
    if (currentuser) {
      alert("Successfully Registered");
      navigate("/setting/account");
    }
  };

  const profile = useSelector((state) => state.firebase.profile);
  console.log("PROFILE", profile);

  return (
    <div>
      <LayoutOutSide>
        <Container>
          <section className="h-screen">
            <div className="h-full">
              <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                <div className="shrink-1 mb-12  grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                  <img
                    src="/images/heroimage.png"
                    className="w-full"
                    alt="Sampleimage"
                  />
                </div>
                <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                  <form onSubmit={handleSubmit(registerForm)}>
                    <h4 className="mb-0 text-2xl font-semibold">
                      Sign up as a student
                    </h4>
                    <div className="mb-4 mt-2 text-base text-gray-500">
                      Sign up as a tutor
                      <Link
                        to="/tutor-signup"
                        className="text-primary-200 font-semibold mx-1 transition duration-150 ease-in-out hover:text-primary-300"
                      >
                        Sign up
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-2 ">
                      <div
                        className="relative mb-6 mt-5"
                        data-te-input-wrapper-init
                      >
                        <input
                          type="text"
                          className="peer block min-h-[auto] w-full rounded border-1 border-gray-400 h-14 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          placeholder="First Name"
                          id="firstname"
                          name="firstname"
                          //value={firstname}
                          //onChange={(e) => setfirstname(e.target.value)}
                          {...register("firstname")}
                        />
                        <label
                          htmlFor="firstname"
                          className="pointer-events-none absolute text-sm left-3 bottom-7 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.2rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[2rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  dark:peer-focus:text-primary"
                        >
                          First Name
                        </label>
                        <p style={{ color: "red" }} className="errorMessage">
                          {errors.firstname?.message}
                        </p>
                      </div>
                      <div
                        className="relative mb-6 mt-5"
                        data-te-input-wrapper-init
                      >
                        <input
                          type="text"
                          className="peer block min-h-[auto] w-full rounded border-1 border-gray-400 h-14 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          placeholder="Last Name"
                          id="lastname"
                          name="lastname"
                          //value={lastname}
                          // onChange={(e) => setlastname(e.target.value)}
                          {...register("lastname")}
                        />
                        <label
                          htmlFor="lastname"
                          className="pointer-events-none absolute text-sm left-3 bottom-7 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.2rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[2rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  dark:peer-focus:text-primary"
                        >
                          Last Name
                        </label>
                        <p style={{ color: "red" }} className="errorMessage">
                          {errors.lastname?.message}
                        </p>
                      </div>
                    </div>
                    <div
                      className="relative mb-10 mt-5"
                      data-te-input-wrapper-init
                    >
                      <input
                        type="email"
                        className="peer block min-h-[auto] w-full rounded border-1 border-gray-400 h-14 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        placeholder="Email address"
                        id="email"
                        name="email"
                        autoComplete="email"
                        // value={email}
                        //onChange={(e) => setEmail(e.target.value)}
                        {...register("email")}
                      />
                      <label
                        htmlFor="email"
                        className="pointer-events-none absolute text-sm left-3 bottom-7 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.2rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[2rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  dark:peer-focus:text-primary"
                      >
                        Email address
                      </label>
                      <p style={{ color: "red" }} className="errorMessage">
                        {errors.email?.message}
                      </p>
                    </div>
                    <div
                      className="relative mb-6 mt-5"
                      data-te-input-wrapper-init
                    >
                      <input
                        type="password"
                        className="peer block min-h-[auto] w-full rounded border-1 border-gray-400 h-14 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        placeholder="Password"
                        id="password"
                        name="password"
                        autoComplete="current-password"
                        //value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                        {...register("password")}
                      />
                      <label
                        htmlFor="password"
                        className="pointer-events-none absolute text-sm left-3 bottom-7 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.2rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[2rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  dark:peer-focus:text-primary"
                      >
                        Password
                      </label>
                      <p style={{ color: "red" }} className="errorMessage">
                        {errors.password?.message}
                      </p>
                    </div>
                    <div className="mb-6 flex items-center justify-between">
                      <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                        <input
                          className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                          type="checkbox"
                          defaultValue
                          id="exampleCheck2"
                        />
                        <label
                          className="inline-block pl-[0.15rem] hover:cursor-pointer"
                          htmlFor="exampleCheck2"
                        >
                          Remember me
                        </label>
                      </div>
                      <a href="#!">Forgot password?</a>
                    </div>
                    <div className="text-center lg:text-left">
                      <button
                        type="submit"
                        className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                      >
                        Sign Up
                      </button>
                      <p className="mb-0 mt-2 pt-1 text-sm text-gray-500">
                        Already have an account?
                        <Link
                          to="/sign-in"
                          className="text-primary-200 font-semibold mx-1 transition duration-150 ease-in-out hover:text-primary-300"
                        >
                          Sign in
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>{" "}
          </section>
        </Container>
      </LayoutOutSide>
    </div>
  );
};

export default SignUpPage;
