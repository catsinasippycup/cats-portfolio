import React from 'react';

export default function Projects() {
    // Dummy data array for projects
    const projects = [
        {
            id: 1,
            title: 'MIRACLE MEETS',
            description: 'A web-based score tracking application for the game beatmania IIDX.',
            link: 'http://miraclemeets.com'
        },
        {
            id: 2,
            title: 'Co-op Tetris',
            description: 'Two player Tetris like game built from Python using the Pygame and Numpy library.',
            link: 'https://github.com/lulzsun/Coop-Tetris'
        },
    ];

    return (
        <>
            <div id="projects" className='bg-slate-700 m-20 max-w-full'>
                <div className='grid justify-items-start m-10'>  {/* Adjust alignment to start */}
                    <h1 className='text-4xl text-white mt-10 mb-5'>Projects</h1>
                    {projects.map(project => (
                        <div key={project.id} className="mb-5 text-left w-full"> {/* Ensure all elements start from the same point */}
                            <h2 className='text-3xl text-white'>{project.title}</h2>
                            <p className='text-white'>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className='text-blue-300 hover:text-blue-500'>View Project</a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
