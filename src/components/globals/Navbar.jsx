import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Container from "./Container";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import NavbarDropDown from "./NavbarDropDown";
import { useSelector } from "react-redux";
import Notifications from "./Notifications";
import { docSnap } from "../../pages/setting/sections/Account";

const links = [
  // { path: "/", label: "Home" },
  // { path: "/search", label: "Browser" },
  // { path: "/contact", label: "Contact us" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentuser = useSelector((state) => state.firebase.auth);
  //console.log(currentuser.currentUser.email);
  console.log("navbar", currentuser);

  if (currentuser.uid) {
    return (
      <header className={`sticky top-0 z-30 w-full bg-white shadow`}>
        <Container>
          <div className="py-2">
            <nav
              className="flex items-center justify-between"
              aria-label="Global"
            >
              <div className="flex lg:flex-1">
                <Logo />
              </div>

              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-800"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>

                <div className="ml-3">
                  <Notifications />
                  <span>{currentuser.firstname}</span>
                  <NavbarDropDown />
                </div>
              </div>

              <div className="hidden lg:flex items-center lg:flex-1 lg:justify-end gap-2">
                <Notifications />
                <span>{currentuser.firstname}</span>
                <NavbarDropDown />
              </div>
            </nav>
            <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
              <Dialog.Panel className="fixed inset-0 z-30 overflow-y-auto bg-gray-50 px-6 py-6 lg:hidden">
                <div className="flex items-center justify-between">
                  <Logo />
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </Dialog.Panel>
            </Dialog>
          </div>
        </Container>
      </header>
    );
  } else {
    return (
      <header className={`sticky top-0 z-30 w-full bg-white shadow`}>
        <Container>
          <div className="py-2">
            <nav
              className="flex items-center justify-between"
              aria-label="Global"
            >
              <div className="flex lg:flex-1">
                <Logo />
              </div>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-800"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>

                <div className="ml-3"></div>
              </div>
              <div className="hidden lg:flex lg:gap-x-6">
                {links.map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    className={`leading-6 nav-link`}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>

              <div className="hidden lg:flex items-center lg:flex-1 lg:justify-end gap-2">
                <NavLink to="/sign-in" className={`leading-6 nav-link`}>
                  Login
                </NavLink>
                <NavLink
                  to="/sign-up"
                  className={`leading-6 text-base font-semibold py-1 rounded px-3 bg-primary-200 text-white`}
                >
                  Join Now
                </NavLink>
              </div>
            </nav>
            <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
              <Dialog.Panel className="fixed inset-0 z-30 overflow-y-auto bg-gray-50 px-6 py-6 lg:hidden">
                <div className="flex items-center justify-between">
                  <Logo />
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-400">
                    <div className="flex flex-col items-start gap-2 py-6">
                      {links.map((item) => (
                        <NavLink
                          key={item.label}
                          to={item.path}
                          className={`leading-6 inline-block nav-link`}
                        >
                          {item.label}
                        </NavLink>
                      ))}
                    </div>
                    <div className="py-6">
                      <NavLink to="/sign-in" className={`mx-1 block nav-link`}>
                        Login
                      </NavLink>
                      <NavLink
                        to="/sign-up"
                        className={`inline-block mt-2 leading-6 text-base font-semibold py-1 rounded px-3 bg-primary-200 text-white`}
                      >
                        Join Now
                      </NavLink>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Dialog>
          </div>
        </Container>
      </header>
    );
  }
};

export default Navbar;
