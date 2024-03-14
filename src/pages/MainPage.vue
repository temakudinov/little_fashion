<template>
  <component-slider></component-slider>

  <component-about></component-about>

  <component-front-product></component-front-product>

  <component-featured-product></component-featured-product>
</template>

<script>
import ComponentSlider from "@/components/ComponentSlider.vue";
import ComponentAbout from "@/components/ComponentAbout.vue";
import ComponentFrontProduct from "@/components/ComponentFrontProduct.vue";
import ComponentFeaturedProduct from "@/components/ComponentFeaturedProduct.vue";


export default {
  components: {
    ComponentSlider,
    ComponentAbout,
    ComponentFrontProduct,
    ComponentFeaturedProduct,
  },
};
</script>

<style></style>
