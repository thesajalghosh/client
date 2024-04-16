import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ChatPage from "./ChatPage";
import { io } from "socket.io-client";

console.log(process.env.REACT_APP_BACKEND_URL);

const socket = io(process.env.REACT_APP_BACKEND_URL);

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home socket={socket} />} />
          <Route path="/chat" element={<ChatPage socket={socket} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
