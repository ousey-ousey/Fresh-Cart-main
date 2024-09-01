import { useContext } from "react";
import {AuthContext} from "../../Contexts/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({children}) {
  const { userToken } = useContext(AuthContext);


  return <>{userToken != null ? children : <Navigate to={"/login"}/>}</>;
}
