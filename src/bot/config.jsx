import { createChatBotMessage } from "react-chatbot-kit";
import DogPicture from "../Components/DogPicture.jsx";
import Slot from "../Components/Slot.jsx";
import Gotit from "../Components/Gotit.jsx";
import Redirect from "../Components/Redirect.jsx";
import Details from "../Components/Details.jsx";

const botname = "Brian";
const config = {
  initialMessages: [
    createChatBotMessage(`Hi! I'm ${botname}`),
    // createChatBotMessage("Welcome to student info system!", {
    //   withAvatar: false,
    //   delay: 600,
    //   widget: "overview",
    // }),
  ],
  state: {
    checker: null,
  },

  widgets: [
    {
      widgetName: "dogPicture",
      widgetFunc: (props) => <DogPicture {...props} />,
    },
    {
      widgetName: "gotit",
      widgetFunc: (props) => {
        return <Gotit {...props} />;
      },
    },
    {
      widgetName: "Slot",
      widgetFunc: (props) => <Slot {...props} />,
    },
    {
      widgetName: "Redirection",
      widgetFunc: (props) => <Redirect {...props} />,
    },
    {
      widgetName: "Name",
      widgetFunc: (props) => <Details {...props} />,
    },
  ],
  customComponents: {
    header: () => (
      <div className="bg-slate-200 p-3 border-r-2">Student Chatbot</div>
    ),
  },
};

export default config;
