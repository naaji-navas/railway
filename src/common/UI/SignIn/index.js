import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { Message_data } from "../../../../context/context";

const UserDetails = ({ token }) => {
  const [user, setUser] = useState({});

  const apiUrl = "https://ima-msn.up.railway.app/current_user/";
  const { message } = useContext(Message_data);
  var router = useRouter();
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const res = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${message}`,
          },
          
        });
        console.log('sigintoken', message)
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserDetails();
  }, [apiUrl, token]);

  return (
    <div>
      <h1>User Details</h1>
      <ul>
        <li>Name: {user.name}</li>
        <li>Place: {user.place}</li>
        <li>Phone Number: {user.phone_no}</li>
        <li>Alternate Phone Number: {user.alt_phone_no}</li>
        <li>Email: {user.email_id}</li>
        <li>Alternate Email: {user.alt_email_id}</li>
        <li>Preferred Location: {user.pref_loc}</li>
      </ul>
    </div>
  );
};

export default UserDetails;
