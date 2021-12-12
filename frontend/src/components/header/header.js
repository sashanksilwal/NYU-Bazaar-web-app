import React from "react";
import styles from "./header.module.css";
import PropTypes from "prop-types";

function Header({ logout, loggedIn }) {
  return (
    <header className={styles.HeaderWrapper}>
      <div className={`${styles.Header} ${styles.PageWrapper}`}>
        <p className={styles.Title}>Socials</p>
        <nav>
          {!loggedIn && (
            <>
              <ul>
                <a href="/login">Login</a>

                <a href="/createuser">Create User</a>
              </ul>
            </>
          )}
          {loggedIn && (
            <>
              <ul>
                <a href="/">Dashboard</a>

                <a href="/addpost">Add Post</a>

                <a href="/user/id">User Profile</a>

                <button className="Logout" onClick={() => logout()}>
                  Logout
                </button>
              </ul>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
Header.propTypes = {
  logout: PropTypes.func,
  loggedIn: PropTypes.any,
};

export default Header;
