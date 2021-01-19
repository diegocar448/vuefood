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

      <div
        class="col-6 my-1"
        v-for="(product, index) in order.products"
        :key="index"
      >
        <div class="restaurant-card">
          <a href="#"
            ><img
              class="card-img-top"
              :src="product.image"
              :alt="product.title"
          /></a>
          <div class="restaurant-card-body">
            <h5>{{ product.title }}</h5>
          </div>
        </div>
      </div>
    </div>
    <!-- products order -->
    <!-- Evaluations -->
    <hr />
    <button
      class="btn btn-success"
      @v-if="me.name != '' && me.name === order.client.name"
      @click.prevent="openModalEvaluation"
    >
      Avaliar o pedido
    </button>

    <modal name="evaluation-order" :heigth="350">
      <div class="px-md-5 my-4">
        <h1>Avaliar o pedido {{ identify }}</h1>

        <strong>
          <vue-stars
            name="evaluation"
            :active-color="'#ffdd00'"
            :inactive-color="'#999999'"
            :shadow-color="'#ffff00'"
            :hover-color="'#dddd00'"
            :max="5"
            :readonly="false"
            :char="'★'"
            :inactive-char="''"
            :class="''"
            v-model="evaluation.stars"
          />
        </strong>

        <div class="form-group">
          <textarea
            class="form-control"
            name="comment"
            id=""
            cols="30"
            rows="3"
            placeholder="Comentário (Opcional)"
            v-model="evaluation.comment"
          ></textarea>
          <button
            :disabled="loadSendEvaluation"
            class="btn btn-info"
            @click.prevent="sendEvaluation"
          >
            <span v-if="sendEvaluation">Enviando...</span>
            <span v-else>Avaliar</span>
          </button>
        </div>
      </div>
    </modal>
    <!-- /.Evaluations -->
  </div>
  <!-- /.container -->
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  props: ["identify"],

  computed: {
    ...mapState({
      me: (state) => state.auth.me,
    }),
  },

  created() {
    this.getOrderByIdentify(this.identify)
      .then(
        (response) =>
          (this.order = Object.assign(this.order, response.data.data))
      )

      .catch((error) => {
        this.$vToastify.error("Falha ao carregar detalhers do pedido", "Erro");

        this.$router.push({ name: "home" });
      });
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
      evaluation: {
        stars: 1,
        comment: "",
      },
      loadSendEvaluation: false,
    };
  },
  methods: {
    ...mapActions(["getOrderByIdentify", "evaluationOrder"]),

    openModalEvaluation() {
      this.$modal.show("evaluation-order");
    },

    closeModalEvaluation() {
      this.$modal.hide("evaluation-order");
    },

    sendEvaluation() {
      this.loadSendEvaluation = true;

      const params = {
        identify: this.identify,
        ...this.evaluation,
        /* stars: this.evalution.stars,
        comment: this.evalution.comment, */
      };

      this.evalutionOrder()
        .then((response) => {
          this.$vToastify.success("Avaliação enviada com sucesso!", "Parabéns");
          this.order.evaluations.push(response.data.data);
          this.closeModalEvaluation();
        })
        .catch((error) =>
          this.$vToastify.error("Falha ao enviar avaliação", "Erro")
        )
        .finally(() => (this.loadSendEvaluation = false));
    },
  },
};
</script>

<style>
</style>