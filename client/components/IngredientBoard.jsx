import React from 'react'

export default function IngredientBoard (props) {
  const { ingredientsFilter, setIngredientsFilter } = props

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

  return (
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
  )
}
