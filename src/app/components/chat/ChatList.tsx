import { nanoid } from "nanoid";
import { Chat } from "../../types";
import { ChatItem } from "./ChatItem";

const chats = [
  { _id: nanoid(), conversationId: "conversationId", senderId: "senderId", content: "Hi!", createdAt: new Date() },
  { _id: nanoid(), conversationId: "conversationId", senderId: "senderId1", content: "Hi Hi!", createdAt: new Date() },
];
export const ChatList = () => {
  return (
    <div className="flex-1 overflow-y-auto flex flex-col items-start">
      {chats.map((chat: Chat, index: number) => (
        <ChatItem isUserMessage={index % 2 === 0} key={nanoid()} chat={chat} />
      ))}
    </div>
  );
};