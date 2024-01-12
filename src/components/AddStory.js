import React from 'react';
import { Add } from '@material-ui/icons';

import "../css/AddStory.css";

const AddStory = ({ image }) => {
    return (
        <div className='addStory'>
            <div style={{ backgroundImage: { image } }} className='addStory_top'>

            </div >
            <div className='addStory_bottom'>
                <div className='icon'>
                    <Add />
                </div>
                <h4>Create Story</h4>
            </div>
        </div>
    )
}

export default AddStory