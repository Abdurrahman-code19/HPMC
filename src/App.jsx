import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import FAQPage from './pages/FAQPage'
import ContactPage from './pages/ContactPage'
import MembershipPage from './pages/MembershipPage'
import LoanDetailsPage from './pages/LoanDetailsPage'
import EasyBuyPage from './pages/EasyBuyPage'
import ResourcesPage from './pages/ResourcesPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="loans" element={<LoanDetailsPage />} />
          <Route path="loan-details" element={<LoanDetailsPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="membership" element={<MembershipPage />} />
          <Route path="easy-buy" element={<EasyBuyPage />} />
          <Route path="resources" element={<ResourcesPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
