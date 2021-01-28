import React, { useState } from 'react'

// import IngredientBoard from './IngredientBoard'

import ingredients from '../../data/ingredients.mjs'
// import recipes from '../../data/recipes.mjs'

const ingredientsFilterInitial = ingredients.map(ingredient => ({ name: ingredient, selected: true }))

export default function FoodSelector () {
  const [ingredientsFilter, setIngredientsFilter] = useState(ingredientsFilterInitial)

  return (
    <>
      <ul>
        {ingredientsFilter.map(ing => (
          <>
            <li>{ing.name}: {ing.selected ? 'true' : 'false'}</li>
            <input
              type="checkbox"
              name={ing.name}
              checked={ing.selected}
              onChange={updateCheckbox(ing)}
            />
          </>
        ))}
      </ul>
    </>
  )

  function updateCheckbox (ing) {
    return (e) => setIngredientsFilter((state) => {
      state = state.map(a => {
        if (a.name === ing.name) {
          a.selected = !a.selected
        }
        return a
      })
      return state
    })
  }
}
