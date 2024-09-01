import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Layout() {
  return (
    <>
      <Navbar></Navbar>
      <div className="pt-24 pb-8 container mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
}
