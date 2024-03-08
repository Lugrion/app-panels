import React from "react";

const Notification = ({ message, type }) => {
  return (
    <div className={`notification alert alert-${type}`} role="alert">
      {message}
    </div>
  );
};

export default Notification;
