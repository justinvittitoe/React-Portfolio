import digestHome from "../../assets/DigestHome.png"
import githubicon from "../../assets/github-mark-white.png"
import MayberryPricing from "../../assets/MayberryPricing.png"


function Projects() {

    const projectsArray = [
        {
            title: "Mayberry Communities Pricing App",
            description: "A custom home builder application where customer can price out a home with available options and admins can manage available options.",
            imageId: MayberryPricing,
            projectLink: "NOT DEPLOYED",
            githubLink: "https://github.com/justinvittitoe/Mayberry",
            technologies: ["Node.js", "Express", "MongoDB", "Apollo Server", "GraphQL"]
        },
        {
            title: "Book Search MERN Stack",
            description: "A weather application that allows users to search for weather conditions in multiple cities. Built with APIs to fetch real-time weather data and localStorage to save search history.",
            imageId: "",
            imageD: 'Weather Dashboard Screenshot',
            projectLink: "https://booksearchmern-hghw.onrender.com",
            githubLink: "https://github.com/justinvittitoe/BookSearchMERN",
            technologies: ["Typescript", "APIs", "MongoDB", "Express", "React", "Node.js"]
        },
        {
            title: "Doodle Noodle - Daily Drawing",
            description: "A daily drawing app that allows users to draw a picture of a noodle and share it with the community. Built with React, Tailwind CSS, Typescript, MongoDB, and GraphQL.",
            imageId: "",
            imageD: 'API Documentation Screenshot',
            projectLink: "https://doodle-noodle.onrender.com/",
            githubLink: "https://github.com/ZachD-ae/Doodle_Noodle",
            technologies: ["Node.js", "Express", "MongoDB", "Apollo Server", "GraphQL"]
        },
        {
            title: "Task Management App",
            description: "A full-stack task management application with user authentication, CRUD operations, and real-time updates. Built with Node.js backend and React frontend.",
            imageId: "",
            imageD: 'Task Manager Screenshot',
            projectLink: "https://kanbanboard-09iz.onrender.com/",
            githubLink: "https://github.com/justinvittitoe/KanbanBoard",
            technologies: ["React", "Node.js", "Express", "PostgreSQL", "Sequelize"]
        },
        {
            title: "Digest - Diet Finder App",
            description: "Using HTML, CSS, and JavaScript created a front end application to help users find the best diet that meets their requirements. I learned a lot about managing and manipulating objects and arrays. Using the filter and map method to ensure the user has a customized array of diets tailored to their selections.",
            imageId: digestHome,
            imageD: "Digest App Home Page",
            projectLink: "https://justinvittitoe.github.io/Digest/",
            githubLink: "https://github.com/justinvittitoe/Digest",
            technologies: ["HTML", "CSS", "JavaScript"]
        },
       
    ]
    const mapProjects = projectsArray.map((project, index) => (
        <div key={index} className="content project">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 flex-shrink-0">
                    <img src={project.imageId} alt={project.imageD} className="rounded-xl w-full h-48 md:h-full object-cover" />
                </div>
                <div className="md:w-2/3 flex flex-col">
                    <h2 className="mb-4">{project.title}</h2>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-blue-600 text-white px-2 py-1 rounded text-sm">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <p className="text-base leading-relaxed mb-6 flex-grow">{project.description}</p>
                    <div className="flex gap-4">
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:scale-105 transition-transform">
                            <img src={githubicon} alt="GitHub" className="h-6 w-6" />
                            <span className="text-sm">Code</span>
                        </a>
                        <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:scale-105 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                            </svg>
                            <span className="text-sm">Live Demo</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    ))


    return (
        <div>
            <h1 className="text-center mb-10">Projects</h1>
            <div className="flex flex-col gap-6 max-w-4xl mx-auto">
                {mapProjects}
            </div>
        </div>
    );
}

export default  Projects;