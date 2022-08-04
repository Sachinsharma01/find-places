import React from "react";
import "./UserItem.css";

const UsertItem = ({ id, name, image, placeCount }) => {
  return (
    <li className="user-item">
      <div className="user-item__content">
        <div className="user-item__image">
          <img src={image} alt={name} />
        </div>
        <div className="user-item__info">
          <h2>{name}</h2>
          <h2>
            {placeCount} {placeCount === 1 ? " place" : " places"}
          </h2>
        </div>
      </div>
    </li>
  );
};

export default UsertItem;
