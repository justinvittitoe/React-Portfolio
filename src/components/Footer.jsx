import githubicon from '../../src/assets/github-mark-white.png'
import linkedin from '../../src/assets/icons8-linkedin-50.png'
export default function Footer() {
    return (
    <div>
        <footer className="fixed bottom-0 w-full flex justify-center items-center p-4">
            <a href="https://github.com/justinvittitoe" className="mx-4">
                <img src={githubicon} alt="GitHub" className="h-10" />
            </a>
            <a href="https://www.linkedin.com/in/justin-vittitoe-99a8861ba/" className="mx-4">
                <img src={linkedin} alt="LinkedIn" className="h-10" />
            </a>
        </footer>
    </div>
    )
}

