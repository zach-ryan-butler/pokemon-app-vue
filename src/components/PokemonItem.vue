<template>
  <div class="pokemon-container">
    <div class="pokemon-container_contents">
      <img
        @click="isDisabled = !isDisabled"
        class="pokemon-container_contents_image"
        :src="pokemon.sprites.front_default"
        alt="pokemon image"
      />
      <p class="pokemon-container_contents_id">#{{ pokemon.id }}</p>
      <p class="pokemon-container_contents_name">{{ pokemon.name }}</p>
      <div class="pokemon-container_contents_types">
        <div
          class="pokemon-container_contents_types_type"
          v-for="types in pokemon.types"
          :key="types.slot"
        >
          {{ types.type.name }}
        </div>
      </div>
      <button
        class="pokemon-container_contents_button"
        :disabled="isDisabled"
        @click="openModal(pokemon)"
      >
        CATCH!
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pokemon"],
  data() {
    return {
      isDisabled: true,
      modal: false,
    };
  },
  methods: {
    openModal(pokemon) {
      console.log("clicked!", pokemon.name);
      this.modal = !this.modal;
      console.log(this.modal);
    },
  },
};
</script>

<style lang="scss" scoped>
.pokemon-container {
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
}

.pokemon-container_contents {
  width: 80%;

  &_image {
    width: 100%;
    margin-bottom: 0.5rem;
    background-color: #efebe9;
    cursor: pointer;
  }

  &_id {
    padding-left: 1rem;
    margin-bottom: 0.5rem;
    color: #9e9e9e;
  }

  &_name {
    padding-left: 1rem;
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
  }

  &_types {
    padding-left: 1rem;
    margin-bottom: 0.5rem;
    display: flex;
  }

  &_types_type {
    background-color: $secondary-color;
    padding: 0.4em;
    margin-right: 0.5em;
    font-size: 0.8rem;
    border-radius: $border-radius;
    width: 30%;
    text-align: center;
    color: $text-color;
  }

  &_button {
    width: 100%;
    padding: 0.5em;
    border: none;
  }
}
</style>
