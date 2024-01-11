import React from 'react';

import "../css/Feed.css";
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';


const Feed = () => {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />
        </div>
    )
}

export default Feed