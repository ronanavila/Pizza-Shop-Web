import { http, HttpResponse } from "msw";

import { GetManagedRestaurantResponse } from "../get-managed-retaurant";

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>("/managed-restaurant", () => {
  return HttpResponse.json(
    {
      id: "custom-id-managed-retaurant",
      name: "pizza.shop",
      description: "custom description",
      managerId: "custom-id-user",
      createdAt: new Date("01/01/2024"),
      updatedAt: null,
    },
    { status: 200 },
  );
});
