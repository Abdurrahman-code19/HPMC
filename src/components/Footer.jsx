import { Link } from 'react-router-dom'
import { tagline } from '../data/websiteData'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About HPMC */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="/hpmc-logo.jpg" alt="HPMC Logo" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h3 className="font-heading font-bold text-lg">HPMC</h3>
                <p className="text-xs text-gray-400">Halal Progressive MPCS</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 italic">
              "{tagline}"
            </p>
            <div className="space-y-2 text-sm text-gray-500">
              <p>Licensed Cooperative</p>
              <p className="text-yellow-400 font-semibold">PL22620</p>
              <p>Since 2014</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { path: '/', label: 'Home' },
                { path: '/about', label: 'About Us' },
                { path: '/services', label: 'Services' },
                { path: '/faq', label: 'FAQs' },
                { path: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-yellow-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Savings & Investment',
                'Business Loans',
                'Qard-al-Hasan',
                'EasyBuy Scheme',
                'Emergency Loans',
                'Hajj Packages'
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-yellow-400">📍</span>
                <span>
                  37/2 Farinwata Duba Gari Street,<br />
                  Jos North LGA,<br />
                  Plateau State
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-yellow-400">📞</span>
                <div>
                  <p>08067170641</p>
                  <p>08069581873</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-yellow-400">✉️</span>
                <span>info@myhalalcooperative.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="font-heading font-semibold mb-4">Follow Us</h4>
              <a
                href="https://www.facebook.com/share/1GNTbAJgL7/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 RIIT Global Tech. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mt-2 text-sm text-gray-600">
            <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
