import React, { useState, useEffect } from 'react';
import CocktailLists from '../components/CocktailList';

function Home() {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('a');
  const [loadedCocktails, setLoadedCocktails] = useState([]);

  useEffect(() => {
    setLoading(true);
    const sendRequest = async () => {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
        );
        const responseData = await response.json();
        if (responseData.drinks) {
          setLoadedCocktails(responseData.drinks);
        }
        else {
          setLoadedCocktails([]);
        }
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    sendRequest();
  }, []);

  return (
    <main>
      <CocktailLists
        loadedCocktails={loadedCocktails}
        loading={loading}
      />
    </main>
  )
}

export default Home
