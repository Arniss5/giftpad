import './normalize.css'
import './App.css'
import Header from './components/Header'
import WelcomePage from './pages/WelcomePage'
import Main from './pages/Main'
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header />
        <Routes>
          <Route exact path='/' element={<WelcomePage />}/>
          <Route exact path='/main' element={<Main />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;
