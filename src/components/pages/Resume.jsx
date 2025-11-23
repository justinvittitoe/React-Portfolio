import resume from '../../assets/JustinVittitoeResume SWE.pdf';

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
            language: "MongoDB",
            icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" className='size-20' />

        },
        {
            language: "Python",
            icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" className='size-20'/>

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
            language: "express",
            icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" className='size-20'/>
        },
        {
            language: "ApolloGraphQl",
            icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apollographql/apollographql-original-wordmark.svg" className='size-20'/>
        },
        {
            language: "vite",
            icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" className='size-20' />

        },
        {
            language: "Cypress",
            icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg" className='size-20'/>
        }
       
        
    ]
    const mapSkills = skillsArray.map((skill, index) => (
        <div key={index} className='content item flex flex-col items-center justify-center p-4'>
            {skill.icon}
            <p className='mt-2 text-center text-sm'>{skill.language}</p>
        </div>
    ))

    return (
        <div className="grid grid-cols-2 gap-6 my-10">

            <div className='content'>
                <h2 className='text-center mb-6'>Resume</h2>
                <iframe
                    src={resume}
                    id='resume'
                    title="Resume"
                    width="100%"
                    height="600px"
                    className='border rounded-lg'
                />
            </div>
            <div className='content'>
                <h2 className='text-center mb-6'>Skills</h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                    {mapSkills}
                </div>
            </div>
        </div>
    );
}