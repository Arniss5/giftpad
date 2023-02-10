import './normalize.css'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import WelcomePage from './pages/WelcomePage'
import Main from './pages/Main'
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Header />
      <div className='container'>
        <Routes>
          <Route exact path='/' element={<WelcomePage />}/>
          <Route exact path='/main' element={<Main />}/>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App;
