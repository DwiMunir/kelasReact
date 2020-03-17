import React from 'react'

const SearchBar = (props) => {
    return (
        <div className = "container">
            <div className ="row justify-content-center mt-3">
                
                <input 
                    className   = " form-control mr-sm-2 text" 
                    type        = " search" 
                    placeholder = " Cari Surah" 
                    aria-label  = " Search" 
                    onChange    = {props.onHandleInput}
                    value       = {props.searchValue}
                    style       = 
                {{  
                    width : '40rem'
                }}
                />
                
            </div>
        </div>
    )
}

export default SearchBar