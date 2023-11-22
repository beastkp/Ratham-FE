import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Homepage = () => {
  const { schedule,details } = useSelector((state) => state.user);
  console.log(schedule);
  return (
    <div className="min-h-screen bg-gray-100 flex-col items-center justify-center gap-5">
      <h1 className="text-3xl font-bold p-3 m-3">
        Welcome to Student Appointments
      </h1>
      <div className="max-w-lg rounded overflow-hidden shadow-lg bg-white mx-auto">
        <div className="px-6 py-4 mx-auto">
          <div className="font-bold text-xl mb-2 ">Session 1</div>
          <h3 className="text-xl font-serif font-bold p-2 m-2">
            Name: {details?.name}
          </h3>
          <h3 className="text-xl font-serif font-bold p-2 m-2">
            Age: {details?.age}
          </h3>

          <h3 className="text-xl font-serif font-bold p-2 m-2">
            Day: {schedule?.day}
          </h3>
          <h3 className="text-xl font-serif font-bold p-2 m-2">
            Time: {schedule?.time}
          </h3>
        </div>
        <div className="px-6 py-4">
          <Link to="/chat">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Schedule Session
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
