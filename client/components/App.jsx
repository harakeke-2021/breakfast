import React from 'react'
import { Route } from 'react-router-dom'

import Header from './Header'
import DisplayRecipe from './DisplayRecipe'
import FoodSelector from './FoodSelector'

function App () {
  return (
    <div className="app">
      <Route path='/' component={Header} />
      {/* Route these two "pages" */}
      <Route exact path='/' component={FoodSelector}/>
      <Route exact path='/recipe/:id' component={DisplayRecipe} />

    </div>
  )
}

export default App
