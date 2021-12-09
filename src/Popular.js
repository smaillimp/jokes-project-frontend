import { useEffect, useState } from "react";

const Popular = () => {
  const [popularJokes, setPopularJokes] = useState([]);

  useEffect(() => {
    fetch(`https://jokes-project-backend.herokuapp.com/popular`)
      .then((response) => response.json())
      .then((Jokes) => {
        setPopularJokes(Jokes);
      });
  }, []);

  return (
    <section class="jokes-section">
      <article class="jokes">
        <h2 class="Popular jokes">Popular jokes</h2>
        {popularJokes.map((joke) => <p>{joke}</p>)}
      </article>
    </section>
  );
};

export default Popular;
