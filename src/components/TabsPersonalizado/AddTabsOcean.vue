<template>
    <div id="AddTabOcean">
      <vue-tabs>
          <v-tab v-for="(tab) in tabs" :key="tab.id">
              <!-- pestanias -->
            <div slot="title">{{tab.nombre}} <span @click.stop="" class="ti-close tab-close"></span></div>
            <!-- <section v-show="isActive" :aria-hidden="! isActive" class="tabs-component-panel" :id="computedId" role="tabpanel">
                <slot />
            </section> -->
            <!-- <d-row>
                <d-col lg v-for="(stats, idx) in smallStats" :key="idx" class="mb-3">
                    <SmallStats :id="`small-stats-${idx}`" variation="1" :chart-data="stats.datasets" :label="stats.label" :value="stats.value" :percentage="stats.percentage" :increase="stats.increase" :decrease="stats.decrease" />
                </d-col>
            </d-row> -->
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
  },
  created() {
    this.$eventHub.$on('addtab', this.addtab);
  },
  beforeDestroy() {
    this.$eventHub.$off('addtab');
  },
}
</script>