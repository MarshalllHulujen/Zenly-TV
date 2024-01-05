"use client";

import { useState } from "react";

export const ChatInput = () => {
  const [message, setMessage] = useState("");
  const sendMessage = () => {
    console.log("message to send is:", message);
  };
  return (
    <div className="p-2">
      <input type="text" className="border p-2 rounded w-full" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button className="p-2 bg-blue-500 text-white rounded mt-2" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
};  