import axios from "axios";
const REST = `http://${process.env.VUE_APP_REST_API_URL}`;
import { v4 as uuid } from "uuid";

import BOOKS from "./books.json";

const getID = book => book._id["$oid"];
const setID = (book, id) => (book._id = { $oid: id });

const state = {
  books: []
};

/* eslint-disable @typescript-eslint/no-explicit-any */
const getters = {
  allBooks: state => state.books,
  theBook: state => id => state.books.find(book => getID(book) === id)
};

const actions = {
  async obtainAll({ commit }) {
    console.log("#book: obtain all");
    try {
      const response = await axios.get(`${REST}/books`);
      commit("SET_BOOKS", response.data);
    } catch {
      commit("SET_BOOKS", BOOKS);
    }
  },
  async createNew(ctx, book) {
    console.log("#book: create new", book);
    try {
      const response = await axios.post(`${REST}/books`, book);
      ctx.commit("ADD_BOOK", response.data);
    } catch (e) {
      setID(book, uuid());
      ctx.commit("ADD_BOOK", book);
    }
  },
  async deleteAll(ctx) {
    console.log("#book: delete all");
    await axios.delete(`${REST}/books`);
    ctx.commit("CLR_BOOKS");
  },
  async updateOne(ctx, book) {
    console.log("#book: update one", book);
    try {
      const response = await axios.put(`${REST}/book/${getID(book)}`, book);
      ctx.commit("PUT_BOOK", response.data);
    } catch {
      ctx.commit("PUT_BOOK", book);
    }
  },
  async deleteOne(ctx, book) {
    const id = getID(book);
    console.log("#book: delete one", id);
    await axios.delete(`${REST}/book/${id}`);
    ctx.commit("DEL_BOOK", id);
  }
};

const mutations = {
  SET_BOOKS: (state, books) => (state.books = books),
  ADD_BOOK: (state, book) => state.books.unshift(book),
  CLR_BOOKS: () => (state.books = []),
  DEL_BOOK: (state, id) =>
    (state.books = state.boook.filter(book => getID(book) != id)),
  PUT_BOOK: (state, book) => {
    const index = state.books.findIndex(aBook => getID(aBook) === getID(book));
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
