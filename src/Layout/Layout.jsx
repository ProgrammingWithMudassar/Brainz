import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
const Layout = () => {
  return (
    <>
      <div>
        <div
          style={
            {
              // marginBottom: "150px",
            }
          }
        >
          <Header />
        </div>
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
