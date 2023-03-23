import React, { useEffect, useState } from "react";

import Comments from "./Comments";
import "./Dashboard.css";
function Dashboard() {
  const [data, setData] = useState([]);

  const URL = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="postsBody">
      {data.map((item) => (
        <div key={item.id} className="posts">
          <h3 className="postsTitle">{item.title} </h3>
          <p className="postsContent">{item.body} </p>
          <div>
            <Comments id={item.id} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
