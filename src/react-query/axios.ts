"use client";
import axios, { AxiosError } from "axios";

axios.defaults.headers.common.Accept = "application/json";
axios.defaults.timeout = 12000;

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
});

export const getAxiosErrorMessage = (error: AxiosError): string => {
  return (error as any).response?.data?.message || error.message;
};

export default axiosInstance;
