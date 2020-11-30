import React from 'react';
import { Link } from 'react-router-dom';

function CocktailItem(props) {
  return (
    <article className="cocktail">
      <div>
        <img src={props.image} alt={props.name} />
      </div>
      <div className="cocktail-footer">
        <h3>{props.name}</h3>
        <h4>{props.glass}</h4>
        <p>{props.info}</p>
        <Link to={`/cocktail/${props.id}`} className="btn btn-details">Details</Link>
      </div>
    </article >
  )
}

export default CocktailItem;
