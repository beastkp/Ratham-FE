import React, { useState,useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { setResponse } from "../redux/features/userSlice";
import { useDispatch } from "react-redux";


const Slot = (props) => {
  const dispatch = useDispatch();
  const initialChoice = { day: "", time: "" };
  const dayClick = (e) => {
    setChoice({ ...choice, day: e.target.value });
  };

  const timeClick = (e) => {
    setChoice({ ...choice, time: e.target.value });
  };
  const [choice, setChoice] = useState(initialChoice);

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday"];

  useEffect(()=>{
    if(choice.time && choice.day){
      dispatch(setResponse(choice));
      props.actions.schedule(choice);
    }
  },[choice.time,choice.day])


  return (
    <div>
      <div className="grid grid-cols-6 bg-slate-200 p-2">
        <FaChevronLeft className="col-span-1 text-xl mt-2 mx-auto " />
        {days.map((day) => (
          <button
            className="text-black font-bold rounded-lg bg-blue-200 p-2 mx-auto text-sm col-span-1 hover:bg-slate-400 focus:shadow-outline active:bg-slate-300"
            value={day}
            onClick={dayClick}
            key={day}
          >
            {day}
          </button>
        ))}
        <FaChevronRight className="col-span-1 text-xl mx-auto mt-2" />
      </div>
      <div>
        <div className="grid grid-cols-5 bg-slate-200 p-2 mt-5">
          <span className="text-black font-bold rounded-lg bg-gray-200 p-2 mx-auto text-sm col-span-1 ">
            Morning
          </span>
          <button
            className="text-black font-bold rounded-lg bg-blue-200 p-2 mx-auto text-sm col-span-1  hover:bg-slate-400 focus:shadow-outline active:bg-slate-300"
            value="9:00 AM"
            onClick={timeClick}
          >
            9:00 AM
          </button>
          <button
            className="text-black font-bold rounded-lg bg-blue-200 p-2 mx-auto text-sm col-span-1  hover:bg-slate-400 focus:shadow-outline active:bg-slate-300"
            value="11:00 AM"
            onClick={timeClick}
          >
            11:00 AM
          </button>
          <button
            className="text-black font-bold rounded-lg bg-blue-200 p-2 mx-auto text-sm col-span-1 hover:bg-slate-400 focus:shadow-outline active:bg-slate-300 "
            value="2:00 PM"
            onClick={timeClick}
          >
            2:00 PM
          </button>
          <button
            className="text-black font-bold rounded-lg bg-blue-200 p-2 mx-auto text-sm col-span-1 hover:bg-slate-400  focus:shadow-outline active:bg-slate-300"
            value="4:00 PM"
            onClick={timeClick}
          >
            4:00 PM
          </button>
        </div>
        <div className="grid grid-cols-5 bg-slate-200 py-5 px-2">
          <span className="text-black font-bold rounded-lg bg-gray-200 p-2 mx-auto text-sm col-span-1 ">
            Evening
          </span>
          <button
            className="text-black font-bold rounded-lg bg-blue-200 p-2 mx-auto text-sm col-span-1  hover:bg-slate-400 focus:shadow-outline active:bg-slate-300"
            value="5:00 PM"
            onClick={timeClick}
          >
            5:00 PM
          </button>
          <button
            className="text-black font-bold rounded-lg bg-blue-200 p-2 mx-auto text-sm col-span-1 hover:bg-slate-400  focus:shadow-outline active:bg-slate-300"
            value="7:00 PM"
            onClick={timeClick}
          >
            7:00 PM
          </button>
          <button
            className="text-black font-bold rounded-lg bg-blue-200 p-2 mx-auto text-sm col-span-1  hover:bg-slate-400 focus:shadow-outline active:bg-slate-300"
            value="8:00 PM"
            onClick={timeClick}
          >
            8:00 PM
          </button>
          <button
            className="text-black font-bold rounded-lg bg-blue-200 p-2 mx-auto text-sm col-span-1  hover:bg-slate-400 focus:shadow-outline active:bg-slate-300"
            value="9:00 PM"
            onClick={timeClick}
          >
            9:00 PM
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slot;
