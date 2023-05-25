import moment from "moment";
import { Review } from "../interfaces/detail";
import { Room } from "../interfaces/global";

export function getCenterMap(arr: Room[]) {
  // let lat = 0;
  // let lng = 0;
  // if (arr.length == 0) {
  //   return {
  //     lat: 0,
  //     lng: 0,
  //   };
  // }
  // for (var i = 0; i < arr.length; i++) {
  //   lat += arr[i].lat;
  //   lng += arr[i].lng;
  // }
  // lat = lat / arr.length;
  // lng = lng / arr.length;
  // return {
  //   lat,
  //   lng,
  // };
}

export const getAverageRating = (reviews: Review[]) => {
  console.log(reviews);
  
  if (reviews.length === 0) return 0;
  const total = reviews.reduce((prev, curr) => {
    return (prev += curr.rating);
  }, 0);
  
  return (total / reviews.length).toFixed(2);
};

export const validateImage = (str: string) => {
  let regex = new RegExp(/[^\s]+(.*?).(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/);

  // if str
  // is empty return false
  if (str == null) {
    return true;
  }

  // Return true if the str
  // matched the ReGex
  if (regex.test(str) == true) {
    return true;
  } else {
    return false;
  }
};

export const removeNull = (obj: any) => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === null) {
      delete obj[key];
    }
  });
  return obj;
};

export const getTime = (time: any) => {
  return moment(time).format("DD/MM/YYYY");
};

export const getGuests = (
  adults: number|string,
  children: number|string,
  // infants: number|string,
  pets: number|string
) => {
  const guests=Number(adults)*1+Number(children)*1;
  const guestsT = `${guests} guests`;
  // const infantsT = infants ? `,${infants} infants` : "";
  const petsT = pets ? `,${pets} pets` : "";
  return guestsT  + petsT;
};


export const getDateArrBetween=(begin:string,des:string)=>{
  const start = moment(begin);
  const end = moment(des);

  const daysBetween = [];
  let currentDay = moment(start);
  const currDay = moment();
  while (currentDay.isSameOrBefore(end)) {
    const checkDiff = currentDay.diff(currDay, "days");
    console.log(checkDiff, currentDay.calendar(),currDay.calendar());
    if (checkDiff >= 0) {
          daysBetween.push(currentDay.format("YYYY-MM-DD"));
    }
    currentDay.add(1, "day");
  }
  return daysBetween
}


export const checkIncludeDate=(arr:string[],date:Date)=>{
  const dateC = moment(date).format("YYYY-MM-DD");
  return arr.includes(dateC)
}


export const checkValidDateCalendar = (start: Date, end: Date, disabledArr: string[]) => {
  
};