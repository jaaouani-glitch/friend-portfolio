import React               from 'react';
import Lottie              from 'react-lottie';

import   animation         from '../resources/images/slide-animation.json';

export default class Footer extends React.Component {
    render() {
        return(
            <div className="footer-global-default flex flex-row justify-center items-center py-1 px-10">
                <p className="authors">Made by <a href="http://hamza-salhi.fr" target="_blank"><span className="author-link">Hamza Salhi</span></a></p>
                <Lottie options={{ loop: true, autoplay: true, animationData: animation, rendererSettings: { preserveAspectRatio: 'xMidYMid' }}} width={22} height={22} isStopped={false} isPaused={false} />
                <p className="copy">&copy; { new Date().getFullYear() } Nokta. All rights reserved.</p>
            </div>
        );
    }
}