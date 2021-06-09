import Swal from "sweetalert2";
import { FOUND_BAD_WORD } from "../constants/action-types";
import { addArticle } from "../reducers/articlesReducer";

const forbiddenWords = ["spam", "money"];

export const forbiddenWordsMiddleware = ({ dispatch }) => {
  return (next) => {
    return (action) => {
      if (action.type === addArticle.type) {
        const foundWord = forbiddenWords.filter((word) =>
          action.payload.title.includes(word)
        );
        if (foundWord.length) {
          Swal.fire(
            "Forbidden Word",
            "You can't use the words [spam,  money] in a title",
            "info"
          );
          return dispatch({ type: FOUND_BAD_WORD });
        }
      }
      return next(action);
    };
  };
};
