import { useContext,useState } from "react";
import { FinanceContext } from "../../context/FinanceContext";

const TransactionsTable = () => {
  const {transactions, addTransactions, deleteTransaction, updateTransaction, role} = useContext(FinanceContext);
  const [searchText, setSearchText] = useState("");
  const [filterType, setFilterType] = useState("all");

  const [newDescription, setNewDescription] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newType, setNewType] = useState("expense");

  const [editingId, setEditingId] = useState(null);

  const handleAddTransaction = () => {
    const newTransaction = {
      id: transactions.length + 1,
      date: new Date().toISOString().split("T")[0],
      description: newDescription,
      amount: Number(newAmount),
      category: newCategory,
      type: newType,
    };

    addTransactions( newTransaction);

    setNewDescription("");
    setNewAmount("");
    setNewCategory("");
    setNewType("expense");
  };

  const handleDelete = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
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
    const updatedTransactions = transactions.map((transaction) =>
      transaction.id === editingId
        ? {
            ...transaction,
            description: newDescription,
            amount: Number(newAmount),
            category: newCategory,
            type: newType,
          }
        : transaction
    );

    updateTransaction(updatedTransactions);
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

      {role === "admin" && (
        editingId ? (
          <button onClick={handleUpdate} style={styles.button}>
            Update Transaction
          </button>
        ) : (
          <button onClick={handleAddTransaction} style={styles.button}>
            Add Transaction
          </button>
        )  
      )}

      <table style={styles.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
            <th>Actions</th>
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
              <td>
                {role === "admin" && (
                  <>
                    <button onClick={() => handleEdit(transaction)}>Edit</button>
                    <button onClick={() => handleDelete(transaction.id)}>
                      Delete
                    </button>
                  </>
                )}
              </td>
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
  input: {
    padding: "8px",
    margin: "5px",
  },
  button: {
    padding: "8px 15px",
    margin: "10px",
  },
};

export default TransactionsTable;