import CandlestickChart from '../components/CandlestickChart';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';

export default function Dashboard() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard</h1>
      <div style={{ marginBottom: '40px' }}>
        <h2>Candlestick Chart</h2>
        <CandlestickChart />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h2>Line Chart</h2>
        <LineChart />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h2>Bar Chart</h2>
        <BarChart />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h2>Pie Chart</h2>
        <PieChart />
      </div>
    </div>
  );
}
