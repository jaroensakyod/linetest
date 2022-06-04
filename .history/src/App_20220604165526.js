import logo from './logo.svg';
import './App.css';
import liff from '@line/liff';
import {userS}

function App() {
          const [pictureUrl, setPictureUrl] =useState(logo);

  return (
    <div className="App">
      <header className="App-header">
      <div style="text-align: center;">
          <h1>React with LINE Login</h1>
          <img src={pictureUrl} width="300px" height="300px"/>
          <p style={{textAlign: "left", marginLeft: "20%" , marginRight:"20%"}}><b>id token: </b> idToken: </p>
          <p style={{textAlign: "left", marginLeft: "20%" , marginRight:"20%"}}><b>display name: </b>displayName</p>
          <p style={{textAlign: "left", marginLeft: "20%" , marginRight:"20%"}}><b>status message: </b>statusMessage</p>
          <p style={{textAlign: "left", marginLeft: "20%" , marginRight:"20%"}}><b>user id: </b>userId</p>

          <button onClick={() => logout()} style={{width: "100%" , height: 30}}>Logout</button>
       </div>
      </header>
    </div>
  );
}

export default App;
