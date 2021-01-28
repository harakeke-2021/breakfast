import React from 'react'

import Header from './Header'
import DisplayRecipie from './DisplayRecipie'
import FoodSelector from './FoodSelector'

function App () {
  return (
    <div className="app">
      <Header />
      {/* Route these two "pages" */}
      <FoodSelector />
      <DisplayRecipie />

    </div>
  )
}

export default App
