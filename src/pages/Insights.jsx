import transactionsData from "../data/mockData";
import {
  getHighestSpendingCategory,
  getMonthlySummary,
} from "../utils/calculations";

const Insights = () => {
  const { highestCategory, highestAmount } =
    getHighestSpendingCategory(transactionsData);

  const { income, expense } = getMonthlySummary(transactionsData);

  return (
    <div>
      <h1>Financial Insights</h1>

      <div style={styles.card}>
        <h3>Highest Spending Category</h3>
        <p>
          You spent the most on <b>{highestCategory}</b> (${highestAmount})
        </p>
      </div>

      <div style={styles.card}>
        <h3>Monthly Summary</h3>
        <p>Total Income: ${income}</p>
        <p>Total Expense: ${expense}</p>
        <p>Balance: ${income - expense}</p>
      </div>

      <div style={styles.card}>
        <h3>Observation</h3>
        <p>
          Your expenses are {expense > income ? "higher than" : "lower than"} your income.
        </p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    background: "#1e293b",
    padding: "20px",
    marginTop: "20px",
    borderRadius: "10px",
    color: "white",
  },
};

export default Insights;