import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./lib/ScrollToTop";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import Competition from "./pages/Competition";
import GetInvolved from "./pages/GetInvolved";
import Perks from "./pages/Perks";
import SixthForm from "./pages/SixthForm";
import Teachers from "./pages/Teachers";
import Volunteer from "./pages/Volunteer";

function App(): JSX.Element {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourstory" element={<OurStory />} />
        <Route path="/competition" element={<Competition />} />
        <Route path="/getinvolved" element={<GetInvolved />} />
        <Route path="/getinvolved/sixthform" element={<SixthForm />} />
        <Route path="/getinvolved/teachers" element={<Teachers />} />
        <Route path="/perks" element={<Perks />} />
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>
    </>
  );
}

export default App;
