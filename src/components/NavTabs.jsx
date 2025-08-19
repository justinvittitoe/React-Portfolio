import { useState } from 'react';

function NavTabs({currentPage, handlePageChange}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavClick = (page, event) => {
        event.preventDefault();
        handlePageChange(page);
        setIsMenuOpen(false);
    };

    return (
        <nav>
            <h2>Justin Vittitoe</h2>
            
            {/* Hamburger Menu Button - Mobile Only */}
            <button 
                className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span className={`block w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            {/* Navigation Menu */}
            <ul className={`nav nav-tabs ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>
                <li className='nav-item'>
                    <a
                    href='/'
                    onClick={(e) => handleNavClick('AboutMe', e)}
                    className={currentPage === 'AboutMe'? 'nav-link active' : 'nav-link'}
                    >About Me</a>
                </li>
                <li className='nav-item'>
                    <a
                    href='#projects'
                    onClick={(e) => handleNavClick('Projects', e)}
                    className={currentPage === 'Projects'? 'nav-link active' : 'nav-link'}
                    >Projects</a>
                </li>
                <li className='nav-item'>
                    <a
                    href='#resume'
                    onClick={(e) => handleNavClick('Resume', e)}
                    className={currentPage === 'Resume'? 'nav-link active' : 'nav-link'}
                    >Resume</a>
                </li>
                <li className='nav-item'>
                    <a
                    href='#contact'
                    onClick={(e) => handleNavClick('Contact', e)}
                    className={currentPage === 'Contact'? 'nav-link active' : 'nav-link'}
                    >Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavTabs;