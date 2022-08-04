import React from "react";
import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      name: "Sachin Sharma",
      placeCount: 3,
      image: "#",
      id: 1,
    },
  ];

  return <UserList users={USERS} />;
};

export default Users;
