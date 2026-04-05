import { useState } from "react";
import transactionsData from "../../data/mockData";

const TransactionsTable = () => {
  const [searchText, setSearchText] = useState("");
  const [filterType, setFilterType] = useState("all");

  const filteredTransactions = transactionsData.filter((transaction) => {
    const matchesSearch = transaction.description
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesFilter =
      filterType === "all" || transaction.type === filterType;

    return matchesSearch && matchesFilter;
  });

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

      <select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
        style={styles.filter}
      >
        <option value="all">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

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
    color: "white",
  },
  search: {
    padding: "8px",
    marginTop: "10px",
    width: "300px",
    marginRight: "10px",
  },
  filter: {
    padding: "8px",
    marginTop: "10px",
  },
};

export default TransactionsTable;