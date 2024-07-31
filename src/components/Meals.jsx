"use client"
import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const Meals = () => {
    const [searchText, setSearchText] = useState('')
    const handleSearch = event => {
        console.log("from f" , searchText)
}
const handleSetSearchText = (e) => {
    setSearchText(e.target.value)
}
    return (
        <div className='flex justify-center gap-3 mt-4'>
        <TextField  sx={{
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center',
   }}  
   onChange={handleSetSearchText}
   halfWidth name='search' id="outlined-secondary" variant="outlined" placeholder='search'/>
   <Button onClick={handleSearch} variant="outlined">Search</Button>
        </div>
    );
};

export default Meals;