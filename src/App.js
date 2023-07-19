import { useDispatch, useSelector } from "react-redux";
// pages
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import SearchPage from "./pages/search/SearchPage";
import Detailprofile from "./pages/details/Detailprofile";
import CoursesPage from "./pages/coursesCardPages/CoursesPage";
import CoursesCardPage from "./pages/coursesCardPages/CoursesCardPage";
import GroupClassAll from "./pages/groupClass/GroupClassAll";
import Carddetail from "./pages/groupcarddetail/Carddetail";
import SignInPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUpPage";
import SurveyPage from "./pages/search/SurveyPage";
import TutorSignupPage from "./pages/tutor-signup/TutorSignupPage";
import Paymentsdetail from "./pages/paymentdetail/Paymentsdetail";
import Privatelessonss from "./pages/privatelesson/Privatelessonss";
import GroupLessons from "./pages/groupLessons/GroupLessons";
import Jamesdetailpage from "./pages/privatelesson/sections/Jamesdetailpage";
import InsideProfileLesson from "./pages/groupLessons/InsideProfileLesson";
import Setting from "./pages/setting/Setting";
import EmailPass from "./pages/setting/sections/EmailPass";
import Account from "./pages/setting/sections/Account";
import CreateGroupLesson from "./pages/setting/sections/CreateGroupLesson";
import PayMethod from "./pages/setting/sections/PayMethod";
import PayHistory from "./pages/setting/sections/PayHistory";
import Calender from "./pages/setting/sections/Calender";
import BookedLessons from "./pages/setting/sections/BookedLessons";
import HandleNotification from "./pages/setting/sections/HandleNotification";
import { createContext } from "react";
export const AppContext = createContext();



const pages = [
  { path: "/", element: <LandingPage /> },
  { path: "/search", element: <SearchPage /> },
  { path: "/survey", element: <SurveyPage /> },
  { path: "/detailprofile", element: <Detailprofile /> },
  { path: "/courses", element: <CoursesPage /> },
  { path: "/courses/card", element: <CoursesCardPage /> },
  { path: "/groupClasses", element: <GroupClassAll /> },
  { path: "/carddetail", element: <Carddetail /> },
  { path: "/tutor-signup", element: <TutorSignupPage /> },
  { path: "/sign-in", element: <SignInPage /> },
  { path: "/sign-up", element: <SignUpPage /> },
  { path: "/paymentdetail", element: <Paymentsdetail /> },
  { path: "/privatelesson", element: <Privatelessonss /> },
  { path: "/insideprofilelesson", element: <InsideProfileLesson /> },
  { path: "/grouplesson", element: <GroupLessons /> },
  { path: "/jamesdetailpage", element: <Jamesdetailpage /> },
  { path: "/setting", element: <Setting /> },
  { path: "/setting/emailpassword", element: <EmailPass /> },
  { path: "/setting/calender", element: <Calender /> },
  { path: "/setting/account", element: <Account /> },
  { path: "/setting/paymentmethod", element: <PayMethod /> },
  { path: "/setting/paymenthistory", element: <PayHistory /> },
  { path: "/setting/notifications", element: <HandleNotification /> },
  { path: "/setting/lessonslisting", element: <BookedLessons /> },
  { path: "/setting/creategrouplesson", element: <CreateGroupLesson /> },
];

function App() {
  const currentuser  = useSelector((state) => state.firebase.auth);
 
 console.log("app", currentuser)
  return (
    <main>
      <AppContext.Provider
      value={ currentuser }
    >
      <BrowserRouter>
        <Routes>
          {pages.map((page) => (
            <Route
              key={`page${page.path}`}
              path={page.path}
              element={page.element}
            />
          ))}
        </Routes>
      </BrowserRouter>
      </AppContext.Provider>
    </main>
  );
}

export default App;
