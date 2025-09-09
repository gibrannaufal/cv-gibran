export default [
  {
    path: "/",
    name: "",
    component: () => import("../layouts/main.vue"),
    children: [
      {
        path: '/',
        name: 'Introduction',
        component: () => import('../views/introduction.vue'),
        meta: { title: "Introduction", layout: true},
      },
      {
        path: '/resume',
        name: 'Resume',
        component: () => import('../views/resume.vue'),
        meta: { title: "Resume", layout: true},
      },
      {
        path: '/portofolio',
        name: 'Portofolio',
        component: () => import('../views/portofolio.vue'),
        meta: { title: "Portofolio", layout: true},
      },
    
    ]
  },
  // Catch route / redirect to login
  {
    path: '/',
    redirect: { name: 'Introduction' }
  },
  // Catch route empty redirect to Introduction
  {
    path: '',
    redirect: { name: 'Introduction' }
  },
  {
    path: "/:catchAll(.*)", // This replaces the previous wildcard
    redirect: { name: "Introduction" },
  },

];
