import React from 'react';
import { Chat, EmojiFlags, ExpandMoreOutlined, People, Storefront, SupervisedUserCircle, VideoLibrary } from '@material-ui/icons';

import '../css/Sidebar.css';
import SidebarRow from './SidebarRow';
import { useStateValue } from '../StateProvider';

const Sidebar = () => {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className='sidebar'>
            <SidebarRow
                src={user.photoURL}
                title={user.displayName}
                left={12}
            />
            <SidebarRow Icon={People} title="Friends" />
            <SidebarRow Icon={SupervisedUserCircle} title="Groups" />
            <SidebarRow Icon={EmojiFlags} title="Pages" />
            <SidebarRow Icon={Chat} title="Messenger" />
            <SidebarRow Icon={Storefront} title="Marketplace" />
            <SidebarRow Icon={VideoLibrary} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlined} title="See more" />
        </div>
    )
}

export default Sidebar