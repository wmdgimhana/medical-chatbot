import React, { useEffect, useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
import { sendMessage } from "../../functions/ApiCalls";
import Profile from "../../assets/3ddoc.jpg";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [thinking, setThinking] = useState(false);

  const sendHandler = async (e) => {
    e.preventDefault();

    if (userInput.length === 0) return;

    const userMessage = { message: userInput, role: "user" };

    setMessages((prev) => [...prev, userMessage]);

    setUserInput("");
    try {
      setThinking(true);
      const res = await sendMessage({ question: userInput });
      const botMessage = { message: res.data, role: "bot" };
      setMessages((prev) => [...prev, botMessage]);
      setThinking(false);
    } catch (error) {
      setThinking(false);
      console.log(error);
    }

    setUserInput("");
  };

  const scrollEndRef = useRef(null);

  useEffect(() => {
    scrollEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="md:w-[500px] w-screen overflow-hidden md:h-[650px] h-screen border-solid border border-gray-200 rounded-xl shadow-sm relative bg-white ">
      {/* header */}
      <div className="bg-blue-400 p-4 text-white flex flex-col ">
        <div className="flex items-center gap-2">
          <div className="w-[40px] h-[40px] bg-white rounded-full overflow-hidden flex items-center justify-center">
            <img src={Profile} alt="" className="w-full h-full" />
          </div>
          <div className="flex flex-col leading-3.5">
            <div className="Poppins">Doctor AI</div>
            <div>
              {thinking && <span className="text-[10px]">Typing...</span>}
            </div>
          </div>
        </div>
      </div>

      {/* messages */}
      <div className="overflow-y-auto flex flex-col h-[500px]">
        {messages.length === 0 && (
          <div className="flex items-center justify-center text-center w-full h-full">
            <p className="text-[12px] text-gray-400">
              This is AI Healthcare assistant. <br /> You can ask question
              related to healthcare.
            </p>
          </div>
        )}

        {messages.map((message, index) => (
          <div
            key={index}
            className={`${
              message.role === "user" ? "justify-end" : "justify-start"
            } flex p-6 py-4 mt-2`}
          >
            <div
              className={`${
                message.role === "user"
                  ? "bg-blue-500 text-white rounded-lg rounded-br-none"
                  : "bg-gray-200 text-black rounded-lg rounded-bl-none"
              } px-4 py-2 max-w-[70%] text-[15px]`}
            >
              {message.message}
            </div>
          </div>
        ))}
        {/* 
        {thinking && (
          <div className="flex justify-start p-6 py-4 mt-2">
            <div className="bg-gray-200 text-black rounded-lg rounded-bl-none  px-4 py-2 max-w-[70%] text-[15px]">
              Thinking...
            </div>
          </div>
        )} */}

        <div ref={scrollEndRef}></div>
      </div>

      {/* input */}
      <form
        className="w-full absolute bottom-0 flex items-center gap-2 py-1 px-4 pb-3"
        onSubmit={sendHandler}
      >
        <input
          type="text"
          placeholder="Enter your message"
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
          className="w-full outline-none border-none py-3 text-[15px] bg-gray-100 rounded-full px-4"
        />
        <button
          type="submit"
          className="bg-blue-400 p-3 rounded-full cursor-pointer hover:bg-blue-500/80 transition-colors duration-150"
        >
          <IoSend className="text-white text-[20px]" />
        </button>
      </form>
    </div>
  );
};

export default ChatBot;
