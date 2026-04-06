import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Insights from "./pages/Insights";

function App() {
  return (
    <Layout>
      {(role) => (
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions role={role} />} />
          <Route path="/insights" element={<Insights />} />
        </Routes>
      )}
    </Layout>
  );
}

export default App;