import React from "react";
import { DUMMY_DATA } from "../../Constants";
import PlaceList from "../components/PlaceList";


const UserPlaces = () => {
  return <PlaceList items={DUMMY_DATA} />;
};

export default UserPlaces;
