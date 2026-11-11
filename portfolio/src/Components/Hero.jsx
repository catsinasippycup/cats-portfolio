import { BsLinkedin, BsGithub } from 'react-icons/bs';
import HeroPic from '../assets/me.png';

export default function Hero() {
    return (
        <section className="flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white">
            <div className="lg:w-1/3 ssm:w-fit">
                <p className="text-4xl mb-5 text-slate-300">Hey! my name is</p>
                <h1 className="text-6xl">James Peou</h1>
                <p className="mt-10 text-xl">
                    I’m an IT Support Specialist at Taco Bell, where I troubleshoot
                    production systems and help restore service for restaurants.
                    My software engineering background includes building REST APIs,
                    integrating databases, and automating code analysis.
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-4">
                    <a
                        href="https://www.linkedin.com/in/james-peou-661004184/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn (opens in a new tab)"
                        className="rounded-full text-white transition hover:bg-slate-600"
                    >
                        <BsLinkedin size={40} aria-hidden="true" />
                    </a>

                    <a
                        href="https://github.com/catsinasippycup"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub (opens in a new tab)"
                        className="rounded-full text-white transition hover:bg-slate-600"
                    >
                        <BsGithub size={40} aria-hidden="true" />
                    </a>

                    <a
                        href="https://drive.google.com/file/d/1RLmcA-KT0zyb8DpJFN17fzUT6w0sAXFW/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View résumé (opens in a new tab)"
                        className="inline-flex min-h-10 items-center rounded-lg border border-slate-400 px-4
                                   text-sm font-semibold text-white transition hover:bg-slate-700
                                   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                    >
                        Resume <span aria-hidden="true" className="ml-2">↗</span>
                    </a>
                </div>
            </div>

            <div>
                <img
                    src={HeroPic}
                    alt=""
                    width={200}
                    height={200}
                    className="rounded-2xl border-4 border-white"
                />
            </div>
        </section>
    );
}