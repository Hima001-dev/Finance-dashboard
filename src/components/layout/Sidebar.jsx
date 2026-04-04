import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      <h2>Finance</h2>
      <ul style={styles.menu}>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/transactions">Transactions</Link></li>
        <li><Link to="/insights">Insights</Link></li>
      </ul>
    </div>
  );
};

const styles = {
  sidebar: {
    width: "220px",
    height: "100vh",
    background: "#1e293b",
    color: "white",
    padding: "20px",
  },
  menu: {
    listStyle: "none",
    padding: 0,
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
};

export default Sidebar;