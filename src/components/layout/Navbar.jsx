import { useContext } from "react";
import { FinanceContext } from "../../context/FinanceContext";

const Navbar = () => {
  const { role, setRole } = useContext(FinanceContext);

  return (
    <div style={styles.navbar}>
      <h3>Finance Dashboard</h3>

      <div>
        <span style={{ marginRight: "10px" }}>Role:</span>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="admin">Admin</option>
          <option value="viewer">Viewer</option>
        </select>
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    height: "60px",
    background: "#f1f5f9",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
    borderBottom: "1px solid #ddd",
  },
};

export default Navbar;