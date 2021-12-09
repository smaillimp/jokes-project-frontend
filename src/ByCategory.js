import { useEffect, useState } from "react";

const ByCategory = () => {
  const [categoryNames, setCategoryNames] = useState([]);
  const [jokes, setjokes] = useState([]);
  useEffect(() => {
    fetch(`https://jokes-project-backend.herokuapp.com/categories`)
      .then((response) => response.json())
      .then((categories) => {
        setCategoryNames(categories);
      });
  }, []);

  const getJokesByCategory = (category) => {
    fetch(
      `https://jokes-project-backend.herokuapp.com/by-category?name=${encodeURIComponent(
        category
      )}`
    )
      .then((response) => response.json())
      .then((jokesByCategory) => {
        setjokes(jokesByCategory);
      });
  };

//   const allCategoryNames = categoryNames.map((category) => {
//     return (
//       <button onClick={() => getJokesByCategory(category)}>{category}</button>
//     );
//   });

  return (
    <section class="jokes-section">
      <div class="categories-buttons">
        {categoryNames.map((category) => {
          return (
            <button onClick={() => getJokesByCategory(category)}>
              {category}
            </button>
          );
        })}
      </div>
      <article class="jokes">
        <h2 class="jokes-title">Jokes by category</h2>
        {jokes.map((joke) => (
          <p>{joke}</p>
        ))}
      </article>
    </section>
  );
};

export default ByCategory;
