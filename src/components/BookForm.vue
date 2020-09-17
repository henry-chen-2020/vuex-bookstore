<template>
  <div>
    <h2>{{ state }} a Book</h2>
    <form>
      <fieldset>
        <legend>{{ state }} a Book</legend>
        <div class="field" v-for="(item, key, i) in book" :key="key">
          <label class="label" for="{{ key }}">{{ key }}:</label>
          <input type="text" v-model="book[i]" required="" />
        </div>
        <div>
          <button @click="submit" type="submit">Save</button>
          <button @click="cancel">Cancel</button>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EventBus from "../eventBus";
import router from "../router";

const INIT = "";
// () => {
//   return {
//     value: "",
//     error: false
//   };
// };

export default defineComponent({
  data() {
    return {
      state: "Add",
      book: {
        Name: INIT,
        Author: INIT,
        ISBN: INIT,
        Genre: INIT
      }
    };
  },
  methods: {
    submit() {
      this.book.Name;
      router.push("/");
    },
    cancel() {
      // swith to book view
      router.push("/");
    }
  },
  created() {
    EventBus.$on("craate-new", () => (this.state = "Add"));
    EventBus.$on("update-one", (book: any) => {
      this.state = "Update";
      this.book = book;
    });
  }
});
</script>

<style scoped>
form {
  width: 600px;
  text-align: center;
  display: inline-block;
}
legend {
  font-size: 24px;
  padding: 10px;
}
div.field {
  padding: 15px;
}
label.label {
  display: inline-block;
  width: 80px;
  position: relative;
}
input {
  width: 250px;
  box-sizing: border-box;
}
button {
  margin: 10px;
  cursor: pointer;
}
</style>
