import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/watermark",
      name: "Watermark",
      component: () => import("@/views/watermark/index.vue")
    }
  ]
});

export default router;
