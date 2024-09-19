import React from 'react';
import Foodlist from './Foodlist';
import "./Foodstyle.css";
export default function Fooditem({fooddata}){


    return(
                <div className="food-grid-container">
                    
                    {fooddata.map((food)=>(
                <Foodlist key={food.id} food={food}/>
      
        
      ))}
                    
                </div>
    )
};