import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

const ChatBar = ({ socket, setSideModal }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on("newUserResponse", (data) => setUsers(data));
  }, [socket, users]);

  console.log(users);
  return (
    <div className="chat__sidebar">
      <div className="chat__sidebar__cross__icon">
        <RxCross2 size={25} onClick={() => setSideModal(false)} />
      </div>
      <h2>Open Chat</h2>

      <div>
        <h4 className="chat__header">ACTIVE USERS</h4>
        <div className="chat__users">
          {users.map((user) => (
            <p key={user.socketID}>{user.userName}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
