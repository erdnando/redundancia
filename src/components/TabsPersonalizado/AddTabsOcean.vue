<template>
    <div id="AddTabOcean">
      <vue-tabs>
          <v-tab v-for="tab in tabs" :key="tab">
            <div slot="title">{{tab}} <span @click.stop="removetab(index)" class="ti-close tab-close"></span></div>
            <section v-show="isActive" :aria-hidden="! isActive" class="tabs-component-panel" :id="computedId" role="tabpanel">
                <slot />
            </section>
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
        tabCounter: 0
    };
  },
  methods: {
      removetab(index){
          this.tabs.splice(index, 1)
      },
      addtab(event, mapAnillo){
          this.tabs.push(mapAnillo);
          this.$eventHub.$emit('agregaimg', event,mapAnillo);
          $('.map').maphilight();
          var table = document.getElementById('RingsTM').getElementsByClassName('map'); 
            for(var i=0; i<table.length; i++){
                if(table[i].tagName=='DIV'){
                    if(table[i].style.display=='block'){
                        table[i].style.display ='none';
                    }
                }
            }
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