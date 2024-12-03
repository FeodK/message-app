import React from "react";
import "./Message.scss";

export default function Message({ text }) {
  return <div className="message">{text}</div>;
}
