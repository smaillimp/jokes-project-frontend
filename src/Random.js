import { useEffect, useState } from "react";

const Random = () => {
  const [randomJoke, setRandomJoke] = useState([]);

  useEffect(() => {
    fetch(`https://jokes-project-backend.herokuapp.com/random`)
      .then((response) => response.json())
      .then((jokes) => {
        setRandomJoke(jokes);
      });
  }, []);

  return (
    <section class="jokes-section">
      <article class="jokes">
        <h2>Random joke</h2>
        {<p>{randomJoke}</p>}
      </article>
    </section>
  );
};

export default Random;
