// React must be in scope while using JSX
import React from 'react';

// Destructuring by declaring these 3 variables in the parameter
const Card = ({name,email, id}) => {
    return (
        // We are only returning one element that is this div
        <div className = 'tc bg-light-green dib be3 pa3 ma2 grow bw2 shadow-5'>
            <img alt ="_robots" src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2> 
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;

