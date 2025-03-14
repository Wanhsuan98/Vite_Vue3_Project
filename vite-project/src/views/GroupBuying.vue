<template>
  <div class="d-flex justify-content-between">
    <h3 class="mt-4 mb-0 mx-3 fw-bold">限時特價</h3>
    <counterBadge :count="cartCount"></counterBadge>
  </div>

  <div class="container">
    <div>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        <div
          class="d-flex justify-content-center px-2 h-100"
          v-for="product in products"
          :key="product.id"
        >
          <router-link
            :to="{ name: 'product', params: { id: product.id } }"
            class="product-link"
          >
            <span>
              <div class="card my-4">
                <div class="d-flex px-0 img-hover-outer">
                  <img
                    :src="product.imageUrl"
                    class="card-img-top product-image"
                    alt="產品照片"
                    style="width: 77%"
                  />
                  <div class="img-hover-content">
                    <p>點我看詳情</p>
                  </div>
                </div>
                <div class="card-body product-content">
                  <pa>
                    <spana class="card-title fw-bold">{{
                      product.brand
                    }}</spana>
                    <spana class="card-title fw-bold">{{
                      product.title
                    }}</spana>
                    <br />
                    <spana class="card-text">{{ product.description }}</spana>
                    <spana class="card-text">{{ product.forWho }}</spana>
                    <br />
                    <spana class="product-price">NT${{ product.price }}</spana>
                    <br />
                    <spana class="product-sale">NT${{ product.sale }}</spana>
                  </pa>
                </div>
              </div>
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import counterBadge from "/src/components/CounterBadge.vue";
export default {
  components: {
    counterBadge,
  },

  computed: {
    products: function () {
      return this.$store.state.products;
    },
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
}
.fa-cart-shopping {
  color: #f69246;
}
.product-image {
  display: block;
  margin: 0 auto;
}
.img-hover-outer {
  position: relative;
  width: 100%;
}
.img-hover-content:hover {
  opacity: 1;
}
.img-hover-content {
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  font-size: 22px;
  width: 100%;
  height: 110%;
  top: 0;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  transition-duration: 0.3s;
}
.product-content {
  border-top: solid 2px #f69246;
  margin-top: 1.5rem;
}
.product-price {
  text-decoration: line-through;
  color: #b4b2b1;
}
.product-sale {
  color: #ff0000;
}

.cart-icon {
  position: bottom;
}
.card {
  width: 20rem;
  border: solid #f69246 2px !important;
  border-radius: 25px !important;
}

.card-text {
  font-size: 0.9rem;
}
.product-link {
  text-decoration: none !important;
}
pa {
  color: black;
}
pa:hover {
  color: #f69246;
  transition-duration: 0.3s;
}
</style>
