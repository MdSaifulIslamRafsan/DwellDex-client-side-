import { createBrowserRouter } from "react-router-dom";
import Root from "../Component/Root";
import Home from "../Pages/Home.jsx";
import ErrorPage from "../Pages/ErrorPage.jsx";
import LoginAndRegister from "../Pages/LoginAndRegister.jsx";
import DetailsPage from "../Pages/DetailsPage.jsx";

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
        element: <Home></Home>,
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
