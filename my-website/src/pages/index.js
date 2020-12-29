import React, {useState} from 'react';
import { Data } from '../data/Data';
import SideBar from '../components/Sidebar';
import NavBar from '../components/Navbar';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <SideBar options={Data} isOpen={isOpen} toggle={toggle}/>
            <NavBar headers={Data} toggle={toggle}/>
        </>
    )
}

export default Home;
