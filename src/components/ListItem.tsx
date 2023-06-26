"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function ListItem({ children, loc }: {
    children: ReactNode;
    loc: string;
}) {
    const pathname = usePathname();

    let styles: string;
    if (pathname === loc) {
        // styles for active tabs
        styles = "font-medium bg-base text-white";
    } else {
        // styles for inactive tabs
        styles = "font-medium text-black hover:bg-blue-300";
    }

    return <Link className={`${styles} flex items-center justify-center sm:w-28 last:mb-2 sm:last:mb-0`} href={loc} >{children}</Link>
}
