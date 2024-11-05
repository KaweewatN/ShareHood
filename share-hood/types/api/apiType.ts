import z from "zod";

import {USER} from "../../constants/constVariable";
import {ITEM_STATUS} from "../../constants/constVariable";

type ItemStatusType = z.infer<typeof ITEM_STATUS>;
type UserRole = z.infer<typeof USER>;

export interface UserType {
  userID: string;
  password: string;
  email: string;
  role: UserRole;
  verified: boolean;
}

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
  itemImage: string;
  ownerName: string;
}

export interface NotificationType {
  notificationID: string;
  title: string;
  description: string;
  dateCreated: string;
  status: string;
}

export interface WishlistType {
  wishlistID: string;
  userID: string;
  itemID: string;
  dateAdded: string;
  itemName: string;
  itemPrice: number;
  category: string;
  ownerName: string;
}
