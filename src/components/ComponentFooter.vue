<template>
  <footer class="site-footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-10 me-auto mb-4">
          <h4 class="text-white mb-3">
            <router-link :to="'/'">Little</router-link> Fashion
          </h4>
          <p class="copyright-text text-muted mt-lg-5 mb-4 mb-lg-0">
            Copyright © 2022 <strong>Little Fashion</strong>
          </p>
          <br />
          <p class="copyright-text">
            Designed by
            <a href="https://www.tooplate.com/" target="_blank">Tooplate</a>
          </p>
        </div>

        <div class="col-lg-5 col-8">
          <h5 class="text-white mb-3">Sitemap</h5>

          <ul class="footer-menu d-flex flex-wrap">
            <li
              class="footer-menu-item"
              v-for="link of $store.state.navFooterLinks" 
              :key="link"
            >
              <router-link class="footer-menu-link" :to="link.url">{{ link.name }}</router-link>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-4">
          <h5 class="text-white mb-3">Social</h5>

          <ul class="social-icon">
            <li><a href="#" class="social-icon-link bi-youtube"></a></li>

            <li><a href="#" class="social-icon-link bi-whatsapp"></a></li>

            <li><a href="#" class="social-icon-link bi-instagram"></a></li>

            <li><a href="#" class="social-icon-link bi-skype"></a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped></style>
