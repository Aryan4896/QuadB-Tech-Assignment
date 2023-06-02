import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowSummaryScreen = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((showData) => {
        setShow(showData);
      })
      .catch((error) => {
        console.log("Failed to retrieve show data from the API", error);
      });
  }, [id]);

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1 style={{ textAlign: "center", marginBottom: "50px" }}>
        {show.name} Summary
      </h1>
      <div className="card">
        <div className="row g-0">
          <div className="col-md-4 img-holder">
            <img
              src={show.image.medium}
              className="img-fluid"
              alt={show.name}
              style={{ height: "100%" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="heading-holder">
                <h2 className="card-title">{show.name}</h2>
              </div>
              <div dangerouslySetInnerHTML={{ __html: show.summary }} />
              <p>Country: {show.network.country.name}</p>
              <p>
                Official Site:{" "}
                <a href={show.officialSite}>{show.officialSite}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowSummaryScreen;
