import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
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
