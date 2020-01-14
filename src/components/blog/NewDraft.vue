<template>
  <d-card class="card-small " style="height:400px">

    <!-- Component Header -->
    <d-card-header class="border-bottom">
      <h6 class="m-0">{{ title }}</h6>
    </d-card-header>

    <d-card-body class="d-flex flex-column">
      <d-form class="quick-post-form">

        <!-- Title -->
        <div class="form-group">
          <d-input class="form-control" placeholder="Logs..." />
        </div>

        <!-- Body -->
        <div class="form-group">
          <d-textarea class="form-control" placeholder="2019-09-27 15:10:58 GMT LOG:  database system was shut down at 2019-09-27 00:00:25 GMT 2019-09-27 15:10:58 GMT LOG:  MultiXact member wraparound protections are now enabled 2019-09-27 15:10:58 GMT LOG:  database system is ready to accept connections 2019-09-27 15:10:58 GMT LOG:  autovacuum launcher started" />
        </div>

        <!-- Create Draft -->
        <div class="form-group">
          <d-button class="btn-accent" type="submit">Exportar log</d-button>
        </div>

      </d-form>
    </d-card-body>

  </d-card>
</template>

<script>
export default {
  name: 'new-draft',
  props: {
    /**
       * The component's title.
       */
    title: {
      type: String,
      default: 'Logs',
    },
  },
};
</script>
