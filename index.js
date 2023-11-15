let chart;

document.addEventListener("DOMContentLoaded", function () {
  drawChart("corte1");
});

const drawChart = (dataType) => {
  let data;
  if (dataType === "corte1") {
    data = [
      ["Revolución Ciudadana", 52, "#00aeef", "Revolución Ciudadana"],
      ["Construye", 29, "#0044b3", "Construye"],
      ["PSC-aliados", 18, "#fbd80e", "PSC-aliados"],
      ["ADN", 14, "#9d58ce", "ADN", "revolución-ciudadana3"],
      ["Actuemos (Avanza/SUMA)", 8, "#dd9f00", "Actuemos (Avanza/SUMA)"],
      ["Pachakutik", 5, "#ff9300", "Pachakutik"],
      ["Claro que se puede", 3, "#546e7a", "Claro que se puede"],
      [
        "Independientes y grupos de minoría",
        8,
        "#8ed82f",
        "Independientes y grupos de minoría",
      ],
      // ["Gente Buena", 0, "#0165F1", "Gente Buena"],
    ];
  } else if (dataType === "corte2") {
    data = [
      ["Revolución Ciudadana", 51, "#00aeef", "Revolución Ciudadana"],
      ["Construye", 26, "#0044b3", "Construye"],
      ["PSC-aliados", 18, "#fbd80e", "PSC-aliados"],
      ["ADN", 14, "#9d58ce", "ADN"],
      ["Actuemos (Avanza/SUMA)", 8, "#dd9f00", "Actuemos (Avanza/SUMA)"],
      ["Pachakutik", 5, "#ff9300", "Pachakutik"],
      ["Claro que se puede", 3, "#546e7a", "Claro que se puede"],
      [
        "Independientes y grupos de minoría",
        12,
        "#8ed82f",
        "Independientes y grupos de minoría",
      ],
      // ["Gente Buena", 0, "#0165F1", "Gente Buena"],
    ];
  } else if (dataType === "corte3") {
    data = [
      ["Revolución Ciudadana", 51, "#00aeef", "Revolución Ciudadana"],
      ["Construye", 18, "#0044b3", "Construye"],
      ["PSC-aliados", 18, "#fbd80e", "PSC-aliados"],
      ["ADN", 14, "#9d58ce", "ADN"],
      ["Actuemos (Avanza/SUMA)", 8, "#dd9f00", "Actuemos (Avanza/SUMA)"],
      ["Pachakutik", 5, "#ff9300", "Pachakutik"],
      ["Claro que se puede", 3, "#546e7a", "Claro que se puede"],
      [
        "Independientes y grupos de minoría",
        12,
        "#8ed82f",
        "Independientes y grupos de minoría",
      ],
      ["Gente Buena", 8, "#0165F1", "Gente Buena"],
    ];
  }

  var options = {
    chart: {
      type: "item",
      backgroundColor: "#F8F8F8",
    },

    title: {
      text: "Así cambió la composición de las bancadas legislativas",
    },

    subtitle: {
      text: "",
    },

    legend: {
      labelFormat: '{name} <span style="opacity: 0.4">{y}</span>',
    },
    series: [
      {
        name: "Cantidad",
        keys: ["name", "y", "color", "label"],
        data: data,
        dataLabels: {
          enabled: true,
          format: " <span style=''>{point.label}</span>",
        },
        center: ["50%", "88%"],
        size: "170%",
        startAngle: -100,
        endAngle: 100,
      },
    ],
  };

  chart = Highcharts.chart("container", options);
};

const changeData = (dataType) => {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(function (tab) {
    tab.classList.remove("active");
  });

  const tab = document.getElementById("tab-" + dataType);
  tab.classList.add("active");
  drawChart(dataType);
};
