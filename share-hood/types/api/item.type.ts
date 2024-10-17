import z from "zod";

import {ITEM_STATUS} from "constants/constVariable";

type ItemStatusType = z.infer<typeof ITEM_STATUS>;

export type CreateNewItem = {};
