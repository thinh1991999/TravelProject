import apiService from "./apiService";
import axios from "axios";

class HttpService {
  searchRooms() {
    return apiService.getMethod("search-geo", {
      ne_lat: "52.51",
      ne_lng: "13.41",
      sw_lat: "52.41",
      sw_lng: "13.51",
      checkin: "2023-03-01",
      checkout: "2023-04-08",
      adults: "1",
      children: "0",
      infants: "0",
      page: "1",
    });
  }
  getDetail(id: number) {
    return axios.get(
      "https://mocki.io/v1/6757e5e3-ab2b-4157-9518-8b08bdf3378a"
    );
  }

  getReview(id: number) {
    return axios.get(
      "https://mocki.io/v1/db00f0ef-78f5-414d-8ca0-cd4f9c29559c"
    );
  }
}

export default new HttpService();
