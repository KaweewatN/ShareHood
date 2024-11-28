"use client";

// main
import {useEffect, useState} from "react";
import Link from "next/link";

// icons
import Icons from "@components/icons/icons";
import {usePathname} from "next/navigation";

export default function Menubar() {
  const [isClient, setIsClient] = useState(false); // prevent the hydration error
  const pathname: string = usePathname();
  let role = typeof window !== "undefined" ? localStorage.getItem("role") : "rentee";
  useEffect(() => {
    setIsClient(true);
    if (!role) {
      localStorage.setItem("role", "rentee");
      role = "rentee";
    } else if (role !== "rentee" && role !== "admin") {
      localStorage.setItem("role", "owner");
      role = "owner";
    } else if (role === "admin") {
      localStorage.setItem("role", "admin");
      role = "admin";
    }
  }, [role]);

  // prevent the hydration error
  if (!isClient) {
    return null; // Render nothing on the server
  }

  return (
    <nav className="fixed bottom-0 left-1/2 z-50 w-full max-w-screen-sm -translate-x-1/2 transform">
      <ul className="shadow-t-lg flex w-full items-center justify-around bg-white p-5">
        <li>
          <Link
            href={role === "rentee" ? "/home" : `/${role}`}
            className={
              role === "rentee"
                ? pathname === "/home" || pathname === "/browse" || pathname.includes("/item")
                  ? "text-defaultBgBlue"
                  : "text-gray-600"
                : pathname === "/owner" || pathname === "/admin"
                  ? "text-defaultBgBlue"
                  : "text-gray-600"
            }
          >
            {Icons.Home("text-xl")}
          </Link>
        </li>
        {role === "rentee" && (
          <>
            <li>
              <Link
                href="/wishlist"
                className={pathname === "/wishlist" ? "text-defaultBgBlue" : "text-gray-600"}
              >
                {pathname === "/wishlist" ? Icons.HeartFill("text-xl") : Icons.Heart("text-xl")}
              </Link>
            </li>
            <li>
              <Link
                href="/rentee/activity"
                className={
                  pathname.includes("/rentee/activity") ? "text-defaultBgBlue" : "text-gray-600"
                }
              >
                {Icons.Activity("text-2xl")}
              </Link>
            </li>
            <li>
              <Link
                href="/notification"
                className={pathname === "/notification" ? "text-defaultBgBlue" : "text-gray-600"}
              >
                {pathname === "/notification"
                  ? Icons.NotificationFill("text-xl")
                  : Icons.Notification("text-xl")}
              </Link>
            </li>
          </>
        )}

        {role === "owner" && (
          <>
            <li>
              <Link
                href="/owner/add-item"
                className={pathname === "/owner/add-item" ? "text-defaultBgBlue" : "text-gray-600"}
              >
                {Icons.Add("text-2xl")}
              </Link>
            </li>
            <li className="mb-1">
              <Link
                href="/owner/items"
                className={
                  pathname === "/owner/items" || pathname.includes("/owner/item-detail")
                    ? "mb-1 text-defaultBgBlue"
                    : "text-gray-600"
                }
              >
                {Icons.Bag("text-xl")}
              </Link>
            </li>
          </>
        )}

        <li>
          <Link
            href="/profile"
            className={pathname.includes("/profile") ? "text-defaultBgBlue" : "text-gray-600"}
          >
            {Icons.User("text-xl")}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
