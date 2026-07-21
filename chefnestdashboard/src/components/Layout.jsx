import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getNotifications,
  markAsRead,
} from "../services/notificationService";
import {
  FaUsers,
  FaUserTie,
  FaClipboardList,
  FaEnvelope,
  FaTachometerAlt,
  FaBell,
} from "react-icons/fa";

const Layout = () => {
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
  fetchNotifications();

  const interval = setInterval(() => {
    fetchNotifications();
  }, 15000);

  return () => clearInterval(interval);
}, []);

const fetchNotifications = async () => {
  try {
    const res = await getNotifications();
    setNotifications(res.data.data || []);
  } catch (error) {
    console.error("Notification Error:", error);
  }
};

const handleMarkAsRead = async (id) => {
  try {
    await markAsRead(id);

    setNotifications((prev) =>
      prev.map((item) =>
        item._id === id
          ? { ...item, isRead: true }
          : item
      )
    );

    fetchNotifications();
  } catch (error) {
    console.error(error);
  }
};
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/", { replace: true });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-orange-600 text-white p-6">
        <h2 className="text-2xl font-bold mb-10">ChefNest Admin</h2>

        <ul className="space-y-3">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  isActive
                    ? "bg-white text-orange-600 font-semibold"
                    : "hover:bg-orange-500"
                }`
              }
            >
              <FaTachometerAlt />
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/chefs"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  isActive
                    ? "bg-white text-orange-600 font-semibold"
                    : "hover:bg-orange-500"
                }`
              }
            >
              <FaUserTie />
              Chefs
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/bookings"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  isActive
                    ? "bg-white text-orange-600 font-semibold"
                    : "hover:bg-orange-500"
                }`
              }
            >
              <FaClipboardList />
              Bookings
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  isActive
                    ? "bg-white text-orange-600 font-semibold"
                    : "hover:bg-orange-500"
                }`
              }
            >
              <FaUsers />
              Users
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  isActive
                    ? "bg-white text-orange-600 font-semibold"
                    : "hover:bg-orange-500"
                }`
              }
            >
              <FaEnvelope />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <div className="h-16 bg-white shadow flex items-center justify-between px-8">
          <h1 className="text-2xl font-bold text-gray-800">
            ChefNest Admin
          </h1>

          <div className="flex items-center gap-5 relative">

            {/* Notification Bell */}
            <div className="relative">
              <button
  onClick={() => {
    fetchNotifications();
    setShowNotifications(!showNotifications);
  }}
>
                <FaBell
                  size={22}
                  className="text-gray-700 cursor-pointer"
                />

                {notifications.filter((n) => !n.isRead).length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                    {notifications.filter((n) => !n.isRead).length}
                  </span>
                )}
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-3 w-80 bg-white rounded-lg shadow-lg border z-50 max-h-80 overflow-y-auto">

                  <div className="p-3 font-semibold border-b">
                    Notifications
                  </div>

                  {notifications.length === 0 ? (
                    <p className="p-4 text-gray-500">
                      No Notifications
                    </p>
                  ) : (
                    notifications.map((item) => (
  <div
    key={item._id}
    onClick={() => handleMarkAsRead(item._id)}
    className={`p-3 border-b cursor-pointer transition ${
      item.isRead
        ? "bg-white"
        : "bg-orange-50 hover:bg-orange-100"
    }`}
  >
    <h3 className="font-semibold">
      {item.title}
    </h3>

    <p className="text-sm text-gray-600">
      {item.message}
    </p>

    <p className="text-xs text-gray-400 mt-1">
      {new Date(item.createdAt).toLocaleString()}
    </p>
  </div>
))
                  )}
                </div>
              )}
            </div>

            <span className="font-medium">
              Welcome, Admin
            </span>

            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
              A
            </div>

            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-8 max-w-7xl mx-auto w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;