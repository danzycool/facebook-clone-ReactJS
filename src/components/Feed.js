import React, { useEffect, useState } from 'react';

import "../css/Feed.css";
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import db from '../firebase';

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => {
                setPosts(snapshot.docs.map(
                    doc => ({ id: doc.id, data: doc.data() })
                ))
            })
    }, [])

    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />

            {posts.map(post => (
                <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    image={post.data.image}
                    username={post.data.username}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                />
            ))}

        </div>
    )
}

export default Feed