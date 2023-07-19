import React from "react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { AppContext } from "../TutorSignupPage";
import { useContext } from "react";
//import { db } from "../../../config/firebase";
import { addDoc, collection, doc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../../../config/firebase";
import firebase from "../../../config/firebase";
import { toast } from "react-toastify";
let userid = "";
const Pricing = ({ profileImage }) => {
  const { currentuser } = useSelector((state) => state.firebase.auth);
  const navigate = useNavigate();
  const { step, setSteps, setTutorData, tutorData, signupTutorData } =
    useContext(AppContext);
  const schema = yup.object().shape({
    price: yup.string().required("Price is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  /* submitPricing = (data) => {
    Object.assign(signupTutorData, data);
    //signupData = { ...signupData, ...data };
    //setTutorData(...tutorData, ...data);
    setTutorData((prevState) => ({
      ...prevState,
      ...data,
    }));
    console.log("1", tutorData);
    console.log("2", signupTutorData);
    // console.log("3", signupData);
    setSteps(step + 1);
    console.log(step);
  };*/
  //const registerRef = collection(db, "users");
  const registerRef = collection(db, "users");
  const registerForm = async (data) => {
    Object.assign(signupTutorData, data);
    //signupData = { ...signupData, ...data };
    //setTutorData(...tutorData, ...data);
    setTutorData((prevState) => ({
      ...prevState,
      ...data,
    }));
    console.log("1", tutorData);
    console.log("2", signupTutorData);
    // console.log("3", signupData);
    setSteps(step + 1);
    console.log(step);
    const auth = getAuth();
    createUserWithEmailAndPassword(
      auth,
      tutorData.email,
      tutorData.password
    ).then(({ user }) => {
      userid = user.uid;
      //user.displayName = tutorData.firstname;
      console.log("data", tutorData);
      alert(tutorData);
      firebase
        .firestore()
        .collection("users")
        .doc(userid)
        .set({
          userId: userid,
          role: "tutor",
          phonenumber: tutorData.phoneNumber,
          Specialization: tutorData.spec,
          certificate: tutorData.Certification,
          certificateDescription: tutorData.desc,
          certificateSubject: tutorData.subject,
          country: tutorData.country,
          currentSituation: tutorData.currentSituation,
          degree: tutorData.degree,
          degreeType: tutorData.degreetype,
          email: tutorData.email,
          password: tutorData.password,
          experienceDescription: tutorData.exp,
          firstname: tutorData.firstname,
          lastname: tutorData.lastname,
          introduction: tutorData.intro,
          issuedBy: tutorData.text,
          language: tutorData.language,
          level: tutorData.level,
          motivationalMessage: tutorData.lesson,
          pricehourly: data.price,
          subject: tutorData.subject,
          teachingExperience: tutorData.teachingExperience,
          university: tutorData.uni,
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
    });
    // try {
    //   await addDoc(registerRef, {
    //     userId: userid,
    //     role: "tutor",
    //     phonenumber: tutorData.phoneNumber,
    //     Specialization: tutorData.spec,
    //     certificate: tutorData.Certification,
    //     certificateDescription: tutorData.desc,
    //     certificateSubject: tutorData.subject,
    //     country: tutorData.country,
    //     currentSituation: tutorData.currentSituation,
    //     degree: tutorData.degree,
    //     degreeType: tutorData.degreetype,
    //     email: tutorData.email,
    //     password: tutorData.password,
    //     experienceDescription: tutorData.exp,
    //     firstname: tutorData.firstname,
    //     lastname: tutorData.lastname,
    //     introduction: tutorData.intro,
    //     issuedBy: tutorData.text,
    //     language: tutorData.language,
    //     level: tutorData.level,
    //     motivationalMessage: tutorData.lesson,
    //     pricehourly: data.price,
    //     subject: tutorData.subject,
    //     teachingExperience: tutorData.teachingExperience,
    //     university: tutorData.uni,
    //   });
    // } catch (e) {
    //   alert(e);
    //   navigate("/sign-up");
    // }
    alert("Successfully Registered");
    navigate("/setting/account");
  };
  const handlePrev = () => {
    setSteps(step - 1);
  };
  return (
    <form
      onSubmit={handleSubmit(registerForm)}
      className="bg-white p-6 lg:shadow lg:max-w-2xl mx-auto"
    >
      <fieldset>
        <div>
          <div className=" space-y-6 pb-6">
            <h1 className="text-xl font-semibold py-2">Pricing</h1>
            <div className="">
              <h2 className="text-base font-semibold  my-1">
                Set your hourly base rate
              </h2>
              <p className="text-base font-medium mt-3 text-gray-500">
                To get more students to your profile, we recommend a base price
                of $ per hour for new tutors in your subject and with your
                experience level.
              </p>
            </div>
            <div className=" flex items-center gap-3">
              <input
                className="rounded sm:w-1/5 w-1/3"
                type="number"
                name="usd"
                id="usd"
                placeholder="20"
                {...register("price")}
              />
              <label className="font-semibold text-gray-500" htmlFor="usd">
                $USD
              </label>
              <span className="text-red-400"> {errors.price?.message}</span>
            </div>
            <h1 className="flex items-center gap-2">
              <InformationCircleIcon className="h-6 w-6 text-primary-500 " />
              Change your base rate in setting after approval
            </h1>
            <select className="w-full rounded" type="search">
              <option value="19:21 ( GMT + 2 ) - Europe, Berlin">
                Preply Commission
              </option>
              <option value="19:21 ( GMT + 2 ) - Europe, Berlin">
                {" "}
                Preply Commission
              </option>
              <option value="19:21 ( GMT + 2 ) - Europe, Berlin">
                {" "}
                Preply Commission
              </option>
            </select>
            <div className=" p-4 bg-gray-100">
              <h1 className=" sm:text-base text-sm font-semibold  ">
                {" "}
                Subscription plans
              </h1>
              <p className="text-sm font-normal">
                Students can subscribe to monthly or yearly plans based on the
                frequency of lessons they'll take. Automatic recurring payment
                takes place every 28 days.{" "}
                <Link
                  to
                  className="font-medium text-primary-200 hover:text-primary-300"
                >
                  Learn more
                </Link>
              </p>
            </div>
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
          Submit
        </button>
      </div>
    </form>
  );
};

export default Pricing;
