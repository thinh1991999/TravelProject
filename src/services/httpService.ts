import apiService from "./apiService";
import axios from "axios";
import { Amenity, Category, SignupITF } from "../interfaces/global";

class HttpService {
  searchRooms() {
    return axios.get(
      "https://mocki.io/v1/f094f682-7578-4af3-912a-38da36ef23ec"
    );
  }

  // Begin handle user
  signup(data: SignupITF): Promise<any> {
    return apiService.postMethod(`/user/create`, data, {}, false, false);
  }

  signin(data: { email: string; password: string }): Promise<any> {
    return apiService.postMethod(`/user/login`, data, {}, false, false);
  }

  logout(token: string): Promise<any> {
    return apiService.postMethod(
      `/user/me/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      false,
      false
    );
  }

  // End handle user

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

  getDetailReview(id: string): Promise<any> {
    return apiService.getMethod(
      `/review/all`,
      {
        id,
      },
      false,
      false
    );
  }

  createReview(
    data: {
      room: string;
      rating: number;
      description: string;
    },
    token: string
  ): Promise<any> {
    return apiService.postMethod(
      `/review/create`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      false,
      false
    );
  }
}

export default new HttpService();
