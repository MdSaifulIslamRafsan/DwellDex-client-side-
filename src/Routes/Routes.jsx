
import { createBrowserRouter } from "react-router-dom";
import Root from "../Component/Root";
import Home from "../Pages/Home.jsx";
import ErrorPage from "../Pages/ErrorPage.jsx";

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
      ]
    },
    
  ]);

export default router;