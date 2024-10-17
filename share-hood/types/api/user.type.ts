import z from "zod";

import {USER} from "../../constants/constVariable";

type UserType = z.infer<typeof USER>;

export type CreateNewUserType = {
  userID: string;
  password: string;
  email: string;
  role: UserType;
  verified: boolean;
};
