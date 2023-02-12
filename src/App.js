<<<<<<< Updated upstream
import logo from './logo.svg';
import './App.css';
=======
import './normalize.css'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import WelcomePage from './pages/WelcomePage'
import Main from './pages/Main'
import GiftNotes from './pages/GiftNotes'
import {Route, Routes} from 'react-router-dom'
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
<<<<<<< Updated upstream
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
        <Header />
      <div className='container'>
        <Routes>
          <Route exact path='/' element={<WelcomePage />}/>
          <Route exact path='/main' element={<Main />} />
          <Route path='/giftnotes' element={<GiftNotes />} />
        </Routes>
      </div>
      <Footer />
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
