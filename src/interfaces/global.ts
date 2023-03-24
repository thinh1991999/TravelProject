export interface Room {
  location: Location;
  _id: string;
  name: string;
  description: string;
  pricePerNight: number;
  propertyType: string;
  guests: number;
  bedrooms: number;
  beds: number;
  baths: number;
  amenities: string[];
  images: Image[];
  owner: Owner;
  bookings: any[];
  reviews: any[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface Image {
  publicUrl: string;
  hint: string;
}

export interface Location {
  type: string;
  coordinates: number[];
  address: string;
}

export interface Owner {
  _id: string;
  firstName: string;
  lastName: string;
}

export interface Price {
  rate: number;
  currency: string;
  total: null;
  priceItems: any[];
}

export interface GuestsITF {
  adults: number;
  children: number;
  infants: number;
  pets: number;
}

export type EachRoomType = "ALL" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | "MAX";

export interface FiltersITF {
  minPrice: number;
  maxPrice: number;
  bedRooms: EachRoomType;
  beds: EachRoomType;
  bathRooms: EachRoomType;
}

export interface Amenity {
  _id: string;
  name: string;
  icon_url: {
    publicUrl: string;
    hint: string;
  };
  description: string;
}

export interface Category {
  _id: string;
  name: string;
  icon_url: {
    publicUrl: string;
    hint: string;
  };
  description: string;
}

export interface PropertyType {
  _id: string;
  name: string;
  icon_url: {
    publicUrl: string;
    hint: string;
  };
  description: string;
}

export interface TypePlace {
  _id: string;
  name: string;
  description: string;
}

export interface SignupITF {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  address?: string;
  description?: string;
  phoneNumber?: string;
  gender?: "male" | "female" | "other";
}

export interface UpdateITF {
  firstName?: string;
  lastName?: string;
  address?: string;
  description?: string;
  phoneNumber?: string;
  gender?: "male" | "female" | "other";
}

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profilePic: string;
  verified: boolean;
  address: string;
  description: string;
  phoneNumber: string;
  gender: "male" | "female" | "other";
  listings: any[];
  bookings: any[];
  reviews: string[];
  isHost: boolean;
  isAdmin: boolean;
  resetPwLink: null;
  tokens: Token[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  hintPic: string;
}

export interface Token {
  token: string;
  _id: string;
}

export interface CheckoutPrice {
  price: number;
  days: number;
  total: number;
  tax: number;
}
