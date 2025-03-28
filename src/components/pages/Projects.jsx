import digestHome from "../../assets/DigestHome.png"
import githubicon from "../../assets/github-mark-white.png"


function Projects() {

    const projectsArray = [
        {
            title: "HTML, CSS, JavaScript",
            description: "Using HTML, CSS, and Javascrpit created a front end application to help users find the best diet that meet their requirements. I learned a lot about managing and manipulating objects and arrays. Using the filter and map method to ensure the user has a customized array of diets tailored to their selections.",
            imageId: digestHome,
            imageD: "Digest App Home Page",
            projectLink: "https://justinvittitoe.github.io/Digest/"
        },
        {
            title: "HTML, CSS, JavaScript",
            description: "Using HTML, CSS, and Javascrpit created a front end application to help users find the best diet that meet their requirements. I learned a lot about managing and manipulating objects and arrays. Using the filter and map method to ensure the user has a customized array of diets tailored to their selections.",
            imageId: digestHome,
            imageD: 'Digest App Home Page',
            projectLink: "https://justinvittitoe.github.io/Digest/"
        },
        {
            title: "HTML, CSS, JavaScript",
            description: "Using HTML, CSS, and Javascrpit created a front end application to help users find the best diet that meet their requirements. I learned a lot about managing and manipulating objects and arrays. Using the filter and map method to ensure the user has a customized array of diets tailored to their selections.",
            imageId: digestHome,
            imageD: 'Digest Home Page',
            projectLink: "https://justinvittitoe.github.io/Digest/"
        },
        {
            title: "HTML, CSS, JavaScript",
            description: "Using HTML, CSS, and Javascrpit created a front end application to help users find the best diet that meet their requirements. I learned a lot about managing and manipulating objects and arrays. Using the filter and map method to ensure the user has a customized array of diets tailored to their selections.",
            imageId: digestHome,
            imageD: 'Digest Home Page',
            projectLink: "https://justinvittitoe.github.io/Digest/"
        },
        {
            title: "HTML, CSS, JavaScript",
            description: "Using HTML, CSS, and Javascrpit created a front end application to help users find the best diet that meet their requirements. I learned a lot about managing and manipulating objects and arrays. Using the filter and map method to ensure the user has a customized array of diets tailored to their selections.",
            imageId: digestHome,
            imageD: 'Digest Home page',
            projectLink: "https://justinvittitoe.github.io/Digest/"
        },
    ]
    const mapProjects = projectsArray.map(project => 
        
            <div className="content project col-span-1">
                <h2 className="mb-5">{project.title}</h2>
                <img src={project.imageId} alt={project.imageD} className="rounded-xl w-auto h-aut0 mb-5" />
                <p>{project.description}
                </p>
                <footer className="fixed bottom-0 w-full flex justify-center items-center p-4">
                            <a href="https://github.com/justinvittitoe" className="mx-4">
                                <img src={githubicon} alt="GitHub" className="h-10 m-2" />
                            </a>
                            <a href={project.projectLink}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 m-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                </svg>
                            </a>
                </footer>
            </div>
        
    )


    return (
        <div className='grid grid-cols-1 gap-10'>
            <h1 className="col-span-1 center">Projects</h1>
            <div>{mapProjects}</div>
        </div>
    );
}

export default  Projects;