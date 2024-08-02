"use client"
import { Avatar, Box, Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

const Meals = () => {
    const [searchText, setSearchText] = useState('rice');
    const [meals, setMeals] = useState([]);
    const handleSearch = async () => {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`);
        const data = await res.json();
        setMeals(data.meals)
    }


    const handleSetSearchText = (e) => {
        setSearchText(e.target.value)
    }
    useEffect(() => {
        handleSearch();
    }, [])
    return (
        <div>
            <div className='flex justify-center gap-3 mt-4'>
                <TextField sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                    onChange={handleSetSearchText}
                    halfWidth name='search' id="outlined-secondary" variant="outlined" placeholder='search' />
                <Button onClick={handleSearch} variant="contained" color='primary'>Search</Button>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    meals?.length ? <>
                        {
                            meals?.map(meal =>
                                <div key={meal.idMeal}>
                                    <Card sx={{ m: 2, height: 580 }}>
                                        <Box sx={{ p: 2 }}>
                                            <CardMedia
                                                sx={{ height: 200, borderRadius: 1 }}
                                                image={meal.strMealThumb}
                                                title={`${meal.strMeal}`}
                                            />
                                        </Box>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {meal.strMeal}
                                            </Typography>
                                            <Typography sx={{ fontSize: 16 }} variant="body2" color="text.secondary">
                                                {meal.strInstructions.slice(0, 500)}
                                            </Typography>
                                        </CardContent>
                                        <CardActions sx={{ justifyContent: 'end', }}>
                                            <Button variant='contained' color='success' size="small">details</Button>
                                            <Button variant='contained' size="small">Buy</Button>
                                        </CardActions>
                                    </Card>
                                </div>)
                        }
                    </>
                        :
                        <Typography className='col-span-3' variant='h2' align='center' sx={{ mt: 5 }}>Not Found</Typography>
                }
            </div>
        </div>
    );
};

export default Meals;