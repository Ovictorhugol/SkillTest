import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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
  };
  return (
    <div>
      {!showComments ? (
        <div></div>
      ) : (
        comments.map((item) => (
          <div key={item.id}>
            <h3>{item.title} </h3>
            <p>{item.name} </p>
            <p>{item.email} </p>
            <p>{item.body} </p>
          </div>
        ))
      )}
      <button onClick={handleClick}>Show Comments</button>
    </div>
  );
}

export default Comments;
