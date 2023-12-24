import { createRouter, createWebHistory } from "vue-router";
import EmailPage from "./pages/EmailPage.vue";
import HomePage from "./pages/HomePage.vue";
import InvoicePage from "./pages/InvoicePage.vue";

const routes = [
    {
        path: "/",
        component: HomePage,
    },
    {
        path: "/email",
        name: "EmailPage",
        component: EmailPage,
    },
    {
        path: "/invoice",
        name: "InvoicePage",
        component: InvoicePage,
    },
];

const router = new createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
