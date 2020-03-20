import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/category/:type",
    name: "category",
    component: () => import("../views/Category.vue"),
    children: [
      {
        path: ":id/list-restaurants",
        name: "list-restaurants",
        component: () => import("../components/ListRestaurants.vue")
      },
      {
        path: "/",
        name: "index",
        component: () => import("../views/Home.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register.vue")
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/Profile.vue")
  },
  {
    path: "/testing",
    name: "testing",
    component: () => import("../views/Testing.vue")
  },

  {
    path: "/purchaseprofile",
    name: "purchaseprofile",
    redirect: { name: "purchaseslist" },
    component: () => import("../views/PurchaseProfile.vue"),
    children: [
      {
        path: "/",
        name: "purchaseslist",
        component: () => import("../components/PurchasesList.vue")
      },
      {
        path: ":id/purchasedetails",
        name: "purchasedetails",
        component: () => import("../components/PurchaseDetails.vue")
      }
    ]
  },
  {
    path: "/company/",
    name: "company",
    redirect: { name: "products" },
    component: () => import("../views/Company.vue"),
    children: [
      {
        path: ":id/products",
        name: "products",
        component: () => import("../components/ProductBar.vue")
      },
      {
        path: ":id/rating",
        name: "rating",
        component: () => import("../components/Rating.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
