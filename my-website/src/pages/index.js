import React, {useState} from 'react';
import { Data, homeObjOne } from '../data/Data';
import SideBar from '../components/Sidebar';
import NavBar from '../components/Navbar';
import SliderSection from '../components/SliderSection';
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
            <SliderSection />
            <InfoSection {...homeObjOne} />
        </>
    )
}

export default Home;
