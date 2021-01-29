import React from 'react'
import recipesData from '../../data/recipes.mjs'
import { Link } from 'react-router-dom'

function LinkList(props) {
  const { ingredientsFilter } = props
  const selectedIngredients = ingredientsFilter
    .filter(i => i.selected)
    .map(i => i.name)

  const recipesDisplayed = recipesData.filter(recipe => {
    const recipeHasEverySelectedIngredient = selectedIngredients.every(ingredient => {
      return recipe.ingredients.includes(ingredient)
    })
    return recipeHasEverySelectedIngredient
  })

  return (
    <div>
      <h3>Recipe List</h3>
      {
        recipesDisplayed.length
          ? recipesDisplayed.map((recipe, index) => {
            return <li key={index}className= "recipeLink"> <Link to={`/recipe/${recipe.id}`}>{recipe.name} </Link></li>
          })
          : 'No Recipes Found'
      }
    </div>

  )
}

export default LinkList
