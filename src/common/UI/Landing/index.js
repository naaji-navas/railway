import Image from "next/image";
import Link from "next/link";
import React from "react";
import cognosco from "../../../../public/assets/images/cognosco.png";
import ima_msn from "../../../../public/assets/images/ima_msn.png";
import Justin from "../../../../public/assets/images/Team/Justin.png";
import undraw_img from "../../../../public/assets/images/undraw_img.png";
import { TeamDetails } from "@/common/UI/Landing/team";

const Landing = () => {
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
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-black border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Register
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
                  <Link
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
                  </Link>
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
                    to prep you up for your Big day.
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
      <section className="box-border py-8 leading-7 text-gray-900 bg-white border-0 border-gray-200 border-solid sm:py-12 md:py-16 lg:py-24">
        <div className="box-border max-w-6xl px-4 pb-12 mx-auto border-solid sm:px-6 md:px-6 lg:px-4">
          <div className="flex flex-col items-center leading-7 text-center text-gray-900">
            <h2 className="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl">
              Centres
            </h2>
          </div>
          <div className="grid max-w-md mx-auto mt-6 overflow-hidden leading-7 text-gray-900 border border-b-4 border-gray-300 border-blue-600 rounded-xl md:max-w-lg lg:max-w-none sm:mt-10 lg:grid-cols-2">
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
            <div className="flex justify-between xl:justify-between gap-x-10 md:justify-around sm:justify-around lg:justify-around">
              {TeamDetails.map((item, index) => {
                return (
                  <div key={index} className="xl:w-1/3 sm:w-3/4 flex justify-between  md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
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
      {/* Section 6 */}
      {/* Section 7 */}
      <section className="bg-white">
        <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          {/*<nav className="flex flex-wrap justify-center -mx-5 -my-2">*/}
          {/*  <div className="px-5 py-2">*/}
          {/*    <a*/}
          {/*      href="#"*/}
          {/*      className="text-base leading-6 text-gray-500 hover:text-gray-900"*/}
          {/*    >*/}
          {/*      About*/}
          {/*    </a>*/}
          {/*  </div>*/}
          {/*  <div className="px-5 py-2">*/}
          {/*    <a*/}
          {/*      href="#"*/}
          {/*      className="text-base leading-6 text-gray-500 hover:text-gray-900"*/}
          {/*    >*/}
          {/*      Blog*/}
          {/*    </a>*/}
          {/*  </div>*/}
          {/*  <div className="px-5 py-2">*/}
          {/*    <a*/}
          {/*      href="#"*/}
          {/*      className="text-base leading-6 text-gray-500 hover:text-gray-900"*/}
          {/*    >*/}
          {/*      Team*/}
          {/*    </a>*/}
          {/*  </div>*/}
          {/*  <div className="px-5 py-2">*/}
          {/*    <a*/}
          {/*      href="#"*/}
          {/*      className="text-base leading-6 text-gray-500 hover:text-gray-900"*/}
          {/*    >*/}
          {/*      Pricing*/}
          {/*    </a>*/}
          {/*  </div>*/}
          {/*  <div className="px-5 py-2">*/}
          {/*    <a*/}
          {/*      href="#"*/}
          {/*      className="text-base leading-6 text-gray-500 hover:text-gray-900"*/}
          {/*    >*/}
          {/*      Contact*/}
          {/*    </a>*/}
          {/*  </div>*/}
          {/*  <div className="px-5 py-2">*/}
          {/*    <a*/}
          {/*      href="#"*/}
          {/*      className="text-base leading-6 text-gray-500 hover:text-gray-900"*/}
          {/*    >*/}
          {/*      Terms*/}
          {/*    </a>*/}
          {/*  </div>*/}
          {/*</nav>*/}
          <div className="flex justify-center mt-8 space-x-6">
            {/*<a href="#" className="text-gray-400 hover:text-gray-500">*/}
            {/*  <span className="sr-only">Facebook</span>*/}
            {/*  <svg*/}
            {/*    className="w-6 h-6"*/}
            {/*    aria-hidden="true"*/}
            {/*    fill="currentColor"*/}
            {/*    viewBox="0 0 24 24"*/}
            {/*  >*/}
            {/*    <path*/}
            {/*      fillRule="evenodd"*/}
            {/*      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"*/}
            {/*      clipRule="evenodd"*/}
            {/*    />*/}
            {/*  </svg>*/}
            {/*</a>*/}
            {/*<a href="#" className="text-gray-400 hover:text-gray-500">*/}
            {/*  <span className="sr-only">Instagram</span>*/}
            {/*  <svg*/}
            {/*    className="w-6 h-6"*/}
            {/*    aria-hidden="true"*/}
            {/*    fill="currentColor"*/}
            {/*    viewBox="0 0 24 24"*/}
            {/*  >*/}
            {/*    <path*/}
            {/*      fillRule="evenodd"*/}
            {/*      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"*/}
            {/*      clipRule="evenodd"*/}
            {/*    />*/}
            {/*  </svg>*/}
            {/*</a>*/}
            {/*<a href="#" className="text-gray-400 hover:text-gray-500">*/}
            {/*  <span className="sr-only">Twitter</span>*/}
            {/*  <svg*/}
            {/*    className="w-6 h-6"*/}
            {/*    aria-hidden="true"*/}
            {/*    fill="currentColor"*/}
            {/*    viewBox="0 0 24 24"*/}
            {/*  >*/}
            {/*    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />*/}
            {/*  </svg>*/}
            {/*</a>*/}
            {/*<a href="#" className="text-gray-400 hover:text-gray-500">*/}
            {/*  <span className="sr-only">GitHub</span>*/}
            {/*  <svg*/}
            {/*    className="w-6 h-6"*/}
            {/*    aria-hidden="true"*/}
            {/*    fill="currentColor"*/}
            {/*    viewBox="0 0 24 24"*/}
            {/*  >*/}
            {/*    <path*/}
            {/*      fillRule="evenodd"*/}
            {/*      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"*/}
            {/*      clipRule="evenodd"*/}
            {/*    />*/}
            {/*  </svg>*/}
            {/*</a>*/}
            {/*<a href="#" className="text-gray-400 hover:text-gray-500">*/}
            {/*  <span className="sr-only">Dribbble</span>*/}
            {/*  <svg*/}
            {/*    className="w-6 h-6"*/}
            {/*    aria-hidden="true"*/}
            {/*    fill="currentColor"*/}
            {/*    viewBox="0 0 24 24"*/}
            {/*  >*/}
            {/*    <path*/}
            {/*      fillRule="evenodd"*/}
            {/*      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"*/}
            {/*      clipRule="evenodd"*/}
            {/*    />*/}
            {/*  </svg>*/}
            {/*</a>*/}
          </div>
          <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © 2023 Cognosco . All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
};
export default Landing;
