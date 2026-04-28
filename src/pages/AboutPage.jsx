import { useState, useEffect } from 'react'
import { tagline } from '../data/websiteData'

const tabs = [
  { id: 'history', label: 'Our History' },
  { id: 'leadership', label: 'Leadership' },
]

const itTeam = [
  { name: 'Oriolowo Obasanjo', surname: 'Saeed', position: 'HEAD OF IT', years: '8+ years', initials: 'OO', image: '/Oriolowo IT department.jpeg' },
  { name: 'Idris Jamiu', surname: 'Abiodun', position: 'IT II', years: '5+ years', initials: 'IJA', image: '/Idris Jamiu, IT department.jpeg' },
]

const legalTeam = [
  { name: 'Muhammad Nasir', surname: 'Ibrahim', position: 'LEGAL ADVISER', years: '10+ years', initials: 'MNI', image: '/Nasir, legal Adviser.jpeg' },
]

const executiveMembers = [
  { name: 'Bro Elias', surname: 'Lawal', position: 'EXECUTIVE MEMBER', years: '6+ years', initials: 'EL', image: '/Bro Elias.jpeg' },
  { name: 'Engr. Awoniyi', surname: 'Abd. Rasheed', position: 'EXECUTIVE MEMBER', years: '7+ years', initials: 'AA', image: '/Awoniyi - Executive member.jpeg' },
  { name: 'Missionary Nafiu', surname: 'Nafiu O.', position: 'EXECUTIVE MEMBER', years: '5+ years', initials: 'AN', image: '/Missionary Nafiu.jpeg' },
]

function LeaderCard({ person, size = 'normal' }) {
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group ${size === 'large' ? 'max-w-sm mx-auto' : ''}`}>
      <div className="relative mb-4">
        {person.image ? (
          <img 
            src={person.image} 
            alt={person.name}
            className="w-32 h-32 mx-auto rounded-full border-4 border-yellow-400 object-cover bg-gradient-to-br from-primary to-primary-dark"
          />
        ) : (
          <div className="w-32 h-32 mx-auto rounded-full border-4 border-yellow-400 overflow-hidden bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg group-hover:shadow-yellow-400/30">
            <span className="text-3xl font-bold text-yellow-400">{person.initials}</span>
          </div>
        )}
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

const milestones = [
  { year: '2014', title: 'Founded', subtitle: 'with 50 Members' },
  { year: '2016', title: '100 Members', subtitle: 'First Loan Disbursed' },
  { year: '2018', title: '500 Members', subtitle: 'First AGM Held' },
  { year: '2020', title: '₦500M Disbursed', subtitle: 'Milestone' },
  { year: '2024', title: '2,500+ Members', subtitle: 'Reached' }
]

const historyContent = [
  { year: '2014', title: 'The Beginning', content: 'HPMC was established with just 50 members with a vision to provide Sharia-compliant financial services to our community. Starting as a small cooperative in Jos, we aimed to address the financial needs of Muslims who sought ethical banking alternatives.' },
  { year: '2016', title: 'First Major Milestone', content: 'Reached 100 active members and disbursed our first loan. We introduced the Micro Business Loan product to support small entrepreneurs in the market.' },
  { year: '2018', title: 'Growing Impact', content: 'Membership grew to 500+ members. We launched our Business Growth Loan and held our first Annual General Meeting, establishing strong governance structures.' },
  { year: '2020', title: 'COVID Resilience', content: 'Despite the pandemic, we disbursed over ₦500 million in loans. We introduced relief packages and extended repayment periods for affected members.' },
  { year: '2022', title: 'Digital Transformation', content: 'Launched our online membership portal and introduced the Easy Buy program for household items and electronics.' },
  { year: '2024', title: 'Today', content: 'Now with 2,500+ members, HPMC continues to expand. We offer services including loans, savings, Hajj packages, and business development training.' }
]

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('history')

  useEffect(() => {
    if (window.location.hash === '#leadership') {
      setActiveTab('leadership')
      setTimeout(() => {
        document.getElementById('leadership')?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [])

  const executiveTeam = [
    { name: 'Obasanjo Ambali', surname: 'Salaudeen', position: 'PRESIDENT', years: '15+ years', initials: 'OAS', image: '/President.jpeg' },
    { name: 'Olaleye', surname: 'Muhammad', position: 'VICE-PRESIDENT', years: '12+ years', initials: 'OM', image: '/Olaleye Muhammad - Vice President.jpeg' },
    { name: 'Badmus Shuaib', surname: 'Alani', position: 'HEAD OF FINANCE', years: '10+ years', initials: 'BSA', image: '/Shuaib.jpeg' },
    { name: 'Ojegbede', surname: 'AbdulKabir', position: 'FINANCE II', years: '8+ years', initials: 'OA', image: '/Ojengbede - Finance II.jpeg' },
    { name: 'Oriolowo Obasanjo', surname: 'Saeed', position: 'HEAD OF IT', years: '8+ years', initials: 'OO', image: '/Oriolowo IT department.jpeg' },
    { name: 'Idris Jamiu', surname: 'Abiodun', position: 'IT II', years: '5+ years', initials: 'IJA', image: '/Idris Jamiu, IT department.jpeg' },
    { name: 'Muhammad Nasir', surname: 'Ibrahim', position: 'LEGAL ADVISER', years: '10+ years', initials: 'MNI', image: '/Nasir, legal Adviser.jpeg' },
    { name: 'Engr. Awoniyi', surname: 'Abd. Rasheed', position: 'EXECUTIVE MEMBER', years: '7+ years', initials: 'AA', image: '/Awoniyi - Executive member.jpeg' },
    { name: 'Bro Elias', surname: 'Lawal', position: 'EXECUTIVE MEMBER', years: '6+ years', initials: 'EL', image: '/Bro Elias.jpeg' },
    { name: 'Missionary Nafiu', surname: 'Nafiu O.', position: 'EXECUTIVE MEMBER', years: '5+ years', initials: 'AN', image: '/Missionary Nafiu.jpeg' },
    { name: 'Ahmad', surname: '', position: 'GENERAL SECRETARY', years: '8+ years', initials: 'AH', image: '/Ahmad - General Secretary.jpeg' },
  ]

  return (
    <div>
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

      {activeTab === 'history' && (
        <div className="max-w-5xl mx-auto">
          <section className="py-16 bg-cream">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Our Journey</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  From humble beginnings to a movement transforming lives across Plateau State
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-400 hidden md:block"></div>
                <div className="space-y-12">
                  {historyContent.map((item, index) => (
                    <div key={index} className={`flex items-center md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="flex-1 md:px-8">
                        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
                          <span className="text-yellow-600 font-bold text-lg">{item.year}</span>
                          <h3 className="font-heading font-bold text-xl text-primary mt-1 mb-2">{item.title}</h3>
                          <p className="text-gray-600">{item.content}</p>
                        </div>
                      </div>
                      <div className="hidden md:block w-4 h-4 bg-yellow-400 rounded-full border-4 border-white shadow-lg z-10"></div>
                      <div className="flex-1"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Our Core Values</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center p-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">🤝</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Unity</h3>
                  <p className="text-gray-600">Building a strong community of support and cooperation</p>
                </div>
                <div className="text-center p-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">📖</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Integrity</h3>
                  <p className="text-gray-600">Adhering to Sharia principles in all our dealings</p>
                </div>
                <div className="text-center p-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">💪</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Service</h3>
                  <p className="text-gray-600">Committed to member empowerment and growth</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {activeTab === 'leadership' && (
        <div id="leadership" className="max-w-7xl mx-auto">
          <div className="text-center mb-12 pt-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated professionals driving HPMC's mission towards sustainable social and economic empowerment
            </p>
          </div>

          <TeamSection 
            title="Executive Leadership Team" 
            subtitle="Steering HPMC towards excellence"
            members={executiveTeam}
          />

          <TeamSection 
            title="IT & Technology Team" 
            subtitle="Powering our digital transformation"
            members={itTeam}
            variant="highlight"
          />

          <TeamSection 
            title="Legal & Advisory" 
            subtitle="Ensuring compliance and governance"
            members={legalTeam}
          />

          <TeamSection 
            title="Executive Members" 
            subtitle="Supporting our vision"
            members={executiveMembers}
          />
        </div>
      )}
    </div>
  )
}