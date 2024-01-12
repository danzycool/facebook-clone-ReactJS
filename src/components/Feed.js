import React from 'react';

import "../css/Feed.css";
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';


const Feed = () => {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />
            <Post
                profilePic={`${process.env.PUBLIC_URL}/danzycool.jpg`}
                image={`${process.env.PUBLIC_URL}/cosmos-5.jpg`}
                username="Daniel Isah"
                message="Look at the Cosmos. So beautiful!!!"
            />
        </div>
    )
}

export default Feed