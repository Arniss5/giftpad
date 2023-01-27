import './normalize.css'
import './App.css';
import Header from './components/Header';
import WelcomePage from './pages/WelcomePage';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header />
        <WelcomePage />
      </div>
    </div>
  );
}

export default App;
