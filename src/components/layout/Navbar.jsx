const Navbar = () => {
  return (
    <div style={styles.navbar}>
      <h3>Finance Dashboard</h3>
      <div>
        <span>Role: Admin</span>
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