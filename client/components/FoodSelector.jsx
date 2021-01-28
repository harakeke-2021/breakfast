import React, { useState } from 'react'

// import IngredientBoard from './IngredientBoard'

import ingredients from '../../data/ingredients.mjs'
import IngredientBoard from './IngredientBoard'
// import recipes from '../../data/recipes.mjs'

const ingredientsFilterInitial = ingredients.map(ingredient => ({ name: ingredient, selected: false }))

export default function FoodSelector () {
  const [ingredientsFilter, setIngredientsFilter] = useState(ingredientsFilterInitial)

  return (
    <>
      <IngredientBoard
        ingredientsFilter={ingredientsFilter}
        setIngredientsFilter={setIngredientsFilter}
      />
    </>
  )
}
