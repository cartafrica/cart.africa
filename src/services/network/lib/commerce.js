import api from "../apiClient";

export function getCart(id) {
  return api.get("api/v1/cart/" + id);
}

export function checkout(cart, data) {
  return api.post("api/v1/cart/" + cart + "/checkout", data);
}
