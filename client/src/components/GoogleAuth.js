import React from 'react';

class GoogleAuth extends React.Component{
  componentDidMount(){
    window.gapi.load('client:auth2',()=>{
      window.gapi.client.init({
        clientId:'166086071208-hukqh8jdoeegtg30l7dm71buoln6i60e.apps.googleusercontent.com',
        scope:'email'
      });
    });
  }
  render(){
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
