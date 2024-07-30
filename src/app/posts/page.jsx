import Link from 'next/link';
import React from 'react';

const PostsPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=30');
    const posts = await res.json();
    console.log(posts);

    return (
        <>
        <h2 className='text-4xl font-bold text-center mt-5'>Our All Posts </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
           {
            posts.map(({id, title, body}) =>
                 <div key={id} className='bg-gray-300  rounded p-2'>
                    <h2 className='text-xl font-bold'>{title}</h2>
                    <p>{body}</p>
                    <br />
                    <Link href={`posts/${id}`} className='bg-cyan-400 px-3 py-2 rounded'>SEE DETAILS</Link>
                 </div>)
           }
        </div>
        </>
    );
};

export default PostsPage;