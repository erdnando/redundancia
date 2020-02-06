<template>
  <aside :class="['main-sidebar', 'col-12', 'col-md-3', 'col-lg-2', 'px-0', sidebarVisible ? 'open' : '']">
      <div class="main-navbar">
        <nav class="navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0">
          <a class="navbar-brand w-100 mr-0" href="#" style="line-height: 25px;">
            <div class="d-table m-auto">
              <img id="main-logo" class="d-inline-block align-top mr-1" style="max-width: 25px;" src="https://cdn.fing.io/images/isp/MX/logo/totalplay_logo.png" alt="Shards Dashboard">
              <span v-if="!hideLogoText" class="d-none d-md-inline ml-1">Pruebas/redundancia</span>
            </div>
          </a>
          <a class="toggle-sidebar d-sm-inline d-md-none d-lg-none" @click="handleToggleSidebar()">
            <i class="material-icons">&#xE5C4;</i>
          </a>
        </nav>
      </div>

      <!-- <form action="#" class="main-sidebar__search w-100 border-right d-sm-flex d-md-none d-lg-none">
        <div class="input-group input-group-seamless ml-3">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <i class="fas fa-search"></i>
              xxxxxxxxxxxx
            </div>
          </div>
          <input class="navbar-search form-control" type="text" placeholder="Search for something..." aria-label="Search">
        </div>
      </form> -->

      <div>
        <form class="example" action="#" style="margin:auto;max-width:200px">
          <input type="text" placeholder="Search.." style="width:148px;margin-left:5px;border-radius:14px;height:22px" name="search2">
          <button type="submit"><i class="fa fa-search"></i></button>
           <div class="row">
            <div class="col">
              <div class="card card-small mb-4">
                <!-- <div class="card-header border-bottom">
                  <h6 class="m-0">Configuraciones</h6>
                </div> -->
                <div class="card-body p-0 pb-3 text-center" id="InicConfiguraciones">
                  <table class="table mb-0">
                    <thead class="bg-light">
                      <tr>
                        <th scope="col" class="border-0">Configuraciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a href="#" @click="cargarTab('2','2','GDL_CANADA')">GDL_CANADA (corriendo...)</a>
                          </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="#" @click="cargarTab('3','3','PACHUCA SOTO')">PACHUCA SOTO</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="#" @click="cargarTab('4','4','PACHUCA CENTRO 2')">PACHUCA CENTRO 2</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="nav-wrapper">
          <d-nav class="flex-column">
            <li v-for="(item, navItemIdx) in items" :key="navItemIdx" class="nav-item dropdown">
              <d-link :class="['nav-link', item.items && item.items.length ? 'dropdown-toggle' : '']" :to="item.to" v-d-toggle="`snc-${navItemIdx}`">
                <div class="item-icon-wrapper" v-if="item.htmlBefore" v-html="item.htmlBefore" />
                <span v-if="item.title">{{ item.title }}</span>
                <div class="item-icon-wrapper" v-if="item.htmlAfter" v-html="item.htmlAfter" />
              </d-link>
              <d-collapse v-if="item.items && item.items.length" :id="`snc-${navItemIdx}`" class="dropdown-menu dropdown-menu-small" accordion="sidebar-items-accordion">
                <d-dropdown-item v-for="(subItem, subItemIdx) in item.items" :key="subItemIdx" :href="subItem.href" :to="subItem.to">
                  {{ subItem.title }}
                </d-dropdown-item>
              </d-collapse>
            </li>
          </d-nav>
      </div>
  </aside>
</template>

<script>
import AddTabOcean from '../../TabsPersonalizado/AddTabsOcean.vue';
export default {
  name: 'main-sidebar',
  components: {
    AddTabOcean
  },
  props: {
    /**
      * Whether to hide the logo text, or not.
      */
    hideLogoText: {
      type: Boolean,
      default: false,
    },
    /**
     * The menu items.
     */
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      sidebarVisible: false,
    };
  },
  created() {
    this.$eventHub.$on('toggle-sidebar', this.handleToggleSidebar);
  },
  beforeDestroy() {
    this.$eventHub.$off('toggle-sidebar');
  },
  methods: {
    handleToggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible;
    },
    cargarTab: function (idConfig, noAnillos,mapAnillo) {
      //this.$refs.childRef.childMethod('addtab');
      var els = document.getElementById("t-" + idConfig);
      if(!els){
        this.$eventHub.$emit('addtab',idConfig, noAnillos,mapAnillo);
      }
      else{
        document.getElementById("t-" + idConfig).click();
      }
      
      // var table = document.getElementById('RingsTM').getElementsByClassName('map') 
      // for(var i=0; i<table.length; i++){
      //     if(table[i].tagName=='DIV'){
      //       if(table[i].style.display=='block'){
      //         table[i].style.display ='none'
      //       }
      //     }
      // }

      // switch(event){
      //   case "2":
      //     //alert("Hola");
      //     document.getElementById("dvAnillo2").style.display="block";
      //     document.getElementById("2N1").click();
      //     break;
      //   case "3":
      //     //alert("Hola");
      //     document.getElementById("dvAnillo3").style.display="block";
      //     document.getElementById("3N1").click();
      //     break;
      //   case "4":
      //     //alert("Hola");
      //     document.getElementById("dvAnillo4").style.display="block";
      //     document.getElementById("4N1").click();
      //     break;
      // }
      
    },
  },
};
</script>

<style lang="scss">
  .main-sidebar {
    .item-icon-wrapper {
      display: inline-block;
    }
    .dropdown-menu {
      display: block;
    }
  }
</style>
