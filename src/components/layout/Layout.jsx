import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const [role, setRole] = useState("admin");

  return (
    <div style={styles.container}>
      <Sidebar />
      <div style={styles.main}>
        <Navbar role={role} setRole={setRole} />
        <div style={styles.content}>
          {children(role)}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
  },
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  content: {
    padding: "20px",
  },
};

export default Layout;