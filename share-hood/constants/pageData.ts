import Icons from "@components/icons/icons";

export const HOME_CATEGORIES: Array<{
  name: string;
  icon: JSX.Element;
}> = [
  {name: "Gadgets", icon: Icons.headphones()},
  {name: "Clothes", icon: Icons.Cloth()},
  {name: "Subscriptions", icon: Icons.Subscription()},
  {name: "Automotive", icon: Icons.Car()},
  {name: "Shoes", icon: Icons.Shoes()},
];

export const FEATURE_CATEGORIES = [
  {name: "Gadgets", icon: Icons.Mobile()},
  {name: "Clothes", icon: Icons.Tshirt()},
  {name: "Costumes", icon: Icons.Tie()},
  {name: "Office Equipment", icon: Icons.Chair()},
  {name: "Event Supplies", icon: Icons.Gifts()},
  {name: "High heels", icon: Icons.HighHeel()},
  {name: "Travel gear", icon: Icons.Suitcase()},
  {name: "Automotive", icon: Icons.Car()},
];

export const CATEGORIES = [{name: "Photography", icon: Icons.Camera()}];
