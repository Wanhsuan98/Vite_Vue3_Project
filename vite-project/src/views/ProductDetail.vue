<template>
  <div class="">
    <div class="d-flex justify-content-between">
      <h3 class="mt-4 mb-0 mx-3 fw-bold"></h3>
      <counterBadge :count="cartCount"></counterBadge>
    </div>
    <div class=" ">
      <div class="d-flex justify-content-center h-100">
        <div class="card my-4 border-0">
          <div class="px-0 d-flex justify-content-center">
            <img
              :src="product.imageUrl"
              class="card-img-top product-img"
              alt="產品照片"
            />
            <div class="d-flex"></div>
          </div>
          <div class="card-body product-content text-center fs-5">
            <span class="card-title fw-bold">{{ product.brand }}</span>
            <span class="card-title fw-bold">{{ product.title }}</span>
            <br />
            <span class="card-text">{{ product.description }}</span>
            <span class="card-text">{{ product.forWho }}</span>
            <br />
            <span class="product-price me-4">NT${{ product.price }}</span>

            <span class="product-sale">優惠NT${{ product.sale }}</span>
          </div>
          <!-- <div class="d-flex justify-content-center card-body product-content fs-5 ">
                      <div class="me-3">數量</div>
                      <diva class="me-3 border border-2 rounded px-3" type="button"
                      @click="removeFromCart(item.id)">-</diva>
                      <div class="me-3 border border-2 rounded px-5">{{cartItemsCount}}</div>
                      <diva class="me-3 border border-2 rounded px-3" type="button"
                      @click="incrementProductInventory">+</diva>
                    </div> -->
          <div class="d-flex justify-content-center">
            <divatc
              class="border border-2 add-to-cart text-center py-1"
              type="button"
              @click="addToCart"
            >
              加入購物車
            </divatc>
          </div>
          <productinfo></productinfo>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productinfo from "/src/components/ProductInfo.vue";
import counterBadge from "/src/components/CounterBadge.vue";
export default {
  components: {
    productinfo,
    counterBadge,
  },
  name: "product",
  data() {
    return {
      product: this.$store.getters.product(this.$route.params.id),
    };
  },
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.$route.params.id);
      alert("您已將商品加入購物車");
    },
    removeFromCart(itemId) {
      this.$store.dispatch("removeFromCart", itemId);
    },
    // decrementProductInventory(){
    //   this.$store.dispatch('decrementProductInventory', this.$route.params.id)
    // },
    // incrementProductInventory(){
    //   this.$store.dispatch('incrementProductInventory', this.$route.params.id)
    // }
  },
  computed: {
    cartCount() {
      return this.$store.state.cart.length;
    },
    cartItems() {
      return this.$store.getters.cartItems;
    },
    cartItemsCount() {
      return this.cartItems.length;
    },
  },
};
</script>

<style scoped>
.cart-outter {
  font-size: 1.8rem;
  position: relative;
}
.fa-cart-shopping {
  color: #f69246;
}
.fa-cart-shopping:hover {
  color: #e16a15;
  transition-duration: 0.3s;
}
.cartQuantity {
  margin-top: 3px;
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  right: -9px;
  top: -8px;
  font-size: 0.5rem;
  background: #f2b58a;
}

.product-price {
  text-decoration: line-through;
  color: #b4b2b1;
}
.product-sale {
  color: #ff0000;
}
.product-img {
  border: solid 1px;
  width: 20rem;
}

.ingredient-content {
  border: solid 1px #f69246;
  border-radius: 25px;
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
.add-to-cart {
  width: 8rem;
  border-radius: 20px;
}
</style>
