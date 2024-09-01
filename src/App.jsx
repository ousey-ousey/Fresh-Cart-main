import { RouterProvider } from "react-router-dom";
import AuthContextProvider from "./Contexts/AuthContext";
import router from "./routing/routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer/>
    </AuthContextProvider>
  );
}

export default App;
