// // Function to load the navigation
// function loadNavigation() {
//   fetch("./components/sidebar/sidebar.html")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Failed to load sidebar.html");
//       }
//       return response.text();
//     })
//     .then((html) => {
//       // Inject the HTML content into the sidebar-menu div
//       document.getElementById("sidebar-menu").innerHTML = html;

//       // Execute script from myComponent.js
//       var scriptElement = document.createElement("script");
//       scriptElement.src = "./components/sidebar/sidebar.js";
//       document.body.appendChild(scriptElement);
//     })
//     .catch((error) => {
//       console.error("Error loading navigation:", error);
//     });
// }

// // Call the function to load the navigation when the page loads
// window.addEventListener("DOMContentLoaded", loadNavigation);

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
    elements: {
      point: {
        radius: 0, // Hide the points
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
    borderRadius: 100, // Set the corner radius for all bars
  },
  // Function to handle events when chart is updated
  plugins: [
    {
      beforeUpdate: function (chart) {
        // Add average value to the end of the line dataset
        chart.data.datasets[1].data[chart.data.datasets[1].data.length - 1] =
          averageValue;
      },
    },
  ],
};

// Initialize the chart
const chartCanvas = document.getElementById("barChart");
const myChart = new Chart(chartCanvas, config);

// Get chart instance
const chartInstance = myChart;

// Get the coordinate of the end point of the line chart
const meta = chartInstance.getDatasetMeta(1); // assuming the line chart is the second dataset
const endCoordinate = meta.data[meta.data.length - 1].getCenterPoint();

// Set position of the average value element
const averageValueElement = document.getElementById("averageValue");
averageValueElement.innerText = "IPK: " + averageValue.toFixed(2);

// Get the button and dropdown menu
const btnKuliah = document.getElementById("perkuliahan");
const btnTugas = document.getElementById("tugas");
const arrowKuliah = document.getElementById("arrow-kuliah");
const arrowTugas = document.getElementById("arrow-tugas");
const dropdownKuliah = document.querySelector(".dropdown-kuliah");
const dropdownTugas = document.querySelector(".dropdown-tugas");

// Function to toggle dropdown menu visibility for Kuliah
function toggleDropdownKuliah() {
  const isOpen = !dropdownKuliah.classList.contains("open");
  dropdownKuliah.classList.toggle("open", isOpen);
  arrowKuliah.classList.toggle("-rotate-180", isOpen);
  localStorage.setItem("dropdownKuliahOpen", isOpen ? "true" : "false");
}

// Function to toggle dropdown menu visibility for Tugas
function toggleDropdownTugas() {
  const isOpen = !dropdownTugas.classList.contains("open");
  dropdownTugas.classList.toggle("open", isOpen);
  arrowTugas.classList.toggle("-rotate-180", isOpen);
  localStorage.setItem("dropdownTugasOpen", isOpen ? "true" : "false");
}

// Add event listener to the button to toggle dropdown menu visibility for Kuliah
btnKuliah.addEventListener("click", toggleDropdownKuliah);
btnTugas.addEventListener("click", toggleDropdownTugas);

// Load the state of the dropdown menus from local storage
document.addEventListener("DOMContentLoaded", function () {
  const dropdownKuliahOpen =
    localStorage.getItem("dropdownKuliahOpen") === "true";
  const dropdownTugasOpen =
    localStorage.getItem("dropdownTugasOpen") === "true";

  if (dropdownKuliahOpen) {
    dropdownKuliah.classList.add("open");
    arrowKuliah.classList.add("-rotate-180");
  }

  if (dropdownTugasOpen) {
    dropdownTugas.classList.add("open");
    arrowTugas.classList.add("-rotate-180");
  }
});

const linkDashboard = document.getElementById("link-dashboard");

linkDashboard.addEventListener("click", function () {
  window.location.href = "dashboard.html";
});

// for active link routes
document.addEventListener("DOMContentLoaded", function () {
  const currentLocation = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    const hiddenDiv = link.querySelector(".hidden");
    if (link.pathname === currentLocation) {
      link.classList.add("active");
      if (hiddenDiv) {
        hiddenDiv.classList.remove("hidden");
      }
    }
  });
});
