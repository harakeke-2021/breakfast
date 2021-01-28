import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

export default function IngredientBoard (props) {
  const { ingredientsFilter, setIngredientsFilter } = props

  return (
    <>
      <DragDropContext>
        <div className="board" >
          <Droppable droppableId="fromList">
            {(provided) => (
              <div className="fromList" {...provided.droppableProps} ref={provided.innerRef}>
                {ingredientsFilter.map(i => (
                  <Draggable key={i.name}>
                    {(provided) => (
                      <div key={i.name} className="ingredientCard">
                        <h3>{i.name}</h3>
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="toList">
            <div className="toList">

            </div>
          </Droppable>
        </div>
      </DragDropContext>
    </>
  )
}
