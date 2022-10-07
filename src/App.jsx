import './App.css';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header';

function App() {

  return (
    <div className="App">
      <Header/>
      <div className="App-header">
        <Outlet/>
      </div>
    </div>
  );
}

export default App;
