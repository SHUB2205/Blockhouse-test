import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

const PieChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/pie-chart-data/')
      .then(response => {
        const apiData = response.data;
        setChartData({
          labels: apiData.labels,
          datasets: [
            {
              label: 'Pie Chart Data',
              data: apiData.data,
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
          ],
        });
      })
      .catch(err => console.error('Error fetching pie chart data:', err));
  }, []);

  if (!chartData) return <div>Loading Pie Chart...</div>;

  return <Pie data={chartData} />;
};

export default PieChart;
