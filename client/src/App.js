import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import config from './config.json';

class App extends Component {
  constructor() {
    super();
    this.state = { isAuthenticated: false, name: '', token: '' };
  }

  logout = () => {
    this.setState({ isAuthenticated: false, name: '', token: '' });
  };

  googleResponse = async response => {
    console.log(response);
  };

  onFailure = error => {
    alert(error);
  };

  render() {
    const { logout, googleResponse, onFailure } = this;
    const { isAuthenticated, name } = this.state;

    let content = isAuthenticated ? (
      <div>
        <p>Authenticated</p>
        <div>{name}</div>
        <div>
          <button onClick={logout} className='button'>
            Log out
          </button>
        </div>
      </div>
    ) : (
      <div>
        <GoogleLogin
          clientId={config.GOOGLE_CLIENT_ID}
          buttonText='Login'
          onSuccess={googleResponse}
          onFailure={onFailure}
        />
      </div>
    );

    return <div className='App'>{content}</div>;
  }
}

export default App;
