import { http, HttpResponse } from "msw";

import { GetPopularProductsResponse } from "../get-popular-products";

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>("/metrics/popular-products", () => {
  return HttpResponse.json(
    [
      { product: "banana 1", amount: 50 },
      { product: "banana 12", amount: 35 },
      { product: "banana 13", amount: 22 },
      { product: "banana 14", amount: 13 },
      { product: "banana 15", amount: 10 },
    ],
    {
      status: 200,
    },
  );
});
