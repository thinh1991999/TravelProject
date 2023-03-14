import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

class ApiService {
  axios: AxiosInstance;
  axiosConfig?: AxiosRequestConfig;
  constructor() {
    this.axios = axios.create({
      baseURL: "http://localhost:8000",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDA2YzU3NjQ4OWI5Y2VhZjAzYmJjY2UiLCJpYXQiOjE2NzgxODA1MDF9.YPTPpdLHxxWEsCMT_JZaIafvxJ4yoyJ-gB9kz_oLKIo`,
      },
    });
  }

  getMethod(
    url: string,
    params?: object,
    isFlow?: boolean,
    isHandleError?: boolean
  ) {
    this.axiosConfig = {
      params,
    };
    if (isFlow) {
      return this.hanldeFlow(
        this.axios.get(url, this.axiosConfig),
        isFlow,
        isHandleError
      );
    }
    return this.axios.get(url, this.axiosConfig);
  }

  postMethod(
    url: string,
    data: object,
    config?: AxiosRequestConfig,
    isFlow?: boolean,
    isHandleError?: boolean
  ) {
    return this.hanldeFlow(
      this.axios.post(url, data, config),
      isFlow,
      isHandleError
    );
  }

  hanldeFlow = (
    method: Promise<AxiosResponse<any, any>>,
    loading = true,
    error = true
  ) => {
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
          error && this.handleError(err);
          reject(err);
        });
    });
  };
  handleError(err: any) {
    const status = err?.response?.status;
    switch (status) {
      case 404:
        window.location.replace("/error");
        break;
      default:
        window.location.replace("/error");
        break;
    }
  }
}

export default new ApiService();
