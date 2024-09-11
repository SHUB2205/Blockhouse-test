
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const CandlestickChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/candlestick-data/')
      .then(response => {
        const apiData = response.data.data;
        setChartData({
          labels: apiData.map(item => item.x),
          datasets: [
            {
              label: 'Candlestick Data',
              data: apiData.map(item => ({
                x: item.x,
                y: [item.low, item.high, item.open, item.close],
              })),
            },
          ],
        });
      })
      .catch(err => console.error('Error fetching candlestick data:', err));
  }, []);

  if (!chartData) return <div>Loading Candlestick Chart...</div>;

  return <Bar data={chartData} />;
};

export default CandlestickChart;
