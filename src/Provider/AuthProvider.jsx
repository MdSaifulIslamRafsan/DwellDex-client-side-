import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase.config";
import { toast } from "react-toastify";


export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {



  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleCreateAccount = (email, password) => {
    return createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
  };
  const handleLoginForm = (email, password) => {
    console.log(email , password);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleGoogleLogin = (location ,navigate) => {
    setLoader(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const currentUser = result.user;
        setUser(currentUser);
        navigate(location?.state ? location?.state : "/");
        toast.success("You have successfully logged into Google.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const handleGithubLogin = ( location , navigate) => {
    setLoader(true);
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        navigate(location?.state ? location?.state : "/");
        const currentUser = result.user;
        setUser(currentUser);
        toast.success("You have successfully logged into GitHub.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });

    return () => unSubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser(null);
        toast.success("You've been successfully logged out", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        // An error happened.
        const errorMessage = error.message;
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const handleUpdateUserInfo = (updateName, updateImg) => {

    
    updateProfile(auth.currentUser, {
      displayName: updateName,
      photoURL: updateImg,
    })
      .then(() => {
        // Profile updated!
        toast.success("You've been successfully Profile Updated", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        // An error occurred
        const errorMessage = error.message;
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const userInfo = {
    user,
    setUser,
    loader,
    handleCreateAccount,
    handleLoginForm,
    handleGoogleLogin,
    handleLogout,
    handleGithubLogin,
    handleUpdateUserInfo,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.object,
}

export default AuthProvider;
