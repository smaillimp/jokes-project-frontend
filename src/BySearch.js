import { useState } from "react";

const BySearch = () => {
  const [jokesBySearch, setJokesBySearch] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const extacJokes = (e) => {
    e.preventDefault();
    fetch(
      `https://jokes-project-backend.herokuapp.com/by-search?text=${searchTerm}`
    )
      .then((response) => response.json())
      .then((Jokes) => {
        setJokesBySearch(Jokes);
      });
  };

//   const allJokes = jokesBySearch.map((joke) => {
//     return <p>{joke}</p>;
//   });

  return (
    <section class="jokes-section">
      <form onSubmit={extacJokes}>
        <label for="search"> jokes:</label>
        <input
          id="search"
          type="text"
          placeholder="p.g. Java"
          onChange={(e) => setSearchTerm(e.target.value)}>
        </input>
      </form>
      <article class="jokes">
        <h2 class="jokes-title">Serched jokes</h2>
        {jokesBySearch.map((joke) => <p>{joke}</p>)}
      </article>
    </section>
  );
};

export default BySearch;
