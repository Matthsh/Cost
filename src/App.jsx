import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contato from './components/pages/Contato.jsx'
import Home from './components/pages/Home.jsx'
import Company from './components/pages/Company.jsx'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import Container from './components/layout/Container.jsx'
import Projects from './components/pages/Projects.jsx'
import NewProject from './components/pages/NewProject.jsx'
import Project from './components/pages/Project.jsx'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/company" element={<Company />}></Route>
            <Route path="/contato" element={<Contato />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/newproject" element={<NewProject />}></Route>
            <Route path="/project/:id" element={<Project />}></Route>
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  )
}

export default App
