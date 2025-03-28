import {useState} from 'react';
import NavTabs from './NavTabs';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects'
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './Footer';

export default function PortfolioContent() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const rednerPage = () => {
        if(currentPage === 'AboutMe') {
            return <AboutMe handlePageChange={handlePageChange}/>;
        }
        if(currentPage === 'Projects') {
            return <Projects />;
        }
        if(currentPage === 'Resume') {
            return <Resume />;
        }
        if(currentPage === 'Contact') {
            return <Contact />;
        }
    };

    const handlePageChange = (page) => {
        console.log(page)
        setCurrentPage(page)};

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {/*Insert styling class for each page*/}
            <main>{rednerPage()}</main>
            
           <Footer />
        </div>
    )
}

