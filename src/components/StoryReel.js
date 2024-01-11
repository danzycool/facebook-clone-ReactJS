import React from 'react';
import "../css/StoryReel.css";
import Story from './Story';

const StoryReel = () => {
    return (
        <div className='storyReel'>
            <Story
                profileSrc={`${process.env.PUBLIC_URL}/rihanna.jpg`}
                title="Rihanna"
                image={`${process.env.PUBLIC_URL}/cosmos-1.jpg`}
            />
        </div>
    )
}

export default StoryReel