import {useState, useEffect} from 'react';
import NavTabs from './NavTabs';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects'
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './Footer';

export default function PortfolioContent() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    const renderPage = () => {
        if(currentPage === 'AboutMe') {
            return <AboutMe handlePageChange={handlePageChange}/>;
        }
        if(currentPage === 'Projects') {
            return <Projects handlePageChange={handlePageChange}/>;
        }
        if(currentPage === 'Resume') {
            return <Resume handlePageChange={handlePageChange} />;
        }
        if(currentPage === 'Contact') {
            return <Contact handlePageChange={handlePageChange} />;
        }
    };

    const handlePageChange = (page) => {
        console.log(page)
        setCurrentPage(page)};

    return (
        <div className='w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {/*Insert styling class for each page*/}
            <main>{renderPage()}</main>
            
           <Footer />
        </div>
    )
}

