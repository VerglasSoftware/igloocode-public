import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

// Import core pages that we know work
import Home from './pages/Home'
import About from './pages/About'
import Competition from './pages/Competition'
import Team from './pages/Team'
import GetInvolved from './pages/GetInvolved'
import Perks from './pages/Perks'
import SixthForm from './pages/SixthForm'
import Volunteer from './pages/Volunteer'
import SchoolInterest from './pages/SchoolInterest'
import Team2022 from './pages/Team2022'
import IsItIglooCode from './pages/IsItIglooCode'
import TeacherFeedback from './pages/TeacherFeedback'
import VolunteerFeedback from './pages/VolunteerFeedback'
import Teachers from './pages/Teachers'

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team2022" element={<Team2022 />} />
          <Route path="/getinvolved" element={<GetInvolved />} />
          <Route path="/getinvolved/sixthform" element={<SixthForm />} />
          <Route path="/getinvolved/teachers" element={<Teachers />} />
          <Route path="/perks" element={<Perks />} />
          <Route path="/isitigloocode" element={<IsItIglooCode />} />
          <Route path="/f/volunteer" element={<Volunteer />} />
          <Route path="/f/school-interest" element={<SchoolInterest />} />
          <Route path="/teacherfeedback" element={<TeacherFeedback />} />
          <Route path="/volunteerfeedback" element={<VolunteerFeedback />} />
        </Routes>
      </Router>
    </HelmetProvider>
  )
}

export default App
