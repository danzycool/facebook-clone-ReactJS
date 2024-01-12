import React from 'react';

import "../css/HomePage.css";
import Header from '../components/Header';
import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar';
import Widget from '../components/Widgets';

const HomePage = () => {
    return (
        <div className='app'>
            <Header />

            <div className='app_body'>

                <Sidebar />

                <Feed />

                <Widget />

            </div>


        </div>
    )
}

export default HomePage