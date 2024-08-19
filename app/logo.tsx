"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Logo() {
  const pathname = usePathname();
  return (
    <span className=" whitespace-nowrap ml-1">
      {pathname === "/" ? (
        <span className="cursor-default header-button">AKASH SINGH</span>
      ) : (
        <Link
          href="/"
          className=" active:bg-gray-300 dark:active:bg-[#242424] rounded-sm  transition-[background-color] header-button"
        >
          AKASH SINGH

        </Link>
      )}
    </span>
  );
}