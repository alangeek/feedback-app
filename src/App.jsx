import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { FeedbackProvider } from './context/FeedbackContext'

import { Home } from './pages/Home'
import { AboutPage } from './pages/AboutPage'
import { Header } from './components/Header'

export const App = () => {

  return (
    <FeedbackProvider>
      <Router>
        <Header  />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<AboutPage />}/>
        </Routes>
      </Router>
    </FeedbackProvider>
  )
}

