import axios from "axios";

export const loadData = ({ commit }) => {
  axios
    .get("https://vue-stock-trader-6e7e8.firebaseio.com/data.json")
    .then(({ data }) => {
      if (data) {
        const funds = data.funds;
        const stocks = data.stocks;
        const stockPortfolio = data.stockPortfolio;

        const portfolio = {
          funds,
          stockPortfolio
        };

        commit("SET_STOCKS", stocks);
        commit("SET_PORTFOLIO", portfolio);
      }
    });
};
