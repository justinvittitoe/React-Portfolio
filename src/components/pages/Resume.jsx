const resume = '/JustinVittitoeResume.pdf'

export default function Resume() {

    const skillsArray = [
        {
            language: "HTML",
            icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className='size-20'/>,
        },
        {
            language: "CSS",
            icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg" className='size-20' />

        },
        {
            language: "JavaScript",
            icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className='size-20' />
        },
        {
            language: "TypeScript",
            icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className='size-20' />

        },
        {
            language: "PostgreSQL",
            icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" className='size-20' />

        },
        {
            language: "React",
            icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className='size-20' />
          
        },
        {
            language: "node.js",
            icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" className='size-20' />
        },
        {
            language: "vite",
            icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" className='size-20' />

        },
       
        
    ]
    const mapSkills = skillsArray.map((skill, index) => (
        <div key={index} className='content item flex flex-col items-center justify-center p-4'>
            {skill.icon}
            <p className='mt-2 text-center text-sm'>{skill.language}</p>
        </div>
    ))

    return (
        <div>
            <div className='content'>
                <h2 className='text-center mb-6'>Skills</h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                    {mapSkills}
                </div>
            </div>

            <div className='content'>
                <h1 className='text-center mb-6'>Resume</h1>
                <div className='mb-4 text-center'>
                    <a 
                        href={resume} 
                        download="JustinVittitoe_Resume.pdf"
                        className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors'
                    >
                        Download Resume
                    </a>
                </div>
                <iframe
                    src={resume}
                    title="Resume"
                    width="100%"
                    height="600px"
                    className='border rounded-lg'
                />
            </div>
        </div>
    );
}