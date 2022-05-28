import React from "react";

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className="pd5"> 
            <input className="pa3 ba b--red bg-lightest-blue"
            type="search" placeholder="Search Robots" 
            onChange = {searchChange} />
            
        </div>
        
    );
}

export default SearchBox;