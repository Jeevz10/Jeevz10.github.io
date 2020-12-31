import React, {useState} from 'react';
import { Routes, homeObjOne } from '../data/Data';
import SideBar from '../components/Sidebar';
import NavBar from '../components/Navbar';
import CoverSection from '../components/CoverSection';
import InfoSection from '../components/InfoSection';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <SideBar options={Routes} isOpen={isOpen} toggle={toggle}/>
            <NavBar headers={Routes} toggle={toggle}/>
            <CoverSection />
            <InfoSection {...homeObjOne} />
        </>
    )
}

export default Home;
