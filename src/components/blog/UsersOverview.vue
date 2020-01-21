<template>
  <d-card class="card-small h-100">

    <!-- Card Header -->
    <d-card-header class="border-bottom">
      <h6 class="m-0">{{ title }}</h6>
      <div class="block-handle"></div>
    </d-card-header>

    <d-card-body class="pt-0">
      <d-row class="border-bottom py-2 bg-light">

        <!-- Date Range -->
        <d-col col sm="6" class="d-flex mb-2 mb-sm-0">
          <d-input-group size="sm" class="date-range d-flex justify-content-left">
            <d-datepicker v-model="dateRange.from" :highlighted="{ from: dateRange.from, to: dateRange.to || new Date() }" placeholder="Fecha inicio" typeable small />
            <d-datepicker v-model="dateRange.to" :highlighted="{ from: dateRange.from, to: dateRange.to || new Date() }" placeholder="Fecha fin" typeable small />
            <d-input-group-text slot="append">
              <i class="material-icons">&#xE916;</i>
            </d-input-group-text>
          </d-input-group>
        </d-col>

        <!-- View Full Report -->
        <d-col col sm="6">
          <d-button size="sm" class="d-flex btn-white ml-auto mr-auto ml-sm-auto mr-sm-0 mt-3 mt-sm-0">Descargar reporte &rarr;</d-button>
        </d-col>

      </d-row>

      <!-- Legend & Chart -->
      <!-- <div ref="legend"></div>
      <canvas height="120" ref="canvas" style="max-width: 100% !important;"></canvas> -->
      <img class="map" src="/anillo6-white.png" style="zoom:50%;" usemap="#image-map"/>
      <map name="image-map" id="image-map">
        <area  target="_blank" alt="n2" title="n2" href="www.google.com" coords="354,482,269,534,183,479,259,433" shape="poly">
        <area  target="_blank" alt="n1" title="n1" href="www.google.com" coords="318,828,406,877,317,926,236,870" shape="poly">
        <area target="_blank" alt="ln-n1-n2" title="ln-n1-n2" href="www.google.com" coords="272,845,284,840,118,741,378,587,284,530,269,538,361,588,98,743" shape="poly">
        <area target="_blank" alt="n3" title="n3" href="www.google.com" coords="516,281,602,336,690,287,591,232" shape="poly">
        <area target="_blank" alt="n4" title="n4" href="www.google.com" coords="964,263,1049,215,1139,265,1056,313" shape="poly">
        <area target="_blank" alt="n5" title="n5" href="www.google.com" coords="1204,530,1293,583,1211,631,1125,577" shape="poly">
        <area target="_blank" alt="n6" title="n6" href="www.google.com" coords="879,805,963,858,879,903,796,854" shape="poly">
        <area target="_blank" alt="ln-n2-n3" title="ln-n2-n3" href="www.google.com" coords="319,458,563,314,573,321,329,464" shape="poly">
        <area target="_blank" alt="ln-n3-n4" title="ln-n3-n4" href="www.google.com" coords="682,280,686,284,766,243,974,344,1038,309,1033,305,976,337,766,236,682,280" shape="poly">
        <area target="_blank" alt="ln-n4-n5" title="ln-n4-n5" href="www.google.com" coords="1099,291,1195,344,1038,437,1195,529,1202,526,1052,437,1204,344,1102,284" shape="poly">
        <area target="_blank" alt="ln-n5-n6" title="ln-n5-n6" href="www.google.com" coords="1195,623,1031,706,1143,763,963,847,974,854,1154,763,1047,706,1202,626" shape="poly">
        <area target="_blank" alt="ln-n6-n7" title="ln-n6-n7" href="www.google.com" coords="869,899,620,1020,381,899,374,903,618,1026,874,901" shape="poly">
    </map>

    </d-card-body>
  </d-card>
</template>

<script>
import Chart from '../../utils/chart';

const defaultChartData = {
  labels: Array.from(new Array(30), (_, i) => (i === 0 ? 1 : i)),
  datasets: [{
    label: 'Current Month',
    fill: 'start',
    data: [500, 800, 320, 180, 240, 320, 230, 650, 590, 1200, 750, 940, 1420, 1200, 960, 1450, 1820, 2800, 2102, 1920, 3920, 3202, 3140, 2800, 3200, 3200, 3400, 2910, 3100, 4250],
    backgroundColor: 'rgba(0,123,255,0.1)',
    borderColor: 'rgba(0,123,255,1)',
    pointBackgroundColor: '#ffffff',
    pointHoverBackgroundColor: 'rgb(0,123,255)',
    borderWidth: 1.5,
    pointRadius: 0,
    pointHoverRadius: 3,
  }, {
    label: 'Past Month',
    fill: 'start',
    data: [380, 430, 120, 230, 410, 740, 472, 219, 391, 229, 400, 203, 301, 380, 291, 620, 700, 300, 630, 402, 320, 380, 289, 410, 300, 530, 630, 720, 780, 1200],
    backgroundColor: 'rgba(255,65,105,0.1)',
    borderColor: 'rgba(255,65,105,1)',
    pointBackgroundColor: '#ffffff',
    pointHoverBackgroundColor: 'rgba(255,65,105,1)',
    borderDash: [3, 3],
    borderWidth: 1,
    pointRadius: 0,
    pointHoverRadius: 2,
    pointBorderColor: 'rgba(255,65,105,1)',
  }],
};

export default {
  name: 'users-overview',
  props: {
    title: {
      type: String,
      default: 'GDL_CANADA',
    },
    chartData: {
      type: Object,
      default() {
        return defaultChartData;
      },
    },
  },
  data() {
    return {
      dateRange: {
        from: null,
        to: null,
      },
    };
  },
  mounted() {
    const chartOptions = {
      ...{
        responsive: true,
        legend: {
          position: 'top',
        },
        elements: {
          line: {
            // A higher value makes the line look skewed at this ratio.
            tension: 0.3,
          },
          point: {
            radius: 0,
          },
        },
        scales: {
          xAxes: [{
            gridLines: false,
            ticks: {
              callback(tick, index) {
                // Jump every 7 values on the X axis labels to avoid clutter.
                return index % 7 !== 0 ? '' : tick;
              },
            },
          }],
          yAxes: [{
            ticks: {
              suggestedMax: 45,
              callback(tick) {
                if (tick === 0) {
                  return tick;
                }
                // Format the amounts using Ks for thousands.
                return tick > 999 ? `${(tick / 1000).toFixed(1)}K` : tick;
              },
            },
          }],
        },
        hover: {
          mode: 'nearest',
          intersect: false,
        },
        tooltips: {
          custom: false,
          mode: 'nearest',
          intersect: false,
        },
      },
      ...this.chartOptions,
    };

    const BlogUsersOverview = new Chart(this.$refs.canvas, {
      type: 'LineWithLine',
      data: this.chartData,
      options: chartOptions,
    });

      // They can still be triggered on hover.
    const buoMeta = BlogUsersOverview.getDatasetMeta(0);
    buoMeta.data[0]._model.radius = 0;
    buoMeta.data[this.chartData.datasets[0].data.length - 1]._model.radius = 0;

    // Render the chart.
    BlogUsersOverview.render();
  },
};
</script>

<style scoped>
.image{
  position: relative;
}
.image a{
  display: block;
  position: absolute;
}
</style>
