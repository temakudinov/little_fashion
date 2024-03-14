<template>
  <ul class="navbar-nav mx-auto">
    <li class="nav-item" v-for="navLink of $store.state.navLinks" :key="navLink">
      <router-link class="nav-link" :class="{ active: navLink.activeLink }" :to="navLink.url">{{ navLink.name }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
 
};
</script>

<style scoped></style>
