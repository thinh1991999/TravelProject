import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import { Room } from "../interfaces/global";

const Map = ({ data }: { data: Room[] }) => {
  const [center, setCenter] = useState({
    lat: 0,
    lng: 0,
  });
  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: "AIzaSyAD7gaoGXmcsdXipVEpnUIY_ieYC0M3Q1s",
      }}
      defaultCenter={center}
      defaultZoom={0}
      center={center}
      options={{
        // scrollwheel: false,
        // zoomControl: true,
        gestureHandling: "greedy",
      }}
    >
      {data.map((item, index) => {
        const { coordinates } = item.location;
        return (
          <Marker
            key={index}
            lat={coordinates[0]}
            lng={coordinates[1]}
            data={item}
          />
        );
      })}
    </GoogleMapReact>
  );
};

export default Map;
