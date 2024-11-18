import ActivityTab from "@components/activity/ActivityTab";
import {getUserID} from "@service/functions/NextAuthFunction";

export default async function Activity() {
  const userId = await getUserID();
  return (
    <>
      <ActivityTab userId={userId} />
    </>
  );
}
