// import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Main from './Components/Main';

function App() {
  return (
    <div className='page-container'>
      <div className='appSideBar'>
        <Sidebar/>
      </div>
      <div className='appHeader'>
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
