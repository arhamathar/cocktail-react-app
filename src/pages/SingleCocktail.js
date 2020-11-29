import React from 'react';
import { useParams } from 'react-router-dom';

function SingleCocktail() {
  const uid = useParams().uid;
  return (
    <div>
      Single Cocktail of id : {uid}
    </div>
  )
}

export default SingleCocktail
