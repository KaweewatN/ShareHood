import {getUserID} from "@service/functions/NextAuthFunction";
import ActivityContainer from "@components/activity/ActivityContainer";

export default async function Activity() {
  const userId = await getUserID();
  return (
    <>
      <ActivityContainer userId={userId} />
    </>
  );
}
