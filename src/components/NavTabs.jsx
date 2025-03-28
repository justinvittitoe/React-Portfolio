function NavTabs({currentPage, handlePageChange}) {
    return (
        <nav>
            <h2>Justin Vittitoe</h2>
        <ul className='nav nav-tabs'>
            <li className='nav-item'>
                <a
                href='/'
                onClick={()=>handlePageChange('AboutMe')}
                className={currentPage === 'AboutMe'? 'nav-link active' : 'nav-link'}
                >About Me</a>
            </li>
            <li className='nav-item'>
                <a
                href='#projects'
                onClick={()=>handlePageChange('Projects')}
                className={currentPage === 'Projects'? 'nav-link active' : 'nav-link'}
                >Projects</a>
            </li>
            <li className='nav-item'>
                <a
                href='#resume'
                onClick={()=>handlePageChange('Resume')}
                className={currentPage === 'Resume'? 'nav-link active' : 'nav-link'}
                >Resume</a>
            </li>
            <li className='nav-item'>
                <a
                href='#contact'
                onClick={()=>handlePageChange('Contact')}
                className={currentPage === 'Contact'? 'nav-link active' : 'nav-link'}
                >Contact</a>
            </li>
        </ul>
        </nav>
    )
}

export default NavTabs;