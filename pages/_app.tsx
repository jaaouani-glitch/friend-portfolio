import React        from 'react';
import { AppProps } from 'next/app';

import '../stylesheets/home.scss';
import '../stylesheets/about.scss';
import '../stylesheets/contact.scss';

export default function Application({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}