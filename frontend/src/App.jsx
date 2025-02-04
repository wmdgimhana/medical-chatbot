import React from "react";
import ChatBot from "./components/bot/ChatBot";

const App = () => {
  return (
    <div className="flex md:w-screen md:h-screen md:justify-center md:items-center bg-blue-100/10 relative overflow-hidden">
      <div className="absolute w-screen h-screen backdrop-blur-[200px] z-40"></div>
      <div className="absolute w-[500px] h-[200px] rounded-full bg-blue-500 top-50 left-0 rotate-[30deg]"></div>
      <div className="absolute w-[500px] h-[200px] rounded-full bg-blue-500 top-[200px] right-0 rotate-[30deg]"></div>

      <div className="z-50">
        <ChatBot />
      </div>
    </div>
  );
};

export default App;
