import { useEffect, useState } from "react";

const messages1 = ["Hi, chiefs", "Look at me, I made a React", "... rats ... rats ... rats ...", "A worthy project", "has anyone seen my spectacles?", "white, no sugar", "HOT POTATO!", "News: Scientists construct new setState", "Yo' momma drills props", "Your cookies now have their own website", "OH! DID U GET THE BROOM CLOSET ENDING? THE BROOM CLOSET ENDING WAS MY FAVRITE!1 XD", "Haha! Gary.", "I'm as mad as hell, and I'm not going to take this anymore", "Chicken isn't vegan?", "still trying to make fetch() happen"];

function randomMessage(message) {
  return message[Math.floor(Math.random() * message.length)];
}

const Messages = () => {
  const [message, setMessage] = useState("UwU");

  // add side effect to component
  useEffect(() => {
    // create interval
    const interval = setInterval(
      // set message every 5s
      () => setMessage(randomMessage(messages1)),
      10000
    );
    // clean up interval on unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="messages">
      <p className="message-content">{message}</p>
    </div>
  );
};

export default Messages;
