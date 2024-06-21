import { http, HttpResponse } from "msw";

import { GetProfileResponse } from "../get-profile";

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  "/me",
  () => {
    return HttpResponse.json(
      {
        id: "custom-id-user",
        email: "user@domain.com",
        name: "john",
        phone: "11999998888",
        role: "manager",
        createdAt: new Date("01/01/2024"),
        updatedAt: null,
      },
      { status: 200 },
    );
  },
);
