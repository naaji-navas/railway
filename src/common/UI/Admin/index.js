import { useEffect, useState } from "react";

const AdminPanel = () => {
  const apiUrl = "https://ima-msn.up.railway.app/";

  const [activeTab, setActiveTab] = useState("registered");
  const [message, setMessage] = useState("");

  const [allUsers, setallUsers] = useState([]);
  const [pendingUsers, setPendingUsers] = useState([]);

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
        const response = await fetch(apiUrl + "participants/pending_verification/", {
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
        const response = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${message}`,
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setPendingUsers(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers().then((r) => console.log(r));
    fetchPendingUsers().then((r) => console.log(r));
  }, [apiUrl, message]);

  const tabClasses =
    "block rounded-t-lg py-2 px-4 font-semibold cursor-pointer";
  const activeTabClasses = "bg-indigo-800 text-white";
  const inactiveTabClasses = "bg-gray-300 text-gray-600";

  const listClasses = "bg-white divide-y divide-gray-200 overflow-y-scroll";
  const listItemClasses = "px-4 py-2";

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="py-4 px-6 flex items-center min-w-full justify-between fixed  bg-white shadow-md">
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
        </div>
      </div>
      <div className="flex-grow pt-5  flex flex-col overflow-y-auto">
        {activeTab === "registered" &&
          allUsers.length > 0 &&
          allUsers.map((user) => (
            <div
              key={user.id}
              className="mx-4 my-2 p-4 bg-white shadow-md rounded-lg"
            >
              <div className="text-lg font-semibold">{user.name}</div>
              <div className="text-gray-600">{user.email_id}</div>
              <div className="text-gray-600">Status: {user.status}</div>
              <div className="mt-4 flex justify-end">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    // code to delete user
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        {activeTab === "pending" &&
          allUsers.length > 0 &&
          allUsers.map((user) => (
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
                      u.id === user.id ? { ...u, status: "verified" } : u
                    );
                    setAllUsers(updatedUsers);
                  }}
                >
                  Approve
                </button>
              </div>
            </div>
          ))}
        {allUsers.length === 0 && (
          <div className="mx-4 my-2 p-4 bg-white shadow-md rounded-lg">
            <p className="text-lg font-semibold text-center">No users found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
