import React from 'react';
import { Avatar } from '@material-ui/core';

import '../css/SidebarRow.css';

const SidebarRow = ({ src, Icon, title, left }) => {
    return (
        <div className='sidebarRow'>
            {src && <Avatar src={src} />}
            {Icon && <Icon />}

            <h4
                style={left && { marginLeft: left }}
            >{title}</h4>
        </div >
    )
}

export default SidebarRow