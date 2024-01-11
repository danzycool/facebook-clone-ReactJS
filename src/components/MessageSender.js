import React from 'react';
import { Avatar } from '@material-ui/core';

import "../css/MessageSender.css";

const MessageSender = () => {
    return (
        <div className='messageSender'>
            <div className='messageSender_top'>
                <Avatar />
            </div>

            <div className='messageSender_bottom'>

            </div>
        </div>
    )
}

export default MessageSender