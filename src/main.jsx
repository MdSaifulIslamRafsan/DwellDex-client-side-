import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {HelmetProvider } from 'react-helmet-async';
AOS.init();

import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import AuthProvider from "./Provider/AuthProvider";
import FakeDataProvider from "./Provider/FakeDataProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <FakeDataProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </FakeDataProvider>
  </HelmetProvider>
);
