import config from "../bot/config.jsx";
import MessageParser from "../bot/MessageParser.jsx";
import ActionProvider from "../bot/ActionProvider.jsx";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

const ChatArea = () => {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default ChatArea;
