import React from 'react';

export default function ContactMe() {
    return (
        <div id="contact" className='bg-slate-700 p-10 m-20 max-w-lg mx-auto rounded-lg'>
            <h1 className='text-4xl text-white mb-6 text-center'>Contact Me</h1>
            <div className='text-center'>
                <a href="mailto:jbpeou@gmail.com"
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer transition duration-300 ease-in-out transform hover:scale-105'>
                    Email
                </a>
            </div>
        </div>
    );
}
