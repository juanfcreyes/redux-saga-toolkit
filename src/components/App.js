import "../styles.css";
import React from "react";
import Home from "./Home";
import Login from "./Login";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

const ConnectedHomeApp = ({ auth }) => {
  if (auth.username) {
    return <Home />;
  } else {
    return <Login />;
  }
};

const App = connect(mapStateToProps)(ConnectedHomeApp);
export default App;
