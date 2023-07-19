import React, { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";
import { db } from "../../config/firebase";
import { getDoc, getDocs, query, where } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
export let userdata = {};
let q = "";
const tabs = [
  { name: "Account", link: "/setting/account" },
  { name: "Lessons Booked", link: "/setting/lessonslisting" },
  { name: "Email & Password", link: "/setting/emailpassword" },
  { name: "Payment method", link: "/setting/paymentmethod" },
  { name: "Payment history", link: "/setting/paymenthistory" },
  { name: "Calender", link: "/setting/calender" },
  { name: "Notifications", link: "/setting/notifications" },
  {
    name: "Create Group Lesson",
    link: "/setting/creategrouplesson",
  },
];

const Setting = () => {
  const currentuser = useSelector((state) => state.firebase.auth);
  const [settingstabs, setTabs] = useState(tabs);

  //alert(currentuser.email);
  const useremail = currentuser.email;
  /* if (currentuser) {
    q = query(collection(db, "users"), where("email", "==", useremail));
  }
  const fetchData = async () => {
    const querySnapshot = await getDocs(q);
    console.log("this is query shor", querySnapshot.docs.length);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      userdata = doc.data();
      //alert(userdata.role);
      //,setEmployees((current) => [...current, doc.data()]);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
*/
  return (
    <div>
      <div>
        <main>
          <div className=" sm:pb-16 px-4 sm:mx-3 sm:px-6 lg:px-0 py-6 settings-sidebar border-gray-200">
            {/* Tabs */}

            <ul className="sidemenu sm:w-40 sm:block flex items-center overflow-auto gap-2 w-full sm:space-y-5">
              {tabs.map((tab) => (
                <li key={tab.name}>
                  <NavLink
                    to={tab.link}
                    className="block whitespace-nowrap border-transparent text-gray-500 px-2 py-1 font-medium text-base"
                  >
                    {tab.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Setting;
