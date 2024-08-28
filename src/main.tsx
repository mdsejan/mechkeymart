import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.tsx";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { Toaster } from "sonner";
import ScrollToTopButton from "./components/ScrollToTopButton.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <Toaster richColors position="bottom-right" />
        <RouterProvider router={router} />
        <ScrollToTopButton />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
