<template>
  <component-header></component-header>

  <router-view></router-view>

  <component-footer></component-footer>
</template>

<script>
import ComponentHeader from "@/components/ComponentHeader.vue";
import ComponentFooter from "@/components/ComponentFooter.vue";

export default {
  components: {
    ComponentHeader,
    ComponentFooter,
  },
  methods: {
    setActiveNavLink() {
      const currentUrlPage = this.$route.path;
      this.$store.state.navLinks.forEach((itemNav) => {
        if (itemNav.url === currentUrlPage) {
          itemNav.activeLink = true;
        } else {
          itemNav.activeLink = false;
        }
      });
    },
  },
  mounted() {
    this.setActiveNavLink();
  },
  watch: {
    $route(to, from) {
      this.setActiveNavLink(); 
    },
  },
};
</script>

<style></style>
