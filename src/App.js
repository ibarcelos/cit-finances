import React, { useState, useEffect } from "react";
import axios from "axios";

import "./globals.css";
import "./posting.css";

import { Types } from "./Types";
import { Menu } from "./Menu";


function App() {

  const currentDate = new Date();
  const today = currentDate.toISOString().split("T")[0];

  const [begginingDate, setBegginingDate] = useState("");
  const [endingDate, setEndingDate] = useState(today);
  const [data, setData] = useState([]);
  const [dateWasChangedBefore, setDateWasChangedBefore] = useState(false);



  const fetchPosts = () => {
    const postLink = "http://localhost:8080/api/v1/post";
    axios
      .get(postLink)
      .then(res => {
        setData(res.data.content);
      })
      .catch(err => {
        console.log(err);
        setData([
          {
            "date": "2022-08-05",
            "description": "ANY INCOME",
            "value": 25.66,
            "type": {
              "name": "INCOME"
            }
          },
          {
            "date": "2022-08-06",
            "description": "a description",
            "value": 26.87,
            "type": {
              "name": "INCOME"
            }
          },
          {
            "date": "2022-08-05",
            "description": "ANY OUTCOME",
            "value": 235.66,
            "type": {
              "name": "INCOME"
            }
          },
          {
            "date": "2022-08-06",
            "description": "a description",
            "value": 263.87,
            "type": {
              "name": "INCOME"
            }
          },
          {
            "date": "2022-08-06",
            "description": "ANY INCOME33",
            "value": 3445.66,
            "type": {
              "name": "INCOME"
            }
          },
          {
            "date": "2022-08-05",
            "description": "ANY INCOME2",
            "value": 23445.66,
            "type": {
              "name": "INCOME"
            }
          },
          {
            "date": "2022-08-06",
            "description": "ANY INCOME3",
            "value": 423445.66,
            "type": {
              "name": "INCOME"
            }
          }
        ]);
      });
  }


  useEffect(() => {
    fetchPosts();
  }, [])

  useEffect(() => {
    const onlyOneDateHasChanged = (begginingDate === "" && endingDate !== "") || (begginingDate !== "" && endingDate === "");
    const bothDatesHaveChanged = begginingDate !== "" && endingDate !== "";
    const datesAreEmpty = begginingDate === "" && endingDate === "";

    if (bothDatesHaveChanged || dateWasChangedBefore) {

      if (datesAreEmpty) {
        fetchPosts();
        return
      } else if (onlyOneDateHasChanged) {
        return
      }

      let url = "http://localhost:8080/api/v1/post/dated";

      axios({
        method: 'post',
        url,
        data: {
          begginingDate,
          endingDate
        }
      }).then(res => {
        setData(res.data.content)
      }).catch(err => {
        console.err(err)
      });
    }

    setDateWasChangedBefore(true)

  }, [begginingDate, endingDate])

  return (
    <div className="App">
      <header>
        <Menu active={"Postings"} />
      </header>

      <main>
        <div className="postings">
          <span>Postings</span> <span className="gap"></span> <a href="/new-post">Add new posting</a>
        </div>

        <fieldset>
          <legend>Filter</legend>
          <div className="filters">
            <span className="filter">
              <label htmlFor="type">&nbsp;</label>
              <Types />
            </span>
            <span className="filter">
              <label>From:</label>
              <input value={begginingDate} onChange={newValue => setBegginingDate(newValue.target.value)} type="date" />
            </span>
            <span className="filter">
              <label>To:</label>
              <input value={endingDate} onChange={newValue => setEndingDate(newValue.target.value)} type="date" />
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
                <td><span>Edit | Remove</span></td>
              </tr>
            ))}
          </tbody>
        </table>

      </main>

    </div>
  );
}

export default App;