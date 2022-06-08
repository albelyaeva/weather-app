import React from 'react';

const Input = ( {placeholder, handleKeyDown} : {placeholder: string, handleKeyDown: any}) => {

    return <input type="search" onKeyDown={handleKeyDown} placeholder={placeholder} />
}

export default Input;