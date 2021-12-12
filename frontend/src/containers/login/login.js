import React, { useCallback } from "react";
import LoginForm from "../../components/loginForm";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import PropTypes from "prop-types";

export default function Login({ setLoggedIn, setUserInformation, setError }) {
  const loginUser = useCallback(
    (e) => {
      e.preventDefault();

      const email = e.currentTarget.email.value;
      const password = e.currentTarget.password.value;

      console.log({ email, password });

      const auth = getAuth();

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setLoggedIn(true);
          setUserInformation({
            email: user.email,
            displayName: user.displayName,
            uid: user.uid,
            accessToken: user.accessToken,
          });
          setError("");
        })
        .catch((error) => {
          console.log({ error });
          setError(error.message);
        });
    },
    [setError, setLoggedIn, setUserInformation]
  );

  return (
    <div className="PageWrapper">
      <h1>Login User</h1>
      <LoginForm loginUser={loginUser} />
    </div>
  );
}

Login.propTypes = {
  setLoggedIn: PropTypes.any.isRequired,
  setUserInformation: PropTypes.any.isRequired,
  setError: PropTypes.any.isRequired,
};
