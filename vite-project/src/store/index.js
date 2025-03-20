import { createStore } from "vuex";
import { productsData, discountsData } from "./productData.js";

class Product {
  constructor({ ingredients, count = "0", time = "優惠即將結束", ...rest }) {
    this.ingredients = Array.isArray(ingredients) ? ingredients : [ingredients];
    this.count = count;
    this.time = time;
    Object.assign(this, rest);
  }
}

class Discount {
  constructor(props) {
    Object.assign(this, props);
  }
}

export default createStore({
  state: {
    cart: [],
    products: productsData.map((data) => new Product(data)),
    discounts: discountsData.map((data) => new Discount(data)),
  },
  getters: {
    product: (state) => (id) => {
      return state.products.find((p) => p.id === Number(id));
    },
    productTitle: (state) => (title) => {
      return state.products.find((p) => p.title === String(title));
    },
    cartItems: (state) => {
      return state.cart.map((cartItem) => {
        const product = state.products.find((p) => p.id === cartItem.id);
        return { ...product, quantity: cartItem.quantity };
      });
    },
    cartItemsCount: (state) => {
      return state.cart.reduce((total, item) => total + item.quantity, 0);
    },
    discount: (state) => (id) => {
      return state.discounts.find((d) => d.id === Number(id));
    },
  },
  mutations: {
    addToCart(state, payload) {
      const item = state.cart.find((item) => item.id === Number(payload));
      if (item) {
        item.quantity += 1;
      } else {
        state.cart.push({ id: Number(payload), quantity: 1 });
      }
    },
    removeFromCart(state, payload) {
      state.cart = state.cart.filter((item) => item.id !== Number(payload));
    },
    incrementQuantity(state, payload) {
      const item = state.cart.find((item) => item.id === Number(payload));
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity(state, payload) {
      const item = state.cart.find((item) => item.id === Number(payload));
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.cart = state.cart.filter((i) => i.id !== Number(payload));
        }
      }
    },
  },
  actions: {
    addToCart({ commit }, payload) {
      commit("addToCart", payload);
    },
    removeFromCart({ commit }, payload) {
      commit("removeFromCart", payload);
    },
    addOne({ commit }, payload) {
      commit("incrementQuantity", payload);
    },
    minusOne({ commit }, payload) {
      commit("decrementQuantity", payload);
    },
  },
  modules: {},
});
