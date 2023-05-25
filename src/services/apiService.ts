import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { API_URL } from "../share/constant";

class ApiService {
  axios: AxiosInstance;
  axiosConfig?: AxiosRequestConfig;
  constructor() {
    this.axios = axios.create({
      baseURL: API_URL,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
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

  getMethodToken(
    url: string,
    params?: object,
    config?: AxiosRequestConfig,
    isFlow?: boolean,
    isHandleError?: boolean
  ) {
    if (isFlow) {
      return this.hanldeFlow(
        this.axios.get(url, config),
        isFlow,
        isHandleError
      );
    }
    return this.axios.get(url, config);
  }

  postMethod(
    url: string,
    data: object,
    config?: AxiosRequestConfig,
    isFlow?: boolean,
    isHandleError?: boolean
  ) {
    console.log(data);
    return this.axios.post(url, data, config);
  }

  putMethod(
    url: string,
    data: object,
    config?: AxiosRequestConfig,
    isFlow?: boolean,
    isHandleError?: boolean
  ) {
    return this.hanldeFlow(
      this.axios.put(url, data, config),
      isFlow,
      isHandleError
    );
  }

  deleteMethod(
    url: string,
    config?: AxiosRequestConfig,
    isFlow?: boolean,
    isHandleError?: boolean
  ) {
    return this.hanldeFlow(
      this.axios.delete(url, config),
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
