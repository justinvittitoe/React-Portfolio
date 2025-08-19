import githubicon from '../../src/assets/github-mark-white.png'
import linkedin from '../../src/assets/icons8-linkedin-50.png'
export default function Footer() {
    return (
        <footer className="w-full flex justify-center items-center p-4 mt-8 border-t border-gray-700">
            <a href="https://github.com/justinvittitoe" className="mx-4 hover:scale-110 transition-transform">
                <img src={githubicon} alt="GitHub" className="h-10" />
            </a>
            <a href="https://www.linkedin.com/in/justin-vittitoe-99a8861ba/" className="mx-4 hover:scale-110 transition-transform">
                <img src={linkedin} alt="LinkedIn" className="h-10" />
            </a>
        </footer>
    )
}

