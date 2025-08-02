import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

// Import core pages that we know work
import Home from './pages/Home'
import About from './pages/About'
import Competition from './pages/Competition'
import GetInvolved from './pages/GetInvolved'
import Perks from './pages/Perks'
import SixthForm from './pages/SixthForm'
import Volunteer from './pages/Volunteer'
import IsItIglooCode from './pages/IsItIglooCode'
import Teachers from './pages/Teachers'

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/getinvolved" element={<GetInvolved />} />
          <Route path="/getinvolved/sixthform" element={<SixthForm />} />
          <Route path="/getinvolved/teachers" element={<Teachers />} />
          <Route path="/perks" element={<Perks />} />
          <Route path="/isitigloocode" element={<IsItIglooCode />} />
          <Route path="/f/volunteer" element={<Volunteer />} />
        </Routes>
      </Router>
    </HelmetProvider>
  )
}

export default App
