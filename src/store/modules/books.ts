import axios from "axios";
const REST = "http://127.0.0.1:51364";
import { v4 as uuid } from "uuid";

const BOOKS = [
  {
    ID: "1",
    Name: "Wow Factor",
    Author: "Ada",
    ISBN: "34572075",
    Genre: "fantasy"
  },
  {
    ID: "2",
    Name: "New Yorker",
    Author: "famous",
    ISBN: "unkonwn",
    Genre: "fiction"
  },
  {
    ID: "3",
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
  allBooks: state => state.books,
  theBook: state => id => state.books.find(book => book.ID === id)
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
    book.ID = uuid();
    console.log("#book: create new", book);
    try {
      const response = await axios.post(`${REST}/books`, book);
      ctx.commit("ADD_BOOK", response.data);
    } catch (e) {
      ctx.commit("ADD_BOOK", book);
    }
  },
  async deleteAll(ctx) {
    console.log("#book: delete all");
    await axios.delete(`${REST}/books`);
    ctx.commit("CLR_BOOKS");
  },
  async updateOne(ctx, book) {
    console.log("#book: update one");
    try {
      const response = await axios.put(`${REST}/book/${book.ID}`, book);
      ctx.commit("PUT_BOOK", response.data);
      } catch {
        ctx.commit("PUT_BOOK", book);
      }  },
  async deleteOne(ctx, id) {
    console.log("#book: delete one");
    await axios.delete(`${REST}/book/${id}`);
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
    const index = state.books.findIndex(aBook => aBook.ID === book.ID);
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
