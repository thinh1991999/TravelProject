import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

class ApiService {
  axios: AxiosInstance;
  axiosConfig?: AxiosRequestConfig;
  constructor() {
    this.axios = axios.create({
      baseURL: "https://airbnb13.p.rapidapi.com/",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Key": "adb6f1f468msh94f685417cf15efp19202bjsn84df30def03e",
        "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
      },
    });
  }

  getMethod(url: string, params: object) {
    this.axiosConfig = {
      params,
    };
    return this.hanldeFlow(this.axios.get(url, this.axiosConfig), true);
  }
  hanldeFlow = (method: Promise<AxiosResponse<any, any>>, loading = true) => {
    return new Promise((resolve, reject) => {
      method
        .then((res) => {
          resolve({
            data: res.data,
            status: res.status,
            isSuccess: true,
          });
        })
        .catch((err) => {
          this.handleError(err);
          reject({
            err: err,
          });
        });
    });
  };
  handleError(err: any) {
    const status = err?.response?.status;
    switch (status) {
      case 404:
        window.location.assign("/error");
        break;
      default:
        window.location.assign("/error");
        break;
    }
  }
}

export default new ApiService();
