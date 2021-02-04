import React from 'react';

const Search = (props) => (
    <div className="search-bar">
        <input type="text" onChange = {(event)=> props.handleChange(event.target.value)}/>
        <button className="btn" onClick = {(event)=> props.handleClick(event)}>Search</button>
    </div>
    
  
);


export default Search;