import React from 'react';

const Scroll =(props) => {
    return (
        // Create a scrollable component
        <div style={{overflowY:'scroll',border:'4px solid black', height:'800px'}}>
            {props.children}
        </div>
    )
};


export default Scroll;