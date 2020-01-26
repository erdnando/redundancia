<template>
  <d-container fluid class="main-content-container px-2">
    <!-- Page Header -->
    <d-row no-gutters class="page-header py-2">
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <span class="text-uppercase page-subtitle">Ejecución</span>
      </d-col>
    </d-row>
    <vue-tiny-tabs id="mytabs" :anchor="false" :closable="true" :hideTitle="false" @on-close="onClose" @on-before="onBefore" @on-after="onAfter">
      <div class="section" id="example">
        <h3 class="title">Example code</h3>
        <h3>Javascript</h3>
      </div>
      <div class="section" id="options">
        <h3 class="title">Options table</h3>
        <h3>Options</h3>
      </div>
      <div class="section" id="components">
        <h3 class="title">Components</h3>
        <h3>Options</h3>
      </div>
    </vue-tiny-tabs>
    <!-- Small Stats Blocks -->
    <d-row>
      <d-col lg v-for="(stats, idx) in smallStats" :key="idx" class="mb-3">
        <small-stats :id="`small-stats-${idx}`" variation="1" :chart-data="stats.datasets" :label="stats.label" :value="stats.value" :percentage="stats.percentage" :increase="stats.increase" :decrease="stats.decrease" />
      </d-col>
    </d-row>

    <d-row>
      <!-- Users Overview -->
      <d-col lg="8" md="6" sm="12" class="mb-3">
        <bo-users-overview />
      </d-col>

      <!-- Users by Device (lite) -->
      <d-col lg="4" md="6" sm="12" class="mb-3">
        <bo-users-by-device />
      </d-col>
    </d-row>

    <d-row>
      <!-- Logs -->
      <d-col lg="8" md="12" sm="12" class="mb-8">
        <bo-new-draft />
      </d-col>

      <!-- Videos -->
      <d-col lg="4" md="6" sm="12" class="mb-4">
        <bo-discussions @approve="handleApprove" @reject="handleReject" @edit="handleEdit" @view-all-comments="handleViewAllComments" />
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
import SmallStats from '@/components/common/SmallStats.vue';
import UsersOverview from '@/components/blog/UsersOverview.vue';
import UsersByDevice from '@/components/blog/UsersByDeviceLite.vue';
import NewDraft from '@/components/blog/NewDraft.vue';
import Discussions from '@/components/blog/Discussions.vue';
import VueTinyTabs from 'vue-tiny-tabs';

export default {
  components: {
    SmallStats,
    boUsersOverview: UsersOverview,
    boUsersByDevice: UsersByDevice,
    boNewDraft: NewDraft,
    boDiscussions: Discussions,
    VueTinyTabs
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
</script>
<style scoped>
.tinytabs .tabs {
	margin-left: 15px;
	display: flex;
	flex-flow: row wrap;
}
.tinytabs .tabs .tab .close {
	padding-left: 5px;
}
.tinytabs .tabs .tab {
	margin: 0 3px 0 0;
	background: #e1e1e1;
	display: block;
	padding: 6px 15px;
	text-decoration: none;
	color: #666;
	font-weight: bold;
	border-radius: 3px 3px 0 0;
}
.tinytabs .section {
	background: #f1f1f1;
	overflow: hidden;
	padding: 15px;
	clear: both;
	border-radius: 3px;
}
.tinytabs .tab.sel {
	background: #f1f1f1;
	color: #333;
	text-shadow: none;
}
</style>

