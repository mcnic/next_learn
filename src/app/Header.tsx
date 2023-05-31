"use client";

import Link from "next/link";
import React from "react";
import styles from "./header.module.scss";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <span className={styles.header}>
      <Link href={"/"} className={pathname === "/" ? styles.active : ""}>
        main page
      </Link>
      <Link href={"/home"}>Home</Link>
      <Link href={"/car/123?d=1"}>car123</Link>
      <Link href='/wrong'>Wrong page</Link>
    </span>
  );
};

export default Header;
