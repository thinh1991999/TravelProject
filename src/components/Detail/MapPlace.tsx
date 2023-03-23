import React from "react";
import Map from "../Map";
import GoogleMapReact from "google-map-react";
import { useAppSelector } from "../../store/hook";
import MarkerPlace from "./MarkerPlace";

const MapPlace = () => {
  const roomDetail = useAppSelector((state) => state.detail.roomDetail);
  if (!roomDetail) return <></>;
  const {
    room: {
      location: { address, coordinates },
    },
  } = roomDetail;

  return (
    <div>
      <h4>Where you’ll be</h4>
      <span className="mt-3 block">{address}</span>
      <div className="h-[300px] md:h-[400px] lg:h-[500px] mt-5">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyAD7gaoGXmcsdXipVEpnUIY_ieYC0M3Q1s",
          }}
          center={{
            lat: coordinates[1],
            lng: coordinates[0],
          }}
          defaultCenter={{
            lat: coordinates[1],
            lng: coordinates[0],
          }}
          defaultZoom={3}
          options={{
            scrollwheel: false,
            // zoomControl: true,
            gestureHandling: "greedy",
          }}
        >
          <MarkerPlace lat={coordinates[1]} lng={coordinates[0]}></MarkerPlace>
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default MapPlace;
