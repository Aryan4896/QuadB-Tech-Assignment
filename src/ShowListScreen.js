import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ShowListScreen = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows?page=0&pageSize=2")
      .then((response) => response.json())
      .then((showData) => {
        setShows(showData);
      })
      .catch((error) => {
        console.log("Failed to retrieve show data from the API", error);
      });
  }, []);

  const parseHTML = (html) => {
    const parser = new DOMParser();
    const parsedDocument = parser.parseFromString(html, "text/html");
    return parsedDocument.body.textContent;
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center", marginBottom: "50px" }}>Show List</h1>
      {shows.map((show) => (
        <div className="card mb-3" key={show.id}>
          <div className="row g-0">
            <div className="col-md-4 img-holder">
              <img
                src={show.image.medium}
                className="img-fluid"
                alt={show.name}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="heading-holder">
                  <h2 className="card-title">{show.name}</h2>
                </div>
                <p className="card-text">{parseHTML(show.summary)}</p>
                <div className="btn-holder">
                  <Link to={`/show/${show.id}`} className="btn btn-secondary">
                    Show Full Screen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowListScreen;
