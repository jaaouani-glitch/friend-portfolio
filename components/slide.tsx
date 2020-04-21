import React, { ReactNode } from 'react';

type Props = { children?: ReactNode };

export default class Slide extends React.Component<Props> {
    render() {
        return(
            <div className='slide-home flex flex-row justify-around items-center'>
                { this.props.children }
            </div>
        );
    }
}