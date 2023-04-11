import { useState } from "react";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("registered");

  const users = [
    { id: 1, name: "John Doe", email: "johndoe@example.com", status: "verified" },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com", status: "verified" },
    { id: 3, name: "Bob Johnson", email: "bobjohnson@example.com", status: "pending" },
    { id: 4, name: "Alice Brown", email: "alicebrown@example.com", status: "pending" },
  ];

  const registeredUsers = users.filter((user) => user.status === "verified");
  const pendingUsers = users.filter((user) => user.status === "pending");

  const tabClasses = "block rounded-t-lg py-2 px-4 font-semibold cursor-pointer";
  const activeTabClasses = "bg-indigo-800 text-white";
  const inactiveTabClasses = "bg-gray-300 text-gray-600";

  const listClasses = "bg-white divide-y divide-gray-200";

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl font-semibold mb-4">COGNOSCO ADMIN PANEL</h1>
        <div className="flex flex-col sm:flex-row gap-2">
          <div
            className={`${tabClasses} ${
              activeTab === "registered" ? activeTabClasses : inactiveTabClasses
            }`}
            onClick={() => setActiveTab("registered")}
          >
            Registered Users
          </div>
          <div
            className={`${tabClasses} ${
              activeTab === "pending" ? activeTabClasses : inactiveTabClasses
            }`}
            onClick={() => setActiveTab("pending")}
          >
            Pending Verification
          </div>
        </div>
        <div className={listClasses}>
          {activeTab === "registered" &&
            registeredUsers.map((user) => (
              <div className="px-4 py-2" key={user.id}>
                <div className="text-lg font-semibold">{user.name}</div>
                <div className="text-gray-600">{user.email}</div>
              </div>
            ))}
          {activeTab === "pending" &&
            pendingUsers.map((user) => (
              <div className="px-4 py-2" key={user.id}>
                <div className="text-lg font-semibold">{user.name}</div>
                <div className="text-gray-600">{user.email}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
