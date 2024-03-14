<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>


      <router-link class="navbar-brand" :to="'/'">
        <strong><span>Little</span> Fashion</strong>
      </router-link>

      <div class="d-lg-none">
        <a href="sign-in.html" class="bi-person custom-icon me-3"></a>

        <a href="product-detail.html" class="bi-bag custom-icon"></a>
      </div>

      <div class="collapse navbar-collapse" id="navbarNav">
        
        <component-header-nav></component-header-nav>

        <div class="d-none d-lg-block">
          <router-link :to="'/sign-in'" class="bi-person custom-icon me-3"></router-link>

          <router-link :to="'/products'" class="bi-bag custom-icon"></router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import ComponentHeaderNav from "./ComponentHeaderNav.vue";

export default {
  components: {
    ComponentHeaderNav
  }
};
</script>

<style scoped></style>
