import { http, HttpResponse } from "msw";

import { DeliverOrderParams } from "../deliver-order";

export const deliverOrderMock = http.patch<DeliverOrderParams, never, never>(
  "/orders/:orderId/deliver",
  async ({ params }) => {
    if (params.orderId === "error-order-id") {
      return HttpResponse.json({ status: 400 });
    }
    return HttpResponse.json({ status: 204 });
  },
);
