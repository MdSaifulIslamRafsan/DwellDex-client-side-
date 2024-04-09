import { createBrowserRouter } from "react-router-dom";
import Root from "../Component/Root";
import Home from "../Pages/Home.jsx";
import ErrorPage from "../Pages/ErrorPage.jsx";
import LoginAndRegister from "../Pages/LoginAndRegister.jsx";
import DetailsPage from "../Pages/DetailsPage.jsx";
import UpdateProfile from "../Pages/UpdateProfile.jsx";
import PrivateRoute from "../Private/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/updateProfile",
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
      },
      {
        path: "/login",
        element: <LoginAndRegister></LoginAndRegister>,
      },
      {
        path: "/details/:id",
        element: <DetailsPage></DetailsPage>,
      },
    ],
  },
]);

export default router;
