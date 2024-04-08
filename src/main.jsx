import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import AuthProvider from "./Provider/AuthProvider";
import FakeDataProvider from "./Provider/FakeDataProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FakeDataProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </FakeDataProvider>
  </React.StrictMode>
);
