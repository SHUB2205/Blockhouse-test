import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const BarChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/bar-chart-data/')
      .then(response => {
        const apiData = response.data;
        setChartData({
          labels: apiData.labels,
          datasets: [
            {
              label: 'Bar Chart Data',
              data: apiData.data,
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
            },
          ],
        });
      })
      .catch(err => console.error('Error fetching bar chart data:', err));
  }, []);

  if (!chartData) return <div>Loading Bar Chart...</div>;

  return <Bar data={chartData} />;
};

export default BarChart;
