import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const navLinks =
        [
            {
                title: 'HOME',
                path: '/home'
            },
            {
                title: 'About',
                path: '/about'
            },
            {
                title: 'Contact',
                path: '/contact'
            },
            {
                title: 'Services',
                path: '/services'
            },
            {
                title: 'Posts',
                path: '/posts'
            },
            {
                title: 'Meals',
                path: '/meals'
            }
        ]
    return (
        <div className='flex justify-between bg-green-500 font-bold p-3'>
            <h2 className='text-2xl'>LOGO</h2>
            <ul className='flex gap-5'>
             {
                navLinks.map(link => <Link href={link.path} key={link.path}>{link.title}</Link>)
             }
            </ul>
        </div>
    );
};

export default Navbar;