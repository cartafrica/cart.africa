import api from "../apiClient";

export function getProfile() {
  return api.get("account/me/info");
}
export function updateProfile(data) {
  return api.post("account/me/info", JSON.stringify(data));
}
