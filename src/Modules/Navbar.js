import React, { useContext, useState } from 'react'
import { UserContext } from '../contexts/UserContext';

const Navbar = () => {

    const [val, setval] = useState("");
    let context = useContext(UserContext);

    const change_handle = (event) => {
        setval(event.target.value)
    }

    const submit_handler = async (event) => {
        event.preventDefault();
        context.set_search(val);
    }
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand">Navbar</a>
                <form onSubmit={e => submit_handler(e)} className="d-flex input-group w-auto">
                    <input
                        type="search"
                        className="form-control rounded"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="search-addon"
                        onChange={e => change_handle(e)}
                    />
                    <span className="input-group-text border-0" id="search-addon">
                        <button>Serach</button>
                    </span>
                </form>
            </div>
        </nav>
    )
}

export default Navbar
