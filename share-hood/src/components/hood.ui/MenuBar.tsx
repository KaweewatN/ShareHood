"use client";

// main
import Link from "next/link";

// icons
import Icons from "@components/icons/icons";
import {usePathname} from "next/navigation";

export default function Menubar() {
  const pathname: string = usePathname();

  return (
    <nav className="fixed bottom-0 left-1/2 z-50 w-full max-w-screen-sm -translate-x-1/2 transform">
      <ul className="shadow-t-lg flex w-full items-center justify-around bg-white p-5">
        <li>
          <Link
            href="/home"
            className={pathname === "/home" ? "text-defaultBgBlue" : "text-gray-600"}
          >
            {Icons.Home("text-xl")}
          </Link>
        </li>
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
            href="/activity"
            className={pathname === "/activity" ? "text-defaultBgBlue" : "text-gray-600"}
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
        <li>
          <Link
            href="/profile"
            className={pathname === "/profile" ? "text-defaultBgBlue" : "text-gray-600"}
          >
            {Icons.User("text-xl")}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
