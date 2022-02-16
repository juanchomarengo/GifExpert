import React, { useState } from 'react';
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
  
    const [inputValue, setInputValue] = useState('');

    const handleImputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(inputValue.trim().length>2){
            setCategories(newCategory => [inputValue,...newCategory])
            setInputValue('')
        }
    }

    return (
    <form onSubmit={handleSubmit}>
        <input
            placeholder='Escriba Aqui...'
            type="text"
            value={inputValue}
            onChange={handleImputChange}
        />
    </form>
  )
}

AddCategory.propTypes ={
    setCategories: PropTypes.func.isRequired
}


