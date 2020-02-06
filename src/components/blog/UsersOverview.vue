<template>
  <d-card class="card-small h-100">

    <!-- Card Header -->
    <d-card-header class="border-bottom" style="text-align:end;">
      <h6 class="m-0">{{ title }}</h6>
      <!-- <button :id="'btn_Iniciar'+noAnillos" @click="stratTour(noAnillos)"> Iniciar </button> -->
      <button type="button" class="btn btn-outline-primary" :id="'btn_Iniciar'+noAnillos" @click="stratTour(noAnillos)"><i class="far fa-play-circle"></i> Inciar</button>
      <div class="block-handle"></div>
    </d-card-header>

    <d-card-body class="pt-0" :id="'RingsTM'+noAnillos">
      <d-row class="border-bottom py-2 bg-light">

        <!-- Date Range -->
        <d-col col sm="8" class="d-flex mb-2 mb-sm-0">
          <d-input-group size="sm" class="date-range d-flex justify-content-left">
            <d-datepicker v-model="dateRange.from" :highlighted="{ from: dateRange.from, to: dateRange.to || new Date() }" placeholder="Fecha inicio" typeable small />
            <d-datepicker v-model="dateRange.to" :highlighted="{ from: dateRange.from, to: dateRange.to || new Date() }" placeholder="Fecha fin" typeable small />
            <d-input-group-text slot="append">
              <i class="material-icons">&#xE916;</i>
            </d-input-group-text>
          </d-input-group>
        </d-col>

        <!-- View Full Report -->
        <d-col col sm="4">
          <d-button size="sm" class="d-flex btn-white ml-auto mr-auto ml-sm-auto mr-sm-0 mt-3 mt-sm-0">Descargar reporte &rarr;</d-button>
        </d-col>

      </d-row>

      <d-row>
        <span v-html="rawHtml"></span>
      </d-row>


      <!-- Legend & Chart -->
      <!-- <div ref="legend"></div>
      <canvas height="120" ref="canvas" style="max-width: 100% !important;"></canvas> -->

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
      rawHtml:'',
      arrMapas: [
        {
          noAnillo:2,map:'<img id="Anillo2" src="Anillo2N.jpg" usemap="#image-map" class="map">\
                          <map name="image-map">\
                            <area id="2N1" alt="N1" title="N1" coords="255,396,312,430,313,443,260,470,194,434" shape="poly">\
                            <area id="2N2" alt="N2" title="N2" coords="368,228,440,193,502,233,435,269" shape="poly">\
                            <area id="2N1S" alt="N1S" title="N1S" coords="130,334,126,263,184,292,194,359" shape="poly">\
                            <area id="2N1P" alt="N1P" title="N1P" coords="407,472,389,407,455,419,469,482" shape="poly">\
                            <area id="2N2S" alt="N2S" title="N2S" coords="365,165,333,90,402,110,431,173" shape="poly">\
                            <area id="2N2P" alt="N2P" title="N2P" coords="590,249,569,183,635,197,656,267" shape="poly">\
                            <area id="2N1LN2" alt="N1LN2" title="N1LN2" coords="289,414,380,369,268,313,401,249,407,251,278,312,389,370,292,419,289,414" shape="poly">\
                            <area id="2N1LS" alt="N1LS" title="N1LS" coords="214,421,86,356,128,334,136,336,96,356,218,417" shape="poly">\
                            <area id="2N1LP" alt="N1LP" title="N1LP" coords="287,454,360,491,404,468,403,464,360,485,294,451" shape="poly">\
                            <area id="2N2LS" alt="N2LS" title="N2LS" coords="396,212,331,178,362,161,365,164,340,179,402,211" shape="poly">\
                            <area id="2N2LP" alt="N2LP" title="N2LP" coords="468,251,544,290,590,251,587,245,543,285,473,246" shape="poly">\
                            <area id="2Listener" alt="Listener" title="Listener" coords="765,0,746,28,758,61,775,76,758,129,748,153,739,168,757,169,766,151,792,151,810,152,822,171,836,167,814,126,806,100,801,75,811,66,823,56,830,20,815,1" shape="poly">\
                          </map>'
        },
        {
          noAnillo:3,map:'<img id="Anillo3" src="Anillo3N.jpg" usemap="#image-map" class="map">\
                            <map name="image-map">\
                              <area id="3N1" alt="N1" title="N1" coords="76,291,147,254,214,295,147,331" shape="poly">\
                              <area id="3N2" alt="N2" title="N2" coords="378,219,445,186,513,223,448,259" shape="poly">\
                              <area id="3N3" alt="N3" title="N3" coords="357,469,426,434,493,472,429,507" shape="poly">\
                              <area id="3N1S" alt="N1S" title="N1S" coords="43,134,64,203,126,209,104,154" shape="poly">\
                              <area id="3N1P" alt="N1P" title="N1P" coords="153,150,172,212,232,223,214,164" shape="poly">\
                              <area id="3N2S" alt="N2S" title="N2S" coords="449,78,474,151,540,155,511,96" shape="poly">\
                              <area id="3N2P" alt="N2P" title="N2P" coords="566,174,587,239,649,249,629,188" shape="poly">\
                              <area id="3N3S" alt="N3S" title="N3S" coords="344,329,366,395,431,403,405,342" shape="poly">\
                              <area id="3N3P" alt="N3P" title="N3P" coords="558,445,578,511,643,522,620,460" shape="poly">\
                              <area id="3N1LN2" alt="N1LN2" title="N1LN2" coords="194,285,377,180,413,202,407,204,378,185,198,287,194,285,377,180" shape="poly">\
                              <area id="3N2LN3" alt="N2LN3" title="N2LN3" coords="484,240,665,342,464,458,461,454,654,343,478,242" shape="poly">\
                              <area id="3N1LS" alt="N1LS" title="N1LS" coords="118,272,14,220,62,198,64,203,25,220,122,267" shape="poly">\
                              <area id="3N1LP" alt="N1LP" title="N1LP" coords="141,258,116,242,173,210,177,213,125,242,146,255" shape="poly">\
                              <area id="3N2LS" alt="N2LS" title="N2LS" coords="433,195,405,179,471,146,473,150,413,181,437,192" shape="poly">\
                              <area id="3N2LP" alt="N2LP" title="N2LP" coords="587,240,577,243,490,199,480,206,473,201,492,194,574,236,584,233,577,243" shape="poly">\
                              <area id="3N3LS" alt="N3LS" title="N3LS" coords="398,448,379,437,413,418,374,397,386,397,421,418,386,437,403,445" shape="poly">\
                              <area id="3N3LP" alt="N3LP" title="N3LP" coords="465,486,482,498,527,470,574,500,576,506,525,475,480,505,462,489" shape="poly">\
                              <area id="3Listener" alt="Listener" title="Listener" coords="692,6,674,26,671,43,672,52,676,61,686,71,700,76,696,94,690,111,683,132,676,149,665,171,674,177,685,173,690,157,734,157,739,169,749,176,760,173,749,153,741,132,734,113,728,93,724,75,737,69,748,58,753,45,752,29,744,15,732,5" shape="poly">\
                            </map>'
        },
        {
          noAnillo:4,map:'<img id="Anillo4" src="Anillo4N.jpg" usemap="#image-map" class="map">\
                            <map name="image-map">\
                              <area id="4N1" alt="N1" title="N1" coords="154,434,221,395,290,435,221,471" shape="poly">\
                              <area id="4N2" alt="N2" title="N2" coords="164,214,227,174,292,213,231,250" shape="poly">\
                              <area id="4N3" alt="N3" title="N3" coords="470,194,539,155,606,196,540,231" shape="poly">\
                              <area id="4N4" alt="N4" title="N4" coords="492,444,556,402,627,444,561,480" shape="poly">\
                              <area id="4N1S" alt="N1S" title="N1S" coords="111,297,137,364,200,375,174,317" shape="poly">\
                              <area id="4N1P" alt="N1P" title="N1P" coords="339,412,366,483,428,490,405,431" shape="poly">\
                              <area id="4N2S" alt="N2S" title="N2S" coords="116,50,137,116,206,127,174,68" shape="poly">\
                              <area id="4N2P" alt="N2P" title="N2P" coords="258,47,280,117,346,128,327,65" shape="poly">\
                              <area id="4N3S" alt="N3S" title="N3S" coords="446,48,470,116,532,124,508,67" shape="poly">\
                              <area id="4N3P" alt="N3P" title="N3P" coords="595,49,623,115,684,127,664,66" shape="poly">\
                              <area id="4N4S" alt="N4S" title="N4S" coords="458,297,482,367,551,376,523,318" shape="poly">\
                              <area id="4N4P" alt="N4P" title="N4P" coords="679,393,701,460,766,471,742,411" shape="poly">\
                              <area id="4N1LN2" alt="N1LN2" title="N1LN2" coords="253,414,347,366,130,258,190,227,193,230,139,257,357,367,253,419,253,414,253,419" shape="poly">\
                              <area id="4N2LN3" alt="N2LN3" title="N2LN3" coords="269,227,443,130,510,171,507,175,441,137,277,232" shape="poly">\
                              <area id="4N3LN4" alt="N3LN4" title="N3LN4" coords="518,217,469,244,695,357,578,416,580,420,706,355,480,244,522,221,518,217" shape="poly">\
                              <area id="4N1LS" alt="N1LS" title="N1LS" coords="189,419,150,397,175,384,139,365,153,366,183,384,158,397,189,414,189,419" shape="poly">\
                              <area id="4N1LP" alt="N1LP" title="N1LP" coords="252,454,286,474,329,451,358,468,361,475,329,456,284,482,248,457" shape="poly">\
                              <area id="4N2LS" alt="N2LS" title="N2LS" coords="199,189,104,133,136,113,139,116,112,133,206,188" shape="poly">\
                              <area id="4N2LP" alt="N2LP" title="N2LP" coords="255,189,293,171,227,137,279,109,279,113,235,137,301,171,258,193" shape="poly">\
                              <area id="4N3LS" alt="N3LS" title="N3LS" coords="520,169,443,123,469,108,471,112,451,125,521,165,520,169" shape="poly">\
                              <area id="4N3LP" alt="N3LP" title="N3LP" coords="576,178,619,157,570,133,622,108,623,113,580,133,627,157,580,181" shape="poly">\
                              <area id="4N4LS" alt="N4LS" title="N4LS" coords="527,422,489,400,518,383,493,369,504,369,527,383,497,400,531,421" shape="poly">\
                              <area id="4N4LP" alt="N4LP" title="N4LP" coords="594,462,605,471,673,430,697,449,699,455,673,436,603,476,587,462" shape="poly">\
                              <area id="4Listener" alt="Listener" title="Listener" coords="756,6,739,22,735,40,736,51,743,64,751,71,764,78,761,102,754,119,748,140,741,155,730,170,737,178,749,173,751,158,799,158,801,169,811,176,825,175,812,153,801,130,794,102,788,73,804,67,813,54,819,40,813,18,795,3" shape="poly">\
                            </map>'
        },
        {
          noAnillo:5,map:'<img id="Anillo5" src="Anillo5N.jpg" usemap="#image-map" class="map">\
                            <map name="image-map">\
                                <area id="5N1"  alt="N1" title="N1" coords="74,315,125,286,179,319,127,347" shape="poly">\
                                <area id="5N2"  alt="N2" title="N2" coords="202,140,253,109,306,141,255,171" shape="poly">\
                                <area id="5N3"  alt="N3" title="N3" coords="498,141,551,109,606,141,553,170" shape="poly">\
                                <area id="5N4"  alt="N4" title="N4" coords="548,374,601,343,656,376,603,405" shape="poly">\
                                <area id="5N5"  alt="N5" title="N5" coords="360,497,412,467,471,499,416,529" shape="poly">\
                                <area id="5N1S" alt="N1S" title="N1S" coords="49,199,68,258,123,261,102,217" shape="poly">\
                                <area id="5N1P" alt="N1P" title="N1P" coords="218,301,237,356,289,365,271,315" shape="poly">\
                                <area id="5N2S" alt="N2S" title="N2S" coords="177,24,193,79,248,86,225,38" shape="poly">\
                                <area id="5N2P" alt="N2P" title="N2P" coords="324,124,338,177,391,186,375,137" shape="poly">\
                                <area id="5N3S" alt="N3S" title="N3S" coords="496,23,517,81,570,86,550,38" shape="poly">\
                                <area id="5N3P" alt="N3P" title="N3P" coords="641,134,657,186,708,193,689,144" shape="poly">\
                                <area id="5N4S" alt="N4S" title="N4S" coords="524,269,551,317,610,309,572,269" shape="poly">\
                                <area id="5N4P" alt="N4P" title="N4P" coords="686,356,704,414,756,418,739,372" shape="poly">\
                                <area id="5N5S" alt="N5S" title="N5S" coords="341,382,361,434,415,441,394,394" shape="poly">\
                                <area id="5N5P" alt="N5P" title="N5P" coords="508,472,524,527,577,534,559,484" shape="poly">\
                                <area id="5N1LN2 alt="N1LN2" title="N1LN2" coords="151,303,240,258,128,203,230,152,234,155,136,203,248,258,153,305,151,303" shape="poly">\
                                <area id="5N2LN3 alt="N2LN3" title="N2LN3" coords="274,123,394,62,522,126,520,129,394,66,279,126,274,123" shape="poly">\
                                <area id="5N3LN4 alt="N3LN4" title="N3LN4" coords="529,156,492,174,741,298,626,356,627,359,751,299,501,174,532,158,529,156,532,158" shape="poly">\
                                <area id="5N4LN5 alt="N4LN5" title="N4LN5" coords="567,383,470,433,501,449,436,481,440,484,509,447,479,433,571,384" shape="poly">\
                                <area id="5N1LS" alt="N1LS" title="N1LS" coords="106,299,75,281,93,269,77,257,88,260,99,268,82,281,111,297" shape="poly">\
                                <area id="5N1LP" alt="N1LP" title="N1LP" coords="151,329,189,351,212,338,235,351,232,343,214,333,190,346,159,328" shape="poly">\
                                <area id="5N2LS" alt="N2LS" title="N2LS" coords="226,126,195,107,220,93,200,77,210,79,226,93,204,107,231,124" shape="poly">\
                                <area id="5N2LP" alt="N2LP" title="N2LP" coords="276,153,302,169,319,158,336,167,335,172,319,162,302,174,273,156" shape="poly">\
                                <area id="5N3LS" alt="N3LS" title="N3LS" coords="530,124,506,109,539,90,528,82,532,81,546,88,515,108,534,122" shape="poly">\
                                <area id="5N3LP" alt="N3LP" title="N3LP" coords="581,151,614,171,623,163,657,182,653,177,623,158,610,165,584,147" shape="poly">\
                                <area id="5N4LS" alt="N4LS" title="N4LS" coords="576,359,549,342,577,328,558,315,565,314,586,328,556,343,580,357" shape="poly">\
                                <area id="5N4LP" alt="N4LP" title="N4LP" coords="625,391,653,408,676,392,703,408,701,402,674,388,651,402,630,388" shape="poly">\
                                <area id="5N5LS" alt="N5LS" title="N5LS" coords="386,484,361,468,391,451,366,437,378,437,403,451,371,469,389,482" shape="poly">\
                                <area id="5N5LP" alt="N5LP" title="N5LP" coords="444,513,470,529,502,511,522,523,518,513,503,506,469,525,448,509" shape="poly">\
                                <area id="5Listener" alt="Listener" title="Listener" coords="784,18,771,30,766,42,766,52,771,61,775,68,783,74,791,80,785,104,778,123,770,141,760,152,771,157,780,152,783,141,817,141,820,150,829,157,838,153,829,129,822,116,817,98,811,76,828,67,836,51,835,36,829,20" shape="poly">\
                            </map>'
        },
        {
          noAnillo:6,map:'<img id="Anillo6" src="Anillo6N.jpg" usemap="#image-map" class="map" >\
                            <map name="image-map">\
                                <area id="6N1"  alt="N1" title="N1" coords="104,478,157,449,209,482,159,510" shape="poly">\
                                <area id="6N2"  alt="N2" title="N2" coords="75,252,127,224,183,256,129,286" shape="poly">\
                                <area id="6N3"  alt="N3" title="N3" coords="264,143,317,111,372,147,320,174" shape="poly">\
                                <area id="6N4"  alt="N4" title="N4" coords="521,131,573,99,632,132,579,161" shape="poly">\
                                <area id="6N5"  alt="N5" title="N5" coords="609,312,665,281,720,314,667,343" shape="poly">\
                                <area id="6N6"  alt="N6" title="N6" coords="426,468,482,437,533,472,480,499" shape="poly">\
                                <area id="6N1S" alt="N1S" title="N1S" coords="161,348,167,411,217,426,208,376" shape="poly">\
                                <area id="6N1P" alt="N1P" title="N1P" coords="245,415,265,473,317,479,302,430" shape="poly">\
                                <area id="6N2S" alt="N2S" title="N2S" coords="75,130,93,187,144,191,127,144" shape="poly">\
                                <area id="6N2P" alt="N2P" title="N2P" coords="225,238,226,294,277,311,275,262" shape="poly">\
                                <area id="6N3S" alt="N3S" title="N3S" coords="242,28,250,87,297,106,288,53" shape="poly">\
                                <area id="6N3P" alt="N3P" title="N3P" coords="338,32,357,85,409,94,391,44" shape="poly">\
                                <area id="6N4S" alt="N4S" title="N4S" coords="565,5,569,67,619,79,614,32" shape="poly">\
                                <area id="6N4P" alt="N4P" title="N4P" coords="646,58,656,114,706,125,700,77" shape="poly">\
                                <area id="6N5S" alt="N5S" title="N5S" coords="756,255,769,318,816,331,810,283" shape="poly">\
                                <area id="6N5P" alt="N5P" title="N5P" coords="703,374,722,429,777,444,756,388" shape="poly">\
                                <area id="6N6S" alt="N6S" title="N6S" coords="346,383,360,437,410,446,395,397" shape="poly">\
                                <area id="6N6P" alt="N6P" title="N6P" coords="431,327,442,384,492,398,487,353" shape="poly">\
                                <area id="6N1LN2" alt="N1LN2" title="N1LN2" coords="119,470,18,411,185,313,130,283,133,280,190,313,25,411,125,468" shape="poly">\
                                <area id="6N2LN3" alt="N2LN3" title="N2LN3" coords="158,243,300,161,304,164,165,245,158,243" shape="poly">\
                                <area id="6N3LN4" alt="N3LN4" title="N3LN4" coords="358,141,414,113,531,172,566,154,571,156,531,179,412,120,364,147" shape="poly">\
                                <area id="6N4LN5" alt="N4LN5" title="N4LN5" coords="604,149,657,180,567,228,661,284,665,281,577,229,668,179,608,144" shape="poly">\
                                <area id="6N5LN6" alt="N5LN6" title="N5LN6" coords="655,337,562,383,625,417,524,466,524,470,634,417,571,383,658,341" shape="poly">\
                                <area id="6N1LS"  alt="N1LS" title="N1LS" coords="191,438,148,415,160,409,170,412,160,414,202,437,159,457,156,455" shape="poly">\
                                <area id="6N1LP"  alt="N1LP" title="N1LP" coords="172,460,193,449,245,477,263,466,268,472,245,483,193,456,176,465" shape="poly">\
                                <area id="6N2LS"  alt="N2LS" title="N2LS" coords="99,242,76,226,123,200,107,190,116,188,131,200,83,226,102,239" shape="poly">\
                                <area id="6N2LP"  alt="N2LP" title="N2LP" coords="159,266,181,280,203,265,226,280,227,287,203,272,181,289,154,270" shape="poly">\
                                <area id="6N3LS"  alt="N3LS" title="N3LS" coords="302,122,239,88,246,82,308,117" shape="poly">\
                                <area id="6N3LP"  alt="N3LP" title="N3LP" coords="339,126,360,115,324,97,356,80,357,85,336,97,373,114,344,131" shape="poly">\
                                <area id="6N4LS"  alt="N4LS" title="N4LS" coords="575,99,587,92,548,72,570,61,571,66,558,72,599,92,579,104" shape="poly">\
                                <area id="6N4LP"  alt="N4LP" title="N4LP" coords="619,124,653,106,655,112,624,128,619,124,653,106" shape="poly">\
                                <area id="6N5LS"  alt="N5LS" title="N5LS" coords="710,320,717,327,760,302,772,310,768,315,756,310,719,333,701,322" shape="poly">\
                                <area id="6N5LP"  alt="N5LP" title="N5LP" coords="689,326,724,346,652,388,723,430,720,420,662,387,735,346,694,323,689,326" shape="poly">\
                                <area id="6N6LS"  alt="N6LS" title="N6LS" coords="434,472,410,485,332,447,359,433,360,436,341,446,407,479,431,467" shape="poly">\
                                <area id="6N6LP"  alt="N6LP" title="N6LP" coords="474,443,409,402,443,383,447,387,418,403,479,440" shape="poly">\
                                <area id="6Listener" alt="Listener" title="Listener" coords="780,5,764,23,763,41,768,54,787,62,784,79,776,105,768,124,754,143,766,148,778,142,779,129,813,129,816,140,825,145,837,141,822,122,818,104,812,79,812,65,821,56,832,41,829,23,810,2" shape="poly">\
                            </map>'
        },
        {
          noAnillo:7,map:'<img id="Anillo7" src="Anillo7N.jpg" usemap="#image-map" class="map" >\
                            \<map name="image-map">\
                                <area id="7N1" alt="N1" title="N1" coords="105,483,156,451,213,486,162,515" shape="poly">\
                                <area id="7N2" alt="N2" title="N2" coords="78,260,131,229,186,263,134,290" shape="poly">\
                                <area id="7N3" alt="N3" title="N3" coords="197,167,252,135,305,166,253,198" shape="poly">\
                                <area id="7N4" alt="N4" title="N4" coords="391,131,447,99,506,132,448,160" shape="poly">\
                                <area id="7N5" alt="N5" title="N5" coords="559,202,614,170,670,203,617,230" shape="poly">\
                                <area id="7N6" alt="N6" title="N6" coords="584,339,638,306,695,339,639,368" shape="poly">\
                                <area id="7N7" alt="N7" title="N7" coords="419,486,476,453,533,488,475,519" shape="poly">\
                                <area id="7N1S" alt="N1S" title="N1S" coords="165,353,171,413,218,433,210,382" shape="poly">\
                                <area id="7N1P" alt="N1P" title="N1P" coords="251,420,266,476,319,483,304,435" shape="poly">\
                                <area id="7N2S" alt="N2S" title="N2S" coords="75,134,96,192,150,194,127,148" shape="poly">\
                                <area id="7N2P" alt="N2P" title="N2P" coords="227,238,234,300,278,317,277,265" shape="poly">\
                                <area id="7N3S" alt="N3S" title="N3S" coords="175,50,184,110,232,124,225,77" shape="poly">\
                                <area id="7N3P" alt="N3P" title="N3P" coords="275,53,292,111,344,114,331,69" shape="poly">\
                                <area id="7N4S" alt="N4S" title="N4S" coords="438,6,441,65,490,82,480,31" shape="poly">\
                                <area id="7N4P" alt="N4P" title="N4P" coords="517,56,528,112,576,129,569,80" shape="poly">\
                                <area id="7N5S" alt="N5S" title="N5S" coords="633,62,638,123,686,145,677,92" shape="poly">\
                                <area id="7N5P" alt="N5P" title="N5P" coords="687,188,707,242,758,256,741,205" shape="poly">\
                                <area id="7N6S" alt="N6S" title="N6S" coords="734,315,757,377,809,382,785,335" shape="poly">\
                                <area id="7N6P" alt="N6P" title="N6P" coords="720,395,734,461,782,476,775,426" shape="poly">\
                                <area id="7N7S" alt="N7S" title="N7S" coords="421,353,438,414,499,421,475,371" shape="poly">\
                                <area id="7N7P" alt="N7P" title="N7P" coords="584,471,599,530,648,552,636,496" shape="poly">\
                                <area id="7N1N2" alt="N1N2" title="N1N2" coords="121,475,19,415,188,319,134,288,139,285,196,319,28,416,124,472" shape="poly">\
                                <area id="7N2N3" alt="N2N3" title="N2N3" coords="153,245,249,189,241,189,148,243" shape="poly">\
                                <area id="7N3N4" alt="N3N4" title="N3N4" coords="298,162,348,136,411,168,441,154,444,156,409,173,349,142,300,167" shape="poly">\
                                <area id="7N4N5" alt="N4N5" title="N4N5" coords="472,150,512,176,536,160,584,189,590,185,536,152,510,168,473,145" shape="poly">\
                                <area id="7N5N6" alt="N5N6" title="N5N6" coords="586,214,553,230,684,297,650,313,656,318,698,297,565,231,590,217" shape="poly">\
                                <area id="7N6N7" alt="N6N7" title="N6N7" coords="613,352,520,398,592,435,508,476,503,471,575,434,504,399,606,348" shape="poly">\
                                <area id="7N1LS" alt="N1LS" title="N1LS" coords="160,457,194,441,151,420,172,410,174,414,161,421,202,441,162,459" shape="poly">\
                                <area id="7N1LP" alt="N1LP" title="N1LP" coords="180,468,194,458,247,487,267,476,264,472,246,480,195,454,176,464" shape="poly">\
                                <area id="7N2LS" alt="N2LS" title="N2LS" coords="99,244,76,231,126,203,109,194,117,195,132,204,86,231,105,242" shape="poly">\
                                <area id="7N2LP" alt="N2LP" title="N2LP" coords="159,278,182,292,206,278,229,292,233,287,206,272,183,285,164,272" shape="poly">\
                                <area id="7N3LS" alt="N3LS" title="N3LS" coords="238,143,175,110,181,107,243,140" shape="poly">\
                                <area id="7N3LP" alt="N3LP" title="N3LP" coords="275,148,294,139,260,119,286,103,290,108,271,119,303,139,281,151" shape="poly">\
                                <area id="7N4LS" alt="N4LS" title="N4LS" coords="447,98,458,93,422,74,443,60,445,65,432,73,467,94,453,102" shape="poly">\
                                <area id="7N4LP" alt="N4LP" title="N4LP" coords="490,125,526,107,526,113,495,128,490,125" shape="poly">\
                                <area id="7N5LS" alt="N5LS" title="N5LS" coords="597,181,565,161,636,119,638,125,574,162,600,177" shape="poly">\
                                <area id="7N5LP" alt="N5LP" title="N5LP" coords="645,217,655,225,664,218,704,241,702,234,664,211,655,218,648,212" shape="poly">\
                                <area id="7N6LS" alt="N6LS" title="N6LS" coords="670,348,694,363,722,347,751,365,751,371,723,354,694,370,666,351" shape="poly">\
                                <area id="7N6LP" alt="N6LP" title="N6LP" coords="661,354,708,380,667,407,727,440,728,448,658,407,699,381,658,358,661,354" shape="poly">\
                                <area id="7N7LS" alt="N7LS" title="N7LS" coords="447,468,424,453,468,428,450,417,459,417,475,428,434,453,453,463" shape="poly">\
                                <area id="7N7LP" alt="N7LP" title="N7LP" coords="502,507,536,528,564,511,596,531,594,521,562,503,536,519,506,503" shape="poly">\
                                <area id="7Listener" alt="Listener" title="Listener" coords="746,8,730,26,729,43,736,60,754,70,748,90,743,108,734,125,721,146,733,146,739,140,743,131,781,131,786,142,792,146,801,145,794,128,783,106,778,86,776,69,786,58,796,43,794,24,779,7" shape="poly">\
                            </map>'
        },
        {
          noAnillo:8,map:'<img id="Anillo8" src="Anillo8N.jpg" usemap="#image-map" class="map" >\
                            <map name="image-map">\
                                <area id="8N1" alt="N1" title="N1" coords="107,465,159,434,217,466,160,496" shape="poly">\
                                <area id="8N2" alt="N2" title="N2" coords="76,246,130,216,187,246,130,276" shape="poly">\
                                <area id="8N3" alt="N3" title="N3" coords="196,155,252,121,303,156,253,185" shape="poly">\
                                <area id="8N4" alt="N4" title="N4" coords="383,119,444,89,494,125,441,150" shape="poly">\
                                <area id="8N5" alt="N5" title="N5" coords="551,189,603,158,658,190,605,220" shape="poly">\
                                <area id="8N6" alt="N6" title="N6" coords="560,307,614,278,671,308,616,338" shape="poly">\
                                <area id="8N7" alt="N7" title="N7" coords="498,404,551,371,608,404,550,432" shape="poly">\
                                <area id="8N8" alt="N8" title="N8" coords="446,491,499,460,556,491,501,521" shape="poly">\
                                <area id="8N1S" alt="N1S" title="N1S" coords="166,337,171,397,219,414,206,364" shape="poly">\
                                <area id="8N1P" alt="N1P" title="N1P" coords="250,404,263,456,315,464,298,418" shape="poly">\
                                <area id="8N2S" alt="N2S" title="N2S" coords="82,122,92,177,150,180,128,137" shape="poly">\
                                <area id="8N2P" alt="N2P" title="N2P" coords="225,229,228,282,276,303,273,252" shape="poly">\
                                <area id="8N3S" alt="N3S" title="N3S" coords="178,40,183,95,233,118,224,67" shape="poly">\
                                <area id="8N3P" alt="N3P" title="N3P" coords="271,45,288,97,341,107,324,59" shape="poly">\
                                <area id="8N4S" alt="N4S" title="N4S" coords="433,0,436,56,483,72,472,26" shape="poly">\
                                <area id="8N4P" alt="N4P" title="N4P" coords="507,46,521,104,569,121,557,68" shape="poly">\
                                <area id="8N5S" alt="N5S" title="N5S" coords="618,53,626,115,676,133,664,83" shape="poly">\
                                <area id="8N5P" alt="N5P" title="N5P" coords="671,172,691,230,743,240,724,190" shape="poly">\
                                <area id="8N6S" alt="N6S" title="N6S" coords="517,216,537,269,588,274,567,230" shape="poly">\
                                <area id="8N6P" alt="N6P" title="N6P" coords="721,257,731,317,780,332,774,283" shape="poly">\
                                <area id="8N7S" alt="N7S" title="N7S" coords="443,309,466,369,523,374,498,327" shape="poly">\
                                <area id="8N7P" alt="N7P" title="N7P" coords="647,372,661,426,707,441,702,395" shape="poly">\
                                <area id="8N8S" alt="N8S" title="N8S" coords="395,400,416,456,470,463,444,417" shape="poly">\
                                <area id="8N8P" alt="N8P" title="N8P" coords="599,460,608,517,656,529,650,480" shape="poly">\
                                <area id="8N1N2" alt="N1N2" title="N1N2" coords="120,455,23,398,184,303,137,275,143,271,194,303,33,397,128,453" shape="poly">\
                                <area id="8N2N3" alt="N2N3" title="N2N3" coords="152,225,236,177,244,180,157,229" shape="poly">\
                                <area id="8N3N4" alt="N3N4" title="N3N4" coords="291,151,344,125,406,157,430,143,434,147,405,163,343,132,298,154" shape="poly">\
                                <area id="8N4N5" alt="N4N5" title="N4N5" coords="465,140,503,161,527,148,573,175,578,172,525,142,502,153,469,136" shape="poly">\
                                <area id="8N5N6" alt="N5N6" title="N5N6" coords="626,209,665,231,600,270,614,281,619,278,608,271,675,231,632,205" shape="poly">\
                                <area id="8N6N7" alt="N6N7" title="N6N7" coords="595,326,565,341,612,366,578,385,573,382,602,365,554,341,588,322" shape="poly">\
                                <area id="8N7N8" alt="N7N8" title="N7N8" coords="573,420,594,431,520,474,526,479,604,432,576,417" shape="poly">\
                                <area id="8N1LS" alt="N1LS" title="N1LS" coords="165,436,192,422,154,401,169,393,171,400,163,401,200,421,172,439" shape="poly">\
                                <area id="8N1LP" alt="N1LP" title="N1LP" coords="178,443,194,434,245,461,261,453,268,457,246,469,194,440,184,446" shape="poly">\
                                <area id="8N2LS" alt="N2LS" title="N2LS" coords="102,233,80,217,126,190,108,179,115,178,134,191,89,217,107,229" shape="poly">\
                                <area id="8N2LP" alt="N2LP" title="N2LP" coords="164,258,183,269,206,255,227,269,225,276,206,263,185,277,159,261" shape="poly">\
                                <area id="8N3LS" alt="N3LS" title="N3LS" coords="234,134,173,102,183,94,188,101,239,127" shape="poly">\
                                <area id="8N3LP" alt="N3LP" title="N3LP" coords="275,136,295,128,259,108,285,93,289,98,267,108,302,127,279,141" shape="poly">\
                                <area id="8N4LS" alt="N4LS" title="N4LS" coords="445,87,454,82,412,64,435,51,440,57,426,63,465,83,451,92" shape="poly">\
                                <area id="8N4LP" alt="N4LP" title="N4LP" coords="480,115,517,96,520,102,486,119" shape="poly">\
                                <area id="8N5LS" alt="N5LS" title="N5LS" coords="587,171,551,150,623,109,625,116,564,150,593,168,587,171" shape="poly">\
                                <area id="8N5LP" alt="N5LP" title="N5LP" coords="632,204,645,209,653,204,691,225,688,221,651,199,645,206,635,201" shape="poly">\
                                <area id="8N6LS" alt="N6LS" title="N6LS" coords="589,294,578,287,575,290,541,270,550,268,576,285,584,282,592,290" shape="poly">\
                                <area id="8N6LP" alt="N6LP" title="N6LP" coords="649,321,663,329,711,299,729,309,728,303,711,293,664,322,655,316" shape="poly">\
                                <area id="8N7LS" alt="N7LS" title="N7LS" coords="519,393,502,381,497,384,476,371,487,369,499,377,503,374,525,389" shape="poly">\
                                <area id="8N7LP" alt="N7LP" title="N7LP" coords="584,417,604,428,637,412,661,427,663,420,637,405,602,423,587,414" shape="poly">\
                                <area id="8N8LS" alt="N8LS" title="N8LS" coords="469,480,451,468,446,473,422,457,427,454,448,468,453,463,472,478" shape="poly">\
                                <area id="8N8LP" alt="N8LP" title="N8LP" coords="531,505,553,519,583,498,607,513,607,505,582,493,551,513,536,501,583,498" shape="poly">\
                                <area id="Listener" alt="Listener" title="Listener" coords="767,2,749,22,752,44,775,55,771,78,762,108,750,130,752,140,765,136,766,122,802,122,805,130,814,136,822,134,803,103,797,77,793,59,811,46,815,21,798,0" shape="poly">\
                            </map>'
        }
      ]
    }
  },
  methods:{
    stratTour(VnoAnillos){
      //alert('inicia en anillo: ' + VnoAnillos);
      document.getElementById(VnoAnillos+"N1").click();
    },
  },
  mounted() {
    console.log("on mounted debo pintar:"+ this.noAnillos);
    console.log("Mapa a imprimir: " + this.arrMapas[(this.noAnillos-2)].map);
    $('.map').maphilight();
    //setTimeout(function(){
       //document.getElementById(this.noAnillos+"N1").click();
    //}, 1000);

    //todo
    //de un arreglo buscar por el no de anillo la def del mapa y pintarlo

  },
  created() {
    console.log("on created debo pintar:"+ this.noAnillos);
    this.rawHtml=this.arrMapas[(this.noAnillos-2)].map;    
    //this.totAnillos=this.noAnillos;
    
    console.log('Habilitando marcado');
    
   // this.$eventHub.$on('agregaimg', this.AgregaImg);
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
