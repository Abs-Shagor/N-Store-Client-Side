import React, { useContext } from 'react';
import Navbar from './Navbar';
import { DataContext } from '../Providers/DataProvider';
import { Outlet } from 'react-router-dom';

const Root = () => {
    const {open, setOpen} = useContext(DataContext);
    function handleNavSidebar() {
        if(open) {
            setOpen(!open);
        }
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='max-w-[1280px] mx-auto px-2  ' onClick={handleNavSidebar}>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;