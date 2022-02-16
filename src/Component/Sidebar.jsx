import React from 'react';

import HackerRank from '../assets/icons/HackerRank.png';
import linkedIn from '../assets/icons/linkedin.png';
import github from '../assets/icons/github.svg';
import pin from '../assets/icons/pin.svg';
import tie from '../assets/icons/tie.svg';
import mightycoder from '../assets/mightycoder.svg';
import resume from '../assets/resume.pdf';
import { motion } from 'framer-motion';

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:zaidch124@gmail.com")
    }
    const sidebar_variant = {
        hidden: {
            x: '-20vw',

        },
        visible: {
            x: 0,

            transition: {
                delay: 0.1, duration: 0.5, type: 'spring'
            }
        }
    }


    return (
        <motion.div className="sidebar"
            variants={sidebar_variant}
            initial='hidden'
            animate="visible"

        >
            <img src={mightycoder} alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">Zain Ul Abedin <span>Zubair</span> </div>
            <div className="sidebar__item sidebar__title">Web Developer</div>
            <a href={resume} download="resume.pdf">
                <div className="sidebar__item sidebar__resume">
                    <img src={tie} alt="resume" className="sidebar__icon" />Download Resume
                </div>
            </a>
            <figure className="sidebar__social-icons my-2">
                <a href="https://www.hackerrank.com/zainbusiness124"><img src={HackerRank} alt="hackerRank" className="sidebar__icon mr-3" /></a>
                <a href="https://www.linkedin.com/in/zain-ul-abedin-zubair?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BXXgY4kJmQoWJZRVdykr7Xw%3D%3D"><img src={linkedIn} alt="linkedin" className="sidebar__icon" /></a>
            </figure>
            <div className="sidebar__contact">
                <div className="sidebar__item sidebar__github">
                    <a href="https://github.com/Zain-Ul-AbedinZubair"><img src={github} alt="github" className="sidebar__icon mr-3" />github</a>
                </div>
                <div className="sidebar__location">
                    <img src={pin} alt="location" className="sidebar__icon mr-3" />
                    Gujrat, Pakistan</div>
                <div className="sidebar__item">zaidch124@gmail.com</div>
                <div className="sidebar__item">+92344-5356566</div>
            </div>
            <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>email me</div>
        </motion.div>
    )
}

export default Sidebar;