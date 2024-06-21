
import { useState } from 'react';
import Sidebar from '../sidebar/Sidebar'
import './navbar.scss'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';


const Navbar = () => {
    const [hoveredIcon, setHoveredIcon] = useState(null);

    const handleIconHover = (iconName) => {
        setHoveredIcon(iconName);
    };

    return (
        <div className='navbar'>
            <Sidebar />

            <div className="wrapper">
                <motion.span
                    className='logo'
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    RawAtCode
                </motion.span>

                <div className='social'>
                    <a href='https://github.com/rawatcode' onMouseEnter={() => handleIconHover('github')} onMouseLeave={() => setHoveredIcon(null)}>
                        <FaGithub className={hoveredIcon === 'github' ? 'hovered' : ''} />
                    </a>
                    <a href='https://www.linkedin.com/in/rawatcode/' onMouseEnter={() => handleIconHover('linkedin')} onMouseLeave={() => setHoveredIcon(null)}>
                        <FaLinkedinIn className={hoveredIcon === 'linkedin' ? 'hovered' : ''} />
                    </a>
                    <a href='https://www.instagram.com/rawatcode' onMouseEnter={() => handleIconHover('instagram')} onMouseLeave={() => setHoveredIcon(null)}>
                        <FaInstagram className={hoveredIcon === 'instagram' ? 'hovered' : ''} />
                    </a>
                    <a href='https://x.com/rawatcode' onMouseEnter={() => handleIconHover('twitter')} onMouseLeave={() => setHoveredIcon(null)}>
                        <FaTwitter className={hoveredIcon === 'twitter' ? 'hovered' : ''} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar