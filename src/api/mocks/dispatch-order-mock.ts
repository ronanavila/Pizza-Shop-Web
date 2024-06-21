import { http, HttpResponse } from "msw";

import { DispatchOrderParams } from "../dispatch-order";

export const dispatchOrderMock = http.patch<DispatchOrderParams, never, never>(
  "/orders/:orderId/dispatch",
  async ({ params }) => {
    if (params.orderId === "error-order-id") {
      return HttpResponse.json({ status: 400 });
    }
    return HttpResponse.json({ status: 204 });
  },
);
