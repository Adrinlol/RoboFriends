import React from 'react';

const SearchBox = ({searchfield,searchChange}) => {
    return (
        <div className ='p2'>
            <input 
            className='pa3 ba b-green bg-lightest-green '
            type ='search' 
            placeholder ='Search for Robots'
            onChange = {searchChange} 
            />
        </div>
    );
}


export default SearchBox;








