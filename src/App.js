import './normalize.css'
import './App.css'
import React, {useContext} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import WelcomePage from './pages/WelcomePage'
import Main from './pages/Main'
import { Context } from "./Context";
import {Route, Routes} from 'react-router-dom'

function App() {

    const context = useContext(Context)

  return (
    <div className="App">
        <Header />
      <div className='container'>
        <Routes>
          <Route exact path='/' element={context.isPinCorrect ? <Main/> : <WelcomePage />}/>
          {/* <Route exact path='/main' element={<Main />}/> */}
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App;
