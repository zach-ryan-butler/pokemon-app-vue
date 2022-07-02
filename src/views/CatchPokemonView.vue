<template>
  <div class="catch-pokemon-container">
    <h1>This is a catch pokemon page</h1>
    <ul>
      <li v-for="pokemon in pokemon" :key="pokemon.id">
        <p>{{ pokemon.name }}</p>
        <p>{{ pokemon.id }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { getRandomPokemon } from "@/services/pokemonApi.js";

export default {
  data() {
    return {
      pokemon: [],
    };
  },
  created() {
    getRandomPokemon().then((randomPokemon) => (this.pokemon = randomPokemon));
  },
};
</script>

<style lang="scss" scoped>
.catch-pokemon-container {
  @include viewContainer;
}
</style>
