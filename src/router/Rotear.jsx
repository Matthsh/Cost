import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contato from '../components/pages/Contato.jsx'
import Home from '../components/pages/Home.jsx'
import NewProject from '../components/pages/NewProject.jsx'
import Company from '../components/pages/Company.jsx'
import Header from '../components/layout/Header.jsx'
import Footer from '../components/layout/Footer.jsx'
import Container from '../components/layout/Container.jsx'

export default function Rotear() {
    return (
        <Router>
            <Header />
            <Container customClass="min-height">
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/company" element={<Company />}></Route>
                    <Route path="/contato" element={<Contato />}></Route>
                    <Route path="/newproject" element={<NewProject />}></Route>
                </Routes>
            </Container>
            <Footer/>
        </Router>
    )
}