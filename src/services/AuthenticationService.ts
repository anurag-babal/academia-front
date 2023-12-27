import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { User } from "../models/User";

const apiUrl = process.env.REACT_APP_API_URL;

export async function login(credential: { username: string; password: string; }) {
  try {
    const response: any = await axios.post(apiUrl + "/authenticate", credential);
    const token: string | undefined = response?.data?.data ?? undefined;
    if (token) localStorage.setItem("token", JSON.stringify(token));
  } catch (error: any) {
    const errorMessage: string = error?.response?.data?.message ?? "Server not reachable";
    throw new Error('Login failed: ' + errorMessage);
  }
}

export function getCurrentUser(): User | undefined {
  const token: string | null = localStorage.getItem("token");
  return token ? jwtDecode(token) : undefined;
}

export function logout() {
  localStorage.removeItem("token");
}