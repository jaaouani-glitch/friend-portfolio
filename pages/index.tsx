import React               from 'react';
import { withRouter }      from 'next/router';
import { WithRouterProps } from 'next/dist/client/with-router';
import Slider              from 'react-slick';
import Link                from 'next/link';

import { TiArrowRight }    from 'react-icons/ti';

import Slide      from '../components/slide';
import Layout     from '../components/layout'
import home       from '../resources/images/home-image.png';
import android    from '../resources/images/android.png';

type State = { index: number };

class IndexPage extends React.Component<WithRouterProps, State> {
  constructor(props: any) { super(props);
    this.state      = { index: 0 };
    this.change     = this.change.bind(this);
  }

  change(index: number) { this.setState({ index: index }); }

  render() {
    const parameters: any = {
      dots            :false,     infinite     :true,
      speed           :200,       slidesToShow :1,
      slidesToScroll  :1,         vertical     :false,
      verticalSwiping :false,     arrows       :false
    };

    return(
      <Layout title="Nokta | An innovative & creative agency at your service." className="home-index" router={this.props.router}>
        <Slider {...parameters} afterChange={this.change}>
          <Slide>
            <div className="flex flex-col text-start">
              <div className="flex flex-row justify-start items-center"><hr className="home-bar"/>&nbsp;<p className="sub-title ml-2">France</p></div>
              <div className="flex flex-col text-start">
                <h1 className="main-title">Creative agency</h1>
                <p  className="description bg-white py-2 px-3 flex flex-col justify-center items-end text-justify">
                  We help brands connect with the new generation. We love challenges that demand technical solutions and original content. We transform ideas into successful projects.
                  <Link href="/about"><span className="link-about flex flex-row py-1 px-2">About Us &nbsp;<TiArrowRight color="#fff" size={20} /></span></Link>
                </p>
              </div>
            </div>
            <div className="cover-home"><img src={home} className="home-image" /></div>
          </Slide>
          <Slide>{ this.state.index === 1 && <img src={android} className="phone-mockup animated slideInRight" />}</Slide>
        </Slider>
      </Layout>
    );
  }
}

export default withRouter(IndexPage);
