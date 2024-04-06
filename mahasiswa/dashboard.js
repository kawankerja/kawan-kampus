// Function to load the navigation
function loadNavigation() {
  fetch("./components/sidebar/sidebar.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load sidebar.html");
      }
      return response.text();
    })
    .then((html) => {
      // Inject the HTML content into the sidebar-menu div
      document.getElementById("sidebar-menu").innerHTML = html;

      // Execute script from myComponent.js
      var scriptElement = document.createElement("script");
      scriptElement.src = "./components/sidebar/sidebar.js";
      document.body.appendChild(scriptElement);
    })
    .catch((error) => {
      console.error("Error loading navigation:", error);
    });
}

// Call the function to load the navigation when the page loads
window.addEventListener("DOMContentLoaded", loadNavigation);

// Data for the bar chart
const data = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  datasets: [
    {
      label: "IP",
      data: [3.5, 3.05, 3.7, 3.8, 2.7, 3.7, 2.9, 3.75, 0.2],
      backgroundColor: [
        "rgba(87, 175, 129, 1)",
        "rgba(174, 217, 191, 1)",
        "rgba(87, 175, 129, 1)",
        "rgba(174, 217, 191, 1)",
        "rgba(87, 175, 129, 1)",
        "rgba(174, 217, 191, 1)",
      ],
      borderColor: [
        "rgba(87, 175, 129, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(87, 175, 129, 1)",
        "rgba(174, 217, 191, 1)",
        "rgba(87, 175, 129, 1)",
        "rgba(174, 217, 191, 1)",
      ],
      borderWidth: 1,
      barPercentage: 0.6,
    },
  ],
};

// Calculate average value of the dataset
const averageValue =
  data.datasets[0].data.reduce((a, b) => a + b, 0) /
  data.datasets[0].data.length;

// Chart configuration
const config = {
  type: "bar",
  data: {
    labels: data.labels,
    datasets: [
      {
        label: "IP",
        data: data.datasets[0].data,
        backgroundColor: data.datasets[0].backgroundColor,
        borderColor: data.datasets[0].borderColor,
        borderWidth: 1,
        barPercentage: 0.6,
      },
      {
        label: "IPK",
        data: Array(data.labels.length).fill(averageValue),
        fill: false,
        borderColor: "rgba(75, 75, 75, 1)",
        borderWidth: 1,
        borderDash: [5, 5], // Dashed style
        type: "line", // Set chart type to line
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltips: {
        callbacks: {
          label: function (context) {
            return context.dataset.label + ": " + context.parsed.y;
          },
        },
      },
    },
    borderRadius: 100, // Set the corner radius for all bars
  },
};

// Initialize the chart
const myChart = new Chart(document.getElementById("roundedBarChart"), config);
