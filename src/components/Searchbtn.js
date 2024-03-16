import React, { useState } from 'react'
import NewsContext from '../context/NewsContext'
import { useContext } from 'react'

const Searchbtn = () => {
    const context = useContext(NewsContext)
    const {search}=context
    
    return (
        <div>
            <form className="searchClass d-flex" role="search">
                <input id="searchID" className="form-control me-2" type="text" placeholder="Search" aria-label="Search" onChange={(e) => setSearch(e.target.value)} />
                {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
            </form>
        </div>
    )
}

export default Searchbtn