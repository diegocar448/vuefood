<template>
  <!-- Page Content -->
  <div class="container container-body">
    <div class="row my-4">
      <h1 class="title-tenant">
        Detalhes do Pedido <strong>{{ identify }}</strong>
      </h1>
    </div>

    <div class="row my-4">
      <div class="col-sm-12">
        <ul>
          <li>Número: {{ identify }}</li>
          <li>Total: R$ {{ order.total }}</li>
          <li>Data: {{ order.date }}</li>
          <li>
            Status: <span class="badge bg-success">{{ order.status }}</span>
          </li>
          <li>
            Mesa:
            <ul v-if="order.table.identify">
              <li>Identificador: {{ order.table.identify }}</li>
              <li>Descrição: {{ order.table.description }}</li>
            </ul>
          </li>
          <li>
            Cliente:
            <ul v-if="order.client.name">
              <li>Nome: {{ order.client.name }}</li>
              <li>E-mail: {{ order.client.email }}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <!-- details order -->

    <hr />

    <div class="row my-4">
      <div class="col-12">
        <h4>Produtos</h4>
      </div>

      <div class="col-6 my-1">
        <div class="restaurant-card">
          <a href="vitrine-tenant.html"
            ><img class="card-img-top" src="imgs/pizza.png" alt=""
          /></a>
          <div class="restaurant-card-body">
            <h5>Pizza</h5>
          </div>
        </div>
      </div>

      <div class="col-6 my-1">
        <div class="restaurant-card">
          <a href="vitrine-tenant.html"
            ><img class="card-img-top" src="imgs/pizza.png" alt=""
          /></a>
          <div class="restaurant-card-body">
            <h5>Pizza</h5>
          </div>
        </div>
      </div>

      <div class="col-6 my-1">
        <div class="restaurant-card">
          <a href="vitrine-tenant.html"
            ><img class="card-img-top" src="imgs/pizza.png" alt=""
          /></a>
          <div class="restaurant-card-body">
            <h5>Pizza</h5>
          </div>
        </div>
      </div>
    </div>
    <!-- products order -->
  </div>
  <!-- /.container -->
</template>

<script>
export default {
  props: ["identify"],
  created() {
    console.log(this.identify);
  },

  date() {
    return {
      order: {
        identify: "",
        date: "",
        status: "",
        total: "",
        table: {
          identify: "",
          description: "",
        },
        client: {
          name: "",
          email: "",
        },
        company: {
          name: "",
          image: "",
        },
        products: [],
        evaluations: [],
      },
    };
  },
};
</script>

<style>
</style>