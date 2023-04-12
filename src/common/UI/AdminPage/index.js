import { useEffect, useState } from "react";
import {useRouter} from "next/router";
import Image from "next/image";
import qr_code from "../../../../public/assets/images/qr_code.jpg";
import Loader from "@/common/UI/UserDetails/Loader";
import { Button } from "@mui/material";
import * as React from "react";

const AdminPanel = () => {
  const router = useRouter();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const [activeTab, setActiveTab] = useState("registered");
  const [message, setMessage] = useState("");
  const [upiBase64, setUpiBase64] = useState("");
  const [userDetails, setUserDetails] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [upiImage, setUPIImage] = useState("");

  const [allUsers, setallUsers] = useState([]);
  const [pendingUsers, setPendingUsers] = useState([]);
  const [pendingPaymentUsers, setPendingPaymentUsers] = useState([]);

  useEffect(() => {
    const message = localStorage.getItem("tokenid");
    setMessage(message);
  }, []);

  const getUserDetails = async (email) => {
    try {
      const response = await fetch(apiUrl + "user_details/", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${message}`,
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(email),
      });
      const data = await response.json();
      if (response.ok) {
        setUpiBase64(data.upi);
        setUserDetails(data);
        console.log(upiBase64);
      } else {
        alert("Failed to get user details");
        // Handle the error response as needed
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!message) {
      return;
    }
    const fetchUsers = async () => {
      try {
        const response = await fetch(apiUrl + "participants/all/", {
          headers: {
            Authorization: `Bearer ${message}`,
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setallUsers(data);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchPendingUsers = async () => {
      try {
        const response = await fetch(
          apiUrl + "participants/pending_verificaton/",
          {
            headers: {
              Authorization: `Bearer ${message}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setPendingUsers(data);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchPendingPaymentUsers = async () => {
      try {
        const response = await fetch(apiUrl + "participants/pending_payment/", {
          headers: {
            Authorization: `Bearer ${message}`,
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setPendingPaymentUsers(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers().then((r) => console.log(r));
    fetchPendingUsers().then((r) => console.log(r));
    fetchPendingPaymentUsers().then((r) => console.log(r));
  }, [message, activeTab]);

  const signOut = () => {
    localStorage.removeItem("tokenid");
    router.push("/signin");
  };

  const deleteUser = async (userId) => {
    try {
      const response = await fetch(apiUrl + "delete_user/", {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${message}`,
          "Content-Type": "application/json",
        },
        body: userId,
      });
      const data = await response.json();
      if (response.ok && data.msg === "User successfully deleted") {
        alert("User deleted successfully");
        // Perform any additional actions needed after successful deletion
      } else {
        alert("Failed to delete user");
        // Handle the error response as needed
      }
    } catch (error) {
      console.error(error);
    }
  };

  const manualVerifyUser = async (userId) => {
    try {
      console.log(JSON.stringify({ userId: String(userId) }));
      const response = await fetch(apiUrl + "payment/manual_verify/", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${message}`,
          "Content-Type": "application/json",

        },
        body: JSON.stringify(userId),
        cors:"cors"
      });
      const data = await response.json();
      console.log(data);
      if (response.ok && data.msg === "verification successful") {
        alert("Verification successful");
        // Perform any additional actions needed after successful verification
      } else {
        alert("Failed to verify user");
        // Handle the error response as needed
      }
    } catch (error) {
      console.error(error);
      alert("Failed to verify user");
      // Handle the error response as needed
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="py-4 px-6 flex items-center min-w-full justify-between fixed z-50  bg-white shadow-md">
        <h1 className="text-3xl font-semibold">COGNOSCO ADMIN PANEL</h1>
        <div className="flex items-center gap-4">
          <div
            className={`px-4 py-2 rounded cursor-pointer ${
              activeTab === "registered"
                ? "bg-gray-900 text-white"
                : "text-gray-900"
            }`}
            onClick={() => setActiveTab("registered")}
          >
            Registered Users
          </div>
          <div
            className={`px-4 py-2 rounded cursor-pointer ${
              activeTab === "pending"
                ? "bg-amber-300 text-white"
                : "text-gray-900"
            }`}
            onClick={() => setActiveTab("pending")}
          >
            Pending Verification
          </div>
          <div
            className={`px-4 py-2 rounded cursor-pointer ${
              activeTab === "Pending Payment"
                ? "bg-yellow-800 text-white"
                : "text-gray-900"
            }`}
            onClick={() => setActiveTab("Pending Payment")}
          >
            Pending Payment
          </div>
          <div
            className="px-4 py-2 rounded cursor-pointer bg-red-700 text-white"
            onClick={() => {
              signOut();
            }}
          >
            Logout
          </div>
        </div>
      </div>
      <div className="flex-grow pt-5  flex flex-col relative top-16 overflow-y-auto">
        {activeTab === "registered" &&
          allUsers.length > 0 &&
          allUsers.map((user) => (
            <div
              key={user.id}
              className="mx-4 my-2 p-4 bg-white shadow-md rounded-lg"
            >
              <div className="text-lg font-semibold">{user.name}</div>
              <div className="text-gray-600">{user.email_id}</div>
              <div className="text-gray-600">
                Status:{" "}
                {user.status === 1 ? "Verified" : "Pending Verification"}
              </div>
              <div className="text-gray-600">Phone Number: {user.phone_no}</div>
              <div className="mt-4 flex justify-end">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={async () => {
                    await deleteUser(user.email_id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        {activeTab === "pending" &&
          pendingUsers.length > 0 &&
          pendingUsers.map((user) => (
            <div
              key={user.id}
              className="mx-4 my-2 p-4 bg-white shadow-md rounded-lg"
            >
              <div className="text-lg font-semibold">{user.name}</div>
              <div className="text-gray-600">{user.email}</div>
              <div className="mt-4 flex justify-between items-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={async () => {
                    const userDetails = await getUserDetails(
                      "najidnavas2000@gmail.com"
                    );
                    setShowModal(true);
                  }}
                >
                  View UPI Image
                </button>

                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={async () => {
                    await manualVerifyUser("rattankumarr@gmail.com");
                  }}
                >
                  Approve
                </button>
              </div>
            </div>
          ))}
        {activeTab === "Pending Payment" &&
          pendingPaymentUsers.length > 0 &&
          pendingPaymentUsers.map((user) => (
            <div
              key={user.id}
              className="mx-4 my-2 p-4 bg-white shadow-md rounded-lg"
            >
              <div className="text-lg font-semibold">{user.name}</div>
              <div className="text-gray-600">{user.email_id}</div>
              <div className="text-gray-600">
                Status: {user.status === 1 ? "Verified" : "Pending Payment"}
              </div>
              <div className="text-gray-600">Phone Number: {user.phone_no}</div>
              <div className="mt-4 flex justify-end">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={async () => {
                    await deleteUser(user.email_id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        {allUsers.length === 0 && (
          <div className="mx-4 my-2 p-4 bg-white shadow-md rounded-lg">
            <p className="text-lg font-semibold text-center">Loading ... </p>
          </div>
        )}
        {showModal ? (
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col justify-center w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 gap-5 rounded-t">
                  <h3 className="text-2xl font-semibold">UPI Screenshot</h3>
                  <button
                    className=" ml-auto bg-transparent border-0 text-black  float-none text-2xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-red-800 opacity-2  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6  justify-center items-center">
                  <div className="mx-5 flex flex-col justify-center align-middle items-center">
                    <h1 className="font-semibold">
                      UPI Screenshot uploaded by user
                    </h1>

                    <Image
                      src={`data:image/png;base64, ${upiBase64}`}
                      width={300}
                      height={300}
                      className="sm:max-w-xs sm:max-h-full sm:mr-4"
                      alt="qr code for payment"
                    />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                  <Button
                    onClick={() => setShowModal(false)}
                    className="bg-red-600 text-white rounded-md px-4 py-2 hover:bg-red-500"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AdminPanel;
