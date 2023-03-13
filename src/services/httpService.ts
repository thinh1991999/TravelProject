import apiService from "./apiService";
import axios from "axios";
import { Amenity, Category } from "../interfaces/global";

class HttpService {
  searchRooms() {
    return axios.get(
      "https://mocki.io/v1/f094f682-7578-4af3-912a-38da36ef23ec"
    );
  }
  getDetail(id: string): Promise<any> {
    return apiService.getMethod(`/room`, {
      id,
    });
  }

  getReview(id: number) {
    return axios.get(
      "https://mocki.io/v1/db00f0ef-78f5-414d-8ca0-cd4f9c29559c"
    );
  }

  getAmenities(): Promise<any> {
    return apiService.getMethod(`/amenity/all`);
  }

  getCategories(): Promise<any> {
    return apiService.getMethod(`/category/all`);
  }

  getRoomAll(): Promise<any> {
    return apiService.getMethod(`/room/all`);
  }

  getDetailReview(id: string) {
    return apiService.getMethod(`/review/detail`, {
      id,
    });
  }
}

export default new HttpService();
