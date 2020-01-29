<template>
    <div id="AddTabOcean">
      <vue-tabs>
          <v-tab v-for="(tab) in tabs" :key="tab.id">
              <!-- pestanias -->
            <div slot="title">{{tab.nombre}} <span @click.stop="" class="ti-close tab-close"></span></div>
            <!-- <section v-show="isActive" :aria-hidden="! isActive" class="tabs-component-panel" :id="computedId" role="tabpanel">
                <slot />
            </section> -->
            <d-row>
                <d-col lg v-for="(stats, idx) in smallStats" :key="idx" class="mb-3">
                    <SmallStats :id="`small-stats-${idx}`" variation="1" :chart-data="stats.datasets" :label="stats.label" :value="stats.value" :percentage="stats.percentage" :increase="stats.increase" :decrease="stats.decrease" />
                </d-col>
            </d-row> 
           <!-- content -->
            <d-row>
                <!-- mapa -->
                <d-col lg="8" md="6" sm="12" class="mb-3">
                    <bo-users-overview :noAnillos="tab.noAnillos" :idTab="tab.Id" />
                </d-col>
                <!-- detalle lado derecho -->
                <d-col lg="4" md="6" sm="12" class="mb-3">
                    <bo-users-by-device :idTab="tab.Id"/>
                </d-col>
            </d-row>

            <d-row>
                <!-- Logs -->
                <!-- <d-col lg="8" md="12" sm="12" class="mb-8">
                    <bo-new-draft />
                </d-col> -->

                <!-- Videos -->
                <!-- <d-col lg="4" md="6" sm="12" class="mb-4">
                    <bo-discussions @approve="handleApprove" @reject="handleReject" @edit="handleEdit" @view-all-comments="handleViewAllComments" />
                </d-col> -->
            </d-row>
            <!-- content -->
          </v-tab>
      </vue-tabs>
    </div>
</template>

<script>

import Vue from 'vue';
import {VueTabs, VTab} from 'vue-nav-tabs';
import 'vue-nav-tabs/themes/vue-tabs.css';
import 'vue-nav-tabs/dist/vue-tabs.js';
import SmallStats from '@/components/common/SmallStats.vue';
import UsersOverview from '@/components/blog/UsersOverview.vue';
import UsersByDevice from '@/components/blog/UsersByDeviceLite.vue';
import NewDraft from '@/components/blog/NewDraft.vue';
import Discussions from '@/components/blog/Discussions.vue';

export default {
    name:"AddTabOcean",
    components: {
        VueTabs,
        VTab,
        SmallStats,
        boUsersOverview: UsersOverview,
        boUsersByDevice: UsersByDevice,
        boNewDraft: NewDraft,
        boDiscussions: Discussions,
    },
    install(Vue) {
        Vue.component('tab', VTab);
        Vue.component('tabs', VueTabs);
    },
    data(){
        return {
            tabs:  [],
            tabCounter: 0,
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
    methods: {
        removetab(index){
          this.tabs.splice(index, 1)
      },
      addtab(idConfig, noAnillos, mapAnillo){
console.log("agregando tab...");
         var nuevoTab = {
              nombre:mapAnillo,
              noAnillos:noAnillos,
              id:idConfig
          }
          this.tabs.push(nuevoTab);
          console.log(this.tabs.count);
          //this.$eventHub.$emit('agregaimg', event,mapAnillo);
          //$('.map').maphilight();
          
      },
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
  created() {
    this.$eventHub.$on('addtab', this.addtab);
    this.iniciarCronometro();
  },
  beforeDestroy() {
    this.$eventHub.$off('addtab');
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
}
</script>