import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <h1>This is MainLayout of this website</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;