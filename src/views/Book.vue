<template>
  <div class="book">
    <BookForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BookForm from "../components/BookForm.vue";

export default defineComponent({
  components: {
    BookForm
  }
});
</script>
