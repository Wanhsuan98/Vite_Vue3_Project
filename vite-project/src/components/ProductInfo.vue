<template>
  <div class="ingredient text-center mt-4 fw-bold border-top fs-4">
    <p class="mt-3">產品資訊</p>
  </div>
  <div class="container my-3 col-10">
    <div class="card">
      <span class="header card-header fw-bold text-center">完整成分</span>
      <div class="card-body">
        <p class="card-text">{{ product.ingredient }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: this.$store.getters.product(this.$route.params.id),
    };
  },
};
</script>

<style>
.header {
  background: #f2b58a !important;
}
</style>
