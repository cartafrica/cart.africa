import api from "../apiClient";

export function login(data) {
  return api.post("api/v1/buyer/auth", data);
}
export function completeLogin(data) {
  return api.post("api/v1/buyer/auth/complete", data);
}
