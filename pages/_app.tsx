import React        from 'react';
import { AppProps } from 'next/app';

import '../stylesheets/home.scss';
import '../stylesheets/videos.scss';
import '../stylesheets/about.scss';

export default function Application({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}