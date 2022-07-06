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
        :class="
          isDisabled
            ? 'pokemon-container_contents_button--disabled'
            : 'pokemon-container_contents_button'
        "
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
      console.log("modal open?", this.modal);
    },
  },
};
</script>

<style lang="scss" scoped>
.pokemon-container {
  margin-bottom: 50px;
  display: flex;
  justify-content: center;

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-2px);
    }
    100% {
      transform: translateY(0);
    }
  }

  &:hover {
    animation: bounce 0.2s;
    animation-timing-function: linear;
  }
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
    padding: 0.6em;
    border: none;
    border-radius: $border-radius;
    background-color: $secondary-color;
    color: $text-color;
    box-shadow: 0 3px 2px -2px gray;
    @include transition-ease;

    &:hover {
      cursor: pointer;
      background-color: $secondary-color-dark;
    }
  }

  &_button--disabled {
    width: 100%;
    padding: 0.6em;
    border: none;
    border-radius: $border-radius;
    @include transition-ease;
  }
}
</style>
