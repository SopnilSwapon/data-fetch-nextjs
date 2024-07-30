 "use client"
import { CleaningServices } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MealsPage = () => {
    const [searchText, setSearchText] = useState(' ')
    const handleSearchField = () => {
    console.log(searchText)
    }
    const handleSearchFieldChange = (e) => {
        setSearchText(e.target.value)
    }
    return (
        <div>
           <h3 className='text-3xl font-bold text-center mt-6'>Choose Your Meals</h3>
           <p className='text-center'>Choose meals of your choice by searching...</p>
           <div className='flex justify-center gap-3 mt-4'>
           <TextField  sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}  
      value={searchText}
      onChange={handleSearchFieldChange}
      halfWidth name='search' id="outlined-secondary" variant="outlined" placeholder='search'/>
      <Button onClick={handleSearchField} variant="outlined">Search</Button>
           </div>
        </div>
    );
};

export default MealsPage;