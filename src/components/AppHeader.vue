<template>
  <header class="header">
    <h1 class="header_title">Pokemon Catcher</h1>
    <nav>
      <router-link v-if="shouldDisplay" class="header_link" to="/"
        >Your Pokemon</router-link
      >
      <router-link v-else class="header_link" to="/catch"
        >Catch Pokemon</router-link
      >
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    shouldDisplay() {
      return this.$route.name !== "home";
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  max-height: $header-height;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  box-shadow: 0 1px 10px grey;

  &_title {
    color: $secondary-color;
  }

  &_link {
    color: $secondary-color;
    text-decoration: none;
    padding-right: 5px;
    font-size: 1.2rem;
  }
}
</style>
