import { RoomDetail } from "./detail";
import { Amenity, Category, Room } from "./global";

export type GlobalState = {
  isSearchHeader: Boolean;
  searchDrop: null | number;
  amenities: Amenity[];
  categories: Category[];
  mainLoading: boolean;
  user: any | null;
  token: string | null;
};

export type DetailState = {
  id: string | null;
  adults: number;
  children: number;
  infants: number;
  pets: number;
  checkin: number | null;
  checkout: number | null;
  list: any;
  roomDetail: RoomDetail | null;
};

export type SearchState = {
  data: Room[];
  hoverId: string | null;
  activeId: string | null;
  showMap: boolean;
};

export enum GuestsEnum {
  ADULTS = "adults",
  CHILDREN = "children",
  INFANTS = "infants",
  PETS = "pets",
}
