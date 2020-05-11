import React, { useState, useEffect} from 'react'

const Search = ({search}) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchValue = (e) => {
        setSearchValue(e.target.value);
        console.log(e.target.value)
        search(searchValue);
    };
 
    return (
        <div>
            <input className="search-input" type="text" placeholder="Search.." onChange={handleSearchValue} />
        </div>
    )
}

export default Search
