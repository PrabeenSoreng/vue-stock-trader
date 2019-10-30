<template>
  <div class="row">
    <Stock v-for="(stock, i) in stocks" :key="i" :stock="stock" />
  </div>
</template>

<script>
import Stock from "@/components/stocks/Stock.vue";

export default {
  components: {
    Stock
  },
  data() {
    return {
      stocks: [
        { id: 1, name: "BMW", price: 110 },
        { id: 2, name: "Google", price: 320 },
        { id: 3, name: "Apple", price: 300 },
        { id: 4, name: "BMW", price: 100 }
      ]
    };
  }
};
</script>