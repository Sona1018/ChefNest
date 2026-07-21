import { useEffect, useState } from "react";
import { getAllUsers } from "../services/userService";
import { getAllChefs } from "../services/chefService";
import { getAllBookings } from "../services/bookingService";
import { getAllContacts } from "../services/contactService";

import {
  FaUsers,
  FaUserTie,
  FaClipboardList,
  FaEnvelope,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const Dashboard = () => {

  const [totalUsers, setTotalUsers] = useState(0);
  const [totalChefs, setTotalChefs] = useState(0);
  const [totalBookings, setTotalBookings] = useState(0);
  const [totalContacts, setTotalContacts] = useState(0);

  const [pendingBookings, setPendingBookings] = useState(0);
  const [confirmedBookings, setConfirmedBookings] = useState(0);
  const [completedBookings, setCompletedBookings] = useState(0);
  const [cancelledBookings, setCancelledBookings] = useState(0);

  useEffect(() => {

    const fetchDashboardData = async () => {

      try {

        const [
          users,
          chefs,
          bookings,
          contacts,
        ] = await Promise.all([
          getAllUsers(),
          getAllChefs(),
          getAllBookings(),
          getAllContacts(),
        ]);

        setTotalUsers(users.data?.data?.length || 0);
        setTotalChefs(chefs.data?.data?.length || 0);

        const bookingData =
          bookings.data?.data || [];

        setTotalBookings(bookingData.length);

        setPendingBookings(
          bookingData.filter(
            (b) => b.status === "Pending"
          ).length
        );

        setConfirmedBookings(
          bookingData.filter(
            (b) => b.status === "Confirmed"
          ).length
        );

        setCompletedBookings(
          bookingData.filter(
            (b) => b.status === "Completed"
          ).length
        );

        setCancelledBookings(
          bookingData.filter(
            (b) => b.status === "Cancelled"
          ).length
        );

        setTotalContacts(
          contacts.data?.data?.length || 0
        );

      } catch (err) {

        console.log(err);

      }

    };

    fetchDashboardData();

  }, []);

  const chartData = {

    labels: [
      "Pending",
      "Confirmed",
      "Completed",
      "Cancelled",
    ],

    datasets: [

      {

        data: [

          pendingBookings,
          confirmedBookings,
          completedBookings,
          cancelledBookings,

        ],

        backgroundColor: [

          "#FACC15",
          "#22C55E",
          "#3B82F6",
          "#EF4444",

        ],

        borderWidth: 2,

      },

    ],

  };

  const StatCard = ({
    title,
    value,
    icon,
    iconBg,
  }) => (

    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex items-center justify-between">

      <div className="flex items-center gap-5">

        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center ${iconBg}`}
        >
          {icon}
        </div>

        <div>

          <p className="text-gray-500 text-lg">
            {title}
          </p>

          <h2 className="text-4xl font-bold mt-1">
            {value}
          </h2>

        </div>

      </div>

    </div>

  );
    return (
    <div className="space-y-8">

      <h1 className="text-4xl font-bold text-gray-800">
        Dashboard
      </h1>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatCard
          title="Total Users"
          value={totalUsers}
          icon={<FaUsers size={32} className="text-blue-600" />}
          iconBg="bg-blue-100"
        />

        <StatCard
          title="Total Chefs"
          value={totalChefs}
          icon={<FaUserTie size={32} className="text-green-600" />}
          iconBg="bg-green-100"
        />

        <StatCard
          title="Total Bookings"
          value={totalBookings}
          icon={<FaClipboardList size={32} className="text-orange-600" />}
          iconBg="bg-orange-100"
        />

        <StatCard
          title="Total Contacts"
          value={totalContacts}
          icon={<FaEnvelope size={32} className="text-purple-600" />}
          iconBg="bg-purple-100"
        />

      </div>

      {/* Status Cards */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

        <StatCard
          title="Pending"
          value={pendingBookings}
          icon={<FaClock size={32} className="text-yellow-600" />}
          iconBg="bg-yellow-100"
        />

        <StatCard
          title="Confirmed"
          value={confirmedBookings}
          icon={<FaCheckCircle size={32} className="text-green-600" />}
          iconBg="bg-green-100"
        />

        <StatCard
          title="Completed"
          value={completedBookings}
          icon={<FaClipboardList size={32} className="text-blue-600" />}
          iconBg="bg-blue-100"
        />

        <StatCard
          title="Cancelled"
          value={cancelledBookings}
          icon={<FaTimesCircle size={32} className="text-red-600" />}
          iconBg="bg-red-100"
        />

      </div>

      {/* Chart */}

      <div className="bg-white rounded-2xl shadow-md p-8">

        <h2 className="text-2xl font-bold text-center mb-8">
          Booking Status Overview
        </h2>

        <div className="flex justify-center">

          <div className="w-full max-w-md">

            <Pie
              data={chartData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: "right",
                    labels: {
                      padding: 20,
                      font: {
                        size: 14,
                      },
                    },
                  },
                },
              }}
            />

          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;