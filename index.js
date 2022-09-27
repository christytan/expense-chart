import date from "./data.json" assert { type: "json" };
// console.log(data);

// /* helpful links to use json file in javascript
// https://www.freecodecamp.org/news/how-to-read-json-file-in-javascript/
//https://stackoverflow.com/questions/38593123/how-to-hide-y-axis-line-in-chartjs
// */

const data = {
  labels: date.map((dateObj) => dateObj.day),
  datasets: [
    {
      label: "Spending - Last 7 days",
      data: date.map((dateObj) => dateObj.amount),
      backgroundColor: [
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
      ],
      borderColor: [
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
      ],
      hoverBackgroundColor: [
        " hsl(186, 34%, 60%)",
        " hsl(186, 34%, 60%)",
        " hsl(186, 34%, 60%)",
        " hsl(186, 34%, 60%)",
        " hsl(186, 34%, 60%)",
        " hsl(186, 34%, 60%)",
        " hsl(186, 34%, 60%)",
      ],
      hoverBorderColor: [
        " hsl(186, 34%, 60%)",
        " hsl(186, 34%, 60%)",
        " hsl(186, 34%, 60%)",
        " hsl(186, 34%, 60%)",
        " hsl(186, 34%, 60%)",
        " hsl(186, 34%, 60%)",
        " hsl(186, 34%, 60%)",
      ],

      borderWidth: 1,
      borderRadius: 5,
      borderSkipped: false,
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    // tooltips: {
    //   mode: "bar",
    //   callbacks: {
    //     label: function (tooltipItem, data) {
    //       return data.datasets[tooltipItem.datasetIndex].labels[
    //         tooltipItem.index
    //       ];
    //     },
    //   },
    // },
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        display: false,
      },
      x: {
        grid: {
          drawBorder: false,
          display: false,
        },
      },
    },
  },
};

const ctx = document.querySelector("#spending-chart").getContext("2d");
const spendingChart = new Chart(ctx, config);

//total balance

const balanceTotal = document.querySelector(".balance-total");
balanceTotal.textContent = `$${date.reduce((prev, dateObj) => {
  return dateObj.amount + prev;
}, 0)}`;

//total spent
const spendSummary = document.querySelector(".spending-total");
spendSummary.textContent = `$${date.reduce((prev, dateObj) => {
  return dateObj.amount + prev;
}, 0)}`;
