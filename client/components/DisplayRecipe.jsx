import React from 'react'
import recipes from '../../data/recipes.mjs'

export default function DisplayRecipe (props) {
  const id = props.match.params.id
  const recipe = recipes.find((recipe) => {
    return recipe.id === parseInt(id)
  })
  return (
    <div>
      <div>
        <h2 className="recipeName">{recipe.name}</h2>
        {(recipe.id === 7) && <img className="recipeImage" src={'images/' + recipe.img} alt={recipe.name}></img>}
        {/* <h3>{recipe.description}</h3> */}
        <div className="recipeContainer">
          {recipe.ingredients.map((ingredient) => {
            return <img className="recipeIngImg" src={`images/${ingredient}.png`} alt={ingredient}></img>
          })}
        </div>
        <p >
          {recipe.steps.map((step, idx) => {
            return (
              <div  key={idx}>
                <>
                  {`${idx + 1}. ${step}`}
                  <br />
                </>
              </div>
            )
          })}
        </p>
      </div>
    </div>
  )
}
