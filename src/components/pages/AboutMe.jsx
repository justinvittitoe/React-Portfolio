import ProfileImage from '../../assets/Profile.jpeg';
import Surfing from '../../assets/Surfing.jpeg';
import Hiking from '../../assets/Hiking.jpeg';
import {projectsArray} from '../utils/data.js';
import githubicon from "../../assets/github-mark-white.png";
import resumeImage from "../../assets/ResumeImage.png";
import resume from '../../assets/JustinVittitoeResume SWE.pdf';

function AboutMe({handlePageChange}) {
    const limitedProjects = projectsArray.slice(0,3)

    const handleResumeClick = () => {
        handlePageChange('Resume');
    }

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.download = 'JustinVittitoe_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const handleProjects = () => {
        handlePageChange('Projects');
    }

    const mapProjects = limitedProjects.map((project, index) => (
        
        <div key={index} className="md:grid grid-cols-2 project justify-center">
            <div className="col-span-2 w-full gap-4 mb-2">
                <div className="md:w-full flex">
                    <p2 className=" text-lg font-bold mb-2">{project.title}</p2>
                </div>
                <div className="md:w-full flex-shrink-0">
                    <img src={project.imageId} alt={project.imageD} className="rounded-xl w-full md:h-full object-cover mb-2" />
                </div>
                <div className="col-span-2 w-full mb-4">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:scale-105 transition-transform mb-2">
                        <img src={githubicon} alt="GitHub" className="h-6 w-6" />
                        <span className="text-sm">Code</span>
                    </a>
                    <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:scale-105 transition-transform mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                        </svg>
                        <span className="text-sm">Live Demo</span>
                    </a>
                </div>
                
            </div>
        </div>
    ))

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 auto-rows gap-4 my-10'>
            {/* Location Schooing and Email */}
            <div>
                <div className='content grid grid-cols-1 w-full h-full'>
                    <div className='w-full'>
                        <h2>Personal Info</h2>
                        <ul>
                            <li className="mt-5 mb-5 flex items-center"> 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 flex-shrink-0">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                San Diego
                            </li>
                            <li className="mt-5 mb-5 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 flex-shrink-0">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                </svg>
                                BS Financial Management
                            </li>
                            <li className="mt-5 mb-5 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 flex-shrink-0">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                                justinvittitoe7@gmail.com
                            </li>
                        </ul>
                    </div>
                    <div className='flex items-center justify-center w-full cursor-pointer'>
                        <img src={resumeImage} alt='resume image' className="rounded-xl w-full h-auto object-cover" onClick={handleResumeClick}/>
                    </div>
                    <button onClick={handleDownload} type="button" className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition-colors'>
                        Download Resume
                    </button>
                </div>
            </div>
            {/* Profile Picture */}
            <div className='content grid grid-cols-1 md:grid-cols-2 w-full h-full gap-4'>
                <h2 className='col-span-2'>Caught on Cam</h2>
                <div className="col-span-1 md:col-span-2">
                    <img src={Surfing} alt='Profile photo' className="rounded-xl w-full h-auto md:h-60 object-cover" />

                </div>
                <div>
                    <img src={ProfileImage} alt='Profile photo' className="rounded-xl w-full h-auto md:h-60 object-cover" />

                </div>
                <div>
                    <img src={Hiking} alt='Profile photo' className="rounded-xl w-full h-auto md:h-60 object-cover" />
                </div>
            </div>
            
            {/* Projects */}
            <div className='content md:row-span-2 h-full w-full'>
                <h2>Projects</h2>
                {mapProjects}
                <button onClick={handleProjects} type="button" className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition-colors'>
                    See all Projects
                </button>
            </div>
            {/* About me section */}
            <div className='content flex col-span-1 md:col-span-2 h-full w-full'>
                <div className="w-full">
                    <h1>About Me</h1>
                    <p className="text-base leading-relaxed">
                        Welcome to my website! My name is Justin Vittitoe, and I am a recent Financial Management graduate of Cal
                        Poly, San Luis Obispo. I am currently working as an Operations Specialist for a new community in Colorado Springs building entry to mid-tier
                        homes. My role working as an operations specialist has sparked an interest in computer science and automation. When I am not coding you can find me traveling to find new waves around the world.
                    </p>
                    <p className="text-base leading-relaxed mt-4">
                        If you want to learn more about my journey to becoming a full stack engineer check out my <a href='#resume' onClick={() => handlePageChange('Resume')}>Resume</a>,
                        <a href="https://github.com/justinvittitoe"> Github</a>, or my <a href="https://www.linkedin.com/in/justin-vittitoe-99a8861ba/" > LinkedIn</a> to learn a little more about my professional career.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;