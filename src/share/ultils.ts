import { Room } from "../interfaces/global";

export function getCenterMap(arr: Room[]) {
  let lat = 0;
  let lng = 0;

  if (arr.length == 0) {
    return {
      lat: 0,
      lng: 0,
    };
  }

  for (var i = 0; i < arr.length; i++) {
    lat += arr[i].lat;
    lng += arr[i].lng;
  }

  lat = lat / arr.length;
  lng = lng / arr.length;

  return {
    lat,
    lng,
  };
}
