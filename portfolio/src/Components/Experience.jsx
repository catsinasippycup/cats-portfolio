import React from 'react';

export default function Experience() {
    const experiences = [
        {
            id: 3,
            title: 'IT Support Specialist',
            company: 'Taco Bell',
            period: 'Sep 2024 - Present',
            details: [
                'Provide Tier 1 and Tier 2 support in a 24/7 operation serving 7,000+ restaurant locations. Triage and resolve 120+ weekly incidents and service requests in ServiceNow while meeting SLA commitments.',
                'Troubleshoot Windows, Linux, and application issues with command-line diagnostics, Datadog, Docker logs, MongoDB queries, and custom scripts.',
                'Coordinate with engineering, networking, and vendor teams during outages and document troubleshooting steps and known fixes in ServiceNow.'
            ]
        },
        {
            id: 1,
            title: 'Software Engineer Intern',
            company: 'Raytheon Technologies',
            period: 'Summers 2022 and 2023',
            details: [
                'Integrated SQL Server into an asset-management application using Python, PyQt, and PyODBC, reducing data retrieval time by 30%. Built a REST API for retrieving and updating records, improving data access efficiency by 25%.',
                'Built a Perl tool using SciTools Understand and Beyond Compare to flag and replace vulnerable C and C++ functions, increasing analysis speed by 20%.',
                'Generated side-by-side comparisons that highlighted code changes, reducing manual review time by 50%.'
            ]
        }
    ];

    return (
        <>
            <div id ="experience" className='flex justify-center px-4 py-12'>
                <div className='bg-slate-700 w-full max-w-4xl p-6 sm:p-12 rounded-lg shadow-lg'>
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
