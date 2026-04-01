import { useState } from 'react'
import { tagline } from '../data/websiteData'

const tabs = [
  { id: 'history', label: 'Our History' },
  { id: 'leadership', label: 'Leadership' },
]

const executiveTeam = [
  { name: 'Obasanjo Ambali', surname: 'Salaudeen', position: 'PRESIDENT', years: '15+ years', initials: 'OAS' },
  { name: 'Olaleye', surname: 'Muhammad', position: 'VICE-PRESIDENT', years: '12+ years', initials: 'OM' },
  { name: 'Badmus Shuaib', surname: 'Alani', position: 'HEAD OF FINANCE', years: '10+ years', initials: 'BSA' },
  { name: 'Ojegbede', surname: 'AbdulKabir', position: 'FINANCE II', years: '8+ years', initials: 'OA' },
  { name: 'Oriolowo Obasanjo', surname: 'Saeed', position: 'HEAD OF IT', years: '8+ years', initials: 'OO' },
  { name: 'Idris Jamiu', surname: 'Abiodun', position: 'IT II', years: '5+ years', initials: 'IJA' },
  { name: 'Muhammad Nasir', surname: 'Ibrahim', position: 'LEGAL ADVISER', years: '10+ years', initials: 'MNI' },
  { name: 'Ayoniyi', surname: 'Abd.Rasheed', position: 'EXECUTIVE MEMBER', years: '7+ years', initials: 'AA' },
  { name: 'Ellas', surname: 'Lawal', position: 'EXECUTIVE MEMBER', years: '6+ years', initials: 'EL' },
  { name: 'Abdus-salaam', surname: 'Nafiu O.', position: 'EXECUTIVE MEMBER', years: '5+ years', initials: 'AN' },
]

const itTeam = [
  { name: 'Oriolowo Obasanjo', surname: 'Saeed', position: 'HEAD OF IT', years: '8+ years', initials: 'OO' },
  { name: 'Idris Jamiu', surname: 'Abiodun', position: 'IT II', years: '5+ years', initials: 'IJA' },
]

const legalTeam = [
  { name: 'Muhammad Nasir', surname: 'Ibrahim', position: 'LEGAL ADVISER', years: '10+ years', initials: 'MNI' },
]

const executiveMembers = [
  { name: 'Ellas', surname: 'Lawal', position: 'EXECUTIVE MEMBER', years: '6+ years', initials: 'EL' },
  { name: 'Abdus-salaam', surname: 'Nafiu O.', position: 'EXECUTIVE MEMBER', years: '5+ years', initials: 'AN' },
]

function LeaderCard({ person, size = 'normal' }) {
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group ${size === 'large' ? 'max-w-sm mx-auto' : ''}`}>
      <div className="relative mb-4">
        <div className="w-32 h-32 mx-auto rounded-full border-4 border-yellow-400 overflow-hidden bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg group-hover:shadow-yellow-400/30">
          <span className="text-3xl font-bold text-yellow-400">{person.initials}</span>
        </div>
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
      </div>
      <h3 className="font-heading font-bold text-lg text-gray-800 mb-1 group-hover:text-primary transition-colors">
        {person.name}
      </h3>
      <p className="font-heading font-bold text-lg text-gray-800 mb-2">{person.surname}</p>
      <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">{person.position}</p>
      <p className="text-gray-500 text-sm mb-4">{person.years} experience</p>
      <div className="flex items-center justify-center gap-3">
        <a href="#" className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all group/icon">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
        <a href={`mailto:${person.name.toLowerCase().replace(' ', '.')}@hpmc.coop`} className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all group/icon">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
        </a>
      </div>
    </div>
  )
}

function TeamSection({ title, subtitle, members, variant = 'default' }) {
  return (
    <div className={`mb-12 ${variant === 'highlight' ? 'bg-gradient-to-br from-primary/5 to-transparent rounded-2xl p-8' : ''}`}>
      <div className="text-center mb-8">
        <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-2">{title}</h3>
        {subtitle && <p className="text-gray-600">{subtitle}</p>}
        <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
      </div>
      <div className={`grid gap-6 ${
        members.length === 1 
          ? 'max-w-sm mx-auto' 
          : members.length === 2 
            ? 'md:grid-cols-2 max-w-2xl mx-auto' 
            : 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'
      }`}>
        {members.map((person, index) => (
          <div key={index} className="animate-fadeInUp" style={{ animationDelay: `${index * 100}ms` }}>
            <LeaderCard person={person} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('history')

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400 rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-yellow-400 font-medium mb-2 tracking-wide">{tagline}</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Learn about our mission, values, and the dedicated team driving HPMC forward
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          {activeTab === 'history' && (
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl font-bold mb-6 text-center">Our Story</h2>
              <div className="prose prose-lg">
                <p className="text-gray-600 mb-6">
                  HPMC was founded with a vision to create a financial cooperative that operates 
                  in full compliance with Islamic Sharia principles. Based in Jos, Plateau State, Nigeria, 
                  we have grown from a small group of dedicated members to a thriving cooperative society.
                </p>
                <p className="text-gray-600 mb-6">
                  Our founding principles center on transparency, mutual assistance, and ethical financial 
                  practices. We believe that financial inclusion should never compromise one's religious 
                  beliefs or values. That's why we've built an institution that serves our community through 
                  halal means.
                </p>
                <p className="text-gray-600 mb-6">
                  Registered under the Plateau State Ministry of Commerce with license number PL22620, 
                  HPMC has consistently demonstrated commitment to regulatory compliance and community service.
                </p>
                
                <div className="bg-white rounded-2xl p-8 shadow-lg mt-8 border-l-4 border-yellow-400">
                  <h3 className="font-heading text-2xl font-bold mb-4 text-yellow-600">Our Vision</h3>
                  <p className="text-gray-600 italic">
                    "To achieve a sustainable social and economic empowerment for all members by investing collective savings into high-growth, viable business ventures."
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg mt-8 border-l-4 border-primary">
                  <h3 className="font-heading text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                  <p className="text-gray-600 italic">
                    "To build a diverse investment portfolio across multiple sectors within Nigeria and internationally, ensuring consistent returns and wealth distribution for every members' prosperity."
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg mt-8">
                  <h3 className="font-heading text-2xl font-bold mb-4">Core Values</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {['Integrity', 'Transparency', 'Community', 'Excellence', 'Sharia Compliance', 'Mutual Support'].map((value, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-cream rounded-lg">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        </div>
                        <span className="font-medium text-gray-700">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'leadership' && (
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Our Leadership Team</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Meet the dedicated professionals driving HPMC's mission towards sustainable social and economic empowerment
                </p>
              </div>

              {/* Executive Leadership Team */}
              <TeamSection 
                title="Executive Leadership Team" 
                subtitle="Steering HPMC towards excellence"
                members={executiveTeam}
              />

              {/* IT & Technology Team */}
              <TeamSection 
                title="IT & Technology Team" 
                subtitle="Powering our digital transformation"
                members={itTeam}
                variant="highlight"
              />

              {/* Legal & Advisory Team */}
              <TeamSection 
                title="Legal & Advisory Team" 
                subtitle="Ensuring compliance and governance"
                members={legalTeam}
              />

              {/* Executive Members */}
              <TeamSection 
                title="Executive Members" 
                subtitle="Contributing to our collective success"
                members={executiveMembers}
                variant="highlight"
              />

              {/* Join CTA */}
              <div className="text-center mt-16 bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-12 text-white">
                <h3 className="font-heading text-2xl font-bold mb-4">Want to Join Our Team?</h3>
                <p className="text-white/80 mb-6 max-w-lg mx-auto">
                  We're always looking for dedicated professionals who share our vision. Explore opportunities at HPMC.
                </p>
                <a href="/contact" className="inline-block bg-yellow-400 text-primary px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-all hover:scale-105">
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
