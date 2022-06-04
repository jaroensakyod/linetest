import logo from './logo.svg';
import './App.css';
import liff from '@line/liff';

function App() {
          const []
  return (
    <div className="App">
      <header className="App-header">
      <div style="text-align: center;">
          <h1>React with LINE Login</h1>
          <hr>
          <img src={pictureUrl} width="300px" height="300px"/>
          <p style=text-align: left; margin-left: 20%;><b>id token: </b> {{ idToken }}</p>
          <p style=text-align: left; margin-left: 20%;><b>display name: </b> {{ displayName }}</p>
          <p style=text-align: left; margin-left: 20%;><b>status message: </b> {{ statusMessage }}</p>
          <p style=text-align: left; margin-left: 20%;><b>user id: </b> {{ userId }}</p>

          <button (click)="logout()" style="width: 100%; height: 30px;">Logout</button>
       </div>
      </header>
    </div>
  );
}

export default App;
