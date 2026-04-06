import TransactionsTable from "../components/transactions/TransactionsTable";

const Transactions = ({ role }) => {
  return (
    <div>
      <h1>Transactions Page</h1>
      <TransactionsTable role={role} />
    </div>
  );
};

export default Transactions;