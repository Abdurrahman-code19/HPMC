import { Link } from 'react-router-dom'
import { services, loanProducts, tagline } from '../data/websiteData'

const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSc2zhTuP8v43Pz2rtzSnP-c4HDhMytMsHADksDExt6g-_j8pQ/viewform?pli=1"

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-yellow-400 font-medium mb-2 tracking-wide">{tagline}</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Comprehensive Sharia-compliant financial services designed for our community
          </p>
        </div>
      </section>

      {/* Loan Products Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Loan Products</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All our loans are Sharia-compliant - no interest (Riba), transparent terms, and ethical financing
            </p>
          </div>

          <div className="space-y-8">
            {loanProducts.map((loan, index) => (
              <div 
                key={loan.id} 
                className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:flex">
                  <div className="lg:w-1/3 bg-gradient-to-br from-primary to-primary-dark p-8 text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                      <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">{loan.category}</span>
                    <h3 className="font-heading text-2xl font-bold mt-2 mb-4">{loan.name}</h3>
                    <p className="text-white/80 mb-6">{loan.shortDesc}</p>
                    <Link to="/loans" className="inline-block bg-yellow-400 text-primary px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-all">
                      View Loan Details
                    </Link>
                  </div>
                  <div className="lg:w-2/3 p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-lg mb-3 text-primary">Purpose</h4>
                        <p className="text-gray-600 text-sm">{loan.purpose}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-3 text-primary">Structure</h4>
                        <p className="text-gray-600 text-sm">{loan.structure}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-3 text-primary">Key Details</h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                          <li><span className="font-semibold">Profit Markup:</span> {loan.profitMarkup}</li>
                          <li><span className="font-semibold">Amount:</span> {loan.maxAmount}</li>
                          <li><span className="font-semibold">Tenure:</span> {loan.tenure}</li>
                          {loan.disbursement && <li><span className="font-semibold">Disbursement:</span> {loan.disbursement}</li>}
                          {loan.minInvestment && <li><span className="font-semibold">Min. Investment:</span> {loan.minInvestment}</li>}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-3 text-primary">Sharia Compliance</h4>
                        <p className="text-gray-600 text-sm">{loan.shariaCompliance}</p>
                        {loan.specialFeature && (
                          <p className="text-sm text-primary mt-2 font-medium">{loan.specialFeature}</p>
                        )}
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t">
                      <h4 className="font-bold text-primary mb-2">Requirements</h4>
                      <p className="text-gray-600 text-sm">{loan.requirements}</p>
                      <p className="text-sm text-gray-500 mt-2"><span className="font-semibold">Eligibility:</span> {loan.eligibility}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Additional Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Beyond loans, we offer a range of services to support our members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.filter(s => s.id > 2).map((service) => (
              <div key={service.id} className="bg-cream rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-2 group">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <svg className="w-7 h-7 text-primary group-hover:text-yellow-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {service.icon === 'savings' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />}
                    {service.icon === 'business' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />}
                    {service.icon === 'hajj' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />}
                    {service.icon === 'education' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />}
                    {service.icon === 'health' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />}
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">Ready to Access Our Services?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join HPMC today and start enjoying our comprehensive range of Sharia-compliant services
          </p>
          <a href={googleFormLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-yellow-400 text-primary px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-all hover:scale-105">
            Apply for Membership
          </a>
        </div>
      </section>
    </div>
  )
}
