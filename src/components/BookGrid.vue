<template>
  <div class="hello">
    <div class="global-book-book-actions">
      <i class="material-icons" @click="obtainAll">refresh</i>
      <i class="material-icons" @click="deleteAll">delete</i>
      <i class="material-icons" @click="createNew">post_add</i>
      <i class="material-icons">add</i>
      <i class="material-icons">add_box</i>
      <i class="material-icons">add_circle</i>
      <i class="material-icons">add_circle_outline</i>
      <i class="material-icons">texture</i>
    </div>
    <div class="bookList">
      <div v-if="allBooks.length === 0">No book</div>
      <div class="book" v-for="book in allBooks" :key="book._id">
        <div class="genre">{{ book.Genre }}</div>
        <h2>{{ book.Name }}</h2>
        <h5><i>by</i> {{ book.Author }}</h5>
        <div class="isbn">{{ book.ISBN }}</div>
        <div class="book-actions">
          <i class="material-icons" @click="updateOne(book)">edit</i>
          <i class="material-icons" @click="deleteOne(book)">close</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
import router from "../router";

export default defineComponent({
  name: "BookGrid",
  methods: {
    ...mapActions(["obtainAll", "deleteAll", "deleteOne"]),
    getID(book) {
      return book._id["$oid"];
    },
    createNew() {
      router.push("/book/add/0");
    },
    updateOne(book) {
      router.push(`/book/update/${this.getID(book)}`);
    }
  },
  computed: mapGetters(["allBooks"]),
  created() {
    this.obtainAll();
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.global-actions {
  font-size: 36px;
}
div.global-book-book-actions i {
  margin: 1rem;
  cursor: pointer;
}
.bookList {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
}
.book {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  position: relative;
  background-color: lightblue;
  width: 255px;
  height: 330px;
}
.genre {
  text-align: left;
}
h2 {
  margin-top: 50px;
}
h5 {
  margin-top: 100px;
}
.isbn {
  text-align: left;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
}
.book-actions {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  cursor: pointer;
}
</style>
