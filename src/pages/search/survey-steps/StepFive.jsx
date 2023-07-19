import React from "react";
import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const popularOptions = [
  { label: "Afghanistan" },
  { label: "Australia" },
  { label: "Pakistan" },
  { label: "United Kingdom" },
  { label: "United States of America" },
  { label: "English Literature" },
];

const countries = [
  "Afghanistan",
  "Åland Islands",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bonaire, Sint Eustatius and Saba",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands",
  "Colombia",
  "Comoros",
  "Congo",
  "Congo (the Democratic Republic of the)",
  "Cook Islands",
  "Costa Rica",
  "Côte d'Ivoire",
  "Croatia",
  "Curaçao",
  "Cyprus",
  "Czechia",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Falkland Islands (Malvinas)",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern Territories",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard Island and McDonald Islands",
  "Holy See",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macao",
  "Madagascar",
  "Mal",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia (Federated States of)",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "North Macedonia",
  "Northern Mariana Islands",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine, State of",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Pitcairn",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Réunion",
  "Romania",
  "Rwanda",
  "Saint Barthélemy",
  "Saint Helena, Ascension and Tristan da Cunha",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Martin (French part)",
  "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten (Dutch part)",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia and the South Sandwich Islands",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Suriname",
  "Svalbard and Jan Mayen",
  "Sweden",
  "Switzerland",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States Minor Outlying Islands",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (British)",
  "Virgin Islands (U.S.)",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const StepFive = () => {
  const [show, setshow] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <fieldset>
      <div>
        <div>
          <h1 className="text-2xl mb-3 font-semibold">
            Looking for a tutor from a specific country?
          </h1>
        </div>
        <div className="my-8">
          <input
            id="Only English"
            type="checkbox"
            value=""
            className="w-4 h-4 border-gray-300 text-primary-300 hover:border-gray-500 mx-2 dark:focus:ring-primary-300 focus:ring-0"
          />
          <label className="text-gray-500 font-normal" htmlFor="Only English">
            Only English native speakers
          </label>
        </div>
        <h1 className="text-lg font-medium ">Popular</h1>
        {/* Popular */}
        <div className="space-y-2">
          {popularOptions.map((option) => (
            <div key={`popular-${option.id}`}>
              <input
                id={`popular${option.label}`}
                type="checkbox"
                value=""
                className="w-4 h-4 border-gray-300 text-primary-300 hover:border-gray-500 mx-2 dark:focus:ring-primary-300 focus:ring-0"
              />
              <label
                className="text-gray-500 font-normal"
                htmlFor={`popular${option.label}`}
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
        {/* on show button click */}
        <button
          type="button"
          onClick={() => setshow(!show)}
          className=" font-bold mt-2"
        >
          {" "}
          {show === true ? "" : "Show all"}
        </button>
        {show && (
          <div className=" space-y-2 overflow-auto  pb-20">
            {/* countries */}
            <div className="countries">
              <h1 className="text-lg font-medium">All countries</h1>
              <div className="flex my-4 relative">
                <input
                  placeholder="Type to search"
                  className=" bg-gray-50 border border-gray-400 focus:outline-none focus:border-primary-300 placeholder:text-gray-500  rounded-2xl w-full pl-3 pr-10 py-2 hover:bg-gray-50"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <MagnifyingGlassIcon className="h-6 w-6 absolute top-2 right-2 text-gray-500" />
              </div>

              <div className="space-y-2 h-[40vh] overflow-auto">
                {countries
                  .filter((country) =>
                    country.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map(
                    (country) =>
                      countries.includes(country) && ( // Add this line to filter out countries not in the `countries` array
                        <div key={`country-${country}`}>
                          <input
                            id={`country${country}`}
                            type="checkbox"
                            value=""
                            className="w-4 h-4 border-gray-300 text-primary-300 hover:border-gray-500 mx-2 dark:focus:ring-primary-300 focus:ring-0"
                          />
                          <label
                            className="text-gray-500 font-normal"
                            htmlFor={`country${country}`}
                          >
                            {country}
                          </label>
                        </div>
                      )
                  )}
              </div>
            </div>
          </div>
        )}
      </div>
    </fieldset>
  );
};

export default StepFive;
