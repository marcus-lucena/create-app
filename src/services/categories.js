import { api } from "./api";

export function all() {
  return api.get("/categories");
}
