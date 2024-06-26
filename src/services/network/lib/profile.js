import api from "../apiClient";

export function getProfile() {
  return api.get("api/v1/buyer/profile");
}
export function getAddresses() {
  return api.get("account/addresses");
}
export function createAddress(data) {
  return api.post("account/addresses", JSON.stringify(data));
}
export function updateProfile(data) {
  return api.post("account/me/info", JSON.stringify(data));
}
