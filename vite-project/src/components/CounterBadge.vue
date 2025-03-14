<template>
  <router-link to="/cart/">
    <div class="text-end me-4 mt-2 cart-outter">
      <i class="fa-solid fa-cart-shopping"></i>
      <span class="cartQuantity text-white" v-if="count > 0">{{ count }}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "counterBadge",
  props: ["count"],
};
</script>

<style>
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
</style>
