import React from 'react';

class GoogleAuth extends React.Component{
  state={isSignedIn:null}
  componentDidMount(){
    window.gapi.load('client:auth2',()=>{
      window.gapi.client.init({
        clientId:'166086071208-hukqh8jdoeegtg30l7dm71buoln6i60e.apps.googleusercontent.com',
        scope:'email'
      }).then(()=>{
        this.auth=window.gapi.auth2.getAuthInstance();
        this.setState({isSignedIn:this.auth.isSignedIn.get()});
      });
    });
  }

  renderButton(){
    if(this.state.isSignedIn==null)
       return <div>I don't know</div>;
     else if(this.state.isSignedIn==null)
        return <div>I am not signed in</div>;
      else
         return <div>I am not signed in</div>
  }
  render(){
    return <div>{this.renderButton()}</div>;
  }
}

export default GoogleAuth;
