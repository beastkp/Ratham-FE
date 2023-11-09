import React from "react";

const MessageParser = ({ children, actions }) => {
  // console.log(children)
  const parse = (message) => {
    // console.log(message)
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
