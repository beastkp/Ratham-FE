import React,{useState} from "react";
import { setName,setAge } from "../redux/features/userSlice";
import { useDispatch } from "react-redux";

const MessageParser = ({ children, actions }) => {
  const dispatch = useDispatch();
  console.log(children)
  let {checker}= children.props.state;
  const parse = (message) => {
    // console.log(message)
    if(checker === "Name" && message){
      dispatch(setName(message));
      actions.detail_Age();
    }
    if(checker === "Age" && Number(message)){
      dispatch(setAge(message));
      actions.handleChoice();
    }
    if (message.toLowerCase().includes("hello".toLowerCase()) || message.toLowerCase().includes("hi".toLowerCase())){
      actions.handleHello();
    }
    if (message.includes("dog")) {
      actions.handleDog();
    }
    if(message.includes("Got it")){
      actions.handleSlot();
    }
    if(message.includes("Monday")||message.includes("Tuesday")||message.includes("Wednesday")||message.includes("Thursday")||message.includes("Friday")||message.includes("Saturday")||message.includes("Sunday")){
      actions.handleChoice();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
