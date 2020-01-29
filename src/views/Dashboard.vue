<template>
  <d-container fluid class="main-content-container px-2">
    <!-- Page Header -->
    <d-row no-gutters class="page-header py-2">
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <span class="text-uppercase page-subtitle">Ejecución</span>
      </d-col>
    </d-row>  
    <AddTabOcean></AddTabOcean>
    <!-- Small Stats Blocks -->
    
  </d-container>
</template>

<script>
import Vue from 'vue';
//import TabsOcean from '../components/TabsPersonalizado/TabsOcean.vue';
// import {VueTabs, VTab} from 'vue-nav-tabs';
// import 'vue-nav-tabs/themes/vue-tabs.css';
import AddTabOcean from '../components/TabsPersonalizado/AddTabsOcean.vue';


export default {
  components: {
    
    Vue,
    //TabsOcean,
    AddTabOcean
  },
  data() {
    return {
      dateRange: {
        from: null,
        to: null,
      },
      cronometro: {
        tiempo: {
          hora: 0,
          minuto: 0,
          segundo: 0,
        },
        listaDeTiempos: [],
        nombre: 'Cronometro',
        tiempoActivo: false,
        intervalo: null,
      },
    };
  },
  created() {
    this.iniciarCronometro();
  },
  methods: {
    handleApprove(id) {
      alert(`Approving discussion id: ${id}`); // eslint-disable-line no-alert
    },
    handleReject(id) {
      alert(`Rejecting discussion id: ${id}`); // eslint-disable-line no-alert
    },
    handleEdit(id) {
      alert(`Editing discussion id: ${id}`); // eslint-disable-line no-alert
    },
    handleViewAllComments() {
      alert('Viewing all comments!'); // eslint-disable-line no-alert
    },
    iniciarCronometro() {
      setInterval(() => {
        this.incrementarTiempo();
      }, 1000);
    },
    addZero(valor) {
      if (valor < 10) return `0${valor}`;
      return valor;
    },
    incrementarTiempo() {
      const obj = this.cronometro;
      // eslint-disable-next-line no-plusplus
      obj.tiempo.segundo++;
      if (obj.tiempo.segundo === 60) {
        // eslint-disable-next-line no-plusplus
        obj.tiempo.minuto++;
        obj.tiempo.segundo = 0;
      }
      if (obj.tiempo.minuto === 60) {
        // eslint-disable-next-line no-plusplus
        obj.tiempo.hora++;
        obj.tiempo.minuto = 0;
      }
    },
  },
  computed: {
    smallStats() {
      return [{
        label: 'Antes',
        value: '100%',
        percentage: 'Terminado',
        increase: true,
        labels: ['Label', 'Label', 'Label', 'Label', 'Label', 'Label'],
        datasets: [{
          label: 'Today',
          fill: 'start',
          borderWidth: 1.5,
          backgroundColor: 'rgba(0, 184, 216, 0.1)',
          borderColor: 'rgb(0, 184, 216)',
          data: [1, 3, 4, 6, 7, 8, 0],
        }],
      }, {
        label: 'Durante',
        value: '48%',
        percentage: 'Activo',
        increase: true,
        labels: ['Label', 'Label', 'Label', 'Label', 'Label', 'Label'],
        datasets: [{
          label: 'Today',
          fill: 'start',
          borderWidth: 1.5,
          backgroundColor: 'rgba(23,198,113,0.1)',
          borderColor: 'rgb(23,198,113)',
          data: [1, 2, 2, 1, 1, 1, 1],
        }],
      }, {
        label: 'Despues',
        value: '0%',
        percentage: 'NA%',
        increase: false,
        decrease: true,
        labels: ['Label', 'Label', 'Label', 'Label', 'Label', 'Label'],
        datasets: [{
          label: 'Today',
          fill: 'start',
          borderWidth: 1.5,
          backgroundColor: 'rgba(255,180,0,0.1)',
          borderColor: 'rgb(255,180,0)',
          data: [1, 1, 1, 1, 1, 1, 1],
        }],
      }, {
        label: 'Ejecuciones',
        value: '2 de 3',
        percentage: '49%%',
        increase: false,
        decrease: true,
        labels: ['Label', 'Label', 'Label', 'Label', 'Label', 'Label'],
        datasets: [{
          label: 'Today',
          fill: 'start',
          borderWidth: 1.5,
          backgroundColor: 'rgba(255,65,105,0.1)',
          borderColor: 'rgb(255,65,105)',
          data: [1, 1, 1, 0, 0, 0, 0],
        }],
      }, {
        label: 'Contador',
        value: `${this.addZero(this.cronometro.tiempo.minuto)}:${this.addZero(this.cronometro.tiempo.minuto)}:${this.addZero(this.cronometro.tiempo.segundo)}`,
        percentage: '2.4%',
        increase: false,
        decrease: true,
        labels: ['Label', 'Label', 'Label', 'Label', 'Label', 'Label'],
        datasets: [{
          label: 'Today',
          fill: 'start',
          borderWidth: 1.5,
          backgroundColor: 'rgb(0,123,255,0.1)',
          borderColor: 'rgb(0,123,255)',
          data: [3, 2, 3, 2, 4, 5, 4],
        }],
      }];
    },
  },
};

//Vue.use(VueTabs);
</script>
<style>
@import '../../public/tabs-component.css';
</style>