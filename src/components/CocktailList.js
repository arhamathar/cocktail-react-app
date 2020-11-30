import React from 'react';
import CocktailItem from './CocktailItem';

function CocktailList(props) {
  if (props.loading) {
    return <h2 className="section-title">Loading...</h2>
  }

  if (props.loadedCocktails.length < 1) {
    return <h2 className="section-title">No cocktail match found.</h2>
  }

  return (
    <section className="section">
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-center">
        {props.loadedCocktails.map((cocktail) => {
          return (
            <CocktailItem
              key={cocktail.idDrink}
              id={cocktail.idDrink}
              name={cocktail.strDrink}
              image={cocktail.strDrinkThumb}
              info={cocktail.strAlcoholic}
              glass={cocktail.strGlass}
            />
          );
        })}
      </div>
    </section>
  );
}

export default CocktailList;
