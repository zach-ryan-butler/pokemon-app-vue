<template>
  <div class="catch-pokemon-grid">
    <PokemonItem
      v-for="pokemon in pokemonArray"
      :key="pokemon.id"
      :pokemon="pokemon"
    />
  </div>
</template>

<script>
// local components
import PokemonItem from "@/components/PokemonItem.vue";

// api functions
import { getRandomPokemon } from "@/services/pokemonApi.js";

export default {
  components: {
    PokemonItem,
  },
  data() {
    return {
      pokemonArray: [],
    };
  },
  created() {
    getRandomPokemon().then(
      (randomPokemon) => (this.pokemonArray = randomPokemon)
    );
  },
};
</script>

<style lang="scss" scoped>
.catch-pokemon-grid {
  @include viewContainer;
  padding-top: 50px;
  display: grid;
}

@media (min-width: 600px) {
  .catch-pokemon-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 900px) {
  .catch-pokemon-grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (min-width: 1200px) {
  .catch-pokemon-grid {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>
