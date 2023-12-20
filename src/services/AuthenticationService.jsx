import axios from "axios";
import { jwtDecode } from "jwt-decode";

const apiUrl = process.env.REACT_APP_API_URL;

export async function login(credential) {
  try {
    const response = await axios.post(apiUrl + "/authenticate", credential);
    const token = response ? response.data.data : null;
    if (token) localStorage.setItem("token", JSON.stringify(token));
  } catch (error) {
    throw new Error('Login failed: ' + error.response.data.message);
  }
}

export function getCurrentUser() {
  const token = localStorage.getItem("token");
  return token ? jwtDecode(token) : null;
}

export function logout() {
  localStorage.removeItem("token");
}