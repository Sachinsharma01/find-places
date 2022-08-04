import React from "react";
import "./UserList.css";
import UsertItem from "./UsertItem";

const UserList = ({ users }) => {
  if (users.length === 0) {
    return (
      <>
        <div className="center">
          <h2>
            No Users Found..{" "}
            <span role="img" aria-label="">
              😯
            </span>
          </h2>
        </div>
      </>
    );
  }

  return (
    <ul className="users-list">
      {users.map((user) => {
        return (
          <UsertItem
            key={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.placeCount}
          />
        );
      })}
    </ul>
  );
};

export default UserList;
