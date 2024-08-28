import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import ProductDetails from "../pages/ProductDetails";
import Products from "../pages/Products";
import Checkout from "../pages/Checkout";
import NotFound from "../pages/NotFound";
import Cart from "../pages/Cart";
import Success from "../pages/Success";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "products",
        element: <Products />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "success",
        element: <Success />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "terms",
        element: <TermsAndConditions />,
      },
    ],
  },
]);

export default router;
