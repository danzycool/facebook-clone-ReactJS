import React from 'react';
import "../css/Story.css";
import { Avatar } from '@material-ui/core';

const Story = ({ image, profileSrc, title }) => {
    return (
        // <div style={{ backgroundImage: `url(${image})` }}
        <div style={{ backgroundImage: { image } }}
            className='story'>
            <Avatar className="story_avatar" src={profileSrc} />
            <h4>{title}</h4>
        </div>
    )
}

export default Story