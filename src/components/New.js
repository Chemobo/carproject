import React, { useState } from "react";

const New = ({ view }) => {
  const { make, model, price } = view;
  const [isRead, setMarkRead] = useState();

  const MarkIsRead = () => {
    setMarkRead((isRead) => !isRead);
  };

  return (
    <div>
      <h3>{make}</h3>
      <p>{model}</p>
      <p>{price}</p>
      <div className="button-container">
        <button className="btn" onClick={MarkIsRead}>
          Mark as {isRead ? "Unread" : "Read"}
        </button>
      </div>
    </div>
  );
};

export default New;