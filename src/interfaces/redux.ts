export type GlobalState = {
  isSearchHeader: Boolean;
  searchDrop: null | number;
};

export type DetailState = {
  id: string | null;
  adults: number;
  children: number;
  infants: number;
  pets: number;
  checkin: number | null;
  checkout: number | null;
};

export enum GuestsEnum {
  ADULTS = "adults",
  CHILDREN = "children",
  INFANTS = "infants",
  PETS = "pets",
}
