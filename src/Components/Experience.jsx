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
                'Integrated SQL Server into an existing asset manager tracker system, enabling efficient data management and retrieval.',
                'Developed a custom API for seamless communication, allowing the asset manager tracker to fetch specific table rows and display last updated timestamps.',
                'Program was built using Python, PyQT, Pyodbc and a database handled in SQL Server with Agile principles.'
            ]
        },
        {
            id: 2,
            title: 'Software Engineer Intern',
            company: 'Raytheon Technologies',
            period: 'May 2022 - Aug 2022',
            details: [
                'Developed a function checker that would replace and fix C & C++ functions with vulnerabilities.',
                'Implemented user-friendly script execution for source code analysis. Generated fixed versions with highlighted red changes, presented side-by-side in BeyondCompare.',
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
