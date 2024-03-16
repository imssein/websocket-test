"use client";

import { useSendMessage } from "@/app/_hooks/useSendMessage";
import useWebSocketConnection from "@/app/_hooks/useWebSocketConnection";
import { useForm } from "react-hook-form";

interface ChatForm {
  message: string;
}
function Chat({ params }: { params: { chatId: number } }) {
  const { register, handleSubmit, reset } = useForm<ChatForm>();

  const chatId = params.chatId;
  const senderId = 1;

  // websocket 연결 / 구독
  const { messageList, stompClientRef } = useWebSocketConnection({ chatId });
  const sendMessage = useSendMessage({ stompClientRef, chatId });

  const onSubmit = (data: ChatForm) => {
    sendMessage({
      content: data.message,
      senderId,
    });

    reset();
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 max-w-4xl mx-auto py-4">
      <p className="text-xl">{params.chatId}번 채팅방</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
        <input {...register("message", { required: true })} className="bg-gray-100 rounded-md" />
        <button type="submit" className="p-1 rounded-md bg-red-100">
          전송
        </button>
      </form>
      {messageList.map((message) => (
        <div className="w-64 border" key={message.content}>
          <p>senderId: {message.senderId}</p>
          <p>content: {message.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Chat;
