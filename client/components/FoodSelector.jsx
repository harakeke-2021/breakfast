import React, { useState } from "react"
import ingredients from "../../data/ingredients.mjs"
import IngredientBoard from "./IngredientBoard"
import LinkList from "./LinkList"
import recipeData from "../../data/recipes.mjs"

const ingredientsFilterInitial = ingredients.map((ingredient) => ({
  name: ingredient,
  selected: false,
}))

export default function FoodSelector() {
  const [ingredientsFilter, setIngredientsFilter] = useState(
    ingredientsFilterInitial
  )

  const [showIngredientsBoard, toggleIngredientsBoard] = useState(true)

  const handleClick = () => {
    const ingredientsFilterLength = ingredientsFilter.filter((ingredient) => {
      return ingredient.selected === true
    }).length
    if (ingredientsFilterLength) {
      toggleIngredientsBoard(!showIngredientsBoard)
    }
  }

  return (
    <>
      { showIngredientsBoard &&
        <IngredientBoard
          ingredientsFilter={ingredientsFilter}
          setIngredientsFilter={setIngredientsFilter}
        />
      }
      <h3>Recipe List</h3>
      <button onClick={handleClick}>{showIngredientsBoard ? 'Show Recipes' : 'Show Ingredients Board'}</button>
      { !showIngredientsBoard &&
      <LinkList recipies={recipeData} />
      }
    </>
  )
}
