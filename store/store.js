import { create } from "zustand";

export const useStore = create((set) => ({
  cart: {
    books: [],
  },
  addBook: (data) =>
    set((state) => ({
      cart: {
        books: [...state.cart.books, data],
      },
    })),
  removeBook: (index) =>
    set((state) => ({
      cart: {
        books: state.cart.books.filter((_, i) => i != index),
      },
    })),
}));
