import React from 'react';
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF, } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a href="https://github.com/Iqbal-Elham" target="_blank" rel="noopener noreferrer" aria-label="github"><BsGithub /></a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/iqbal-elham/" target="_blank" rel="noopener noreferrer" aria-label="linkedin"><BsLinkedin /></a>
            </div>
            <div>
                <a href="https://www.facebook.com/iqbal.elh/" target="_blank" rel="noopener noreferrer" aria-label="facebook"><FaFacebookF /></a>
            </div>
            <div>
                <a href="https://www.instagram.com/iqbal_elham/" target="_blank" rel="noopener noreferrer" aria-label="instagram"><BsInstagram /></a>
            </div>
        </div>
    );
}

export default SocialMedia;
