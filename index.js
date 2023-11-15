let chart;

document.addEventListener("DOMContentLoaded", function () {
  drawChart("corte1");
});

const drawChart = (dataType) => {
  let data;
  if (dataType === "corte1") {
    data = [
      [
        "Revolución Ciudadana",
        52,
        "#46A4DA",
        "Revolución Ciudadana",
        "https://www.eluniverso.com/noticias/politica/conozca-a-los-51-legisladores-de-la-bancada-de-la-revolucion-ciudadana-nota",
      ],
      [
        "Construye",
        29,
        "#0001FC",
        "Construye",
        "https://www.eluniverso.com/noticias/politica/estos-son-los-18-legisladores-del-movimiento-construye-nota",
      ],
      [
        "PSC-aliados",
        18,
        "#fbd80e",
        "PSC-aliados",
        "https://www.eluniverso.com/noticias/politica/estos-son-los-18-legisladores-del-bloque-psc-aliados-elegidos-en-los-comicios-anticipados-del-2023-nota",
      ],
      [
        "ADN",
        14,
        "#9C27B9",
        "ADN",
        "https://www.eluniverso.com/noticias/politica/estos-son-los-14-legisladores-de-la-alianza-oficialista-adn-que-comanda-el-presidente-electo-daniel-noboa-nota",
      ],
      [
        "Actuemos (Avanza/SUMA)",
        8,
        "#FF9300",
        "Actuemos (Avanza/SUMA)",
        "https://www.eluniverso.com/noticias/politica/aqui-le-presentamos-a-los-ocho-legisladores-de-la-alianza-actuemos-nota",
      ],
      [
        "Pachakutik",
        5,
        "#10A544",
        "Pachakutik",
        "https://www.eluniverso.com/noticias/politica/estos-son-los-perfiles-de-las-cinco-legisladoras-del-movimiento-pachakutik-nota",
      ],
      [
        "Claro que se puede",
        3,
        "#FFFF",
        "Claro que se puede",
        "https://www.eluniverso.com/noticias/politica/conozca-a-los-tres-legisladores-que-obtuvo-la-alianza-claro-que-se-puede-nota",
      ],
      [
        "Independientes y grupos de minoría",
        8,
        "#9E9E9E",
        "Independientes y grupos de minoría",
        "https://www.eluniverso.com/noticias/politica/conozca-a-los-legisladores-chullos-los-que-vienen-de-grupos-de-minoria-o-locales-y-se-declaran-independientes-nota/",
      ],
      // ["Gente Buena", 0, "#0165F1", "Gente Buena"],
    ];
  } else if (dataType === "corte2") {
    data = [
      [
        "Revolución Ciudadana",
        51,
        "#46A4DA",
        "Revolución Ciudadana",
        "https://www.eluniverso.com/noticias/politica/conozca-a-los-51-legisladores-de-la-bancada-de-la-revolucion-ciudadana-nota",
      ],
      [
        "Construye",
        26,
        "#0001FC",
        "Construye",
        "https://www.eluniverso.com/noticias/politica/estos-son-los-18-legisladores-del-movimiento-construye-nota",
      ],
      [
        "PSC-aliados",
        18,
        "#fbd80e",
        "PSC-aliados",
        "https://www.eluniverso.com/noticias/politica/estos-son-los-18-legisladores-del-bloque-psc-aliados-elegidos-en-los-comicios-anticipados-del-2023-nota",
      ],
      [
        "ADN",
        14,
        "#9C27B9",
        "ADN",
        "https://www.eluniverso.com/noticias/politica/estos-son-los-14-legisladores-de-la-alianza-oficialista-adn-que-comanda-el-presidente-electo-daniel-noboa-nota",
      ],
      [
        "Actuemos (Avanza/SUMA)",
        8,
        "#FF9300",
        "Actuemos (Avanza/SUMA)",
        "https://www.eluniverso.com/noticias/politica/aqui-le-presentamos-a-los-ocho-legisladores-de-la-alianza-actuemos-nota",
      ],
      [
        "Pachakutik",
        5,
        "#10A544",
        "Pachakutik",
        "https://www.eluniverso.com/noticias/politica/estos-son-los-perfiles-de-las-cinco-legisladoras-del-movimiento-pachakutik-nota",
      ],
      [
        "Claro que se puede",
        3,
        "#FFFF",
        "Claro que se puede",
        "https://www.eluniverso.com/noticias/politica/conozca-a-los-tres-legisladores-que-obtuvo-la-alianza-claro-que-se-puede-nota",
      ],
      [
        "Independientes y grupos de minoría",
        12,
        "#9E9E9E",
        "Independientes y grupos de minoría",
        "https://www.eluniverso.com/noticias/politica/conozca-a-los-legisladores-chullos-los-que-vienen-de-grupos-de-minoria-o-locales-y-se-declaran-independientes-nota/",
      ],
      // ["Gente Buena", 0, "#0165F1", "Gente Buena"],
    ];
  } else if (dataType === "corte3") {
    data = [
      [
        "Revolución Ciudadana",
        51,
        "#46A4DA",
        "Revolución Ciudadana",
        "https://www.eluniverso.com/noticias/politica/conozca-a-los-51-legisladores-de-la-bancada-de-la-revolucion-ciudadana-nota",
      ],
      [
        "Construye",
        18,
        "#0001FC",
        "Construye",
        "https://www.eluniverso.com/noticias/politica/estos-son-los-18-legisladores-del-movimiento-construye-nota/",
      ],
      [
        "PSC-aliados",
        18,
        "#fbd80e",
        "PSC-aliados",
        "https://www.eluniverso.com/noticias/politica/estos-son-los-18-legisladores-del-bloque-psc-aliados-elegidos-en-los-comicios-anticipados-del-2023-nota/",
      ],
      [
        "ADN",
        14,
        "#9C27B9",
        "ADN",
        "https://www.eluniverso.com/noticias/politica/estos-son-los-14-legisladores-de-la-alianza-oficialista-adn-que-comanda-el-presidente-electo-daniel-noboa-nota",
      ],
      [
        "Actuemos (Avanza/SUMA)",
        8,
        "#FF9300",
        "Actuemos (Avanza/SUMA)",
        "https://www.eluniverso.com/noticias/politica/aqui-le-presentamos-a-los-ocho-legisladores-de-la-alianza-actuemos-nota",
      ],
      [
        "Pachakutik",
        5,
        "#10A544",
        "Pachakutik",
        "https://www.eluniverso.com/noticias/politica/estos-son-los-perfiles-de-las-cinco-legisladoras-del-movimiento-pachakutik-nota",
      ],
      [
        "Claro que se puede",
        3,
        "#FFFF",
        "Claro que se puede",
        "https://www.eluniverso.com/noticias/politica/conozca-a-los-tres-legisladores-que-obtuvo-la-alianza-claro-que-se-puede-nota",
      ],
      [
        "Independientes y grupos de minoría",
        13,
        "#9E9E9E",
        "Independientes y grupos de minoría",
        "https://www.eluniverso.com/noticias/politica/conozca-a-los-legisladores-chullos-los-que-vienen-de-grupos-de-minoria-o-locales-y-se-declaran-independientes-nota/",
      ],
      [
        "Gente Buena",
        7,
        "#0165F1",
        "Gente Buena",
        "https://www.eluniverso.com//noticias/politica/gente-buena-que-era-parte-de-una-alianza-con-construye-armo-un-grupo-aparte-de-siete-legisladores-nota",
      ],
    ];
  }

  var options = {
    chart: {
      type: "item",
      backgroundColor: "#ebebeb",
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
        keys: ["name", "y", "color", "label", "url"],
        data: data,
        dataLabels: {
          enabled: true,
          format: "<a href='{point.url}' style=''>{point.label}</a>",
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
