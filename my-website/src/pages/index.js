import React, {useState} from 'react';
import { Data, homeObjOne } from '../data/Data';
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
            <SideBar options={Data} isOpen={isOpen} toggle={toggle}/>
            <NavBar headers={Data} toggle={toggle}/>
            <CoverSection />
            <InfoSection {...homeObjOne} />
        </>
    )
}

export default Home;
