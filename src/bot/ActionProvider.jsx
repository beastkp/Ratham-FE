import React from "react";
import { createClientMessage } from "react-chatbot-kit";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  // const handleHello = () => {
  //   const botMessage = createChatBotMessage('Hello. Nice to meet you.');

  //   setState((prev) => ({
  //     ...prev,
  //     messages: [...prev.messages, botMessage],
  //   }));
  // };

  const handleDog = () => {
    const botMessage = createChatBotMessage(
      "Here's a nice dog picture for you!",
      {
        widget: "dogPicture",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleHello = () => {
    const botMessage = createChatBotMessage("Welcome to Student info System. I am here to assist you in resolving your queries", {
      widget: "gotit",
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleSlot = () => {
    const botMessage = createChatBotMessage("Okay, Pick a Slot", {
      widget: "Slot",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleChoice = () => {
    const botMessage = createChatBotMessage("Session Scheduled Successfully!", {
      widget: "Redirection",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const schedule = ({day,time})=>{
    const clientMessage = createClientMessage(`On ${day} at ${time}`)
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, clientMessage],
    }));
    handleChoice();
  }
  const gotitResponse = ()=>{
    const clientMessage = createClientMessage("Got it")
    
    setState((prev)=>({
      ...prev,
      messages:[...prev.messages,clientMessage]
    }))
    handleSlot();
  }
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleDog,
            schedule,
            gotitResponse,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
