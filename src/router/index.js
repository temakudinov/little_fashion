import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import FaqsPage from "@/pages/FaqsPage.vue";
import ContactsPage from "@/pages/ContactsPage.vue";
import ProductsPage from "@/pages/ProductsPage.vue";
import SignInPage from "@/pages/SignInPage.vue";
import SignUpPage from "@/pages/SignUpPage.vue";
import ProductDetailPage from "@/pages/ProductDetailPage.vue";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/faq",
    component: FaqsPage,
  },
  {
    path: "/contacts",
    component: ContactsPage,
  },
  {
    path: "/products",
    component: ProductsPage,
  },
  {
    path: "/sign-in",
    component: SignInPage,
  },
  {
    path: "/sign-up",
    component: SignUpPage,
  },
  {
    path: "/product-detail/:id",
    name: "ProductDetail",
    component: ProductDetailPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.Base_URL),
});

export default router;
