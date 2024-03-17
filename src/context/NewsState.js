import React from 'react'
import NewsContext from './NewsContext'

const NewsState = () => {
    const [search, setSearch] = useState('')
    setSearch=document.getElementById("searchID").value
    return (
        <NewsContext.Provider value={{search}}>
            {props.children}
        </NewsContext.Provider>
    )
}

export default NewsState