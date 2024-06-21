import { http, HttpResponse } from "msw";

import { GetMonthCanceledOrdersAmountResponse } from "../get-month-canceled-orders";

export const getMonthCanceledOrdersAmountMock = http.get<
  never,
  never,
  GetMonthCanceledOrdersAmountResponse
>("/metrics/month-canceled-orders-amount", () => {
  return HttpResponse.json(
    { amount: 3, diffFromLastMonth: 10 },
    { status: 200 },
  );
});
