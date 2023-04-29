import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import cognosco from "../../../../public/assets/images/cognosco.png";
import ima_msn from "../../../../public/assets/images/ima_msn.png";
import bell from "../../../../public/assets/images/bell.gif";

import Justin from "../../../../public/assets/images/Team/Justin.png";
import undraw_img from "../../../../public/assets/images/undraw_img.png";
import { TeamDetails } from "@/common/UI/Landing/team";

const Landing = () => {
  const [showElement, setShowElement] = useState(true);

  useEffect(() => {
    let prevScrollPosition = window.pageYOffset;
    let show = true;

    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;

      if (scrollPosition > prevScrollPosition) {
        // Scrolling down
        if (show) {
          setShowElement(false);
          show = false;
        }
      } else {
        // Scrolling up
        if (!show) {
          setShowElement(true);
          show = true;
        }
      }

      prevScrollPosition = scrollPosition;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <section className="w-full px-8 text-gray-700 bg-white fixed rounded-b-[40px] shadow-blue-50 z-50">
        <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <div className="relative flex flex-col md:flex-row">
            <Link
              href="#_"
              className="flex items-center mb-5 gap-4 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
            >
              <Image src={ima_msn} />
              <Image src={cognosco} />
            </Link>
          </div>
          <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
            {/* <Link
              href="/signup"
              className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-black border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Register
            </Link>

            <Link
              href="/signin"
              className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-black border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Login
            </Link> */}
            <Link
              target="_blank"
              href="/assets/top-10.pdf"
              className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
             View Rank List
            </Link>
            <Link
              target="_blank"
              href="/assets/ans-key.pdf"
              className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-green-500 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Answer Key
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section
        className=" hidden md:block bg-white"
        style={{
          backgroundImage: `url(/assets/images/banner.png)`,
          height: "60vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container max-w-6xl mx-auto px-5 xl:px-5  h-full flex flex-wrap items-end align-bottom text-bottom -mx-3">
          <div className="w-full md:w-1/2 md:px-3">
            <div className="max-w-lg lg:max-w-xl md:pb-0 pb-8 space-y-5 md:space-y-0 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 pr-5">
              <div className="flex flex-col mb-5  justify-end h-full">
                <h1 className="text-5xl   font-bold tracking-tight text-white">
                  <span className="block xl:inline">Cognosco</span>
                </h1>
                <div className="flex flex-col sm:flex-row sm:space-x-4 mt-4">
                  {/* <Link
                    href="/signup"
                    className="w-full sm:w-auto px-6 py-3 text-lg text-white bg-black rounded-lg hover:bg-indigo-700 flex items-center"
                  >
                    Register
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2"></div>
        </div>
      </section>

      <section className="py-20 bg-gray-50  ">
        <div className="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
          <div className="flex flex-wrap items-center -mx-3">
            <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
              <div className="w-full lg:max-w-md">
                <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">
                  About the Event
                </h2>
                <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6"></p>
                <ul>
                  <span className="font-medium text-gray-500">
                    A few, well kept, little secrets makes the difference
                    between an aspirant and a winner. IMA MSN Kerala brings to
                    you, all that&apos;s required to secure a seat in Medical
                    Colleges across the state.
                    <br></br>
                    Cognosco is a single day event, encompassing sessions by
                    previous year toppers sharing their little cheat codes to
                    victory ,Dr Arun B Nair&apos;s Ace session on Psychological
                    stress management (Trivandrum) and a mock neet examination
                    to prep you up for your Big day.
                  </span>
                </ul>
              </div>
            </div>
            <div className="w-full px-3 mb-12 mt-20 md:mt-0  lg:w-1/2 order-0 lg:order-1 lg:mb-0">
              <Image
                className="mx-auto sm:max-w-sm lg:max-w-full"
                src={undraw_img}
                alt="feature image"
              />
            </div>
          </div>
        </div>
      </section>
<section className="bg-purple-100 py-8 text-center relative">
  <div className="mx-auto max-w-4xl">
    <h2 className="mb-6 text-3xl font-bold text-purple-800 flex items-center justify-center">
      <Image src={bell} alt="" className="w-8 h-8 mr-2 animate-blink rounded-3xl bg-inherit"  />
      Notifications
    </h2>
    <div className="bg-white p-6 rounded-lg shadow-lg relative">
      <ul className="list-disc text-left">
        <li className="mb-4">
          <span className="text-xl font-medium mr-2">New:</span> The Answer Key has been published.
          <a
            className="text-pink-700 font-normal hover:underline"
            href="/assets/ans-key.pdf"
            target="_blank"
          >
            Download Answer Key
          </a>
        </li>
        <li className="mb-4">
          <span className="text-xl font-medium mr-2">Update:</span> The 61st question has been cancelled for the Ernakulam center. For the rest of the centers, it has been replaced.
        </li>
      </ul>
    </div>
  </div>
  <style>
    {`
      @keyframes blink {
        from, to { opacity: 1; }
        50% { opacity: 0; }
      }
      .animate-blink {
        animation: blink 1s infinite;
      }
      .fill-current { fill: currentColor; }
    `}
  </style>
</section>
      {/*Centre Section*/}
      <section className="box-border py-8 leading-7 text-gray-900 bg-white border-0 border-gray-200 border-solid sm:py-12 md:py-16 lg:py-24">
        <div className="box-border max-w-6xl px-4 pb-12 mx-auto border-solid sm:px-6 md:px-6 lg:px-4">
          <div className="flex flex-col items-center leading-7 text-center text-gray-900">
            <h2 className="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl">
              Centres
            </h2>
          </div>
          <div className="grid max-w-md mx-auto mt-6 overflow-hidden leading-7 text-gray-900 border border-b-4 border-gray-300 border-blue-600 rounded-xl md:max-w-lg lg:max-w-none sm:mt-10 lg:grid-cols-3">
            <div className="flex flex-col box-border gap-3 px-4 py-8 mb-6 text-center bg-white border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
              <p>
                Gmc Ernakulam&nbsp;<b>(250)</b> slots
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.568938221612!2d76.35338145027391!3d10.05238429277994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c058ff7a4cd%3A0xa9c697fee1e03c65!2sGovernment%20Medical%20College%20Ernakulam!5e0!3m2!1sen!2sin!4v1679924807855!5m2!1sen!2sin"
                width={400}
                height={400}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex flex-col box-border gap-3 px-4 py-8 mb-6 text-center bg-white border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
              <p className="font-medium">
                Gmc Trivandrum <b>(500)</b> slots
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.7498762846944!2d76.92607644996733!3d8.523647493842343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbfd65530ccd%3A0xa0ceab851a9f2e90!2sGovernment%20Medical%20College%20Thiruvananthapuram!5e0!3m2!1sen!2sin!4v1679840329617!5m2!1sen!2sin"
                width={400}
                height={400}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex flex-col box-border gap-3 px-4 py-8 mb-6 text-center bg-white border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
              <p className="font-medium">
                GMC Kozhikode <b>(200)</b> slots
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.8530451652186!2d75.83500385028485!3d11.27221099194697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65c7619ac47c3%3A0x2749e5ee9d9f6e74!2sGovernment%20Medical%20College%2C%20Kozhikode!5e0!3m2!1sen!2sin!4v1681091937374!5m2!1sen!2sin"
                width={400}
                height={400}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="event-schedule py-8 bg-purple-100 text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl text-purple-800 font-bold mb-6 text-center">
            Event Schedule
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="schedule-item">
              <h3 className="text-xl font-bold mb-2">Inauguration</h3>
              <p className="text-purple-700">8:00 AM - 8:30 AM</p>
            </div>
            <div className="schedule-item">
              <h3 className="text-xl font-bold mb-2">Talk by Toppers</h3>
              <p className="text-purple-700">8:30 AM - 9:30 AM</p>
            </div>
            <div className="schedule-item">
              <h3 className="text-xl font-bold mb-2">Talk by Psychiatrist</h3>
              <p className="text-purple-700">9:30 AM - 10:30 AM</p>
            </div>
            <div className="schedule-item">
              <h3 className="text-xl font-bold mb-2">Exam</h3>
              <p className="text-purple-700">10:30 AM - 1:30 PM</p>
            </div>
          </div>
        </div>
      </section>
      {/* Section 5 */}
      <div>
        <div className="container flex justify-center mx-auto pt-16">
          <div>
            <p className="text-gray-500 text-lg text-center font-normal pb-3">
              ORGANIZERS
            </p>
            <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
              The Talented People Behind the Scenes of the Organization
            </h1>
          </div>
        </div>
        <div className="w-full bg-gray-100 px-10 pt-10">
          <div className="container flex flex-wrap justify-center mx-auto  ">
            <div className="xl:w-1/3 sm:w-3/4   md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <Image src={Justin} />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    Justin Sylvester
                  </div>

                  <p className="text-center text-gray-600 text-base pt-3 pb-5 font-normal">
                    Organising Chair - Cognosco National <br /> Co-convener, IMA
                    MSN
                  </p>
                </div>
              </div>
            </div>
            <div className="flex  flex-col md:flex-row xl:justify-between gap-x-10 md:justify-around sm:justify-around lg:justify-around">
              {TeamDetails.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="xl:w-1/3 sm:w-3/4 flex justify-between  md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                  >
                    <div className="rounded overflow-hidden shadow-md bg-white">
                      <div className="absolute -mt-20 w-full flex justify-center">
                        <div className="h-32 w-32">
                          <Image src={item.img} alt="teamImage" />
                        </div>
                      </div>
                      <div className="px-6 mt-16">
                        <div className="font-bold text-3xl text-center pb-1">
                          {item.name}
                        </div>

                        <p className="text-center text-gray-600 text-base pt-3 pb-5 font-normal">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {showElement ? (
        <div className="fixed bottom-0  w-full bg-blue-500 py-4 text-center rounded-t-2xl">
          <p className="text-white">
            <span className="font-medium">
              Rank List has been Published
            </span>
            <p className="flex gap-2 flex-col justify-center text-base leading-6 text-center">
              <div>
                For further enquiries contact{" "}
                <a className="text-black" href="mailto:cognoscohelp@gmail.com">
                  cognoscohelp@gmail.com
                </a>{" "}
                or{" "}
                <a className="text-black" href="tel:+919207788286">
                  +919207788286
                </a>
              </div>

              {/* <div>
        WhatsApp:{" "}
        <a href="https://wa.me/+919447155311" className="text-black" target="_blank">
          +919447155311
        </a>{" "}
        or{" "}
        <a href="http://wa.me/+919847823893" className="text-black" target="_blank">
          +919847823893
        </a>
      </div> */}
            </p>
          </p>
        </div>
      ) : null}

      <section className="bg-white">
        <div className="max-w-screen-xl px-4 py-5 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <div className="justify-center space-x-6"></div>
          <p className="flex gap-2 flex-col justify-center text-base leading-6 text-center text-gray-400">
            <div>
              For support contact{" "}
              <a className="text-blue-600" href="mailto:cognoscohelp@gmail.com">
                cognoscohelp@gmail.com
              </a>{" "}
              or{" "}
              <a className="text-blue-600" href="tel:+919207788286">
                +919207788286
              </a>
            </div>
            <div>
              WhatsApp:{" "}
              <a
                href="https://wa.me/+919447155311"
                className="text-blue-600"
                target="_blank"
              >
                +919447155311
              </a>{" "}
              or{" "}
              <a
                href="http://wa.me/+919847823893"
                className="text-blue-600"
                target="_blank"
              >
                +919847823893
              </a>
            </div>
            © 2023 Cognosco. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
};
export default Landing;
