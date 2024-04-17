import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePhoneNumber,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase.config";
import { toast } from "react-toastify";


export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {



  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleCreateAccount = (email, password, displayName, photoURL) => {
    
    updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL,
    })
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

  const handleUpdateUserInfo = (updateName, updateImg, phoneNumber) => {

    updatePhoneNumber(auth.currentUser,  phoneNumber)
    .then(() => {
      console.log('seccess');
      // ...
    }).catch((error) => {
      console.log(error?.message);
    });

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

export default AuthProvider;
