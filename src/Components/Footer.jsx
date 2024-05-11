import React from 'react';

export default function Footer() {
    return (
        <footer className='bg-slate-800 text-white p-4 mt-8'>
            <div className='max-w-7xl mx-auto flex justify-between items-center'>
                <div>
                    <p>© 2024 by James Peou. All rights reserved.</p>
                </div>
                <div className='flex space-x-4'>
                    <a href="https://www.linkedin.com/in/james-peou-661004184/" target="_blank" rel="noopener noreferrer" className='hover:text-blue-300'>
                        LinkedIn
                    </a>
                    <a href="https://github.com/catsinasippycup" target="_blank" rel="noopener noreferrer" className='hover:text-blue-300'>
                        GitHub
                    </a>
                    <a href="https://www.youtube.com/watch?v=TUoVZVTyhBU" target="_blank" rel="noopener noreferrer" className='hover:text-blue-300'>
                        Wanna Party?
                    </a>
                </div>
            </div>
        </footer>
    );
}
