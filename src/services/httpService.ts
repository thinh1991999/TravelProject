import apiService from "./apiService";
import axios, { AxiosRequestConfig } from "axios";
import {
  Amenity,
  Category,
  CheckOutITF,
  CheckoutInfoGet,
  SignupITF,
  UpdateITF,
} from "../interfaces/global";

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

  verifyEmail(token: string | null): Promise<any> {
    return apiService.postMethod(
      `/user/verify/email`,
      {},
      {
        params: {
          token,
        },
      },
      false,
      false
    );
  }

  signin(data: { email: string; password: string }): Promise<any> {
    return apiService.postMethod(`/user/login`, data, {}, false, false);
  }

  forgotPw(email: string): Promise<any> {
    return apiService.postMethod(
      `/user/forgot/pw`,
      {
        email,
      },
      {},
      false,
      false
    );
  }

  resetPwLink(token: string | null, newPw: string): Promise<any> {
    return apiService.postMethod(
      `/user/reset/pw/link`,
      {
        token,
        newPw,
      },
      {},
      false,
      false
    );
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

  getProfile(token: string): Promise<any> {
    return apiService.getMethodToken(
      `/users/me`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }

  getBookings(token: string): Promise<any> {
    return apiService.getMethodToken(
      `/users/me/bookings`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }

  updateAvatar(data: FormData, token: string): Promise<any> {
    return apiService.postMethod(
      `/user/me/avatar/update`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      },
      false,
      false
    );
  }

  updateProfile(data: UpdateITF, token: string): Promise<any> {
    return apiService.putMethod(
      `/user/me/profile/update`,
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

  // End handle user

  getDetail(id: string): Promise<any> {
    return apiService.getMethod(`/room`, {
      id,
    });
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

  getRoomFilter(params: object): Promise<any> {
    return apiService.getMethod(`/room/filter`, params);
  }

  getRoomFilterName(value: string): Promise<any> {
    return apiService.getMethod(`/room/name/match`, {
      name: value,
    });
  }

  // Begin handle review
  getReview(id: number) {
    return axios.get(
      "https://mocki.io/v1/db00f0ef-78f5-414d-8ca0-cd4f9c29559c"
    );
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

  updateReview(
    data: {
      rating: number;
      description: string;
    },
    id: string,
    token: string
  ): Promise<any> {
    return apiService.putMethod(
      `/review/update`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          id,
        },
      },
      false,
      false
    );
  }

  deleteReview(id: string, token: string): Promise<any> {
    return apiService.deleteMethod(
      `/review/delete`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          id,
        },
      },
      false,
      false
    );
  }

  likeReview(token: string, id: string): Promise<any> {
    return apiService.postMethod(
      `/review/like`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          id,
        },
      },
      false,
      false
    );
  }

  dislikeReview(token: string, id: string): Promise<any> {
    return apiService.postMethod(
      `/review/dislike`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          id,
        },
      },
      false,
      false
    );
  }

  // End handle review

  // Begin handle property type
  getPropertyType(): Promise<any> {
    return apiService.getMethod(`/propertyType/all`);
  }
  // End handle property type

  // Begin handle type place
  getTypePlaces(): Promise<any> {
    return apiService.getMethod(`/typePlace/all`);
  }
  // End handle type place

  // Begin handle filter
  getFiltersCount(data: object): Promise<any> {
    return apiService.getMethod(`/room/filter/count`, {
      ...data,
    });
  }
  // End handle type place

  // Begin handle checkout

  getPrice(data: object): Promise<any> {
    return apiService.getMethod(`/checkout/price`, {
      ...data,
    });
  }

  getInfoCheckout(data: CheckoutInfoGet): Promise<any> {
    return apiService.getMethod(`/checkout/info`, {
      ...data,
    });
  }

  checkout(data: CheckOutITF, token: string): Promise<any> {
    console.log(token);

    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return apiService.postMethod(
      `/checkout`,
      {
        ...data,
      },
      config
    );
  }

  // End handle checkout
}

export default new HttpService();
