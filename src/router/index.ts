import { createWebHistory, createRouter } from "vue-router";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes,
  //   mode: "history",
  //   scrollBehavior(to, from, savedPosition) {
  //     if (savedPosition) {
  //       return savedPosition;
  //     } else {
  //       return { x: 0, y: 0 };
  //     }
  //   }
});

// Before each route evaluates...
router.beforeEach(async (_routeTo, _routeFrom, next) => {
  return next();
});

function toTitleCase(str: string) {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
  });
}

router.afterEach((to) => {
  const baseTitle = "CV Muhammad Naufal Gibran";
  const title = typeof to.meta.title === "string" ? toTitleCase(to.meta.title) : "";
  document.title = title ? `${title} | ${baseTitle}` : baseTitle;
});



export default router;
