import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CatchPokemonView from "../views/CatchPokemonView.vue";
import PokemonDetailsView from "../views/PokemonDetailsView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/catch",
    name: "catch pokemon",
    component: CatchPokemonView,
  },
  {
    path: "/details/:id",
    name: "pokemon details",
    component: PokemonDetailsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
