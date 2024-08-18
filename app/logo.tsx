"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Logo() {
  const pathname = usePathname();
  return (
    <span className=" ml-4 text-xs  whitespace-nowrap ">
      {pathname === "/" ? (
        <span className="cursor-default pr-2">CAELUM PIRATA®</span>
      ) : (
        <Link
          href="/"
          className="hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] p-2 rounded-sm -ml-2 transition-[background-color]"
        >
          CAELUM PIRATA®

        </Link>
      )}
    </span>
  );
}