import Layout from "../Components/Layout";
import Registration from "../Pages/Registration";
import Cart from "../Pages/Cart";
import Products from "../Components/Products";
import Categories from "../Pages/Categories";
import Home from "../pages/Home";
import ProductDetails from "../Pages/ProductDetails";
import ProtectedRoute from "../Components/ProtectedRoute";
import ProtectedAuthRoute from "../Components/ProtectedAuthRoute";
import NotFound from "../Pages/NotFound";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";

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
            <Login/>
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
