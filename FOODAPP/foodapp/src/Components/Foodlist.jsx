import React from 'react';

export default function Foodlist({food}){

    return(
        <div  className="food-item">
            <img src={food.image} alt=''/>
                <li key={food.id}>{food.title}</li>
              
        </div>
    )
}