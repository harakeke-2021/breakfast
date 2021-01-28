import React from 'react'
import recipesData from '../../data/recipes.mjs'
import { Link } from 'react-router-dom'

function LinkList ({ data }) {
  // const recipies = recipesData
  return (
    <div>
      {
        recipesData.map((recipe, index) => {
          return <li key={index}> <Link to={`/recipe/${recipe.id}`}>{recipe.name} </Link></li>
        }
        )}
    </div>

  )
}

export default LinkList
