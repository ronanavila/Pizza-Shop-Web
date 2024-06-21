import { http, HttpResponse } from "msw";

import {
  GetOrderDetailsParams,
  GetOrderDetailsReponse,
} from "../get-order-details";

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsReponse
>("/orders/:orderId", ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: "Batman Doe",
      email: "batman@doe.com",
      phone: "11999998888",
    },
    createdAt: new Date().toDateString(),
    orderItems: [
      {
        id: "order-item-1",
        priceInCents: 5000,
        quantity: 1,
        product: {
          name: "banana",
        },
      },
      {
        id: "order-item-2",
        priceInCents: 7500,
        quantity: 2,
        product: {
          name: "pessego",
        },
      },
    ],
    status: "canceled",
    totalInCents: 20000,
  });
});
