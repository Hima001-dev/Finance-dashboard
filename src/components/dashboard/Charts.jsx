import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const lineData = [
  { month: "Jan", balance: 4000 },
  { month: "Feb", balance: 3000 },
  { month: "Mar", balance: 5000 },
  { month: "Apr", balance: 4500 },
  { month: "May", balance: 6000 },
];

const pieData = [
  { name: "Food", value: 400 },
  { name: "Rent", value: 800 },
  { name: "Shopping", value: 300 },
  { name: "Travel", value: 200 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

const Charts = () => {
  return (
    <div style={styles.container}>
      <div>
        <h3>Balance Trend</h3>
        <LineChart width={400} height={250} data={lineData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="balance" stroke="#8884d8" />
        </LineChart>
      </div>

      <div>
        <h3>Spending by Category</h3>
        <PieChart width={400} height={300}>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            dataKey="value"
            label={({name}) =>name}
          >
            {pieData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "40px",
    marginTop: "30px",
  },
};

export default Charts;