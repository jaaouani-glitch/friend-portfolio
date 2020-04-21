import React               from 'react';
import { withRouter }      from 'next/router';
import { WithRouterProps } from 'next/dist/client/with-router';

import Layout     from '../components/layout'

class AboutPage extends React.Component<WithRouterProps> {
  render() {
    return(
      <Layout title="About | We provide a quality service to all your desires." className="about-index" router={this.props.router}>
      </Layout>
    );
  }
}

export default withRouter(AboutPage);
