<template>
  <section class="featured-product section-padding">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="mb-5">Featured Products</h2>
        </div>

        <div
          class="col-lg-4 col-12 mb-3"
          v-for="(product, index) of $store.state.productList"
          :key="index"
        >
          <div class="product-thumb">
            <router-link :to="'/product-detail/' + index"
              ><img
                :src="getImgUrl(product.srcImg)"
                class="img-fluid product-image"
                alt=""
            /></router-link>

            <div class="product-top d-flex">
              <span v-if="product.dopInfo" class="product-alert me-auto">{{
                product.dopInfo
              }}</span>

              <a href="#" class="bi-heart-fill product-icon ms-auto"></a>
            </div>

            <div class="product-info d-flex">
              <div>
                <h5 class="product-title mb-0">
                  <router-link
                    :to="'/product-detail/' + index"
                    class="product-title-link"
                    >{{ product.title }}</router-link
                  >
                </h5>

                <p class="product-p">{{ product.description }}</p>
              </div>

              <small class="product-price text-muted ms-auto mt-auto mb-5">{{
                product.priceCurrency
              }}{{ product.priceNum }}</small>
            </div>
          </div>
        </div>

        <div class="col-12 text-center">
          <router-link :to="'/products'" class="view-all"
            >View All Products</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    getImgUrl(pic) {
      return require("../assets/images/product/" + pic);
    },
  },
};
</script>

<style scoped></style>
