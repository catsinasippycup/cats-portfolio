import React, { useState } from 'react';
import { BsLinkedin, BsGithub, BsInfoCircleFill } from 'react-icons/bs';
import HeroPic from '../assets/me.png';

export default function Hero() {
    const [showResume, setShowResume] = useState(false); // State to control resume display

    const toggleResume = () => setShowResume(!showResume); // Function to toggle the resume display

    return (
        <section className='flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white'>
            <div className='lg:w-1/3 ssm:w-fit'>
                <p className='text-4xl mb-5 text-slate-300'>Hey! my name is</p>
                <h1 className='text-6xl'>James Peou</h1>
                <p className='mt-10 text-xl'>
                    Computer Science Graduate from CSUF.
                </p>
                <div className='flex mt-5 space-x-4 cursor-pointer'>
                    <a href="https://www.linkedin.com/in/james-peou-661004184/" target="_blank" rel="noopener noreferrer"
                        className='transition duration-500 ease-in-out text-white hover:bg-slate-600 rounded-full'>
                        <BsLinkedin size={40} />
                    </a>
                    <a href="https://github.com/catsinasippycup" target="_blank" rel="noopener noreferrer"
                        className='transition duration-500 ease-in-out text-white hover:bg-slate-600 rounded-full'>
                        <BsGithub size={40} />
                    </a>
                    <button onClick={toggleResume}
                        className='transition duration-500 ease-in-out text-white hover:bg-slate-600 rounded-full'>
                        <BsInfoCircleFill size={40} />
                    </button>
                </div>
            </div>
            <div>
                <img src={HeroPic} alt="" width={200} height={200} className='rounded-2xl border-4 border-white'/>
            </div>
            <div className={`resume-viewer ${showResume ? 'open' : ''}`} aria-hidden={!showResume}>
                <iframe
                    src="https://drive.google.com/file/d/14sZ-cOgMLUmZo5-Mp9awc9X-5t6PjQ3K/preview"
                    frameborder="0"
                    style={{ width: '100%', height: '100%', border: 'none' }}>
                </iframe>
                <button onClick={toggleResume} style={{
                    position: 'absolute', top: '10px', left: '10px', fontSize: '24px', color: 'white',
                    backgroundColor: 'rgba(50, 50, 50, 0.8)', padding: '10px 15px', borderRadius: '10px',
                    cursor: 'pointer'
                }}>
                    Close
                </button>
            </div>

            <style jsx>{`
                .resume-viewer {
                    position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
                    width: 80%; height: 80%; background-color: rgba(0, 0, 0, 0.85); z-index: 1000;
                    transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
                    opacity: 0; visibility: hidden;
                }
                .resume-viewer.open {
                    opacity: 1; visibility: visible;
                }
            `}</style>
        </section>
    );
}
