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
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.title} </h3>
          <p>{item.body} </p>
          <div>
            <Comments id={item.id} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
