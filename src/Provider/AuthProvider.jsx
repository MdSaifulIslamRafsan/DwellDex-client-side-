import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext, useState} from "react";
import auth from "../Firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {

    const [user , setUser] = useState({});
    const provider = new GoogleAuthProvider();

   const handleGoogleLogin = () => {
         signInWithPopup(auth, provider)
         .then((result) => {
            const currentUser = result.user;
            console.log(currentUser);
         })
         .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode , errorMessage);
           
            
          });
   }
    const userInfo = {user , handleGoogleLogin}
    return (
        <AuthContext.Provider  value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;