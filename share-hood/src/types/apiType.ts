import z from "zod";

import {USER, ITEM_STATUS} from "../constants/constVariable";

type ItemStatusType = z.infer<typeof ITEM_STATUS>;
type UserRole = z.infer<typeof USER>;

export interface PersonalInfoType {
  firstName: string;
  lastName: string;
  phone: string;
  dateOfBirth: string;
}

export interface AddressType {
  addressId: string;
  addressLine: string;
  subProvince: string;
  province: string;
  zip: string;
}

export interface PaymentType {
  paymentId: string | null;
  cardNumber: string | null;
  cardName: string | null;
  cardExp: string | null;
  cardCvv: string | null;
}

export interface UserType {
  userID: string;
  email: string;
  role: string;
  password: string;
  personalInfo: PersonalInfoType;
  address: AddressType;
  payment: PaymentType;
}

export interface CreateUserInputType {
  password: string | Promise<string>;
  email: string;
  emailVerified: boolean;
  firstName: string;
  lastName: string;
  phone: string;
  dateOfBirth: string;
}

export interface ReviewType {
  reviewID: string;
  reviewRating: number;
  reviewComment: string;
  dateCreated: string;
  users: {
    userID: string;
    reviewerName: string;
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

export interface NotificationType {
  notificationID: string;
  notificationHeader: string;
  notificationDetails: string;
  notificationTimestamp: string;
  notificationType: string;
}

export interface WishlistType {
  wishListID: string;
  userID: string;
  item_ID: string;
  dateAdded: string;
  itemName: string;
  itemPrice: number;
  itemImage: string;
  category: string;
  ownerName: string;
}

export interface TransactionType {
  transactionID: string;
  userID: string;
  itemID: string;
  transactionStatus: string;
  transactionDate: string;
  itemReturnDate: string;
  paymentType: string;
  price: number;
  shippingLocation: string;
  itemRentedDuration: number;
  quantity: number;
  shippingMethod: string;
  itemArrivalDate: string;
  itemName: string;
  itemImage: string;
  itemPrice: number;
  ownerName: string;
  category: string;
}
