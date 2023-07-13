import Signin from './pages/Signin/Signin';
import Login from './pages/Login/Login';
import Left from './pages/Main/Left/Left';
import Body from './pages/Main/Body/Body';
import Right from './pages/Main/Right/Right';
import './App.css';

function App() {
  return (
    <div className='AppContainer'>
      <Left/>
      <Body/>
      <Right/>
    </div>
  );
}

export default App;
