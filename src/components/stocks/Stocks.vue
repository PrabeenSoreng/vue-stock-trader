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
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }
};
</script>