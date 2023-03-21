import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { Message_data } from "../../../../context/context";
import UserDetails from "../UserDetails";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    place: "",
    phone_no: "",
    alt_phone_no: "",
    email_id: "",
    alt_email_id: "",
    pref_loc: "",
  });
  const [selectedLocation, setSelectedLocation] = useState("");
  const router = useRouter();
  const { message, setMessage } = useContext(Message_data);
  const apiUrl = "https://ima-msn.up.railway.app/register/";

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const handlerazorpay = () => {
  
}
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!data.tokenId) return alert("Invalid Credentials");

      localStorage.setItem("token", data.tokenId);
      router.push("/userdetails");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="lg:flex">
      <div className="lg:w-1/2 xl:max-w-screen-sm">
        <div className="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
          <div className="cursor-pointer flex items-center">
            <div></div>
            <div className="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">
              ji app
            </div>
          </div>
        </div>
        <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
          <h2
            className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
              xl:text-bold"
          >
            SignUp
          </h2>
          <div className="mt-12">
            <form onSubmit={handleSubmit}>
              <div>
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Name
                </div>
                <input
                  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  name="name"
                  type="text"
                  placeholder="Enter your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Place
                  </div>
                </div>
                <input
                  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  name="place"
                  value={formData.place}
                  onChange={handleChange}
                  type
                  placeholder="Enter your place"
                />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Phone Number
                  </div>
                </div>
                <input
                  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  name="phone_no"
                  value={formData.phone_no}
                  onChange={handleChange}
                  placeholder="Enter your Mobile Number"
                />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Alternate Phone Number
                  </div>
                </div>
                <input
                  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  value={formData.alt_phone_no}
                  name="alt_phone_no"
                  onChange={handleChange}
                  type
                  placeholder="Enter your place"
                />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Email Id
                  </div>
                </div>
                <input
                  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  value={formData.email_id}
                  name="email_id"
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter your email id"
                />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Alternate Email Id
                  </div>
                </div>
                <input
                  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  value={formData.alt_email_id}
                  name="alt_email_id"
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter your alternate email id"
                />
              </div>

              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Prefferred Location
                  </div>
                </div>
                <div className="flex gap-2">
                  <select
                    id="city-select"
                    name="pref_loc"
                    onChange={handleChange}
                    value={formData.pref_loc}
                  >
                    <option value="kochi">Kochi</option>
                    <option value="kozhikode">Kozhikode</option>
                  </select>
                </div>
              </div>
              <div className="mt-10">
                <button
                  className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                          font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                          shadow-lg"
                >
                  Log In
                </button>
              </div>
            </form>
            <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
              Already have an account? {/* Link to login page */}
              <Link href="/signin">
                <div className="cursor-pointer text-indigo-600 hover:text-indigo-800">
                  Sign in
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center bg-indigo-100 flex-1 h-screen">
        <div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer"></div>
      </div>

      <button id="rzp-button1" onClick={handlerazorpay}>Pay</button>
    </div>
    // <div className="bg-grey-lighter min-h-screen flex flex-col">
    //   <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
    //     <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
    //       <h1 className="mb-8 text-3xl text-center">Sign up</h1>
    //       <form onSubmit={handleSubmit}>
    //         <input
    //           type="text"
    //           className="block border border-grey-light w-full p-3 rounded mb-4"
    //           name="name"
    //           placeholder="Full Name"
    //           value={formData.name}
    //           onChange={handleChange}
    //         />
    //         <input
    //           type="text"
    //           className="block border border-grey-light w-full p-3 rounded mb-4"
    //           name="place"
    //           placeholder="Place"
    //           value={formData.place}
    //           onChange={handleChange}
    //         />
    //         <input
    //           type="text"
    //           className="block border border-grey-light w-full p-3 rounded mb-4"
    //           name="phone_no"
    //           placeholder="Phone Number"
    //           value={formData.phone_no}
    //           onChange={handleChange}
    //         />
    //         <input
    //           type="text"
    //           className="block border border-grey-light w-full p-3 rounded mb-4"
    //           name="alt_phone_no"
    //           placeholder="Alternate Phone Number"
    //           value={formData.alt_phone_no}
    //           onChange={handleChange}
    //         />
    //         <input
    //           type="text"
    //           className="block border border-grey-light w-full p-3 rounded mb-4"
    //           name="email_id"
    //           placeholder="Email"
    //           value={formData.email_id}
    //           onChange={handleChange}
    //         />
    //         <input
    //           type="text"
    //           className="block border border-grey-light w-full p-3 rounded mb-4"
    //           name="alt_email_id"
    //           placeholder="Alternate Email"
    //           value={formData.alt_email_id}
    //           onChange={handleChange}
    //         />
    //         <input
    //           type="text"
    //           className="block border border-grey-light w-full p-3 rounded mb-4"
    //           name="pref_loc"
    //           placeholder="Preferred Location"
    //           value={formData.pref_loc}
    //           onChange={handleChange}
    //         />
    //         <button
    //           type="submit"
    //           className="w-full text-center py-3 rounded bg-blue-600 text-white hover:bg-green-dark focus:outline-none my-1"
    //         >
    //           Create Account
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
};
export default SignUp;
