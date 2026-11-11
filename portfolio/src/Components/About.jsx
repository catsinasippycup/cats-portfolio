import React from 'react';

export default function About() { 
    return (
        <>
            <div id="about" className='bg-slate-700 m-20 max-w-full'>
                <div className='flex justify-end'>  {/* Align the container to the end (right) of the parent */}
                    <div className='flex flex-col items-start m-10'>  {/* Keep items aligned to start */}
                        <h1 className='text-4xl text-white mb-2'>About me</h1>
                        <p className='text-xl text-white'>
                            Computer fan since 2006 from that day on,<br/>
                            technology never cease to amaze me.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
