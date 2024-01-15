import React from 'react';
import { Add } from '@material-ui/icons';

import "../css/AddStory.css";

const AddStory = ({ image }) => {
    return (
        <div className='addStory'>
            <div className='addStory_top' style={{ backgroundImage: `url(${image})` }}>
            </div >
            <div className='addStory_bottom'>
                <div className='icon'>
                    <Add />
                </div>
                <h5 style={{ margin: "0 auto", color: "#67676B", marginBottom: 10 }}>Create Story</h5>
            </div>
        </div>
    )
}

export default AddStory