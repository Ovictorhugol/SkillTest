import React, { useEffect, useState } from "react";
import "./Comments.css";

function Comments(props) {
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const { id } = props;

  const listComments = (id) => {
    const URL_COMMENTS = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
    fetch(URL_COMMENTS)
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      });
  };
  useEffect(() => {
    listComments(id);
  }, []);

  const handleClick = () => {
    setShowComments(!showComments);
    console.log(showComments);
  };
  return (
    <div className="commentsBody">
      <button
        onClick={handleClick}
        className={`commentsButton ${showComments === true ? "active" : ""}`}
      >
        Show Comments
        <span className="left-icon"></span>
        <span className="right-icon"></span>
      </button>
      {!showComments ? (
        <div></div>
      ) : (
        comments.map((item) => (
          <div key={item.id} className="comments">
            <div className="commentsHeader">
              <p>{item.name} </p>
              <p>From:{item.email} </p>
            </div>
            <p className="commentsText">{item.body} </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Comments;
