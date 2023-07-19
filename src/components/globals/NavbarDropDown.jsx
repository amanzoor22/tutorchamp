import React, { useEffect } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogoutInitiate } from "../../redux/actions";
import { getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebase";
import { collection } from "firebase/firestore";
import { loggedinuser } from "../../pages/auth/SignInPage";
import { getAuth, signOut } from "firebase/auth";
let userdata = {};
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const NavbarDropDown = () => {
  const currentuser = useSelector((state) => state.firebase.auth);
  const userprofile = useSelector((state) => state.firebase.profile);
  //console.log("heyaa", currentuser);

  const dispatch = useDispatch();

  const handleAuth = () => {
    alert(currentuser);

    //dispatch(LogoutInitiate());
    //alert("logout");
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        alert("successfully logged out");
      })
      .catch((error) => {
        // An error happened.
        alert(error);
      });
  };
  /*const registerRef = collection(db, "users", currentuser.currentUser.email);
   try{ const docSnap = await getDoc(registerRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}
catch(e)
{
  console.log(e)
}

  const fetchData = async () => {
    const classesCollection = await getDoc(registerRef);

    console.log(classesCollection.data());
  };
  const registerRef = collection(db, "users");
  const q = query(
    collection(db, "users"),
    where("email", "==", currentuser.currentUser.email)
  );
  const fetchData = async () => {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      userdata = doc.data();
      console.log("after", userdata);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);*/

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div style={{ display: "inline-flex" }}>
          <span style={{ padding: "4px 10px 0px 0px" }}>
            {userprofile.firstname}
          </span>
          <Menu.Button className="flex items-center rounded-full bg-primary-100 text-white hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-200 focus:ring-offset-2 focus:ring-offset-gray-100">
            <span className="sr-only">Open options</span>

            <img
              className="h-8 w-8  rounded-full"
              src="/images/avatar.svg"
              alt=""
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/privatelesson"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Private Lesson
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/grouplesson"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Group Lesson
                  </Link>
                )}
              </Menu.Item>
              <form method="POST" action="#">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/setting/account"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full px-4 py-2 text-left text-sm"
                      )}
                    >
                      Setting
                    </Link>
                  )}
                </Menu.Item>
              </form>

              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/privatelesson"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                    onClick={handleAuth}
                  >
                    Logout
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default NavbarDropDown;
