
import React               from 'react';
import { withRouter }      from 'next/router';
import { WithRouterProps } from 'next/dist/client/with-router';
import Slider              from 'react-slick';
import Link                from 'next/link';
//@ts-ignore
import Typical             from 'react-typical';
import { TiArrowRight }    from 'react-icons/ti';
import Lightbox            from 'react-image-lightbox';

import Slide      from '../components/slide';
import Layout     from '../components/layout'
import home       from '../resources/images/home-image.png';

import image0     from '../resources/images/image-0.png';
import image1     from '../resources/images/image-1.jpg';
import image2     from '../resources/images/image-2.jpg';
import logo       from '../resources/images/logo.png';

type State = { index: number, open: boolean };

class IndexPage extends React.Component<WithRouterProps, State> {
  constructor(props: any) { super(props);
    this.state      = { index: 0, open: false };
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

    const slides: any     = [
       home,
       image0,
       image1,
       image2
    ];
    
    return(
      <Layout title="Nokta | An innovative & creative agency at your service." className="home-index" router={this.props.router}>
        <img src={logo} className="logo-mobile" />
        { this.state.open && this.state.index != 0 && <Lightbox mainSrc={slides[this.state.index]} onCloseRequest={() => { this.setState({ open: false }) }} />}
        <Slider {...parameters} afterChange={this.change}>
          <Slide>
            <div className="flex flex-col text-start">
              <div className="flex flex-row justify-start items-center"><p className="sub-title ml-2">France</p></div>
              <div className="flex flex-col text-start">
                <h1 className="main-title"><span className="d-home flex flex-row justify-between items-center bg-transparent"><hr className="home-bar bg-transparent px-16"/>&nbsp;Mon</span> <br /><span className="c-space ml-3">
                  <Typical steps={[ 'Workshop', 3000, 'portfolio', 2000 ]} wrapper={"p"} loop={1} /></span></h1>
                <p  className="description bg-white py-2 px-3 flex flex-col justify-center items-end text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae porta erat, eget aliquet felis. Phasellus vestibulum molestie sapien sit amet dignissim.
                  <Link href="/about"><span className="link-about flex flex-row py-1 px-2">About me &nbsp;<TiArrowRight color="#fff" size={20} /></span></Link>
                </p>
              </div>
            </div>
            <div className="cover-home"><span className="title-bg ml-2">Creati<span className="text-white">on</span></span><img src={slides[0]} className="home-image" /></div>
          </Slide>
          <Slide>
            <div className="flex flex-col text-start w-full h-full">
              { this.state.index === 1 && 
                <div className="w-full h-full flex flex-row justify-end items-start px-20 mobile-align">
                  <div className="flex flex-col justify-center items-center w-full h-full">
                    <span className="title-done">FOOD TRUCK</span>
                    <p className="slide-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae porta erat</p>
                  </div>
                  <img src={slides[1]} className="animated slideInRight slide-box-image" onClick={() => { this.setState({ open: true }); }} />
                </div>
              }
            </div>
          </Slide>
          <Slide>
            <div className="flex flex-col text-start w-full h-full">
              { this.state.index === 2 && 
                <div className="w-full h-full flex flex-row justify-end items-start px-20 mobile-align">
                  <div className="flex flex-col justify-center items-center w-full h-full">
                    <span className="title-done">Caillou</span>
                    <p className="slide-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae porta erat</p>
                  </div>
                  <img src={slides[2]} className="animated slideInRight slide-box-image" onClick={() => { this.setState({ open: true }); }}  />
                </div>
              }
            </div>
          </Slide>
          <Slide>
            <div className="flex flex-col text-start w-full h-full">
              { this.state.index === 3 && 
                <div className="w-full h-full flex flex-row justify-end items-start px-20 mobile-align">
                  <div className="flex flex-col justify-center items-center w-full h-full">
                    <span className="title-done">La nuitée</span>
                    <p className="slide-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae porta erat</p>
                  </div>
                  <img src={slides[3]} className="animated slideInRight slide-box-image" onClick={() => { this.setState({ open: true }); }} />
                </div>
              }
            </div>
          </Slide>
        </Slider>
      </Layout>
    );
  }
}

export default withRouter(IndexPage);
