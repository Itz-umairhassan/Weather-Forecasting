import React, { useState } from 'react'
import Navbar from '../Modules/Navbar';
import { UserContext } from './UserContext';

const SearchContext = (props) => {
    const [search, setSearch] = useState("");
    const set_search= (value)=>{
        setSearch(value);
    }
    return (
        <UserContext.Provider value={{search, set_search}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default SearchContext
