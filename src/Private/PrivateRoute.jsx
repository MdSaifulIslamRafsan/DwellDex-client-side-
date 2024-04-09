import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user , loader} = useContext(AuthContext);

    if(loader){
        return <div className="grid place-content-center h-screen">
           <div className="w-20 h-20"><div className="grid grid-cols-2 justify-center items-center gap-2 rounded-full"><span className="h-10 w-10 rounded-tl-full bg-blue-500 animate-[ping_1.4s_linear_infinite]"></span> <span className="h-10 w-10 rounded-tr-full bg-blue-500 animate-[ping_1.8s_linear_infinite]"></span><span className="h-10 w-10 rounded-bl-full bg-blue-500 animate-[ping_2.2s_linear_infinite]"></span><span className="h-10 w-10 rounded-br-full bg-blue-500 animate-[ping_2.6s_linear_infinite]"></span></div></div>
        </div>
    }

    if(user){
        return children;
    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;