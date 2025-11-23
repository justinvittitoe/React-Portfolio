import githubicon from "../../assets/github-mark-white.png"
import {projectsArray} from "../utils/data.js"

function Projects() {

    
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
        <div className="grid grid-cols-1 gap-6 my-10">
            <h1 className="text-center">Projects</h1>
            {mapProjects}
        </div>
    );
}

export default  Projects;