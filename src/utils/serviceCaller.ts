import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || '',
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Generic service caller function
export const serviceCaller = async <T>(
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
    apiRoute: string,
    options: AxiosRequestConfig = {}
): Promise<AxiosResponse<T>> => {
    try {
    if (!apiRoute) {
      throw new Error('Please provide an API route');
    }

    const response = await axiosInstance.request<T>({
      method,
      url: apiRoute,
      ...options,
    });

    return response;
  } catch (error: any) {
    console.log("error", error)
    // Handle errors more gracefully
    if (error.response) {
      // Server responded with a status code outside the 2xx range
      throw new Error(
        `Error: ${error.response.status} - ${error.response.data?.message || error.response.statusText}`
      );
    } else if (error.request) {
      // Request was made but no response received
      throw new Error('No response received from the server');
    } else {
      // Something else happened
      throw new Error(error.message || 'An unknown error occurred');
    }
  }
};

export const get = <T>(apiRoute: string, options?: AxiosRequestConfig) =>
  serviceCaller<T>('GET', apiRoute, options);

export const post = <T>(
  apiRoute: string,
  data: any,
  options?: AxiosRequestConfig
) => serviceCaller<T>('POST', apiRoute, { ...options, data });

export const patch = <T>(
  apiRoute: string,
  data: any,
  options?: AxiosRequestConfig
) => serviceCaller<T>('PATCH', apiRoute, { ...options, data });

export const del = <T>(apiRoute: string, options?: AxiosRequestConfig) =>
  serviceCaller<T>('DELETE', apiRoute, options);
