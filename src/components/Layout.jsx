import { Link, Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect } from "react";

const Layout = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = location.pathname.split("/").join("")[0];
  }, [location.pathname]);
  return (
    <div>
      <Navbar />
      <section className="outlet">
        <Outlet />
      </section>
    </div>
  );
};

export default Layout;
