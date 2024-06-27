import axios, { AxiosInstance, InternalAxiosRequestConfig, Method } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Set your API base URL here or in .env file
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null; // Get token from localStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // Add token to headers
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

interface RequestConfig {
  url: string;
  method: Method;
  data?: any;
}

interface CustomError {
  statusCode: number;
  message: string;
}

const request = async ({ url, method, data }: RequestConfig) => {
  try {
    const response = await axiosInstance({
      url,
      method,
      data,
    });
    return response.data;
  } catch (error: any) {
    const statusCode = error.response?.status || 500;
    const message = error.response?.data?.message || 'An unexpected error occurred';
    
    console.error('Request error:', error.response);

    const customError: CustomError = {
      statusCode,
      message,
    };

    throw customError;
  }
};

export default request;
