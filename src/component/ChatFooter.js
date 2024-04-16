import React, { useState } from "react";
import { LuSend } from "react-icons/lu";

const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log(message.trim(), localStorage.getItem("userName"));
    const username = localStorage.getItem("userName");
    if (username) {
      console.log("click");
      socket.emit("message", {
        text: message,
        name: localStorage.getItem("userName"),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    console.log({ userName: localStorage.getItem("userName"), message });
    setMessage("");
  };
  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="sendBtn">
          <LuSend size={30} />
        </button>
      </form>
    </div>
  );
};

export default ChatFooter;
