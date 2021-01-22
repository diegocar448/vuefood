<template>
  <div>
    <div class="text-light" style="margin: 5px">
      Preço Total: <b>{{ totalCart }}</b>
    </div>
    <a
      href="#"
      class="btn btn-success btn-full"
      @click.prevent="openModalCheckout"
      >Finalizar</a
    >

    <modal name="checkout">
      <div class="px-md-5 my-4" v-if="loading">
        <p>Gerando o pedido... (aguarde)</p>
      </div>
      <div class="px-md-5 my-4" v-else>
        <div class="col-12" v-if="me.name !== ''">
          <p>
            Total de produtos: <strong>{{ products.length }}</strong>
          </p>
          <p>
            Preço total: <strong>{{ totalCart }}</strong>
          </p>
          <div class="form-group">
            <textarea
              class="form-control"
              name="comment"
              id=""
              cols="30"
              rows="2"
              placeholder="Comentário (Opcional)"
              v-model="comment"
            ></textarea>
            <br />
            <button
              class="btn btn-success btn-full"
              @click.prevent="createOrder"
            >
              Fazer Pedido
            </button>
          </div>
        </div>

        <div v-else class="row">
          <div class="col-6">
            <p>
              Total de produtos: <strong>{{ products.length }}</strong>
            </p>
            <p>
              Preço total: <strong>{{ totalCart }}</strong>
            </p>

            <div class="form-group">
              <textarea
                class="form-control"
                name="comment"
                id=""
                cols="30"
                rows="2"
                placeholder="Comentário (Opcional)"
                v-model="comment"
              ></textarea>
            </div>
            <button class="btn btn-light btn-full" @click.prevent="createOrder">
              Fazer Pedido de Forma Anônima
            </button>
          </div>
          <div class="col-6">
            <router-link :to="{ name: 'login' }" class="btn btn-light btn-full"
              >Fazer Login</router-link
            >
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      products: (state) => state.cart.products,
      me: (state) => state.auth.me,
      company: (state) => state.companies.companySelected,
    }),
    totalCart() {
      let total = 0;

      this.products.map((itemCart, index) => {
        total += itemCart.qty * itemCart.product.price;
      });

      return total;
    },
  },
  data() {
    return {
      comment: "",

      loading: false,
    };
  },

  methods: {
    ...mapActions(["createOrder", "createOrderAuthenticated"]),

    createOrder() {
      this.loading = true;
      const action =
        this.me.name === "" ? "createOrder" : "createOrderAuthenticated";

      let params = {
        token_company: this.company.uuid,
        comment: this.comment,
        products: [...this.products],
      };

      this.$store
        .dispatch(action, params)
        .then((response) => {
          this.$vToastify.success("Pedido realizado com sucesso", "Parabéns");
          this.$router.push({ name: "my.orders" });
        })
        .catch((error) => {
          this.$vToastify.error("Falha ao realizar pedido", "Falha");
        })
        .finally(() => (this.loading = false));
    },
    openModalCheckout() {
      this.$modal.show("checkout");
    },

    closeModalCheckout() {
      this.$modal.hide("checkout");
    },
  },
};
</script>