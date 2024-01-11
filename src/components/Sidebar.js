import React from 'react';
import { Chat, EmojiFlags, ExpandMoreOutlined, LocalHospital, People, Storefront, VideoLibrary } from '@material-ui/icons';

import '../css/Sidebar.css';
import SidebarRow from './SidebarRow';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <SidebarRow
                src={`${process.env.PUBLIC_URL}/danzycool.jpg`}
                title="Daniel Isah"
            />
            <SidebarRow Icon={LocalHospital} title="COVID-19 Information Center" />
            <SidebarRow Icon={EmojiFlags} title="Pages" />
            <SidebarRow Icon={People} title="Friends" />
            <SidebarRow Icon={Chat} title="Messenger" />
            <SidebarRow Icon={Storefront} title="Marketplace" />
            <SidebarRow Icon={VideoLibrary} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
        </div>
    )
}

export default Sidebar