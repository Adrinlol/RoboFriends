import React from 'react';
import Card from './Card';

// CardList has access to robots, so we can destructure it
// Pure function that only takes robots as an input
const CardList = ({robots}) => {
    
    const cardArray = robots.map((user,i) => {
        // Use map to return multiple components
        return (
        <Card 
        // Assign using the unique key
        key={i} 
        id= {robots[i].id} 
        name={robots[i].name} 
        email= {robots[i].email}
        />
        );

    })

    return (
        <div>
          {cardArray}
        </div>
    );
}

export default CardList;




