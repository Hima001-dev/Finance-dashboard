import { useState } from "react";
import transactionsData from "../../data/mockData";

const TransactionsTable = () => {
  const [searchText, setSearchText] = useState("");

  const filteredTransactions = transactionsData.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <h2>Transactions</h2>

      <input
        type="text"
        placeholder="Search transactions..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={styles.search}
      />

      <table style={styles.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>${transaction.amount}</td>
              <td>{transaction.category}</td>
              <td>{transaction.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
    color: "white",   // IMPORTANT
  },
  search: {
    padding: "8px",
    marginTop: "10px",
    width: "300px",
  },
};

export default TransactionsTable;