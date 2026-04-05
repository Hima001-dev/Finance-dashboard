const SummaryCards = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h3>Total Balance</h3>
        <p>$12,500</p>
      </div>

      <div style={styles.card}>
        <h3>Total Income</h3>
        <p>$8,000</p>
      </div>

      <div style={styles.card}>
        <h3>Total Expenses</h3>
        <p>$3,500</p>
      </div>

      <div style={styles.card}>
        <h3>Savings</h3>
        <p>$5,000</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    marginTop: "20px",
  },
  card: {
    background: "#1e293b",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    width: "200px",
  },
};

export default SummaryCards;