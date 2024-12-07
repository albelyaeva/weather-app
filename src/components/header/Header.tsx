import React from 'react';
import './styles.css'
import { ReactComponent as Logo } from '../../assets/img/search.svg';
import Input from '../input/Input';
import { useDispatch } from 'react-redux';
import { changeLocation } from '../../features/weatherSlice/weatherSlice';


const Header = () => {
    const dispatch = useDispatch();
    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            dispatch(changeLocation(event.target.value));
        }
    }
    return (
        <div className='weather-header'>
            <Input placeholder={'City'} handleKeyDown={handleKeyDown}/>
            <Logo className='img-search' />
        </div>
    )
}

export default Header;