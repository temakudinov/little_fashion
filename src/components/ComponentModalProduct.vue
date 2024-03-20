<template>
  <div
    @click="closeModal"
    class="modal fade"
    id="cart-modal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div @click.stop class="modal-content border-0">
        <div class="modal-header flex-column">
          <button
            @click="closeModal"
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div class="modal-body">
          <div class="row">
            <div class="col-lg-6 col-12 mt-4 mt-lg-0">
              <img
                :src="getImgUrl(product.srcImg)"
                class="img-fluid product-image"
                alt=""
              />
            </div>

            <div class="col-lg-6 col-12 mt-3 mt-lg-0">
              <h3 class="modal-title" id="exampleModalLabel">
                {{ product.title }}
              </h3>

              <p class="product-price text-muted mt-3">
                {{ product.priceCurrency }}{{ product.priceNum }}
              </p>

              <p class="product-p">
                Quatity: <span class="ms-1">{{ selectedQuantity }}</span>
              </p>

              <p class="product-p">
                Colour: <span class="ms-1">{{ selectedColor }}</span>
              </p>

              <p class="product-p pb-3">
                Size: <span class="ms-1">{{ selectedSize }}</span>
              </p>

              <div class="border-top mt-4 pt-3">
                <p class="product-p">
                  <strong>Total: <span class="ms-1">{{ product.priceCurrency }}{{ currentPrice }}</span></strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <div class="row w-50">
            <button type="button" class="btn custom-btn cart-btn ms-lg-4">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product", "selectedQuantity", "selectedColor", "selectedSize", "currentPrice"],
  data() {
    return {};
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/images/product/" + pic);
    },
    closeModal() {
      this.$emit('close')
    }
  },
};
</script>

<style scoped></style>
