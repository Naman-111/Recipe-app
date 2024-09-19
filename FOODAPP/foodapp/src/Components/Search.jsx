// import React,{useState,useEffect} from 'react';

// const URL= "https://api.spoonacular.com/recipes/complexSearch"
// const API_KEY ="046999fe92384cfb803b4893af879f3c"

// export default function Search({fooddata,setFoodData}){
//  const[query,setQuery] = useState('')

//  const handleChange=(e)=>{
//     setQuery(e.target.value)
//  }
    

//     useEffect(()=>{
//         async function fetchfoo(){
//         const res =  await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
//         const data =  await res.json()
//         console.log(data.results)
//         setFoodData(data.results)
//        }
//        fetchfoo()
//     },[query])
 
//     return(
//         <div>
//             <input type='text' value={query} onChange={handleChange}/>
//             <button>Search</button>
//         </div>
//     )
// }


import React, { useState, useEffect } from 'react';

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "046999fe92384cfb803b4893af879f3c";

export default function Search({ fooddata, setFoodData }) {
  const [query, setQuery] = useState('');
  const [searchTrigger, setSearchTrigger] = useState(false); // State to trigger search

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    setSearchTrigger(true); // Trigger the search
  };

  useEffect(() => {
    if (searchTrigger) {
      async function fetchFoo() {
        const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
        const data = await res.json();
        console.log(data.results);
        setFoodData(data.results);
        setSearchTrigger(false); // Reset the trigger after fetching
      }
      fetchFoo();
    }
  }, [searchTrigger, query, setFoodData]);

  return (
    <div>
      <input type='text' value={query} onChange={handleChange} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
 