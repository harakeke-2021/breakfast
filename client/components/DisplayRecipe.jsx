import React from 'react'
import recipes from '../../data/recipes.mjs'

export default function DisplayRecipe(props) {
  const id = props.match.params.id
  const recipe = recipes.find((recipe) => {
    return recipe.id === parseInt(id)
  })
  return (
    <div>
      <h2>{recipe.name}</h2>
      <img src={'images/' + recipe.img} alt={recipe.name}></img>
      <h3>{recipe.description}</h3>
      <h4>Ingredients</h4>
      <ul>
        {recipe.ingredients.map(ingredient => {
          return (
            <li>{ingredient[0].toUpperCase() + ingredient.slice(1)}</li>
          )
        })}
      </ul>
      <p>{recipe.steps}</p>
    </div>
  )
}
