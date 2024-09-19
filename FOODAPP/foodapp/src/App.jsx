import Search from "./Components/Search"
import React , {useState} from 'react'
import Fooditem from "./Components/Fooditem"

function App() {
 const [fooddata, setFoodData] = useState([])

  return (
    <div className="App">
      <Search  fooddata={fooddata}  setFoodData={setFoodData}/>
    <Fooditem  fooddata={fooddata}/>
    </div>
  )
}

export default App
