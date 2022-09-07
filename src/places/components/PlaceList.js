import React from "react";
import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";

import "./style/PlaceList.css";

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places Found create One....</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );
  }
  return (
    <div className="place-list">
      {props.items.map((place, idx) => {
        return <PlaceItem
          key={idx}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creatorId}
          coordinates={place.location}
        />;
      })}
    </div>
  );
};

export default PlaceList;
