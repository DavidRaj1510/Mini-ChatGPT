import React from "react";

const ChatbotIcon = ({ size = 64, color = "black" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
    >
      {/* Head (larger and more centered) */}
      <rect x="15" y="20" width="50" height="45" rx="8" />
      
      {/* Eyes */}
      <circle cx="30" cy="38" r="4" fill="white" />
      <circle cx="50" cy="38" r="4" fill="white" />
      
      {/* Mouth */}
      <rect x="32" y="52" width="16" height="4" rx="2" fill="white" />
      
      {/* Side Ears (adjusted for larger head) */}
      <rect x="8" y="30" width="6" height="22" rx="1.5" />
      <rect x="66" y="30" width="6" height="22" rx="1.5" />
      
      {/* Top Antenna */}
      <rect x="38" y="8" width="4" height="12" rx="1" />
      <rect x="34" y="4" width="12" height="4" rx="1" />
      
      {/* Speech Bubbles */}
      <rect x="6" y="6" width="10" height="10" rx="2" />
      <rect x="64" y="6" width="10" height="10" rx="2" />
    </svg>
  );
};

export default ChatbotIcon;
