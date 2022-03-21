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
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }
  onAuthChange=()=>{
    this.setState({isSignedIn:this.auth.isSignedIn.get()});
  };

  onSignIn=()=>{
     this.auth.signIn();
  };
  onSignOut=()=>{
    this.auth.signOut();
  };
  renderButton(){
    if(this.state.isSignedIn===null)
       return null;
     else if(this.state.isSignedIn)
        return (
          <button onClick={this.onSignOut} className="ui red google button">
              <i className="google icon"/>
              Sign Out
          </button>
        );
      else
         return (
           <button onClick={this.onSignIn} className="ui red google button">
               <i className="google icon"/>
               Sign In with google
           </button>
         );
  }
  render(){
    return <div>{this.renderButton()}</div>;
  }
}

export default GoogleAuth;
