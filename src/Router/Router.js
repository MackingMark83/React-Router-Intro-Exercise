import React from "react";
import "./Router.css";

function Message({children}) {
  return (
    <div className="Message">
      {children}
    </div>
  )
}

export default Message;
