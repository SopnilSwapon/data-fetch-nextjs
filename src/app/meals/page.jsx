 "use client"
import Meals from '@/components/Meals';
import React from 'react';

const MealsPage = () => {
    return (
        <div>
           <h3 className='text-3xl font-bold text-center mt-6'>Choose Your Meals</h3>
           <p className='text-center'>Choose meals of your choice by searching...</p>
          <Meals></Meals>
        </div>
    );
};

export default MealsPage;