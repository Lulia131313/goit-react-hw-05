import { Link, Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { Suspense, useEffect } from "react";

const Layout = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = location.pathname.split("/").join("")[0];
  }, [location.pathname]);
  return (
    <div>
      <Navbar />
      <section className="outlet">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </section>
    </div>
  );
};

export default Layout;
