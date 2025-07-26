import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import Product from "./components/Product.jsx";
import SingleProduct from "./components/SingleProduct.jsx";
import { Provider } from "react-redux";
import { store } from "./App/Store.js";
import Cart from "./components/Cart.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "product", element: <Product /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "singleProduct/:id", element: <SingleProduct /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
