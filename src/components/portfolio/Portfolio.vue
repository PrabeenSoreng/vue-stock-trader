<template>
  <div class="row">
    <Stock v-for="(stock, i) in stocks" :key="i" :stock="stock" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "@/components/portfolio/Stock.vue";

export default {
  components: {
    Stock
  },
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio"
    })
  }
};
</script>