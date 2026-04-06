import { useContext, useState } from "react";
import { FinanceContext } from "../../context/FinanceContext";

const TransactionsTable = () => {
  const {
    transactions,
    addTransaction,
    deleteTransaction,
    updateTransaction,
    role,
  } = useContext(FinanceContext);

  const [searchText, setSearchText] = useState("");
  const [filterType, setFilterType] = useState("all");

  const [newDescription, setNewDescription] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newType, setNewType] = useState("expense");

  const [editingId, setEditingId] = useState(null);

  const handleAddTransaction = () => {
    if (!newDescription || !newAmount || !newCategory) return;

    const newTransaction = {
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
      description: newDescription,
      amount: Number(newAmount),
      category: newCategory,
      type: newType,
    };

    addTransaction(newTransaction);

    setNewDescription("");
    setNewAmount("");
    setNewCategory("");
    setNewType("expense");
  };

  const handleDelete = (id) => {
    deleteTransaction(id);
  };

  const handleEdit = (transaction) => {
    setEditingId(transaction.id);
    setNewDescription(transaction.description);
    setNewAmount(transaction.amount);
    setNewCategory(transaction.category);
    setNewType(transaction.type);
  };

  const handleUpdate = () => {
    const updatedTransaction = {
      id: editingId,
      date: new Date().toISOString().split("T")[0],
      description: newDescription,
      amount: Number(newAmount),
      category: newCategory,
      type: newType,
    };

    updateTransaction(updatedTransaction);
    setEditingId(null);
    setNewDescription("");
    setNewAmount("");
    setNewCategory("");
    setNewType("expense");
  };

  const filteredTransactions = transactions.filter((transaction) => {
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
        style={styles.input}
      />

      <select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
        style={styles.input}
      >
        <option value="all">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      {role === "admin" && (
        <>
          <h3>{editingId ? "Edit Transaction" : "Add New Transaction"}</h3>

          <input
            type="text"
            placeholder="Description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            style={styles.input}
          />

          <input
            type="number"
            placeholder="Amount"
            value={newAmount}
            onChange={(e) => setNewAmount(e.target.value)}
            style={styles.input}
          />

          <input
            type="text"
            placeholder="Category"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            style={styles.input}
          />

          <select
            value={newType}
            onChange={(e) => setNewType(e.target.value)}
            style={styles.input}
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          {editingId ? (
            <button onClick={handleUpdate} style={styles.button}>
              Update Transaction
            </button>
          ) : (
            <button onClick={handleAddTransaction} style={styles.button}>
              Add Transaction
            </button>
          )}
        </>
      )}

      <div style={{ overflowX: "auto" }}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Type</th>
              {role === "admin" && <th>Actions</th>}
            </tr>
          </thead>

          <tbody>
            {filteredTransactions.length === 0 ? (
              <tr>
                <td colSpan="6">No transactions found</td>
              </tr>
            ) : (
              filteredTransactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.date}</td>
                  <td>{transaction.description}</td>
                  <td>${transaction.amount}</td>
                  <td>{transaction.category}</td>
                  <td>{transaction.type}</td>
                  {role === "admin" && (
                    <td>
                      <button onClick={() => handleEdit(transaction)}>
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(transaction.id)}
                      >
                        Delete
                      </button>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  table: {
    width: "100%",
    marginTop: "20px",
    color: "white",
  },
  input: {
    padding: "8px",
    margin: "5px",
  },
  button: {
    padding: "8px 12px",
    margin: "5px",
  },
};

export default TransactionsTable;