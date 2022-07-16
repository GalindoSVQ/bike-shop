export const API = {
  BASE_URL: "http://localhost:3000/",
  PRODUCTS: "products",
  LIMIT: 10,
} as const;

type APIKeys = keyof typeof API;
type APIValues = typeof API[APIKeys];

export type { APIKeys, APIValues };
