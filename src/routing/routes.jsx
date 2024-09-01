import Layout from "../Components/Layout";
import Products from "../Components/Products";
import ProductDetails from "../Pages/ProductDetails";
import ProtectedRoute from "../Components/ProtectedRoute";
import ProtectedAuthRoute from "../Components/ProtectedAuthRoute";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Registration from "../Pages/Registration";
import Login from "../Pages/Login";
import Cart from "../Pages/Cart";
import Categories from "../Pages/Categories";
import NotFound from "../Pages/NotFound";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "register",
        element: (
          <ProtectedAuthRoute>
            <Registration />
          </ProtectedAuthRoute>
        ),
      },
      {
        path: "login",
        element: (
          <ProtectedAuthRoute>
            <Login />
          </ProtectedAuthRoute>
        ),
      },
      {
        path: "cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: "products",
        element: (
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        ),
      },
      {
        path: "productdetails/:id",
        element: (
          <ProtectedRoute>
            <ProductDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "categories",
        element: (
          <ProtectedRoute>
            <Categories />
          </ProtectedRoute>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
