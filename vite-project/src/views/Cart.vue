<template>
  <div class="d-flex justify-content-center">
    <h5 class="mt-3 pt-3 pb-3 border-bottom w-75 text-center">我的購物車</h5>
  </div>
  <div v-if="cartItems.length === 0">
    <h5 class="text-center p-3 text-secondary">尚未加入商品...</h5>
  </div>
  <div
    class="container d-flex justify-content-center col-11"
    v-else
    v-for="item in cartItems"
  >
    <div class="" style="max-width: 700px">
      <div class="row g-0">
        <div class="col-4">
          <img
            :src="item.imageUrl"
            class="img-fluid rounded-start product-in-cart-img"
            alt="..."
          />
          <br />
          <span class="product-in-cart-text">
            {{ item.brand }}
            {{ item.title }} |
            {{ item.description }}
            {{ item.forWho }}
          </span>
        </div>
        <div class="col-8">
          <div class="card-body text-center mt-5">
            <span class="card-title d-block">價錢 : NT${{ item.price }}</span>
            <div class="d-flex justify-content-center fs-5">
              <div class="me-3 product-num">數量</div>
              <button
                class="ms-2 border border-2 rounded px-1 px-md-3 product-num"
                @click="minusOne(item.id)"
              >
                -
              </button>
              <div
                class="ms-2 border border-2 rounded px-3 px-md-5 product-num"
              >
                {{ item.quantity }}
              </div>
              <button
                class="ms-2 border border-2 rounded px-1 px-md-3 product-num"
                @click="addOne(item.id)"
              >
                +
              </button>
            </div>
            <div class="d-flex justify-content-center mt-3 ms-5">
              <divatc
                class="border border-2 add-to-cart text-center py-1"
                type="button"
                @click="removeFromCart(item.id)"
              >
                刪除商品
              </divatc>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-center">
    <div class="border-bottom w-75 mt-2"></div>
  </div>
  <div class="container col-10 col-sm-9 col-md-8 mt-3">
    <p class="text-end">共{{ cartItemsCount }}樣商品</p>

    <!-- <p class="text-end  mt-3 free-shipping-text">已達免運!</p> -->
  </div>
  <div class="container col-8 col-sm-4 col-md-4">
    <div class="d-flex justify-content-around">
      <p>運費 :</p>
      <p v-if="cartItems.length === 0">0元</p>
      <p v-if="cartItems.length > 0 && itemsSubtotal < 2000">80元</p>
      <p
        class="free-shipping-text"
        v-if="cartItems.length > 0 && itemsSubtotal > 2000"
      >
        已達免運門檻!
      </p>
    </div>
    <div class="d-flex justify-content-around">
      <p>購買金額總計 :</p>
      <p>NT${{ itemsSubtotal }}</p>
    </div>
  </div>
  <div class="d-flex justify-content-center mt-3 mb-3">
    <divatc
      class="border border-2 add-to-cart text-center py-1"
      type="button"
      @click="checkOut"
      v-if="cartItems.length !== 0"
    >
      結帳
    </divatc>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: this.$store.getters.product(this.$route.params.id),
    };
  },
  name: "cart",
  components: {},
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
    cartItemsCount() {
      return this.$store.getters.cartItemsCount;
    },
    itemsSubtotal() {
      return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
  methods: {
    removeFromCart(itemId) {
      this.$store.dispatch("removeFromCart", itemId);
    },
    addOne(itemId) {
      this.$store.dispatch("addOne", itemId);
    },
    minusOne(itemId) {
      this.$store.dispatch("minusOne", itemId);
    },
    checkOut() {
      alert("結帳成功!");
      location.assign("/");
    },
  },
};
</script>

<style scoped>
divatc {
  background: #f69246;
}
divatc:hover {
  background-color: #e16a15;
  transition-duration: 0.3s;
}
diva:hover {
  background-color: #f69246;
  transition-duration: 0.3s;
}
.add-to-cart {
  width: 5rem;
  border-radius: 20px;
  font-size: 0.5rem;
}
.product-in-cart-img {
  width: 60%;
}
.product-in-cart-text {
  font-size: 0.7rem;
}
.free-shipping-text {
  color: red;
}
.product-num {
  font-size: 1rem;
}
divatc {
  background: #f69246;
}
divatc:hover {
  background-color: #e16a15;
  transition-duration: 0.3s;
}
diva:hover {
  background-color: #f69246;
  transition-duration: 0.3s;
}
</style>
