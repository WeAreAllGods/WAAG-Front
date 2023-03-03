import axios, { AxiosRequestConfig } from 'axios';

export const httpClient = (() => {
  const instance = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true,
  });

  // instance.interceptors.request.use()
  // instance.interceptors.response.use();

  return {
    async get<T>(url: string, config?: AxiosRequestConfig) {
      return instance.get<T>(url, config);
    },
    async post<T>(url: string, data: any, config?: AxiosRequestConfig) {
      return instance.post<T>(url, data, config);
    },
    // async patch<T>() {},
    // async delete<T>() {},
  };
})();
