import React from "react";
import List from "./List";
import Form from "./Form";
import Post from "./Posts";
import { connect } from "react-redux";
import { logout } from "../reducers/authReducer";

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

const ConnectedHome = ({ logout }) => {
  const onClickHandle = () => {
    logout();
  };

  return (
    <div>
      <button
        onClick={onClickHandle}
        className="mt-2 me-4 float-end btn btn-danger"
      >
        Logout
      </button>

      <div className="container mt-3">
        <div>
          <h2>Add a new article</h2>
          <Form />
        </div>
        <div>
          <h2>Articles</h2>
          <List />
        </div>
        <div>
          <h2>API posts</h2>
          <Post />
        </div>
      </div>
    </div>
  );
};

const Home = connect(null, mapDispatchToProps)(ConnectedHome);

export default Home;
