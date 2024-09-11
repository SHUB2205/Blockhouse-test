
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const LineChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/line-chart-data/')
      .then(response => {
        const apiData = response.data;
        setChartData({
          labels: apiData.labels,
          datasets: [
            {
              label: 'Line Chart Data',
              data: apiData.data,
              fill: false,
              borderColor: 'rgba(75, 192, 192, 1)',
            },
          ],
        });
      })
      .catch(err => console.error('Error fetching line chart data:', err));
  }, []);

  if (!chartData) return <div>Loading Line Chart...</div>;

  return <Line data={chartData} />;
};

export default LineChart;
