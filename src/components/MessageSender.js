import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons';

import "../css/MessageSender.css";

const MessageSender = () => {
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        // enter some database commands

        setInput('');
        setImageUrl('');
    }

    return (
        <div className='messageSender'>
            <div className='messageSender_top'>
                <Avatar src={`${process.env.PUBLIC_URL}/danzycool.jpg`} />
                <form>
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className='messageSender_input'
                        placeholder="what's on your mind?"
                    />
                    <input
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)}
                        placeholder="image URL (Optional)"
                    />

                    <button onClick={handleSubmit} type='submit' >
                        Hidden Submit
                    </button>
                </form>
            </div>

            <div className='messageSender_bottom'>
                <div className='messageSender_option'>
                    <Videocam style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>

                <div className='messageSender_bottom'>
                    <div className='messageSender_option'>
                        <PhotoLibrary style={{ color: "green" }} />
                        <h3>Photo/Video</h3>
                    </div>
                </div>

                <div className='messageSender_bottom'>
                    <div className='messageSender_option'>
                        <InsertEmoticon style={{ color: "orange" }} />
                        <h3>Feeling/Activity</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageSender