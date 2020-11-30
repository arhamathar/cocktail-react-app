import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function SingleCocktail() {
  const uid = useParams().uid;
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    const sendRequest = async () => {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${uid}`
        );

        const data = await response.json();
        if (data.drinks) {
          setCocktail(data.drinks);
          console.log(data.drinks);
        } else {
          setCocktail(null);
        }

      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    }
    sendRequest();
  }, [uid]);

  if (loading) {
    return <h2 className="section-title">Loading...</h2>
  }

  if (!cocktail) {
    return <h2 className="section-title">No cocktail to display.</h2>
  }

  const {
    strDrink: name,
    strCategory: category,
    strAlcoholic: info,
    strDrinkThumb: image,
    strGlass: glass,
    strInstructions: instructions
  } = cocktail[0];

  const ingredients = [
    cocktail[0].strIngredient1,
    cocktail[0].strIngredient2,
    cocktail[0].strIngredient3,
    cocktail[0].strIngredient4,
    cocktail[0].strIngredient5
  ];

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn ">Back Home</Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>Name: &nbsp;{name}</p>
          <p>Info: &nbsp;&nbsp;&nbsp;&nbsp;{info}</p>
          <p>Glass: &nbsp;&nbsp;{glass}</p>
          <p>Category: &nbsp;&nbsp;{category}</p>
          <p>
            Ingredients : &nbsp;&nbsp;{ingredients.map((ingredient, id) => {
            return ingredient ? <span key={id}>{ingredient}, </span> : null
          })}
          </p>
          <p>Instructions: &nbsp;&nbsp;{instructions}</p>
        </div>
      </div>
    </section >
  );
}

export default SingleCocktail;
