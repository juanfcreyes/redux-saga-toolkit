import React, { useState } from "react";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import { addArticle } from "../reducers/articlesReducer";

const mapDispatchToProps = (dispatch) => {
  return {
    addArticle: (article) => dispatch(addArticle(article))
  };
};

const ConnectedForm = ({ addArticle }) => {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title) {
      Swal.fire("Title empty", "You should assign a title", "info");
      return;
    }

    addArticle({ title });
    setTitle("");
  };

  return (
    <form className="row g-3" onSubmit={handleSubmit}>
      <div className="col-auto">
        <label className="form-control-plaintext" htmlFor="title">
          Title
        </label>
      </div>
      <div className="col-auto">
        <input
          className="form-control"
          type="text"
          id="title"
          value={title}
          onChange={handleChange}
        />
      </div>
      <div className="col-auto">
        <button className="btn btn-primary mb-3" type="submit">
          SAVE
        </button>
      </div>
    </form>
  );
};

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
