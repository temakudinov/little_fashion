<template>
  <section class="about section-padding">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="mb-5">Get started with <span>Little</span> Fashion</h2>
        </div>

        <div class="col-lg-2 col-12 mt-auto mb-auto">
          <ul
            class="nav nav-pills mb-5 mx-auto justify-content-center align-items-center"
            id="pills-tab"
            role="tablist"
          >
            <li
              class="nav-item"
              v-for="(item, index) of $store.state.aboutNav"
              :key="index"
              role="presentation"
            >
              <button
                class="nav-link"
                :class="{ active: index === activeSlideIndex }"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
                @click="changeSlide(index)"
              >
                {{ item.text }}
              </button>
            </li>
          </ul>
        </div>

        <div class="col-lg-10 col-12">
          <div class="tab-content mt-2" id="pills-tabContent">
            <div
              class="tab-pane fade"
              :class="{ 'show active': slide.showSlide }"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
              v-for="(slide, index) of $store.state.aboutSlides"
              :key="slide"
              v-show="index === activeSlideIndex"
            >
              <div class="row">
                <div class="col-lg-7 col-12">
                  <img
                    :src="getImgUrl(slide.srcImg)"
                    class="img-fluid"
                    alt=""
                  />
                </div>

                <div class="col-lg-5 col-12">
                  <div class="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
                    <h4 class="mb-3">
                      {{ slide.title }}
                    </h4>

                    <p>
                      {{ slide.description }}
                    </p>

                    <p>
                      {{ slide.description2 }}
                    </p>

                    <div class="skill-thumb mt-3" v-if="slide.description3">
                      <template v-for="(item, index) of slide.description3" :key="item">
                        <strong>{{ item.title }}</strong>
                        <span class="float-end">{{ item.success }}</span>
                        <div class="progress">
                          <div
                            class="progress-bar progress-bar-primary"
                            role="progressbar"
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            :style="{width: item.success}"
                          ></div>
                        </div>
                      </template>
                    </div>

                    <div class="mt-2 mt-lg-auto">
                      <router-link
                        :to="slide.button.url"
                        class="custom-link mb-2"
                        >{{ slide.button.text }}
                        <i class="bi-arrow-right ms-2"></i
                      ></router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return{
      activeSlideIndex: 0,
    }
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/images/" + pic);
    },
    changeSlide(index) {
      this.activeSlideIndex = index;
      console.log(this.activeSlideIndex)
    }
  },
};
</script>

<style scoped></style>
