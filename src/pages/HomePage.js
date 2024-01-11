import React from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';

const HomePage = () => {
    return (
        <div className='app'>
            <Header />


            <div className='app_body'>

                <Sidebar />

                <Feed />

                {/** Widgets */}
            </div>



        </div>
    )
}

export default HomePage