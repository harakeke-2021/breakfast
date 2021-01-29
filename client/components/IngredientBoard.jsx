import React from 'react'

export default function IngredientBoard (props) {
  const { ingredientsFilter, setIngredientsFilter } = props

  function setSelectedState ({ target }, name) {
    console.log(name)
    setIngredientsFilter(state => {
      state = state.map(ing => {
        if (ing.name === name) {
          ing.selected = !ing.selected
        }
        return ing
      })
      return state
    })
  }

  return (
    <div className="board">
      <div className="fromList">
        {ingredientsFilter.map(({ name, selected }) => (
          <div id={name} onClick={(e) => setSelectedState(e, name)} key={name} className={`ingredientCard ${selected ? 'selected' : ''}`}>
            <img className="ingImg" src={`/images/${name}.png`} alt=""/>
          </div>
        ))}
      </div>
    </div>
  )
}
