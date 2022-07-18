import api from "../apiClient";

export function login(data) {
  return api.post("auth/login", JSON.stringify(data));
}
export function completeLogin(data) {
  return api.post("auth/complete_login", JSON.stringify(data));
}
