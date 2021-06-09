import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getData } from "../reducers/articlesReducer";

const Post = ({ articles, getData }) => {
  useEffect(() => {
    getData("https://jsonplaceholder.typicode.com/posts");
  }, [getData]);

  return (
    <ul>
      {articles.map((el) => (
        <li key={el.id}>{el.title}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  articles: state.articles.remoteArticles.slice(0, 10)
});

export default connect(mapStateToProps, { getData })(Post);
