import { createBrowserRouter } from "react-router-dom";
import Root from "../Component/Root";
import Home from "../Pages/Home.jsx";
import ErrorPage from "../Pages/ErrorPage.jsx";
import LoginAndRegister from "../Pages/LoginAndRegister.jsx";
import DetailsPage from "../Pages/DetailsPage.jsx";
import UpdateProfile from "../Pages/UpdateProfile.jsx";
import PrivateRoute from "../Private/PrivateRoute.jsx";
import UserProfile from "../Pages/UserProfile.jsx";
import ContactPage from "../Pages/ContactPage.jsx";

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
        path: "/userProfile",
        element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>,
      },
      {
        path: "/login",
        element: <LoginAndRegister></LoginAndRegister>,
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>,
      },
      {
        path: "/contact",
        element: <PrivateRoute><ContactPage></ContactPage></PrivateRoute>,
      },
    ],
  },
]);

export default router;
