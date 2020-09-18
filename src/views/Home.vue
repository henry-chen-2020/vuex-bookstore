<template>
  <div class="home">
    <BookGrid />
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
