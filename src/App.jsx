import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Reviews from './pages/Reviews'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Reviews />} />
      </Routes>
    </Router>
  )
}

export default App
