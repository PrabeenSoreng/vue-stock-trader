<template>
  <div class="col-sm-6 col-md-4 mb-2 mt-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">
          {{stock.name}}
          <small>Price : {{stock.price}} | Quantity: {{stock.quantity}}</small>
        </h5>
        <input
          type="number"
          class="form-control mb-1"
          :class="{danger: insufficientQuantity}"
          placeholder="Quantity"
          v-model="quantity"
        />
        <button
          @click="sellStock"
          class="btn btn-primary"
          :disabled="disabledButton || insufficientQuantity"
        >{{ insufficientQuantity ? 'Insufficient Quantity' : 'Sell'}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    disabledButton() {
      return this.quantity <= 0 || !Number.isInteger(+this.quantity);
    },
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: "sellStocks"
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      // this.$store.dispatch("sellStocks", order);
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
};
</script>

<style scoped>
.danger {
  border: 2px solid red;
}
</style>