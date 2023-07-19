import React from "react";
import Setting from "../Setting";
import LayoutOutSide from "../../../components/Layouts/LayoutOutSide";
import Container from "../../../components/globals/Container";

const HandleNotification = () => {
  const EmailNotfi = [
    {
      id: 1,
      title: "Lesson scheduling",
      description: "Alerts about new lessons and schedule changes.",
    },
    {
      id: 2,
      title: "General reminders",
      description: "Notifications about lessons, tutor messages, and payments.",
    },
    {
      id: 3,
      title: "Updates, tips and offers",
      description:
        "Stay connected with product updates, helpful tips and special offers.",
    },
    {
      id: 4,
      title: "Preply Blog",
      description: "Occasional newsletter with the latest posts.",
    },
    {
      id: 5,
      title: "Q&A section",
      description: "Receive tutors’ replies to your questions.",
    },
  ];
  const SmsNotfi = [
    {
      id: 6,
      title: "Lessons and Messages",
      description:
        "SMS notifications about first lesson reminders and tutor messages.",
    },
  ];
  const TutorChampNotfi = [
    {
      id: 7,
      title: "Allow Preply Team to contact me for product Improvements",
      description: "Product improvements, research and beta testing",
    },
  ];
  return (
    <LayoutOutSide>
      <Container>
        <div className="sm:flex py-8">
          <div className="">
            <Setting />
          </div>
          <div className=" bg-white space-y-8 p-5 w-full">
            <h1 className="text-2xl font-semibold">Notification Settings</h1>
            {/* Email notfication */}
            <div className="ml-5">
              <h1 className="text-lg font-medium">Email notifications</h1>
              <div className="">
                <div>
                  {EmailNotfi.map((Notifi) => (
                    <div key={Notifi.id}>
                      <div className="flex items-center space-y-4">
                        <input
                          id={`color-${Notifi.id}-mobile`}
                          type="checkbox"
                          className=" rounded border-gray-300 mx-2  mt-1"
                        />
                        <label htmlFor={`color-${Notifi.id}-mobile`}>
                          <h1 className="text-base  font-medium">
                            {Notifi.title}
                          </h1>
                          <p className="text-gray-500 text-sm">
                            {Notifi.description}
                          </p>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* SMS Notifiation */}
            <div className="ml-5">
              <h1 className="text-lg font-medium">SMS notifications</h1>
              <div className="">
                <div>
                  {SmsNotfi.map((Notifi) => (
                    <div key={Notifi.id}>
                      <div className="flex items-center space-y-4">
                        <input
                          id={`color-${Notifi.id}-mobile`}
                          type="checkbox"
                          className=" rounded border-gray-300 mx-2  mt-1"
                        />
                        <label htmlFor={`color-${Notifi.id}-mobile`}>
                          <h1 className="text-base font-medium">
                            {Notifi.title}
                          </h1>
                          <p className="text-gray-500 text-sm">
                            {Notifi.description}
                          </p>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Tutor champ notfication */}
            <div className="ml-5">
              <h1 className="text-lg font-medium">Tutor champ Insights</h1>
              <div className="">
                <div>
                  {TutorChampNotfi.map((Notifi) => (
                    <div key={Notifi.id}>
                      <div className="flex items-center space-y-4">
                        <input
                          id={`color-${Notifi.id}-mobile`}
                          type="checkbox"
                          className=" rounded border-gray-300 mx-2  mt-1"
                        />
                        <label htmlFor={`color-${Notifi.id}-mobile`}>
                          <h1 className="text-base font-medium">
                            {Notifi.title}
                          </h1>
                          <p className="text-gray-500 text-sm">
                            {Notifi.description}
                          </p>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </LayoutOutSide>
  );
};

export default HandleNotification;
