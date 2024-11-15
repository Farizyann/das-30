"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "../styles/layout.module.css";

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link
        className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
        href="/"
      >
        Posts
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/users" ? styles.active : ""
        }`}
        href="/users"
      >
        Users
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/add/user" ? styles.active : ""
        }`}
        href="/add/user"
      >
        Add User
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/add/post" ? styles.active : ""
        }`}
        href="/add/post"
      >
        Add Post
      </Link>
    </nav>
  );
};
