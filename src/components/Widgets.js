import React from 'react';
import { Avatar } from '@material-ui/core';
import { LuMessagesSquare } from "react-icons/lu";
import { PiUserSwitch } from "react-icons/pi";
import { BsMegaphone } from "react-icons/bs";

import "../css/Widgets.css";

const Widgets = () => {
    return (
        <div className='widgets'>
            {/* <iframe
                title='widget'
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F...."
                width={340}
                height='100%'
                style={{ border: "none", overflow: "hidden" }}
                scrolling='no'
                frameBorder={0}
                allowtransparency={true}
                allow='encrypted-media'
            /> */}

            <div className='section'>
                <span className='title'>Sponsored</span>
                <div className='subSection'>
                    <div className='graphic'>
                        <img src='/mongoAd.jpeg' alt="ad" />
                    </div>
                    <div className='content'>
                        <h4>Getting the most out of MongoDB</h4>
                        <p>mongodb.com</p>
                    </div>
                </div>
                <div className='subSection'>
                    <div className='graphic'>
                        <img src='/jacket.jpeg' alt="ad" />
                    </div>
                    <div className='content'>
                        <h4>Today only $5.99</h4>
                        <p>xyzapparels.com</p>
                    </div>
                </div>
            </div>

            <div className='section'>
                <span className='title'>Your Pages and Profiles</span>
                <div className='subSection'>
                    <div className='page'>
                        <Avatar src={`${process.env.PUBLIC_URL}/fox.jpeg`} />
                        <span>Music and Entertainment</span>
                    </div>
                </div>
                <div className='page_options'>
                    <div className='subSection'>
                        <div className='page_icon'>
                            <LuMessagesSquare size={20} color="#67676B" />
                            <span className='page_message'>2 Messages</span>
                        </div>
                    </div>
                    <div className='subSection'>
                        <div className='page_icon'>
                            <PiUserSwitch size={20} color="#67676B" />
                            <span>Switch into page</span>
                        </div>
                    </div>
                    <div className='subSection'>
                        <div className='page_icon'>
                            <BsMegaphone size={20} color="#67676B" />
                            <span>Create promotion</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='section'>
                <span className='title'>Birthdays</span>
                <div className='subSection'>
                    <div className='birthdays'>
                        <div className='birth_image'>
                            <img src="/birthday.png" alt='birthday_pix' />
                        </div>
                        <div className='birth_content'>
                            <span>Keanu Reaves</span> and <span>6 others</span> have birthdays today.
                        </div>
                    </div>
                </div>
            </div>

            <div className='section'>
                <span className='title'>Contacts</span>

                <div className='subSection'>
                    <div className='page'>
                        <Avatar src={`${process.env.PUBLIC_URL}/keanu.jpg`} />
                        <span>Keanu Reaves</span>
                    </div>
                </div>
                <div className='subSection'>
                    <div className='page'>
                        <Avatar src={`${process.env.PUBLIC_URL}/samuel.jpg`} />
                        <span>Samuel L. Jackson</span>
                    </div>
                </div>
                <div className='subSection'>
                    <div className='page'>
                        <Avatar src={`${process.env.PUBLIC_URL}/ciara.jpg`} />
                        <span>Ciara Princess Harris</span>
                    </div>
                </div>
                <div className='subSection'>
                    <div className='page'>
                        <Avatar src={`${process.env.PUBLIC_URL}/scofield.jpg`} />
                        <span>Michael Scofield</span>
                    </div>
                </div>
                <div className='subSection'>
                    <div className='page'>
                        <Avatar src={`${process.env.PUBLIC_URL}/beyonce.jpg`} />
                        <span>Beyonce Knowles</span>
                    </div>
                </div>
                <div className='subSection'>
                    <div className='page'>
                        <Avatar src={`${process.env.PUBLIC_URL}/rihanna.jpg`} />
                        <span>Rihanna ASAP</span>
                    </div>
                </div>



            </div>



        </div >
    )
}

export default Widgets