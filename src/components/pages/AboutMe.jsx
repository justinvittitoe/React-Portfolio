import ProfileImage from '../../assets/Profile.jpeg';


function AboutMe({handlePageChange}) {
   

    return (
        <div>
            <div className='content'>
                <div className="flex flex-col md:flex-row md:justify-between gap-6">
                    <img src={ProfileImage} alt='Profile photo' className="rounded-xl w-full md:w-40 h-auto md:h-60 object-cover" />
                    <div className='flex-1'>
                        <h2>Personal Info</h2>
                        <ul className=''>
                            <li className="mt-5 mb-5 flex items-center"> 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 flex-shrink-0">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                Colorado Springs
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
                </div>    
                <div className="mt-8">
                    <h1>About Me</h1>
                    <p className="text-base leading-relaxed">
                        Welcome to my website! My name is Justin Vittitoe, and I am a recent Financial Management graduate of Cal
                        Poly, San Luis Obispo. I am currently working as an operations specialist for a new community in Colorado Springs building entry to mid-tier
                        homes. My role working as an operations specialist has sparked an interest in computer science and automation. When I am not coding you can find me traveling to find new waves around the world. 
                    </p>
                    <p className="text-base leading-relaxed mt-4">
                        If you want to learn more about my journey to becoming a full stack engineer check out my <a href='#resume' onClick={()=>handlePageChange('Resume')}>Resume</a>, 
                        <a href="https://github.com/justinvittitoe"> Github</a>, or my <a href="https://www.linkedin.com/in/justin-vittitoe-99a8861ba/" > LinkedIn</a> to learn a little more of my professional career. 
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;