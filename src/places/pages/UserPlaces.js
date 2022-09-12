import React from "react";
import { useParams } from "react-router-dom";
import { DUMMY_DATA } from "../../Constants";
import PlaceList from "../components/PlaceList";

const UserPlaces = () => {
  const { userId } = useParams();
  const loadedPlaces = DUMMY_DATA.filter(place => place.creator === userId)
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
