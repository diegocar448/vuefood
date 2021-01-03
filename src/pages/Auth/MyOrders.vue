<template>
  <!-- Page Content -->
  <div class="container container-body">
    <div class="row my-4">
      <h1 class="title-tenant">Meus Pedidos</h1>
    </div>

    <div class="row my-4">
      <div class="col-sm-6 my-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Pedido: <strong>KsjjR2</strong></h5>
            <p class="card-text">Data: 22/12/2021</p>
            <a href="detalhes-pedido.html" class="btn btn-danger">Detalhes</a>
          </div>
        </div>
      </div>

      <div class="col-sm-6 my-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Pedido: <strong>KsjjR2</strong></h5>
            <p class="card-text">Data: 22/12/2021</p>
            <a href="detalhes-pedido.html" class="btn btn-danger">Detalhes</a>
          </div>
        </div>
      </div>

      <div class="col-sm-6 my-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Pedido: <strong>KsjjR2</strong></h5>
            <p class="card-text">Data: 22/12/2021</p>
            <a href="detalhes-pedido.html" class="btn btn-danger">Detalhes</a>
          </div>
        </div>
      </div>

      <div class="col-sm-6 my-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Pedido: <strong>KsjjR2</strong></h5>
            <p class="card-text">Data: 22/12/2021</p>
            <a href="detalhes-pedido.html" class="btn btn-danger">Detalhes</a>
          </div>
        </div>
      </div>
    </div>
    <!-- orders -->
  </div>
  <!-- /.container -->
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  created() {
    this.getMyOrders().catch(() =>
      this.$vToastify.error("Falha ao buscar os pedidos", "Erro")
    );
  },

  methods: {
    ...mapActions(["getMyOrders"]),
  },
};
</script>