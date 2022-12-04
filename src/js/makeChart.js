import Chart from 'chart.js';

function makeChart({ label, data, id }) {
  const ctx = document.getElementById(id);
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: label,
      datasets: [
        {
          label: 'Forecast',
          data: data,
          backgroundColor: 'rgb(131, 0, 160)',
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              // beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}

export default makeChart;
