import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/celebrities.css";

const Celebrities = () => {
  const [celebrities, setCelebrities] = useState([]);
  const [eachCelebrity, setEachCelebrity] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/person/popular?page=2&api_key=30f97dabd23a55145e8c6e9693269e9f`
      )
      .then(res => {
        const celebs = res.data.results;
        // console.log(celebs)
        setCelebrities(celebs);
      })
      .catch(err => console.error(err));
  }, []);

  const clickCeleb = celeb => {
    setEachCelebrity(celeb);
    setIsClicked(!isClicked);
  };

  return (
    <>
      {console.log(eachCelebrity)}
      <h1>Celebrities</h1>
      <div className="flex page celebrities">
        <div className="flex-column page celeb-list">
          <ul>
            {celebrities.map((celebrity) => (
              <li key={celebrity.id}>
                <img
                  className="list-celeb"
                  src={
                    "https://image.tmdb.org/t/p/w185" + celebrity.profile_path
                  }
                />
                <a onClick={() => clickCeleb(celebrity)}>{celebrity.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="more-info">
        {!isClicked ? (<div>Select celebrity...</div>) : (
            <div>
            <img
              className="img-celeb"
              src={"https://image.tmdb.org/t/p/w185" + eachCelebrity.profile_path}
            />
            <h1>{eachCelebrity.name}</h1>
            {/* <h3>Movies:</h3>
            <ul>
                {eachCelebrity.known_for.map((movie) => (
                    <li key={movie.id}>movie.original_name</li>
                ))}
            </ul> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Celebrities;
