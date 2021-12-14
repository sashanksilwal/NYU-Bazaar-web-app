import React, { useCallback } from "react";
import CreateUserForm from "../../components/createUserForm";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";

export default function CreateUser({
  setLoggedIn,
  setUserInformation,
  setError,
}) {
  const signUpUser = useCallback(
    (e) => {
      e.preventDefault();

      const email = e.currentTarget.email.value;
      const password = e.currentTarget.password.value;
      const displayName = e.currentTarget.username.value;

      console.log({ email, password, displayName });

      const auth = getAuth();

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;

          setLoggedIn(true);
          setUserInformation({
            email: user.email,
            displayName: user.displayName,
            uid: user.uid,
            accessToken: user.accessToken,
          });

          updateProfile(auth.currentUser, {
            displayName,
          })
            .then(() => {
              console.log("successfully signed up");
            })
            .catch((error) => {
              return setError(error.errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.warn({ error, errorCode, errorMessage });
          setError(errorMessage);
        });
    },
    [setLoggedIn, setUserInformation, setError]
  );

  return (
    <div className="PageWrapper">
      <h1>Create User</h1>
      <CreateUserForm signUpUser={signUpUser} />
    </div>
  );
}

CreateUser.propTypes = {
  setLoggedIn: PropTypes.any.isRequired,
  setUserInformation: PropTypes.any.isRequired,
  setError: PropTypes.any.isRequired,
};
