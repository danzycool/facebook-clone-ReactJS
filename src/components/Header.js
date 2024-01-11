import React from 'react'
import { Add, ExpandMore, Flag, Forum, Home, NotificationsActive, Search, StorefrontOutlined, SubscriptionsOutlined, SupervisedUserCircle } from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';

import "../css/Header.css";

const Header = () => {
    return (
        <div className='header'>
            <div className='header_left'>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/120px-Facebook_f_logo_%282019%29.svg.png"
                    alt="facebook-logo"
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
                    <Flag fontSize='large' />
                </div>
                <div className='header_option'>
                    <SubscriptionsOutlined fontSize='large' />
                </div>
                <div className='header_option'>
                    <StorefrontOutlined fontSize='large' />
                </div>
                <div className='header_option'>
                    <SupervisedUserCircle fontSize='large' />
                </div>
            </div>

            <div className='header_right'>
                <div className='header_info'>
                    <Avatar src={`${process.env.PUBLIC_URL}/danzycool.jpg`} />
                    <h4>Daniel Isah</h4>
                </div>

                <IconButton>
                    <Add />
                </IconButton>
                <IconButton>
                    <Forum />
                </IconButton>
                <IconButton>
                    <NotificationsActive />
                </IconButton>
                <IconButton>
                    <ExpandMore />
                </IconButton>
            </div>
        </div>
    )
}

export default Header