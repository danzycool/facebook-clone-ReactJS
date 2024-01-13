import React, { useEffect, useState, yuseEffect } from 'react';
import { Avatar } from '@material-ui/core';
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons';
import firebase from 'firebase/compat/app';

import "../css/MessageSender.css";
import { useStateValue } from '../StateProvider';
import db from '../firebase';

const MessageSender = () => {
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [{ user }, dispatch] = useStateValue();

    const [firstname, setFirstname] = useState('');

    useEffect(() => {
        if (user) {
            let firstname = user.displayName.split(' ')[0];
            setFirstname(firstname);
            console.log(firstname)
        }
    }, [user]);

    const handleSubmit = e => {
        e.preventDefault();

        // enter some database commands
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })

        setInput('');
        setImageUrl('');
    }

    return (
        <div className='messageSender'>
            <div className='messageSender_top'>
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className='messageSender_input'
                        placeholder={`what's on your mind, ${firstname}? `}
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