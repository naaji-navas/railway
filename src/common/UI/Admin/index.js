import { useEffect, useState } from "react";
import {router} from "next/client";

const AdminPanel = () => {
  const apiUrl = "https://ima-msn.up.railway.app/";

  const [activeTab, setActiveTab] = useState("registered");
  const [message, setMessage] = useState("");

  const [allUsers, setallUsers] = useState([]);
  const [pendingUsers, setPendingUsers] = useState([]);
  const [pendingPaymentUsers, setPendingPaymentUsers] = useState([]);

  useEffect(() => {
    const message = localStorage.getItem("tokenid");
    setMessage(message);
  }, []);

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
  }, [apiUrl, message, activeTab, allUsers, pendingUsers, pendingPaymentUsers]);

const deleteUser = async (userId) => {
  try {
    const response = await fetch(apiUrl + "delete_user/", {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${message}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userId),
    });
    const data = await response.json();
    if (response.ok && data.msg === 'User successfully deleted') {
      alert('User deleted successfully');
      // Perform any additional actions needed after successful deletion
    } else {
      alert('Failed to delete user');
      // Handle the error response as needed
    }
  } catch (error) {
    console.error(error);
  }
};


  const tabClasses =
    "block rounded-t-lg py-2 px-4 font-semibold cursor-pointer";
  const activeTabClasses = "bg-indigo-800 text-white";
  const inactiveTabClasses = "bg-gray-300 text-gray-600";

  const listClasses = "bg-white divide-y divide-gray-200 overflow-y-scroll";
  const listItemClasses = "px-4 py-2";

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
                ? "bg-gray-900 text-white"
                : "text-gray-900"
            }`}
            onClick={() => setActiveTab("pending")}
          >
            Pending Verification
          </div>
          <div
            className={`px-4 py-2 rounded cursor-pointer ${
              activeTab === "Pending Payment"
                ? "bg-gray-900 text-white"
                : "text-gray-900"
            }`}
            onClick={() => setActiveTab("Pending Payment")}
          >
            Pending Payment
          </div>
                    <div
            className="px-4 py-2 rounded cursor-pointer bg-red-700 text-white"
            onClick={() => {
              localStorage.removeItem('tokenid');
              router.push('/signin').then(r => console.log(r));
            }
            }
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
                  onClick={() => {
                    // code to display modal with UPI image
                  }}
                >
                  View UPI Image
                </button>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    const updatedUsers = allUsers.map((u) =>
                      u.id === user.id ? { ...u, status: 1 } : u
                    );
                    setAllUsers(updatedUsers);
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
                Status:{" "}
                {user.status === 1 ? "Verified" : "Pending Payment"}
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
      </div>
    </div>
  );
};

export default AdminPanel;
