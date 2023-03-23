import React from "react";
import GoogleMapReact from "google-map-react";

const Location = () => {
  return (
    <div className="w-[600px] m-auto">
      <h2
        className="mb-5"
        style={{
          animation: `moveTop 3s forwards`,
        }}
      >
        Where's your place located?
      </h2>
      <span
        className="block opacity-0 mb-5 text-xl"
        style={{
          animation: `moveTop 3s forwards`,
        }}
      >
        Your address is only shared with guests after they’ve made a
        reservation.
      </span>
      <div className="h-[400px] w-full rounded-xl overflow-hidden">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyAD7gaoGXmcsdXipVEpnUIY_ieYC0M3Q1s",
          }}
          defaultCenter={{
            lat: 36.150402,
            lng: -94.157295,
          }}
          defaultZoom={0}
          center={{
            lat: 36.150402,
            lng: -94.157295,
          }}
          options={{
            // scrollwheel: false,
            // zoomControl: true,
            gestureHandling: "greedy",
          }}
        ></GoogleMapReact>
      </div>
    </div>
  );
};
export default Location;
