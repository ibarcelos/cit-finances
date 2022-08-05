import React, { useState, useEffect } from "react";
import axios from "axios";


import "./globals.css";
import "./posting.css";


function App() {

  const [data, setData] = useState([]);

  const fetchPosts = () => {
    const link = "http://localhost:8080/api/v1/post";
    axios
      .get(link)
      .then(res => {
        setData(res.data);
      })
  }
  useEffect(() => {
    fetchPosts();
  }, [])

  // const [type, setType] = useState([]);

  // const fetchTypes = () => {
  //   const link = "http://localhost:8080/api/v1/type";
  //   axios
  //     .get(link)
  //     .then(res => {
  //       setData(res.data);
  //     })
  // }
  // useEffect(() => {
  //   fetchTypes();
  // }, [])

  return (
    <div className="App">
      <header>
        <ul>
          <li>Dashboard</li>
          <li>Postings</li>
          <li>About</li>
          <li>Help</li>
        </ul>
      </header>

      <main>
        <div className="posting">
          <h1>Postings <span id="gap">-----</span> <a href="/new-post">Add new posting</a></h1>
        </div>

        <fieldset>
          <legend>Filters</legend>
          <div className="filters">
            <span className="filter">
              <select>
                <option value="">All</option>
                <option value="">Active</option>
                <option value="">Inactive</option>
              </select>
            </span>
            <span className="filter">
              <label>From</label>:<select>
                <option value="">All</option>
                <option value="">Active</option>
                <option value="">Inactive</option>
              </select>
            </span>
            <span className="filter">
              <label>To:</label> <select>
                <option value="">All</option>
                <option value="">Active</option>
                <option value="">Inactive</option>
              </select>
            </span>
          </div>
        </fieldset>

        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Description</th>
              <th>Value</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((post, id) => (
              <tr key={id}>
                <td><span>{post.date}</span></td>
                <td><span>{post.type.name}</span></td>
                <td><span>{post.description}</span></td>
                <td><span>{post.value}</span></td>
                <td><span>Edit or Remove</span></td>
              </tr>
            ))}
          </tbody>
        </table>

      </main>

    </div>
  );
}

export default App;