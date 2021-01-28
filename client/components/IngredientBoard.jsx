import React from 'react'

export default function IngredientBoard (props) {
  const { ingredientsFilter, setIngredientsFilter } = props

  function handleIngredientChange (e) {
    console.log(`trying to set ${e.target.name} to ${e.target.checked ? 'true' : 'false'}`)
    setIngredientsFilter(state => {
      const mutableIngredient = state.find(i => i.name === e.target.name)
      console.log(mutableIngredient)
      mutableIngredient.selected = false
      return state
    })
  }

  return (
    <div>
      <form>
        {ingredientsFilter.map((ing) => {
          console.log(`${ing.name}: ${ing.selected}`)
          return (
            <div key={ing.name}>
              <label>{ing.name} {ing.selected ? 'true' : 'false'}</label>
              <input
                type="checkbox"
                name={ing.name}
                checked={ing.selected}
                onChange={(e) => handleIngredientChange(e)}
              />
            </div>
          )
        })}
      </form>
    </div>
  )
}
