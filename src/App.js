import './normalize.css'
import './App.css'
import React, {useContext} from 'react'
import {Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WelcomePage from './pages/WelcomePage'
import Main from './pages/Main'
import GiftNotes from './pages/GiftNotes'
import GiftIdeas from './pages/GiftIdeas'
import Dates from './pages/Dates'
import { Context } from "./Context";

function App() {

    const context = useContext(Context)

  return (
    <div className="App">
        <Header />
      <div className='container'>
        <Routes>
          <Route exact path='/giftpad' element={context.isPinCorrect ? <Main/> : <WelcomePage />}/>
          {/* <Route exact path='/main' element={<Main />}/> */}
          <Route exact path='/gift-notes' element={<GiftNotes />}/>
          <Route exact path='/gift-ideas' element={<GiftIdeas />}/>
          <Route exact path='/dates' element={<Dates />}/>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App;
