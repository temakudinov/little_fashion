<template>
  <section class="sign-in-form section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto col-12">
          <h1 class="hero-title text-center mb-5">Sign Up</h1>

          <div class="row">
            <div class="col-lg-8 col-11 mx-auto">
              <form role="form" method="post">
                <div class="form-floating">
                  <input
                    v-model="regLogin"
                    type="login"
                    name="login"
                    id="login"
                    class="form-control"
                    placeholder="Login"
                    required
                  />

                  <label for="login">Login</label>
                </div>

                <div class="form-floating my-4">
                  <input
                    v-model="regEmail"
                    type="email"
                    name="email"
                    id="email"
                    pattern="[^ @]*@[^ @]*"
                    class="form-control"
                    placeholder="Email address"
                    required
                  />

                  <label for="email">Email address</label>
                </div>

                <div class="form-floating my-4">
                  <input
                    v-model="regPassword"
                    type="password"
                    name="password"
                    id="password"
                    pattern="[0-9a-zA-Z]{4,10}"
                    class="form-control"
                    placeholder="Password"
                    required
                  />

                  <label for="password">Password</label>

                  <!-- <p class="text-center">
                    * shall include 0-9 a-z A-Z in 4 to 10 characters
                  </p> -->
                </div>

                <div class="form-floating">
                  <input
                    v-model="regPasswordConfirmation"
                    type="password"
                    name="confirm_password"
                    id="confirm_password"
                    pattern="[0-9a-zA-Z]{4,10}"
                    class="form-control"
                    placeholder="Password"
                    required
                  />

                  <label for="confirm_password">Password Confirmation</label>
                </div>

                <button
                  @click.prevent="registerUser"
                  type="submit"
                  class="btn custom-btn form-control mt-4 mb-3"
                >
                  Create account
                </button>

                <p class="text-center">
                  Already have an account? Please
                  <router-link :to="'/sign-in'">Sign In</router-link>
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
      regLogin: "",
      regEmail: "",
      regPassword: "",
      regPasswordConfirmation: "",
    };
  },
  methods: {
    registerUser() {
      if (this.regPassword === this.regPasswordConfirmation) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        const dataRegUser = {
          nameUser: this.regLogin,
          emailUser: this.regEmail,
          passwordUser: this.regPassword,
          passwordConfirmationUser: this.regPasswordConfirmation,
        };
        users.push(dataRegUser);
        localStorage.setItem("users", JSON.stringify(users));
        this.$router.push("/sign-in");
      } else {
        console.log('Пароли не совпадают');
      }
    },
  },
};
</script>

<style scoped></style>
