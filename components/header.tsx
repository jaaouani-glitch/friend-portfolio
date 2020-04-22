import React                from 'react';
import Link                 from 'next/link';
import { NextRouter }       from 'next/router';

import logo        from '../resources/images/logo.png';

type Props = { router: NextRouter };

class Header extends React.Component<Props> {
    render() { const { pathname } = this.props.router!;
        return(
            <div className="header-global-default flex flex-row items-center justify-between py-2 px-10">
                <div className="flex flex-row justify-center items-center h-logo"><img src={logo} className="logo-header" />&nbsp;<p className="promo ml-2">Just imagine.</p></div>
                <ul className="flex flex-row">
                    <li className="flex flex-col justify-center items-center"><Link href="/"><span className="h-link">Graphisme&nbsp;{ pathname === '/' && <hr className="bar" /> }</span></Link></li>
                    <li className="flex flex-col justify-center items-center ml-3"><Link href="/videos"><span className="h-link">Audiovisuel&nbsp;{ pathname === '/videos' && <hr className="bar" /> }</span></Link></li>
                </ul>
                <ul className="flex flex-row">
                    <li className="flex flex-col justify-center items-center ml-3"><Link href="/about"><span className="h-link">Moi&nbsp;{ pathname === '/about' && <hr className="bar" /> }</span></Link></li>
                </ul>
            </div>
        );
    }
}

export default Header;