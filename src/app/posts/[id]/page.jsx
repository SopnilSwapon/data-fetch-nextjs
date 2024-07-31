import { ClientPageRoot } from 'next/dist/client/components/client-page';
import React from 'react';

export const generateMetadata = async ({params}) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const data = await res.json();
    return {
        title: {
            absolute: `${data.title}`
        } ,
        description: data.body
    }
}

const postDetailsPage = async ({params}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const {title, body} = await res.json();
    console.log(params.id
    
    )
    return (
        <div>
            <h2 className='text-xl mb-1'>{title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default postDetailsPage;