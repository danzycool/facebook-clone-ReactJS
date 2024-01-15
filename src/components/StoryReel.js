import React from 'react';
import "../css/StoryReel.css";
import Story from './Story';
import AddStory from './AddStory';
import { useStateValue } from '../StateProvider';

const StoryReel = () => {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className='storyReel'>
            <AddStory
                image={user.photoURL}
            />
            <Story
                profileSrc={`${process.env.PUBLIC_URL}/rihanna.jpg`}
                title="Rihanna"
                image={`${process.env.PUBLIC_URL}/cosmos-1.jpg`}
            />
            <Story
                profileSrc={`${process.env.PUBLIC_URL}/michael.jpeg`}
                title="Michael Jackson"
                image={`${process.env.PUBLIC_URL}/cosmos-3.jpg`}
            />
            <Story
                profileSrc={`${process.env.PUBLIC_URL}/beyonce.jpg`}
                title="Beyonce Knowles"
                image={`${process.env.PUBLIC_URL}/cosmos-4.jpg`}
            />
            <Story
                profileSrc={`${process.env.PUBLIC_URL}/scofield.jpg`}
                title="Michael Scofield"
                image={`${process.env.PUBLIC_URL}/cosmos-5.jpg`}
            />
        </div>
    )
}

export default StoryReel