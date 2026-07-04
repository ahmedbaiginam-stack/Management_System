import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div style={styles.wrapper}>
      <Navbar />

      <main style={styles.main}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  main: {
    flex: 1,
    padding: "20px",
  },
};

export default Layout;