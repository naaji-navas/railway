import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { Message_data } from "../../../../context/context";

const UserDetails = () => {
  const [user, setUser] = useState({});
  const [message, setMessage] = useState(localStorage.getItem("token"));
  const apiUrl = "https://ima-msn.up.railway.app/current_user/";
  const router = useRouter();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const res = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${message}`,
          },
        });
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserDetails();
  }, [apiUrl, message]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-[50%] mx-auto text-ellipsis overflow-hidden">
      <h1 className="text-ellipsis overflow-hidden text-2xl font-bold mb-4">
        User Details
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="font-semibold">Name:</div>
        <div>{user.name}</div>
        <div className="font-semibold">Place:</div>
        <div>{user.place}</div>
        <div className="font-semibold">Phone Number:</div>
        <div>{user.phone_no}</div>
        <div className="font-semibold">Alternate Phone Number:</div>
        <div>{user.alt_phone_no}</div>
        <div className="font-semibold">Email:</div>
        <div>{user.email_id}</div>
        <div className="font-semibold">Alternate Email:</div>
        <div>{user.alt_email_id}</div>
        <div className="font-semibold">Preferred Location:</div>
        <div>{user.pref_loc}</div>
      </div>
    </div>
  );
};

export default UserDetails;
