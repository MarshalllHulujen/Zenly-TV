import { Chat } from "../../types";

type ChatItemProps = { chat: Chat; isUserMessage: boolean };
export const ChatItem: React.FC<ChatItemProps> = ({ chat, isUserMessage }) => {
  return <div className={`inline-block p-2 m-2 rounded shadow ${isUserMessage ? "bg-blue-500 text-white ml-auto" : "bg-white"}`}>{chat.content}</div>;
};