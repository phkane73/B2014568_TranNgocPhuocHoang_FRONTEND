import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";
import ContactAdd from "@/views/ContactAdd.vue";
import NotFound from "@/views/NotFound.vue";
import ContactEdit from "@/views/ContactEdit.vue";
const routes = [
    {
        path: "/",
        name: "contactbook",
        component: ContactBook,
    },
    {
        path: "/contacts/:id",
        name: "contact.edit",
        component: ContactEdit,
        props: true,
    },
    {
        path: "/contacts/add",
        name: "contact.add",
        component: ContactAdd,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: NotFound,
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;