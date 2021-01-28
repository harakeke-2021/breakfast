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
      <TestGrid/>
      <IngredientBoard
        ingredientsFilter={ingredientsFilter}
        setIngredientsFilter={setIngredientsFilter}
      />
    </>
  )
}

function TestGrid () {
  return (
    <div className="board">
      <div className="fromList">
        <div className="ingredientCard"><img src="/images/avocado.png" alt=""/></div>
        <div className="ingredientCard"><img src="/images/bacon.png" alt=""/></div>
        <div className="ingredientCard"><img src="/images/berries.png" alt=""/></div>
        <div className="ingredientCard"><img src="/images/bread.png" alt=""/></div>
        <div className="ingredientCard"><img src="/images/cheese.png" alt=""/></div>
        <div className="ingredientCard"><img src="/images/milk.png" alt=""/></div>
        <div className="ingredientCard"><img src="/images/mushroom.png" alt=""/></div>
        <div className="ingredientCard"><img src="/images/rice.png" alt=""/></div>
        <div className="ingredientCard"><img src="/images/sausage.png" alt=""/></div>
        <div className="ingredientCard"><img src="/images/tomato.png" alt=""/></div>
        <div className="ingredientCard"><img src="/images/yogurt.png" alt=""/></div>
        <div className="ingredientCard"><img src="/images/avocado.png" alt=""/></div>
      </div>
    </div>

  )
}
