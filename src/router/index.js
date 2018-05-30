import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import login from "@/components/login";
import main from "@/components/main";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: main
    },
    {
      path: "/login",
      component: login
    }
    // {
    //   path: "/login/:id",
    //   component: login
    // }
  ]
});
