import React from 'react';
import "../css/Story.css";
import { Avatar } from '@material-ui/core';

const Story = ({ image, profileSrc, title }) => {
    return (
        <div style={{ backgroundImage: `url(${image})`, position: "relative" }}
            className='story'>
            <Avatar className="story_avatar" src={profileSrc} />
            <h4 className='title'>{title}</h4>
        </div>
    )
}

export default Story