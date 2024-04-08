import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useState} from "react";
import auth from "../Firebase.config";
import {  toast } from 'react-toastify';
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

   const handleGoogleLogin = () => {
         signInWithPopup(auth, googleProvider)
         .then((result) => {
            const currentUser = result.user;
            setUser(currentUser);

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

   const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
    .then((result) => {
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

   const handleLogout = () =>{
    signOut(auth).then(() => {
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
        console.log('logout');
      }).catch((error) => {
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
   }





    const userInfo = {user , handleGoogleLogin ,handleLogout , handleGithubLogin}
    return (
        <AuthContext.Provider  value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;