import React from "react";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.HeaderWrapper}>
      <div className={`${styles.Header} ${styles.PageWrapper}`}>
        <p className={styles.Title}>Socials</p>
        <nav>
          <a href="/">Dashboard</a>
          <a href="/login">Login</a>
          <a href="/createuser">Create User</a>
          <a href="/addpost">Add Post</a>
          <a href="/user:id">My Profile</a>
          {/* <a href="/">Logout</a> */}
        </nav>
      </div>
    </header>
  );
}

export default Header;
