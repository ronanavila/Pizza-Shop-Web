import { http, HttpResponse } from "msw";

import { GetDailyRevenueInPeriodResponse } from "../get-daily-revenue-in-period";

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>("/metrics/daily-receipt-in-period", () => {
  return HttpResponse.json(
    [
      { date: "21/06/2024", receipt: 5000 },
      { date: "20/06/2024", receipt: 3500 },
      { date: "18/06/2024", receipt: 2200 },
      { date: "17/06/2024", receipt: 13000 },
      { date: "16/06/2024", receipt: 1000 },
      { date: "15/06/2024", receipt: 10059 },
      { date: "14/06/2024", receipt: 70086 },
      { date: "19/06/2024", receipt: 600 },
    ],
    {
      status: 200,
    },
  );
});
