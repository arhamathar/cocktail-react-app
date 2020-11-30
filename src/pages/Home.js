import React, { useState, useEffect } from 'react';
import SingleCocktail from './SingleCocktail';

function Home() {
  const [loading, setLoading] = useState(false);
  const [loadedCocktails, setLoadedCocktails] = useState([]);

  useEffect(() => {
    setLoading(true);
    const sendRequest = async () => {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`
        );
        const responseData = await response.json();
        console.log(responseData.drinks);
        setLoadedCocktails(responseData.drinks);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    sendRequest();
  }, []);

  return (
    <main>
      <SingleCocktail
        loadedCocktails={loadedCocktails}
        loading={loading}
      />
    </main>
  )
}

export default Home
