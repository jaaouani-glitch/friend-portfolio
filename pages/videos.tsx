import React               from 'react';
import { withRouter }      from 'next/router';
import { WithRouterProps } from 'next/dist/client/with-router';
import Slider              from 'react-slick';
import Youtube             from 'react-youtube';

import Slide      from '../components/slide';
import Layout     from '../components/layout'

import logo       from '../resources/images/logo.png';

type State = { index: number, open: boolean };

class VideoPage extends React.Component<WithRouterProps, State> {
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
       'lu6TnrYvXk8',
       'SsPQkgHbKOI',
       'hZ2H6-_D1'
    ];
    
    return(
      <Layout title="Nokta | An innovative & creative agency at your service." className="home-index" router={this.props.router}>
        <img src={logo} className="logo-mobile-video" />
        <Slider {...parameters} afterChange={this.change}>
          <Slide>
            <div className="flex flex-col text-start w-full h-full">
              { this.state.index === 0 && 
                <div className="w-full h-full flex flex-row justify-end items-start px-20 mobile-align">
                  <div className="flex flex-col justify-center items-center w-full h-full hey-mobile">
                    <span className="title-v-done">FOOD TRUC<span className="text-white">K</span></span>
                    <p className="slide-v-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae porta erat</p>
                  </div>
                  <Youtube videoId={slides[0]} containerClassName="animated slideInRight slide-box-video" opts={{ width: '100%', playerVars: { autoplay: 0 } }} />
                </div>
              }
            </div>
          </Slide>
          <Slide>
            <div className="flex flex-col text-start w-full h-full">
              { this.state.index === 1 && 
                <div className="w-full h-full flex flex-row justify-end items-start px-20 mobile-align">
                  <div className="flex flex-col justify-center items-center w-full h-full hey-mobile">
                    <span className="title-v-done">Caillou</span>
                    <p className="slide-v-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae porta erat</p>
                  </div>
                  <Youtube videoId={slides[1]} containerClassName="animated slideInRight slide-box-video" opts={{ width: '100%', playerVars: { autoplay: 0 } }} />
                </div>
              }
            </div>
          </Slide>
          <Slide>
            <div className="flex flex-col text-start w-full h-full">
              { this.state.index === 2 && 
                <div className="w-full h-full flex flex-row justify-end items-start px-20 mobile-align">
                  <div className="flex flex-col justify-center items-center w-full h-full hey-mobile">
                    <span className="title-v-done">Caillou</span>
                    <p className="slide-v-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae porta erat</p>
                  </div>
                  <Youtube videoId={slides[2]} containerClassName="animated slideInRight slide-box-video" opts={{ width: '100%', playerVars: { autoplay: 0 } }} />
                </div>
              }
            </div>
          </Slide>
        </Slider>
      </Layout>
    );
  }
}

export default withRouter(VideoPage);
