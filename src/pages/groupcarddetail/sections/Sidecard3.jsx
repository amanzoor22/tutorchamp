import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import {
  CalendarIcon,
  XMarkIcon,
  GlobeAltIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";
import PaymentModal from "./PaymentModal";

const Sidecard3 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [successFull, setSuccesFull] = useState(false);

  const [PayModal, setPayModal] = useState(false);
  function openSuccesFull() {
    setSuccesFull(true);
    setPayModal(false);
  }
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closePayModal() {
    setPayModal(false);
  }

  function openPayModal() {
    setPayModal(true);
  }
  return (
    <div className="sticky top-24">
      <div className="bg-white mt-5 p-5 rounded-2xl font-sans  shadow-xl">
        <div className="flex ">
          <h3 className="text-3xl font-bold">$9.00</h3>
          <span className="mt-auto text-gray-600"> / class</span>
        </div>
        <p className="text-gray-500 text-sm font-semibold py-4">
          UPCOMING CLASSES
        </p>
        <div className="flex flex-row justify-between mb-5">
          <div>
            <h3 className="font-bold">Tue, Apr 11</h3>
            <p className="my-1 text-gray-600 text-sm">05:30 – 06:25 (PDT)</p>
            <div className="flex flex-row">
              <span className="rounded-full w-6 h-6 bg-primary-500 text-white text-center">
                M
              </span>
              <span className="rounded-full w-6 h-6 bg-pink-500 text-white text-center">
                J
              </span>
              <img
                className="rounded-full w-6 h-6"
                src="/images/smallimg1.png"
                alt=".."
              />
            </div>
          </div>
          <div className="flex flex-col ">
            {" "}
            <span className="font-bold">$9.00</span>
            <button
              onClick={openPayModal}
              className="bg-secondary-400 rounded-xl px-3 py-2  mt-2 text-white hover:bg-secondary-200"
            >
              Book
            </button>
          </div>
        </div>
        <hr />

        <div className="flex flex-row justify-between my-5">
          <div>
            <h3 className="font-bold">Thu, Apr 13</h3>
            <p className="my-1 text-gray-600 text-sm">08:00 – 08:55 (PDT)</p>
            <div className="flex flex-row">
              <img
                className="rounded-full w-6 h-6"
                src="/images/smallimg2.png"
                alt=".."
              />
              <span className="rounded-full w-6 h-6 bg-pink-500 text-white text-center">
                U
              </span>
            </div>
          </div>
          <div className="flex flex-col mb-5">
            {" "}
            <span className="font-bold">$9.00</span>
            <button className="bg-secondary-400 rounded-xl px-3 py-2  mt-2 text-white hover:bg-secondary-200">
              Book
            </button>
          </div>
        </div>
        <hr />

        <div className="flex flex-row justify-between my-5">
          <div>
            <h3 className="font-bold">Tue, Apr 18</h3>
            <p className="my-1 text-gray-600 text-sm">05:30 – 06:25 (PDT)</p>
            <div className="flex flex-row">
              <span className="rounded-full w-6 h-6 bg-primary-500 text-white text-center">
                F
              </span>
            </div>
          </div>
          <div className="flex flex-col mb-5">
            {" "}
            <span className="font-bold">$9.00</span>
            <button className="bg-secondary-400 rounded-xl px-3 py-2  mt-2 text-white hover:bg-secondary-200">
              Book
            </button>
          </div>
        </div>
        <hr />
        {/* modalbutton*/}
        <div
          onClick={openModal}
          className="bg-gray-200 hover:bg-gray-400 flex justify-center rounded-2xl mt-5"
        >
          <CalendarIcon className="mr-2 w-5 h-10 my-auto" />
          <button className="" type="button">
            Show more dates
          </button>
        </div>
        {/*  Payment modal MODAL */}
        <Transition appear show={PayModal} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-40" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Dialog.Panel className=" w-full max-w-2xl  h-auto   transform rounded-2xl bg-white p-3 sm:p-6 text-left  shadow-xl">
                  <div className="px-2 overflow-auto">
                    <div className="flex pb-3 sticky top-0">
                      <button
                        type="button"
                        className="justify-start  text-sm font-medium   "
                        onClick={closePayModal}
                      >
                        <XMarkIcon className="w-5 h-5 my-auto" />
                      </button>
                      <Dialog.Title
                        as="h3"
                        className="text-xl font-medium leading-6  m-auto"
                      >
                        Pay for your class
                      </Dialog.Title>
                    </div>
                    <hr />
                    <div className="sm:space-y-8 space-y-4">
                      <div className="flex items-center gap-3 pt-4">
                        <div className=" ">
                          <img
                            className="h-10 w-10 rounded-lg"
                            src="/images/thumbnail1.png"
                            alt=""
                          />
                        </div>
                        <div className="">
                          <h1 className="text-base font-medium ">
                            Just Speaks
                          </h1>
                          <h1 className="text-base text-gray-500">
                            Sun, May, 07, 20:00 - 20:55
                          </h1>
                        </div>
                      </div>
                      <hr />
                      <div className="space-y-4">
                        <h1 className="text-2xl font-semibold">
                          Order details
                        </h1>
                        <div className="flex justify-between items-center">
                          <h1 className="font-medium text-gray-500">
                            $3.00 x 1 class
                          </h1>
                          <h1 className="font-medium">$3.00</h1>
                        </div>
                        <div className="flex justify-between items-center">
                          <h1 className="font-black text-xl">Total</h1>
                          <h1 className="font-black text-lg">$3.00</h1>
                        </div>
                      </div>
                      <hr />
                      <div className="">
                        <h1 className="text-2xl font-semibold">
                          Add card details
                        </h1>
                        <form action="" className="space-y-6">
                          <div className="grid sm:grid-cols-3 grid-cols-1 gap-3">
                            <div className="">
                              <CreditCardIcon className="h-6 w-6 text-gray-400 invisible relative z-10 left-40 top-[49px]" />
                              <label htmlFor="cardnumber">Card number</label>{" "}
                              <br />
                              <div className=" ">
                                <input
                                  className="w-full relative h-7 p-2 border-2 border-gray-300   min-w-full   rounded  focus:outline-gray-300  shadow-sm"
                                  type="number"
                                  placeholder="1234 1234 1234 1234"
                                  id="cardnumber"
                                />
                              </div>
                            </div>

                            <div className="grid grid-cols-2 items-center justify-between sm:justify-normal sm:col-span-2 gap-3">
                              <div className="">
                                <CreditCardIcon className="h-6 w-6 text-gray-400 relative z-10 left-40 top-[49px] invisible" />
                                <label htmlFor="exp">Expiration</label> <br />
                                <input
                                  className="w-full border-2 border-gray-300   min-w-full py-1  rounded  h-7 p-2 focus:outline-gray-300 relative shadow-sm "
                                  type="number"
                                  placeholder="MM/YY"
                                  id="exp"
                                />
                              </div>
                              <div className="">
                                <img
                                  src="/images/CVV.png"
                                  className="h-5 w-5 text-gray-400 invisible relative z-10 left-[170px] top-[49px]"
                                  alt=""
                                />
                                <label htmlFor="exp">CVC</label> <br />
                                <input
                                  className="w-full h-7 p-2 border-2 border-gray-300   min-w-full py-1  rounded  relative focus:outline-gray-300  shadow-sm"
                                  type="number"
                                  placeholder="CVC"
                                  id="exp"
                                />
                              </div>
                            </div>
                          </div>
                          <select
                            className="w-full  focus:border-gray-300 h-10 border-2 border-gray-300   min-w-full py-1  rounded shadow-sm"
                            id="country"
                            name="country"
                          >
                            <option>select country</option>
                            <option value="AF">Afghanistan</option>
                            <option value="AX">Aland Islands</option>
                            <option value="AL">Albania</option>
                            <option value="DZ">Algeria</option>
                            <option value="AS">American Samoa</option>
                            <option value="AD">Andorra</option>
                            <option value="AO">Angola</option>
                            <option value="AI">Anguilla</option>
                            <option value="AQ">Antarctica</option>
                            <option value="AG">Antigua and Barbuda</option>
                            <option value="AR">Argentina</option>
                            <option value="AM">Armenia</option>
                            <option value="AW">Aruba</option>
                            <option value="AU">Australia</option>
                            <option value="AT">Austria</option>
                            <option value="AZ">Azerbaijan</option>
                            <option value="BS">Bahamas</option>
                            <option value="BH">Bahrain</option>
                            <option value="BD">Bangladesh</option>
                            <option value="BB">Barbados</option>
                            <option value="BY">Belarus</option>
                            <option value="BE">Belgium</option>
                            <option value="BZ">Belize</option>
                            <option value="BJ">Benin</option>
                            <option value="BM">Bermuda</option>
                            <option value="BT">Bhutan</option>
                            <option value="BO">Bolivia</option>
                            <option value="BQ">
                              Bonaire, Sint Eustatius and Saba
                            </option>
                            <option value="BA">Bosnia and Herzegovina</option>
                            <option value="BW">Botswana</option>
                            <option value="BV">Bouvet Island</option>
                            <option value="BR">Brazil</option>
                            <option value="IO">
                              British Indian Ocean Territory
                            </option>
                            <option value="BN">Brunei Darussalam</option>
                            <option value="BG">Bulgaria</option>
                            <option value="BF">Burkina Faso</option>
                            <option value="BI">Burundi</option>
                            <option value="KH">Cambodia</option>
                            <option value="CM">Cameroon</option>
                            <option value="CA">Canada</option>
                            <option value="CV">Cape Verde</option>
                            <option value="KY">Cayman Islands</option>
                            <option value="CF">Central African Republic</option>
                            <option value="TD">Chad</option>
                            <option value="CL">Chile</option>
                            <option value="CN">China</option>
                            <option value="CX">Christmas Island</option>
                            <option value="CC">Cocos (Keeling) Islands</option>
                            <option value="CO">Colombia</option>
                            <option value="KM">Comoros</option>
                            <option value="CG">Congo</option>
                            <option value="CD">
                              Congo, Democratic Republic of the Congo
                            </option>
                            <option value="CK">Cook Islands</option>
                            <option value="CR">Costa Rica</option>
                            <option value="CI">Cote D'Ivoire</option>
                            <option value="HR">Croatia</option>
                            <option value="CU">Cuba</option>
                            <option value="CW">Curacao</option>
                            <option value="CY">Cyprus</option>
                            <option value="CZ">Czech Republic</option>
                            <option value="DK">Denmark</option>
                            <option value="DJ">Djibouti</option>
                            <option value="DM">Dominica</option>
                            <option value="DO">Dominican Republic</option>
                            <option value="EC">Ecuador</option>
                            <option value="EG">Egypt</option>
                            <option value="SV">El Salvador</option>
                            <option value="GQ">Equatorial Guinea</option>
                            <option value="ER">Eritrea</option>
                            <option value="EE">Estonia</option>
                            <option value="ET">Ethiopia</option>
                            <option value="FK">
                              Falkland Islands (Malvinas)
                            </option>
                            <option value="FO">Faroe Islands</option>
                            <option value="FJ">Fiji</option>
                            <option value="FI">Finland</option>
                            <option value="FR">France</option>
                            <option value="GF">French Guiana</option>
                            <option value="PF">French Polynesia</option>
                            <option value="TF">
                              French Southern Territories
                            </option>
                            <option value="GA">Gabon</option>
                            <option value="GM">Gambia</option>
                            <option value="GE">Georgia</option>
                            <option value="DE">Germany</option>
                            <option value="GH">Ghana</option>
                            <option value="GI">Gibraltar</option>
                            <option value="GR">Greece</option>
                            <option value="GL">Greenland</option>
                            <option value="GD">Grenada</option>
                            <option value="GP">Guadeloupe</option>
                            <option value="GU">Guam</option>
                            <option value="GT">Guatemala</option>
                            <option value="GG">Guernsey</option>
                            <option value="GN">Guinea</option>
                            <option value="GW">Guinea-Bissau</option>
                            <option value="GY">Guyana</option>
                            <option value="HT">Haiti</option>
                            <option value="HM">
                              Heard Island and Mcdonald Islands
                            </option>
                            <option value="VA">
                              Holy See (Vatican City State)
                            </option>
                            <option value="HN">Honduras</option>
                            <option value="HK">Hong Kong</option>
                            <option value="HU">Hungary</option>
                            <option value="IS">Iceland</option>
                            <option value="IN">India</option>
                            <option value="ID">Indonesia</option>
                            <option value="IR">
                              Iran, Islamic Republic of
                            </option>
                            <option value="IQ">Iraq</option>
                            <option value="IE">Ireland</option>
                            <option value="IM">Isle of Man</option>
                            <option value="IL">Israel</option>
                            <option value="IT">Italy</option>
                            <option value="JM">Jamaica</option>
                            <option value="JP">Japan</option>
                            <option value="JE">Jersey</option>
                            <option value="JO">Jordan</option>
                            <option value="KZ">Kazakhstan</option>
                            <option value="KE">Kenya</option>
                            <option value="KI">Kiribati</option>
                            <option value="KP">
                              Korea, Democratic People's Republic of
                            </option>
                            <option value="KR">Korea, Republic of</option>
                            <option value="XK">Kosovo</option>
                            <option value="KW">Kuwait</option>
                            <option value="KG">Kyrgyzstan</option>
                            <option value="LA">
                              Lao People's Democratic Republic
                            </option>
                            <option value="LV">Latvia</option>
                            <option value="LB">Lebanon</option>
                            <option value="LS">Lesotho</option>
                            <option value="LR">Liberia</option>
                            <option value="LY">Libyan Arab Jamahiriya</option>
                            <option value="LI">Liechtenstein</option>
                            <option value="LT">Lithuania</option>
                            <option value="LU">Luxembourg</option>
                            <option value="MO">Macao</option>
                            <option value="MK">
                              Macedonia, the Former Yugoslav Republic of
                            </option>
                            <option value="MG">Madagascar</option>
                            <option value="MW">Malawi</option>
                            <option value="MY">Malaysia</option>
                            <option value="MV">Maldives</option>
                            <option value="ML">Mali</option>
                            <option value="MT">Malta</option>
                            <option value="MH">Marshall Islands</option>
                            <option value="MQ">Martinique</option>
                            <option value="MR">Mauritania</option>
                            <option value="MU">Mauritius</option>
                            <option value="YT">Mayotte</option>
                            <option value="MX">Mexico</option>
                            <option value="FM">
                              Micronesia, Federated States of
                            </option>
                            <option value="MD">Moldova, Republic of</option>
                            <option value="MC">Monaco</option>
                            <option value="MN">Mongolia</option>
                            <option value="ME">Montenegro</option>
                            <option value="MS">Montserrat</option>
                            <option value="MA">Morocco</option>
                            <option value="MZ">Mozambique</option>
                            <option value="MM">Myanmar</option>
                            <option value="NA">Namibia</option>
                            <option value="NR">Nauru</option>
                            <option value="NP">Nepal</option>
                            <option value="NL">Netherlands</option>
                            <option value="AN">Netherlands Antilles</option>
                            <option value="NC">New Caledonia</option>
                            <option value="NZ">New Zealand</option>
                            <option value="NI">Nicaragua</option>
                            <option value="NE">Niger</option>
                            <option value="NG">Nigeria</option>
                            <option value="NU">Niue</option>
                            <option value="NF">Norfolk Island</option>
                            <option value="MP">Northern Mariana Islands</option>
                            <option value="NO">Norway</option>
                            <option value="OM">Oman</option>
                            <option value="PK">Pakistan</option>
                            <option value="PW">Palau</option>
                            <option value="PS">
                              Palestinian Territory, Occupied
                            </option>
                            <option value="PA">Panama</option>
                            <option value="PG">Papua New Guinea</option>
                            <option value="PY">Paraguay</option>
                            <option value="PE">Peru</option>
                            <option value="PH">Philippines</option>
                            <option value="PN">Pitcairn</option>
                            <option value="PL">Poland</option>
                            <option value="PT">Portugal</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="QA">Qatar</option>
                            <option value="RE">Reunion</option>
                            <option value="RO">Romania</option>
                            <option value="RU">Russian Federation</option>
                            <option value="RW">Rwanda</option>
                            <option value="BL">Saint Barthelemy</option>
                            <option value="SH">Saint Helena</option>
                            <option value="KN">Saint Kitts and Nevis</option>
                            <option value="LC">Saint Lucia</option>
                            <option value="MF">Saint Martin</option>
                            <option value="PM">
                              Saint Pierre and Miquelon
                            </option>
                            <option value="VC">
                              Saint Vincent and the Grenadines
                            </option>
                            <option value="WS">Samoa</option>
                            <option value="SM">San Marino</option>
                            <option value="ST">Sao Tome and Principe</option>
                            <option value="SA">Saudi Arabia</option>
                            <option value="SN">Senegal</option>
                            <option value="RS">Serbia</option>
                            <option value="CS">Serbia and Montenegro</option>
                            <option value="SC">Seychelles</option>
                            <option value="SL">Sierra Leone</option>
                            <option value="SG">Singapore</option>
                            <option value="SX">Sint Maarten</option>
                            <option value="SK">Slovakia</option>
                            <option value="SI">Slovenia</option>
                            <option value="SB">Solomon Islands</option>
                            <option value="SO">Somalia</option>
                            <option value="ZA">South Africa</option>
                            <option value="GS">
                              South Georgia and the South Sandwich Islands
                            </option>
                            <option value="SS">South Sudan</option>
                            <option value="ES">Spain</option>
                            <option value="LK">Sri Lanka</option>
                            <option value="SD">Sudan</option>
                            <option value="SR">Suriname</option>
                            <option value="SJ">Svalbard and Jan Mayen</option>
                            <option value="SZ">Swaziland</option>
                            <option value="SE">Sweden</option>
                            <option value="CH">Switzerland</option>
                            <option value="SY">Syrian Arab Republic</option>
                            <option value="TW">
                              Taiwan, Province of China
                            </option>
                            <option value="TJ">Tajikistan</option>
                            <option value="TZ">
                              Tanzania, United Republic of
                            </option>
                            <option value="TH">Thailand</option>
                            <option value="TL">Timor-Leste</option>
                            <option value="TG">Togo</option>
                            <option value="TK">Tokelau</option>
                            <option value="TO">Tonga</option>
                            <option value="TT">Trinidad and Tobago</option>
                            <option value="TN">Tunisia</option>
                            <option value="TR">Turkey</option>
                            <option value="TM">Turkmenistan</option>
                            <option value="TC">Turks and Caicos Islands</option>
                            <option value="TV">Tuvalu</option>
                            <option value="UG">Uganda</option>
                            <option value="UA">Ukraine</option>
                            <option value="AE">United Arab Emirates</option>
                            <option value="GB">United Kingdom</option>
                            <option value="US">United States</option>
                            <option value="UM">
                              United States Minor Outlying Islands
                            </option>
                            <option value="UY">Uruguay</option>
                            <option value="UZ">Uzbekistan</option>
                            <option value="VU">Vanuatu</option>
                            <option value="VE">Venezuela</option>
                            <option value="VN">Viet Nam</option>
                            <option value="VG">Virgin Islands, British</option>
                            <option value="VI">Virgin Islands, U.s.</option>
                            <option value="WF">Wallis and Futuna</option>
                            <option value="EH">Western Sahara</option>
                            <option value="YE">Yemen</option>
                            <option value="ZM">Zambia</option>
                            <option value="ZW">Zimbabwe</option>
                          </select>
                          <button
                            type="button"
                            onClick={openSuccesFull}
                            className="w-full bg-primary-300 p-2 rounded-md text-lg text-white font-medium hover:bg-primary-400"
                          >
                            Pay 3.00$
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </div>
            </div>
          </Dialog>
        </Transition>
        <Transition.Root show={successFull} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={setSuccesFull}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-40" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                    <PaymentModal />
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
        {/* modal */}
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-40" />
            </Transition.Child>

            <div className="fixed inset-0 sm:p-3 md:p-8">
              <div className="flex items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className=" w-full max-w-2xl overflow-hidden  transform rounded-2xl bg-white p-3 sm:p-6 text-left  shadow-xl">
                    <div className="flex pb-3 sticky top-0">
                      <button
                        type="button"
                        className="justify-start  text-sm font-medium   "
                        onClick={closeModal}
                      >
                        <XMarkIcon className="w-5 h-5 my-auto" />
                      </button>
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6  m-auto"
                      >
                        Upcoming classes
                      </Dialog.Title>
                    </div>
                    <hr />
                    <div className="py-5 px-2">
                      <h3 className="font-bold text-xl">Book your class</h3>
                      <div className="flex mt-1">
                        <GlobeAltIcon className="w-4 h-4 mr-1 my-auto" />
                        <p>Times are shown in your local timezone</p>
                      </div>
                    </div>
                    <fieldset className="overflow-auto max-h-[60vh]">
                      {/* row1 */}
                      <div className="p-2">
                        <h3 className="font-bold mb-1">Tue, Apr 11</h3>
                        <div className="border-gray-200  border-2 rounded-lg ">
                          <div className="flex justify-between">
                            <div className="p-4">
                              <h2 className="font-xs">05:30 – 06:25 (PDT)</h2>

                              <div className="flex flex-row mt-2">
                                <p className="text-gray-600">4 attending</p>
                                <span className=" ml-2 rounded-full w-6 h-6 bg-primary-500 text-white text-center">
                                  M
                                </span>
                                <span className="rounded-full w-6 h-6 bg-pink-500 text-white text-center">
                                  J
                                </span>
                                <img
                                  className="rounded-full w-6 h-6"
                                  src="/images/smallimg1.png"
                                  alt=".."
                                />
                              </div>
                            </div>
                            <div className="my-auto font-bold p-3">$9.00</div>
                          </div>
                          <div className="bg-gray-100 p-2">
                            <button className="bg-secondary-600 mb-2 ml-auto flex rounded-xl px-3 py-2  mt-2 text-white hover:bg-secondary-400">
                              Book now
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* row2 */}
                      <div className="p-2">
                        <h3 className="font-bold mb-1">Tue, Apr 11</h3>
                        <div className="border-gray-200  border-2 rounded-lg ">
                          <div className="flex justify-between">
                            <div className="p-4">
                              <h2 className="font-xs">05:30 – 06:25 (PDT)</h2>

                              <div className="flex flex-row mt-2">
                                <p className="text-gray-600">4 attending</p>
                                <span className=" ml-2 rounded-full w-6 h-6 bg-primary-500 text-white text-center">
                                  M
                                </span>
                                <span className="rounded-full w-6 h-6 bg-pink-500 text-white text-center">
                                  J
                                </span>
                                <img
                                  className="rounded-full w-6 h-6"
                                  src="/images/smallimg1.png"
                                  alt=".."
                                />
                              </div>
                            </div>
                            <div className="my-auto font-bold p-3">$9.00</div>
                          </div>
                          <div className="bg-gray-100 p-2">
                            <button className="bg-secondary-600 mb-2 ml-auto flex rounded-xl px-3 py-2  mt-2 text-white hover:bg-secondary-400">
                              Book now
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* row3 */}
                      <div className="p-2">
                        <h3 className="font-bold mb-1">Tue, Apr 11</h3>
                        <div className="border-gray-200  border-2 rounded-lg ">
                          <div className="flex justify-between">
                            <div className="p-4">
                              <h2 className="font-xs">05:30 – 06:25 (PDT)</h2>

                              <div className="flex flex-row mt-2">
                                <p className="text-gray-600">4 attending</p>
                                <span className=" ml-2 rounded-full w-6 h-6 bg-primary-500 text-white text-center">
                                  M
                                </span>
                                <span className="rounded-full w-6 h-6 bg-pink-500 text-white text-center">
                                  J
                                </span>
                                <img
                                  className="rounded-full w-6 h-6"
                                  src="/images/smallimg1.png"
                                  alt=".."
                                />
                              </div>
                            </div>
                            <div className="my-auto font-bold p-3">$9.00</div>
                          </div>
                          <div className="bg-gray-100 p-2">
                            <button className="bg-secondary-600 mb-2 ml-auto flex rounded-xl px-3 py-2  mt-2 text-white hover:bg-secondary-400">
                              Book now
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* row4 */}
                      <div className="p-2">
                        <h3 className="font-bold mb-1">Tue, Apr 11</h3>
                        <div className="border-gray-200  border-2 rounded-lg ">
                          <div className="flex justify-between">
                            <div className="p-4">
                              <h2 className="font-xs">05:30 – 06:25 (PDT)</h2>

                              <div className="flex flex-row mt-2">
                                <p className="text-gray-600">4 attending</p>
                                <span className=" ml-2 rounded-full w-6 h-6 bg-primary-500 text-white text-center">
                                  M
                                </span>
                                <span className="rounded-full w-6 h-6 bg-pink-500 text-white text-center">
                                  J
                                </span>
                                <img
                                  className="rounded-full w-6 h-6"
                                  src="/images/smallimg1.png"
                                  alt=".."
                                />
                              </div>
                            </div>
                            <div className="my-auto font-bold p-3">$9.00</div>
                          </div>
                          <div className="bg-gray-100 p-2">
                            <button className="bg-secondary-600 mb-2 ml-auto flex rounded-xl px-3 py-2  mt-2 text-white hover:bg-secondary-400">
                              Book now
                            </button>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </div>
  );
};

export default Sidecard3;
