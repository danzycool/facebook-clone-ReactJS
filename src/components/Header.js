import React from 'react'
import { Add, Dialpad, Menu, ExpandMore, Flag, Forum, Home, NotificationsActive, Search, StorefrontOutlined, SubscriptionsOutlined, SupervisedUserCircle } from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';
import { FaFacebookMessenger, FaBell } from "react-icons/fa";
import { LuGamepad } from "react-icons/lu";

import "../css/Header.css";

const Header = () => {
    return (
        <div className='header'>
            <div className='header_left'>
                <img
                    src="/facebook_logo.png"
                    alt="logo"
                />
                <div className='header_input'>
                    <Search />
                    <input placeholder='Search Facebook' type='text' />
                </div>
            </div>

            <div className='header_center'>
                <div className='header_option header_option-active'>
                    <Home fontSize='large' />
                </div>
                <div className='header_option'>
                    <StorefrontOutlined fontSize='large' />
                </div>
                <div className='header_option'>
                    <SupervisedUserCircle fontSize='large' />
                </div>
                <div className='header_option'>
                    <LuGamepad size={35} color='gray' />
                </div>
            </div>

            <div className='header_right'>

                <div className='icon' >
                    <Add />
                </div>
                <div className='icon' title='Menu'>
                    <Dialpad />
                </div>
                <div className='icon'>
                    <FaFacebookMessenger size={20} />
                </div>
                <div className='icon'>
                    <FaBell size={20} />
                </div>

                <div className='header_info'>
                    <Avatar src={`${process.env.PUBLIC_URL}/danzycool.jpg`} />
                    <span>
                        <ExpandMore />
                    </span>

                </div>
            </div>
        </div>
    )
}

export default Header