import WishListContainer from "@components/wishlist/WishlistContainer";
import {getUserID} from "@service/functions/NextAuthFunction";

export default async function WistList() {
  const userId = await getUserID();
  return (
    <>
      <WishListContainer userId={userId} />
    </>
  );
}
