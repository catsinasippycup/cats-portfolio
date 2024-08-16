import React from 'react';

export default function Experience() {
    // Example data for experience entries
    const experiences = [
        {
            id: 1,
            title: 'Software Engineer Intern ',
            company: 'Raytheon Technologies',
            period: 'May 2023 - Aug 2023',
            details: [
                'Integrated SQL Server into an existing asset manager tracker system, reducing data retrieval time by 30%.',
                'Developed a custom API for seamless communication, improving data access efficiency by 25%.',
                'Utilized Python, PyQT, Pyodbc, and SQL Server, following Agile principles to ensure timely and efficient project completion.'
            ]
        },
        {
            id: 2,
            title: 'Software Engineer Intern',
            company: 'Raytheon Technologies',
            period: 'May 2022 - Aug 2022',
            details: [
                'Developed a function checker to replace and fix C & C++ functions with vulnerabilities, enhancing code security by 40%.',
                'Implemented user-friendly script execution for source code analysis. Generated fixed versions with highlighted red changes, presented side-by-side in BeyondCompare.',
                'Generated fixed versions with highlighted changes, presented side-by-side in BeyondCompare, resulting in a 50% reduction in code review time.',
                'Function checker was built using the BeyondCompare API, the Understand API and written in Perl.'
            ]
        }
    ];

    return (
        <>
            <div id ="experience" className='flex items-center justify-center h-screen'> {/* Centering the container */}
                <div className='bg-slate-700 p-20 max-w-4xl rounded-lg shadow-lg'>
                    <h1 className='text-4xl text-white text-center mb-10'>Experience</h1>
                    {experiences.map((exp) => (
                        <div key={exp.id} className="mt-5">
                            <h2 className='text-3xl text-white'>{exp.title} at {exp.company}</h2>
                            <p className='text-white'>{exp.period}</p>
                            <ul className='list-disc list-inside text-white'>
                                {exp.details.map((detail, index) => (
                                    <li key={index}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
