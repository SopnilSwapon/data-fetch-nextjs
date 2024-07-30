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
            posts.map(post =>
                 <div key={post.id} className='bg-gray-500 rounded p-2'>
                    <h2 className='text-xl font-bold'>{post.title}</h2>
                    <p>{post.body}</p>
                 </div>)
           }
        </div>
        </>
    );
};

export default PostsPage;