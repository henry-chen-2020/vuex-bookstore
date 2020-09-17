// import axios from "axios";
// const REST = "http://127.0.0.1:53025";
import { v4 as uuid } from "uuid";

const BOOKS = [
  {
    ID: 1,
    Name: "Wow Factor",
    Author: "Ada",
    ISBN: "34572075",
    Genre: "fantasy"
  },
  {
    ID: 2,
    Name: "New Yorker",
    Author: "famous",
    ISBN: "unkonwn",
    Genre: "fiction"
  },
  {
    ID: 3,
    Name: "The Sky",
    Author: "Anonymous",
    ISBN: "123456789",
    Genre: "sci-fi"
  }
];
const state = {
  books: [
    {
      ID: 1,
      Name: "Wow Factor",
      Author: "Ada",
      ISBN: "34572075",
      Genre: "fantasy"
    },
    {
      ID: 2,
      Name: "New Yorker",
      Author: "famous",
      ISBN: "unkonwn",
      Genre: "fiction"
    },
    {
      ID: 3,
      Name: "The Sky",
      Author: "Anonymous",
      ISBN: "123456789",
      Genre: "sci-fi"
    }
  ]
};

/* eslint-disable @typescript-eslint/no-explicit-any */
const getters = {
  allBooks: state => state.books
};
/**
 * createNew
 * obtainAll
 * deleteAll
 *
 * obtainOne
 * updateOne
 * deleteOne
 */

const actions = {
  async obtainAll(ctx) {
    console.log("obtain all");
    // const response = await axios.get(`${REST}/books`);
    // ctx.commit("SET_BOOKS", response.data);
    ctx.commit("SET_BOOKS", BOOKS);
  },
  async createNew(ctx, book) {
    console.log("create new");
    book.ID = uuid();
    state.books.unshift(book);
    // const response = await axios.post(`${REST}/books`, book);
    // ctx.commit("ADD_BOOK", response.data);
  },
  async deleteAll(ctx) {
    console.log("delete all");
    // await axios.delete(`${REST}/books`);
    ctx.commit("CLR_BOOKS");
  },
  async updateOne(ctx, book) {
    console.log("update one");
    // const response = await axios.put(`${REST}/book/${book.ID}`, book);
    // ctx.commit("PUT_BOOK", response.data);
    ctx.commit("PUT_BOOK", book);
  },
  async deleteOne(ctx, id) {
    console.log("delete one");
    // await axios.delete(`${REST}/book/${id}`);
    ctx.commit("DEL_BOOK", id);
  }
};

const mutations = {
  SET_BOOKS: (state, books) => (state.books = books),
  ADD_BOOK: (state, book) => state.books.unshift(book),
  CLR_BOOKS: () => (state.books = []),
  DEL_BOOK: (state, id) =>
    (state.books = state.boook.filter(book => book.ID != id)),
  PUT_BOOK: (state, book) => {
    const index = state.books.findIndex(book);
    if (index !== -1) {
      state.books.splice(index, 1, book);
    }
  }
};
/* eslint-enble @typescript-eslint/no-explicit-any */

export default {
  state,
  getters,
  actions,
  mutations
};
