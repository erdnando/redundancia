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
    AddTabOcean
  },
};

//Vue.use(VueTabs);
</script>
<style>
@import '../../public/tabs-component.css';
</style>