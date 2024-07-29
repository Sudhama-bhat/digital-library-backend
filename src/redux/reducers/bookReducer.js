import { GET_BOOKS, BORROW_BOOK } from "../types";

const initialState = {
  books: [],
  borrowedBooks: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BOOKS:
      return { ...state, books: payload };
    case BORROW_BOOK:
      return { ...state, borrowedBooks: payload };
    default:
      return state;
  }
}
