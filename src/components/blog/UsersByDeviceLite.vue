<template>
  <div class="card card-small h-100">

    <!-- Card Header -->
    <div class="card-header border-bottom">
      <h6 class="m-0">{{title}}</h6>
    </div>
   <!--Timeline -->
   <div class="container">
  <div class="header">
    <!-- <div class="color-overlay">
      <div class="day-number">8</div>
      <div class="date-right">
        <div class="day-name">Monday</div>
        <div class="month">February 2015</div>
      </div>
    </div>
    <div class="actionbutton">+</div> -->
  </div>
  <div class="kt-timeline-v2"></div>
  <div class="timeline" style="marginn-left:-30px">
    <ul style="margin-left:-30px;margin-top:-15px">
      <li style="background-color:aliceblue">
        <div class="bullet green"></div>
        <div class="time">12:20.54 GMT</div>
        <div class="desc">
          <h3>PING... 10.5.0.12</h3>
          <h4>Nodo 1</h4>
        </div>
      </li>
      <li style="background-color:white">
        <div class="bullet green"></div>
        <div class="time">12:22.24 GMT</div>
        <div class="desc">
          <h3>OSPF Tracking OK</h3>
          <h4>NODO 1</h4>
          <div class="people">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw2QW55E8h2Nv0P-hGpt91F9KeeRtGXk5Fph4dBhYQ22TsPzdMQA&s" alt="" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeKX5Fbh_oySRdh7dcq2uf4TzXAwxI1dIGjNwZq2dlu80-ZluW&s" alt="" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBg2Xr98HC1wAos1C7knoOyH0uC_K0PnMr6SLlSnr18OypDl5F&s" alt="" />
          </div>
        </div>
      </li>
      <li style="background-color:aliceblue">
        <div class="bullet green"></div>
        <div class="time">12:23.14 GMT</div>
        <div class="desc">
          <h3>Voz ... 200 OK</h3>
        </div>
      </li>
      <li style="background-color:white">
        <div class="bullet red"></div>
        <div class="time">12:25.15 GMT</div>
        <div class="desc">
          <h3>MPLS  ...Trying..</h3>
          <h4>NODO 1</h4>
        </div>
      </li>
    </ul>
  </div>
</div>

   <!--timeline end-->

    <!-- Chart -->
    <!--<div class="card-body d-flex py-0">
      <canvas height="220" ref="canvas" class="blog-users-by-device m-auto"></canvas>
    </div>-->

    <d-card-footer class="border-top">
      <d-row>

        <!-- Time Frame -->
        <d-col>
          <d-select size="sm" value="last-week" style="max-width: 130px;">
            <option value="last-week">Last Week</option>
            <option value="today">Today</option>
            <option value="last-month">Last Month</option>
            <option value="last-year">Last Year</option>
          </d-select>
        </d-col>

        <!-- View Full Report -->
        <d-col class="text-right view-report">
          <a href="#">View full report &rarr;</a>
        </d-col>

      </d-row>
    </d-card-footer>
  </div>
</template>

<script>
import Chart from '../../utils/chart';

const defaultChartData = {
  datasets: [{
    hoverBorderColor: '#ffffff',
    data: [68.3, 24.2, 7.5],
    backgroundColor: [
      'rgba(0,123,255,0.9)',
      'rgba(0,123,255,0.5)',
      'rgba(0,123,255,0.3)',
    ],
  }],
  labels: ['Desktop', 'Tablet', 'Mobile'],
};

export default {
  name: 'users-by-device',
  props: {
    /**
       * The chart config.
       */
    chartConfig: {
      type: Object,
      default() {
        return {};
      },
    },
    /**
       * The chart options.
       */
    chartOptions: {
      type: Object,
      default() {
        return {};
      },
    },
    /**
       * The chart data.
       */
    chartData: {
      type: Object,
      default() {
        return defaultChartData;
      },
    },
    /**
       * The chart title.
       */
    title: {
      type: String,
      default: 'En ejecución',
    },
  },
  mounted() {
    const chartConfig = {
      type: 'pie',
      data: this.chartData,
      options: {
        ...{
          legend: {
            position: 'bottom',
            labels: {
              padding: 25,
              boxWidth: 20,
            },
          },
          cutoutPercentage: 0,
          tooltips: {
            custom: false,
            mode: 'index',
            position: 'nearest',
          },
        },
        ...this.chartOptions,
      },
    };

    new Chart(this.$refs.canvas, chartConfig);
  },
};
</script>

<style lang="scss">
$black: #202020;
$white: #fff;
$dark-grey: #808080;
$light-grey: #d9d9d9;
$purple: #B97CFC;
$pink: #F93B69;
$green: rgb(29, 252, 9);
$orange: #EB8B6E;
$red: rgb(245, 13, 13);

.container {
  max-width: 350px;
  max-height: 630px;
  overflow: hidden;
  margin: 0px auto 0;
  box-shadow: 0 0 0px lighten($black, 50);
  font-family: 'Open Sans', sans-serif;
}

.navbar {
  // background: $purple;
  color: $white;
  padding: 1em 0.5em;
  a {
    color: $white;
    text-decoration: none;
    font-size: 1.3em;
    float: left;
  }
  span {
    font-size: 1.1em;
    font-weight: 300;
    display: block;
    text-align: center;
  }
}

.profile-pic {
  width: 30px;
  height: 30px;
  display: inline-block;
  float: right;
  position: relative;
  img {
    width: 100%;
    border-radius: 50%;
  }
}

.notification {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  top: 2px;
  right: 2px;
  background: $pink;
}

.header {
  background: url(https://unsplash.it/1080/720?image=1044);
  background-size: cover;
  color: $white;
  position: relative;
}

.color-overlay {
  padding: 3em 2em;
  box-sizing: border-box;
  background: rgba(123, 94, 155, 0.5) ;
}

.actionbutton {
  position: absolute;
  background: $pink;
  width: 50px;
  height: 50px;
  font-size: 3em;
  font-weight: 300;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: -25px;
  right: 20px;
  box-shadow: 0 0 8px #202020;
}

.day-number {
  font-size: 4em;
  display: inline-block;
  margin-right: 15px;
}

.date-right {
  display: inline-block;
}

.day-name {
  font-size: 1.6em;
}

.month {
  text-transform: uppercase;
  font-weight: 300;
  font-size: 0.6em;
  letter-spacing: 2px;
  margin-top: 2px;
}

.timeline {
  ul {
    padding: 1em 0 0 2em;
    margin: 0;
    list-style: none;
    position: relative;
  }
  li div{
    display: inline-block;
    margin: 1em 0;
    vertical-align: top;
  }
  .bullet {
    width: 1em;
    height: 1em;
    box-sizing: border-box;
    border-radius: 50%;
    background: $white;
    margin-right: 1em;
    &.pink {
      border: 6px solid $pink;position: relative;z-index: 3
    }
    &.green {
      border: 6px solid $green;position: relative;z-index: 3;
    }
    &.orange {
      border: 6px solid $orange;position: relative;z-index: 3
    }
    &.red {
      border: 6px solid $red;position: relative;z-index: 3
    }
  }
  .time {
    width: 20%;
    font-size: 0.75em;
    padding-top: 0.25em;
  }
  .desc {
    width: 50%;
  }
  h3 {
    font-size: 0.9em;
    font-weight: 400;
    margin: 0;
  }
  h4 {
    margin: 0;
    font-size: 0.7em;
    font-weight: 400;
    color: $dark-grey;
  }
  .people img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
}

.credits, .video{
  position: absolute;
  bottom:10px;
  color: $dark-grey;
  font-size: 100%;
  text-decoration: underline;
}

.credits {
  left: 10px;
}

.video{
  right: 10px;
}

.kt-timeline-v2 {
    content: '';
    position: absolute;
    margin-left: 5px;
    width: 0px;
    top: 78px;
    height: 74%;
    border-style: dotted;
    z-index:1;
}
</style>
