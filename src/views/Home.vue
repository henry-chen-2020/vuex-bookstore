<template>
  <div class="home">
    <BookGrid msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BookGrid from "@/components/BookGrid.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    BookGrid
  }
});
</script>

<style scoped>
div.home {
  width: 1050px;
  text-align: center;
}
</style>
