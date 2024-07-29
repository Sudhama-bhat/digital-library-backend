import axios from "axios";
import { GET_BOOKS, BORROW_BOOK } from "../types";

export const getBooks = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/user/books");
    dispatch({ type: GET_BOOKS, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const borrowBook = (bookId, dueDate) => async (dispatch) => {
  try {
    const res = await axios.post("/api/user/borrow", { bookId, dueDate });
    dispatch({ type: BORROW_BOOK, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};
