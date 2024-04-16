import React, { useEffect, useRef, useState } from "react";
import ChatBar from "../component/ChatBar";
import ChatBody from "../component/ChatBody";
import ChatFooter from "../component/ChatFooter";
import "./index.css";

const ChatPage = ({ socket }) => {
  const [message, setMessage] = useState([]);
  const lastMessageRef = useRef(null);
  const [sideModal, setSideModal] = useState(false);

  useEffect(() => {
    socket.on("messageResponse", (data) => setMessage([...message, data]));
  }, [socket, message]);

  useEffect(() => {
    console.log(lastMessageRef);
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" }); // <-- Corrected
  }, [message]);

  return (
    <div className="chat">
      <div
        className={`chat__side__bar ${
          sideModal === true ? "after__click__button" : ""
        }`}
      >
        <ChatBar socket={socket} setSideModal={setSideModal} />
      </div>
      <div className="chat__main">
        <ChatBody
          message={message}
          socket={socket}
          lastMessageRef={lastMessageRef}
          setSideModal={setSideModal}
        />
        <div className="chat__footer__section">
          <ChatFooter socket={socket} />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
