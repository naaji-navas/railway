import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

const RankResults = () => {
  const [user, setUser] = useState({});
  
  const [formData, setFormData] = useState({
    phone: "",
  });
  const [avl,setAvl]=useState(true)

  const router = useRouter();

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;
  const adminUsername = process.env.NEXT_PUBLIC_ADMIN_USERNAME;

  
  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    const params = new URLSearchParams();
    params.append("username", formData.username);
    params.append("password", formData.password);
    const response = await fetch(apiUrl + `rank?phone=${formData.phone}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        accept: "application/json",
      },
    });

    const responseData = await response.json();
    if (response.status==200) {
      setAvl(true)
      setUser(responseData)
      console.log(user)
    } else if (response.status==404 ){
      setUser({})
      setAvl(false)
    }
  } catch (error) {
    console.log(error);
  }
};

  return (
    
    <div className="lg:flex">
      <div className="lg:w-1/2 xl:max-w-screen-sm">
        <div className="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
          <div className="cursor-pointer flex items-center">
            <Link href="/">
              <div className="text-5xl text-indigo-800 tracking-wide ml-2 font-bold">
                Cognosco
              </div>
            </Link>
          </div>
        </div>
        <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
          <h2
            className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
              xl:text-bold"
          >
            View Your Result
          </h2>
          <div className="mt-12">
            <form onSubmit={handleSubmit}>
              <div>
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Phone Number
                </div>
                <input
                  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  value={formData.phone}
                  name="phone"
                  onChange={handleChange}
                  type="tel"
                  placeholder="Enter your registered phone number"
                />
              </div>
            
              <div className="mt-8">
                <button
                  className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                          font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                          shadow-lg"
                >
                  View Result
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
  
     
      <div className="bg-white lg:w-1/2 xl:max-w-screen-sm rounded-lg shadow-lg p-6  md:max-w-[40%] ">
          {!avl?
      <p>No Results found for the specified phone number</p>:<></>
      }
       {!(Object.keys(user).length === 0 && user.constructor === Object)?
          <div className="grid grid-cols-2 justify-center align-middle md:grid-cols-2 gap-4">
            <div className="font-semibold">Name:</div>
            <div className="truncate">{user.name}</div>
            <div className="font-semibold">Rank:</div>
            <div className="truncate">{user.rank}</div>
            <div className="font-semibold">Total Right Answers:</div>
            <div className="truncate">{user.tot_right}</div>
            <div className="font-semibold">Total Wrong Answers:</div>
            <div className="truncate">{user.tot_wrong}</div>
            <div className="font-semibold">Total Marks:</div>
            <div className="truncate">{user.tot_marks}</div>
          </div>
          :<></>}
      
      
   <br></br>

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
        
    </div>
  );
};
export default RankResults;
