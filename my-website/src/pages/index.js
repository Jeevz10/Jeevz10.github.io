import React, {useState} from 'react';
import { homeObjOne, Routes, CoverSectionData, ProfileFactsData } from '../data/Data';
import SideBar from '../components/Sidebar';
import NavBar from '../components/Navbar';
import CoverSection from '../components/CoverSection';
import InfoSection from '../components/InfoSection';
import ProfileSection from '../components/ProfileSection';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <SideBar options={Routes} isOpen={isOpen} toggle={toggle}/>
            <NavBar headers={Routes} toggle={toggle}/>
            <CoverSection coverSectionData={CoverSectionData}/>
            {/* <InfoSection {...homeObjOne} /> */}
            <ProfileSection factsData={ProfileFactsData}/>
        </>
    )
}

export default Home;
