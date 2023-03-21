import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { Message_data } from "../../../../context/context";
import signIn from "../SignIn";
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
  const router = useRouter();
  const { message, setMessage } = useContext(Message_data);
  const apiUrl = "https://ima-msn.up.railway.app/register/";

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

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
      console.log(data);
      setMessage(data.tokenId);
      router.push("/signIn");
      console.log("tokenid", tokenid);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="place"
              placeholder="Place"
              value={formData.place}
              onChange={handleChange}
            />
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="phone_no"
              placeholder="Phone Number"
              value={formData.phone_no}
              onChange={handleChange}
            />
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="alt_phone_no"
              placeholder="Alternate Phone Number"
              value={formData.alt_phone_no}
              onChange={handleChange}
            />
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email_id"
              placeholder="Email"
              value={formData.email_id}
              onChange={handleChange}
            />
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="alt_email_id"
              placeholder="Alternate Email"
              value={formData.alt_email_id}
              onChange={handleChange}
            />
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="pref_loc"
              placeholder="Preferred Location"
              value={formData.pref_loc}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-blue-600 text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
