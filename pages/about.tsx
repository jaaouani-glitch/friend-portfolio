import React               from 'react';
import { withRouter }      from 'next/router';
import { WithRouterProps } from 'next/dist/client/with-router';

import Layout     from '../components/layout'
import profile    from '../resources/images/profile.jpg';

class AboutPage extends React.Component<WithRouterProps> {
  render() {
    return(
      <Layout title="About | We provide a quality service to all your desires." className="about-index" router={this.props.router}>
        <div className="about-div px-10 justify-start flex flex-col items-center py-5">
          <img src={profile} className="profile-image" />
          <p className="self-description mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ex velit, iaculis ac enim vel, volutpat placerat arcu. Nam vitae tellus cursus, ultricies elit eu, fermentum ligula. 
            Praesent convallis ante tincidunt nulla fringilla, vel accumsan odio interdum. Etiam ac turpis neque. Nullam venenatis nunc vel turpis facilisis maximus. Ut iaculis turpis et ex sagittis, 
            vel tincidunt tellus egestas. Nunc eu est ut augue tempor finibus eu ac nisl. </p>
        </div>
      </Layout>
    );
  }
}

export default withRouter(AboutPage);
