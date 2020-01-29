<template>
  <d-card class="card-small h-100">

    <!-- Card Header -->
    <d-card-header class="border-bottom">
      <h6 class="m-0">{{ title }}</h6>
      <div class="block-handle"></div>
    </d-card-header>

    <d-card-body class="pt-0" id="RingsTM">
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

      {{divImg}}

      <!-- Legend & Chart -->
      <!-- <div ref="legend"></div>
      <canvas height="120" ref="canvas" style="max-width: 100% !important;"></canvas> -->
      <img id="Anillo2" src="Anillo2N.jpg" usemap="#image-map" class="map">
      <map name="image-map">
        <area id="2N1" alt="N1" title="N1" coords="255,396,312,430,313,443,260,470,194,434" shape="poly">
        <area id="2N2" alt="N2" title="N2" coords="368,228,440,193,502,233,435,269" shape="poly">
        <area id="2N1S" alt="N1S" title="N1S" coords="130,334,126,263,184,292,194,359" shape="poly">
        <area id="2N1P" alt="N1P" title="N1P" coords="407,472,389,407,455,419,469,482" shape="poly">
        <area id="2N2S" alt="N2S" title="N2S" coords="365,165,333,90,402,110,431,173" shape="poly">
        <area id="2N2P" alt="N2P" title="N2P" coords="590,249,569,183,635,197,656,267" shape="poly">
        <area id="2N1LN2" alt="N1LN2" title="N1LN2" coords="289,414,380,369,268,313,401,249,407,251,278,312,389,370,292,419,289,414" shape="poly">
        <area id="2N1LS" alt="N1LS" title="N1LS" coords="214,421,86,356,128,334,136,336,96,356,218,417" shape="poly">
        <area id="2N1LP" alt="N1LP" title="N1LP" coords="287,454,360,491,404,468,403,464,360,485,294,451" shape="poly">
        <area id="2N2LS" alt="N2LS" title="N2LS" coords="396,212,331,178,362,161,365,164,340,179,402,211" shape="poly">
        <area id="2N2LP" alt="N2LP" title="N2LP" coords="468,251,544,290,590,251,587,245,543,285,473,246" shape="poly">
        <area id="2Listener" alt="Listener" title="Listener" coords="765,0,746,28,758,61,775,76,758,129,748,153,739,168,757,169,766,151,792,151,810,152,822,171,836,167,814,126,806,100,801,75,811,66,823,56,830,20,815,1" shape="poly">
      </map>

      <img id="Anillo3" src="Anillo3N.jpg" usemap="#image-map" class="map">
      <map name="image-map">
        <area id="3N1" alt="N1" title="N1" coords="76,291,147,254,214,295,147,331" shape="poly">
        <area id="3N2" alt="N2" title="N2" coords="378,219,445,186,513,223,448,259" shape="poly">
        <area id="3N3" alt="N3" title="N3" coords="357,469,426,434,493,472,429,507" shape="poly">
        <area id="3N1S" alt="N1S" title="N1S" coords="43,134,64,203,126,209,104,154" shape="poly">
        <area id="3N1P" alt="N1P" title="N1P" coords="153,150,172,212,232,223,214,164" shape="poly">
        <area id="3N2S" alt="N2S" title="N2S" coords="449,78,474,151,540,155,511,96" shape="poly">
        <area id="3N2P" alt="N2P" title="N2P" coords="566,174,587,239,649,249,629,188" shape="poly">
        <area id="3N3S" alt="N3S" title="N3S" coords="344,329,366,395,431,403,405,342" shape="poly">
        <area id="3N3P" alt="N3P" title="N3P" coords="558,445,578,511,643,522,620,460" shape="poly">
        <area id="3N1LN2" alt="N1LN2" title="N1LN2" coords="194,285,377,180,413,202,407,204,378,185,198,287,194,285,377,180" shape="poly">
        <area id="3N2LN3" alt="N2LN3" title="N2LN3" coords="484,240,665,342,464,458,461,454,654,343,478,242" shape="poly">
        <area id="3N1LS" alt="N1LS" title="N1LS" coords="118,272,14,220,62,198,64,203,25,220,122,267" shape="poly">
        <area id="3N1LP" alt="N1LP" title="N1LP" coords="141,258,116,242,173,210,177,213,125,242,146,255" shape="poly">
        <area id="3N2LS" alt="N2LS" title="N2LS" coords="433,195,405,179,471,146,473,150,413,181,437,192" shape="poly">
        <area id="3N2LP" alt="N2LP" title="N2LP" coords="587,240,577,243,490,199,480,206,473,201,492,194,574,236,584,233,577,243" shape="poly">
        <area id="3N3LS" alt="N3LS" title="N3LS" coords="398,448,379,437,413,418,374,397,386,397,421,418,386,437,403,445" shape="poly">
        <area id="3N3LP" alt="N3LP" title="N3LP" coords="465,486,482,498,527,470,574,500,576,506,525,475,480,505,462,489" shape="poly">
        <area id="3Listener" alt="Listener" title="Listener" coords="692,6,674,26,671,43,672,52,676,61,686,71,700,76,696,94,690,111,683,132,676,149,665,171,674,177,685,173,690,157,734,157,739,169,749,176,760,173,749,153,741,132,734,113,728,93,724,75,737,69,748,58,753,45,752,29,744,15,732,5" shape="poly">
      </map>

      <img id="Anillo4" src="Anillo4N.jpg" usemap="#image-map" class="map">
      <map name="image-map">
        <area id="4N1" alt="N1" title="N1" coords="154,434,221,395,290,435,221,471" shape="poly">
        <area id="4N2" alt="N2" title="N2" coords="164,214,227,174,292,213,231,250" shape="poly">
        <area id="4N3" alt="N3" title="N3" coords="470,194,539,155,606,196,540,231" shape="poly">
        <area id="4N4" alt="N4" title="N4" coords="492,444,556,402,627,444,561,480" shape="poly">
        <area id="4N1S" alt="N1S" title="N1S" coords="111,297,137,364,200,375,174,317" shape="poly">
        <area id="4N1P" alt="N1P" title="N1P" coords="339,412,366,483,428,490,405,431" shape="poly">
        <area id="4N2S" alt="N2S" title="N2S" coords="116,50,137,116,206,127,174,68" shape="poly">
        <area id="4N2P" alt="N2P" title="N2P" coords="258,47,280,117,346,128,327,65" shape="poly">
        <area id="4N3S" alt="N3S" title="N3S" coords="446,48,470,116,532,124,508,67" shape="poly">
        <area id="4N3P" alt="N3P" title="N3P" coords="595,49,623,115,684,127,664,66" shape="poly">
        <area id="4N4S" alt="N4S" title="N4S" coords="458,297,482,367,551,376,523,318" shape="poly">
        <area id="4N4P" alt="N4P" title="N4P" coords="679,393,701,460,766,471,742,411" shape="poly">
        <area id="4N1LN2" alt="N1LN2" title="N1LN2" coords="253,414,347,366,130,258,190,227,193,230,139,257,357,367,253,419,253,414,253,419" shape="poly">
        <area id="4N2LN3" alt="N2LN3" title="N2LN3" coords="269,227,443,130,510,171,507,175,441,137,277,232" shape="poly">
        <area id="4N3LN4" alt="N3LN4" title="N3LN4" coords="518,217,469,244,695,357,578,416,580,420,706,355,480,244,522,221,518,217" shape="poly">
        <area id="4N1LS" alt="N1LS" title="N1LS" coords="189,419,150,397,175,384,139,365,153,366,183,384,158,397,189,414,189,419" shape="poly">
        <area id="4N1LP" alt="N1LP" title="N1LP" coords="252,454,286,474,329,451,358,468,361,475,329,456,284,482,248,457" shape="poly">
        <area id="4N2LS" alt="N2LS" title="N2LS" coords="199,189,104,133,136,113,139,116,112,133,206,188" shape="poly">
        <area id="4N2LP" alt="N2LP" title="N2LP" coords="255,189,293,171,227,137,279,109,279,113,235,137,301,171,258,193" shape="poly">
        <area id="4N3LS" alt="N3LS" title="N3LS" coords="520,169,443,123,469,108,471,112,451,125,521,165,520,169" shape="poly">
        <area id="4N3LP" alt="N3LP" title="N3LP" coords="576,178,619,157,570,133,622,108,623,113,580,133,627,157,580,181" shape="poly">
        <area id="4N4LS" alt="N4LS" title="N4LS" coords="527,422,489,400,518,383,493,369,504,369,527,383,497,400,531,421" shape="poly">
        <area id="4N4LP" alt="N4LP" title="N4LP" coords="594,462,605,471,673,430,697,449,699,455,673,436,603,476,587,462" shape="poly">
        <area id="4Listener" alt="Listener" title="Listener" coords="756,6,739,22,735,40,736,51,743,64,751,71,764,78,761,102,754,119,748,140,741,155,730,170,737,178,749,173,751,158,799,158,801,169,811,176,825,175,812,153,801,130,794,102,788,73,804,67,813,54,819,40,813,18,795,3" shape="poly">
      </map>

    </d-card-body>
  </d-card>
</template>

<script>
//import Chart from '../../utils/chart';

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
  template:'',
  props: {
    noAnillos:String,
    idTab:String,
    title: {
      type: String,
      default: '',
     },
    },
  data() {
    return {
      dateRange: {
        from: null,
        to: null,
      },
      divImg:'',
      arrMapas: [{noAnillo:1,map:'html del map'},{noAnillo:2,map:'html map'}]
    }
  },
  methods:{
    AgregaImg(event,mapAnillo){
      alert('holauser');
      this.divImg='user2';
    },
  },
  mounted() {
    console.log("on mounted debo pintar:"+ this.noAnillos);
    //todo
    //de un arreglo buscar por el no de anillo la def del mapa y pintarlo

  },
  created() {
    console.log("on created debo pintar:"+ this.noAnillos);
   // this.$eventHub.$on('agregaimg', this.AgregaImg);
  },
  beforeDestroy() {
    this.$eventHub.$off('agregaimg');
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
