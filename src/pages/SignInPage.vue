<template>
  <section class="sign-in-form section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto col-12">
          <h1 class="hero-title text-center mb-5">Sign In</h1>

          <div class="row">
            <div class="col-lg-8 col-11 mx-auto">
              <form role="form" method="post">
                <div class="form-floating mb-4 p-0">
                  <input
                    v-model="loginLogin"
                    type="login"
                    name="login"
                    id="login"
                    class="form-control"
                    placeholder="Login"
                    required
                  />

                  <label for="login">Login</label>
                </div>

                <div class="form-floating p-0">
                  <input
                    v-model="loginPassword"
                    type="password"
                    name="password"
                    id="password"
                    class="form-control"
                    placeholder="Password"
                    required
                  />

                  <label for="password">Password</label>
                </div>

                <button
                  @click.prevent="loginUser"
                  type="submit"
                  class="btn custom-btn form-control mt-4 mb-3"
                >
                  Sign in
                </button>

                <p class="text-center">
                  Don’t have an account?
                  <router-link :to="'/sign-up'">Create One</router-link>
                </p>
              </form>
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
    return {
      loginLogin: "",
      loginPassword: "",
    };
  },
  methods: {
    loginUser() {
      const loginUser = this.loginLogin;
      const passwordUser = this.loginPassword;
      const storedUserData = JSON.parse(localStorage.getItem("users"));

      const user = storedUserData.find(
        (user) =>
          user.nameUser === loginUser && user.passwordUser === passwordUser
      );

      if (user) {
        console.log("Вы вошли как " + user.nameUser);
        localStorage.setItem("loggedInUser", user.nameUser);
        this.$store.commit("login");
        this.$router.push("/");
      } else {
        console.log("Вы не вошли");
        this.loginLogin = "";
        this.loginPassword = "";
      }
    },
  },
};
</script>

<style scoped></style>
