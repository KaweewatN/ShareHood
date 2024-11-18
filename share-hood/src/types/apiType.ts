import z from "zod";

import {USER, ITEM_STATUS} from "../constants/constVariable";

type ItemStatusType = z.infer<typeof ITEM_STATUS>;
type UserRole = z.infer<typeof USER>;

export interface UserType {
  userID: string;
  password: string;
  email: string;
  role: UserRole;
  verified: boolean;
}
export interface ReviewType {
  reviewID: string;
  reviewRating: number;
  reviewComment: string;
  dateCreated: string;
  users: {
    userID: string;
    reviewerName: string;
    reviewerImage?: string; // Optional image path for reviewer
  };
}

export interface ItemTypeInitial {
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
  pickupLocation?: string;
  pickupDate?: string;
  itemImage?: string;
  ownerName: string;
  reviewID: string;
  reviewRating: string;
  reviewComment: number;
  reviewerUserID?: string;
  reviewerName?: string;
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
  pickupLocation?: string;
  pickupDate?: string;
  itemImage: string;
  ownerName: string;
  reviews?: ReviewType[];
}

export interface OwnerItemType {
  itemID: string;
  itemName: string;
  itemImage: string;
  itemPrice: number;
  category: string;
  itemStatus: string;
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
