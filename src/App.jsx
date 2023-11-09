import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChatArea from "./Components/ChatArea";
import Homepage from "./Components/Homepage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage />}/>
          <Route exact path="/chat" element={<ChatArea />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
