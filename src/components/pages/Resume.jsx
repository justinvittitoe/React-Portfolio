import resume from '../../../public/JustinVittitoeResume.pdf'

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
    const mapSkills = skillsArray.map(skill =>
        
            <div className='content item flex inline-block place-content-center m-3'>
                {skill.icon}
            <p className='mt-2 text-center'>{skill.language}</p>
            </div>

        
    )

    return (
        <div>
            <div className='content flex grid grid-cols-4 '>
                <h2 className='col-span-4 m-5'>Skills</h2>
                {mapSkills}
            </div>

            <div className='content'>
                <h1 className='text-center m-5'>Resume</h1>
                <iframe
                    src={resume}
                    title="Resume"
                    width="100%"
                    height="800px"
                    className='flex item w-160 m-5'
                    onClick={()=>handleResume}
                />
            </div>
        </div>
    );
}