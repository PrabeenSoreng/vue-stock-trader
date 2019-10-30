<template>
  <div class="col-sm-6 col-md-4 mb-2 mt-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">
          {{stock.name}}
          <small>Price : {{stock.price}}</small>
        </h5>
        <input type="number" class="form-control mb-1" placeholder="Quantity" v-model="quantity" />
        <button @click="buyStock" class="btn btn-success" :disabled="disabledButton">Buy</button>
      </div>
    </div>
  </div>
</template>

<script>
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
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      console.log(order);
      this.quantity = 0;
    }
  }
};
</script>