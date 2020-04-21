import React                from 'react';
import Link                 from 'next/link';
import { NextRouter }       from 'next/router';

import logo        from '../resources/images/logo-white.png';

type Props = { router: NextRouter };

class Header extends React.Component<Props> {
    render() { const { pathname } = this.props.router!;
        return(
            <div className="header-global-default flex flex-row items-center justify-between py-2 px-10">
                <div className="flex flex-row justify-center items-center h-logo"><img src={logo} className="logo-header" />&nbsp;<p className="promo ml-2">Just imagine.</p></div>
                <ul className="flex flex-row">
                    <li className="flex flex-col justify-center items-center"><Link href="/"><span className="h-link">Home&nbsp;{ pathname === '/' && <hr className="bar" /> }</span></Link></li>
                    { pathname === '/' && <li className="flex flex-col justify-center items-center ml-2"><hr className="deco-bar" /></li>}
                    <li className="flex flex-col justify-center items-center ml-5"><Link href="/about"><span className="h-link">About&nbsp;{ pathname === '/about' && <hr className="bar" /> }</span></Link></li>
                    { pathname === '/' && <li className="flex flex-col justify-center items-center ml-2"><hr className="deco-bar" /></li>}
                    <li className="flex flex-col justify-center items-center ml-5"><Link href="/contact"><span className="h-link">Contact us.&nbsp;{ pathname === '/contact' && <hr className="bar" /> }</span></Link></li>
                </ul>
            </div>
        );
    }
}

export default Header;