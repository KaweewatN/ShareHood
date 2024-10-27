import z from "zod";

import {ITEM_STATUS} from "constants/constVariable";

type ItemStatusType = z.infer<typeof ITEM_STATUS>;

export interface ItemType {
  itemID: string;
  userID: string;
  itemName: string;
  itemDescription: string;
  itemPrice: number;
  itemQuantity: number;
  itemStatus: ItemStatusType;
  category: string;
  itemReturnDuration: string;
  dateAdded: string;
  pickupLocation: string;
}
