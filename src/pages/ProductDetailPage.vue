<template>
  <section class="product-detail section-padding">
    <div class="container">
      <div class="row" v-if="product">
        <div class="col-lg-6 col-12">
          <div class="product-thumb">
            <img
              :src="getImgUrl(product.srcImg)"
              class="img-fluid product-image"
              alt=""
            />
          </div>
        </div>

        <div class="col-lg-6 col-12">
          <div class="product-info d-flex">
            <div>
              <h2 class="product-title mb-0">{{ product.title }}</h2>

              <p class="product-p">{{ product.description }}</p>
            </div>

            <small class="product-price text-muted ms-auto mt-auto mb-5"
              >{{ product.priceCurrency }}{{ product.priceNum }}</small
            >
          </div>

          <div class="product-description">
            <strong class="d-block mt-4 mb-2">Description</strong>

            <p class="lead mb-5">
              Over three years in business, We’ve had the chance to work on a
              variety of projects, with companies
            </p>
          </div>

          <div class="product-cart-thumb row">
            <div class="col-lg-6 col-12">
              <select
                class="form-select cart-form-select"
                v-model="selectedQuantity"
              >
                <option disabled value="Quantity">Quantity</option>
                <option
                  v-for="quantity in quantities"
                  :value="quantity"
                  :key="quantity"
                >
                  {{ quantity }}
                </option>
              </select>
              <select
                class="form-select cart-form-select"
                v-model="selectedColor"
              >
                <option disabled value="Color">Color</option>
                <option v-for="color in colors" :value="color" :key="color">
                  {{ color }}
                </option>
              </select>
              <select
                class="form-select cart-form-select"
                v-model="selectedSize"
              >
                <option disabled value="Size">Size</option>
                <option v-for="size in sizes" :value="size" :key="size">
                  {{ size }}
                </option>
              </select>
            </div>

            <div class="col-lg-6 col-12 mt-4 mt-lg-0">
              <button
                @click="showModal"
                type="submit"
                class="btn custom-btn cart-btn"
                data-bs-toggle="modal"
                data-bs-target="#cart-modal"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <component-modal-product
    v-if="isVisible"
    :product="product"
    :selectedQuantity="selectedQuantity"
    :selectedColor="selectedColor"
    :selectedSize="selectedSize"
    :currentPrice="currentPrice"
    @close="closeModal"
  ></component-modal-product>
</template>

<script>
import ComponentModalProduct from "../components/ComponentModalProduct";

export default {
  components: {
    ComponentModalProduct,
  },
  data() {
    return {
      isVisible: false,
      product: null,
      selectedQuantity: "Quantity",
      quantities: [1, 2, 3, 4, 5],
      selectedColor: "Color",
      colors: ["red", "black", "blue"],
      selectedSize: "Size",
      sizes: ["S", "M", "L", "XL "],
      currentPrice: 0
    };
  },
  created() {
    const index = this.$route.params.id;
    this.product = this.$store.state.productList[index];
  },
  methods: {
    showModal() {
      this.isVisible = true;
      this.currentPrice = this.product.priceNum * this.selectedQuantity;
    },
    closeModal() {
      this.isVisible = false;
    },
    getImgUrl(pic) {
      return require("../assets/images/product/" + pic);
    },
  },
};
</script>

<style scoped></style>
