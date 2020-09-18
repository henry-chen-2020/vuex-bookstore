<template>
  <div class="book">
    <BookForm :act="act" :id="id" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BookForm from "../components/BookForm.vue";

export default defineComponent({
  components: {
    BookForm
  },
  props: ["act", "id"]
});
</script>
