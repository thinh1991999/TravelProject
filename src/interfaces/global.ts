export interface Room {
  id: string;
  url: string;
  deeplink: string;
  position: number;
  name: string;
  bathrooms: number;
  bedrooms: number;
  beds: number;
  city: string;
  images: string[];
  hostThumbnail: string;
  isSuperhost: boolean;
  rareFind: boolean;
  lat: number;
  lng: number;
  persons: number;
  reviewsCount: number;
  type: string;
  userId: number;
  address: string;
  amenityIds: number[];
  previewAmenities: any[];
  cancelPolicy: string;
  price: Price;
  rating?: number;
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
