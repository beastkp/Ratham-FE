import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setResponse } from '../redux/features/userSlice';
import ActionProvider from '../bot/ActionProvider';

const Gotit = (props) => {
    const dispatch  = useDispatch();
    // const gotit  = useSelector((state)=>state.user.userResponse.gotit);
    const handleSlot = ()=>{
        props.actions.gotitResponse();
    }
  return (
    <div className=" grid grid-cols-4">
      <button
        className="text-black font-bold rounded-lg bg-blue-200 p-2 mx-auto text-sm col-span-1"
        onClick={handleSlot}
      >
        Got it
      </button>
    </div>
  );
}

export default Gotit;