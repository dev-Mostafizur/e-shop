import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <>
            <ul className='flex '>
                <li className='flex gap-5'>
                <Link to='/dashboard' >Dashboard</Link>
                <Link to='/dashboard/profile' >Profile</Link>
                <Link to='/dashboard/about' >About</Link>
                </li>
            </ul>

            <Outlet></Outlet>
        </>
    );
};

export default DashboardLayout;