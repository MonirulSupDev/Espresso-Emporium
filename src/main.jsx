import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/rancho";
import "@fontsource-variable/raleway";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./components/routes/Router.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
