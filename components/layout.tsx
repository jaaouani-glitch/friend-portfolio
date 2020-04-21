import React               from 'react';
import Head                from 'next/head';
import { NextRouter }      from 'next/router';

import Header     from './header';
import Footer     from './footer';


type Props = { title?: string, className?: string, router: NextRouter };

export default class Layout extends React.Component<Props> {
  render() {
  return(
    <div className={this.props.className}>
      <Head>
        <title>{this.props.title}</title>
        <meta   charSet="utf-8" />
        <meta   name="viewport"     content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header router={this.props.router} />
      {this.props.children}
      <Footer />
    </div>
  );
 }
}