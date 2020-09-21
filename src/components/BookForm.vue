<template>
  <div>
    <h2>{{ capitalize(act) }} a Book</h2>
    <form>
      <fieldset>
        <legend>{{ capitalize(act) }} a Book</legend>
        <div class="field" v-for="(item, key) in book" :key="key">
          <label class="label" for="{{ key }}">{{ key }}:</label>
          <input type="text" v-model="item.value" required="" />
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
import router from "../router";
import { mapGetters, mapActions } from "vuex";

const INIT = () => {
  return {
    value: ""
  };
};

export default defineComponent({
  props: ["act", "id"],
  data() {
    return {
      book: {
        Name: INIT(),
        Author: INIT(),
        ISBN: INIT(),
        Genre: INIT()
      }
    };
  },
  methods: {
    ...mapActions(["createNew", "updateOne"]),
    capitalize: str => str.charAt(0).toUpperCase() + str.slice(1),
    setID(book, id) {
      book._id = { $oid: id };
    },
    submit() {
      console.log("#form: sumbit", this.act);
      const book = {};
      const keys = Object.keys(this.book);
      keys.forEach(key => (book[key] = this.book[key].value));
      if (this.act === "add") {
        this.createNew(book);
      } else {
        this.setID(book, this.id);
        this.updateOne(book);
      }
      router.push("/");
    },
    cancel() {
      console.log("#form: cancel");
      router.push("/");
    }
  },
  computed: mapGetters(["theBook"]),
  created() {
    if (this.act === "update") {
      const theBook = this.theBook(this.id);
      if (theBook) {
        this.book.Name.value = theBook.Name;
        this.book.Author.value = theBook.Author;
        this.book.ISBN.value = theBook.ISBN;
        this.book.Genre.value = theBook.Genre;
      }
    }
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
