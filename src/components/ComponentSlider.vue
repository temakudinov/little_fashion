<template>
  <section class="slick-slideshow">
    <div
      class="slick-custom"
      v-for="(slide, index) of $store.state.mainSlides"
      :key="slide"
      v-show="index === activeSlideIndex"
    >
      <img :src="getImgUrl(slide.srcImg)" class="img-fluid" alt="" />
      <div class="slick-bottom">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-10">
              <h1 class="slick-title">{{ slide.title }}</h1>

              <p class="lead text-white mt-lg-3 mb-lg-5">
                {{ slide.description }}
              </p>

              <router-link :to="slide.button.url" class="btn custom-btn">{{ slide.button.text }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="slick-slideshow_pagination">
      <ul>
        <li
          :class="{ active: index === activeSlideIndex }"
          v-for="(slide, index) of $store.state.mainSlides"
          :key="index"
        >
          <a @click.prevent="changeSlide(index)" href=""></a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeSlideIndex: 0,
    };
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/images/slideshow/" + pic);
    },
    changeSlide(index) {
      this.activeSlideIndex = index; 
    },
  },
};
</script>

<style scoped></style>
