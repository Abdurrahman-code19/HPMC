import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { tagline, loanProducts } from '../data/websiteData'

const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSc2zhTuP8v43Pz2rtzSnP-c4HDhMytMsHADksDExt6g-_j8pQ/viewform?pli=1"

const executiveTeam = [
  { name: 'Obasanjo Ambali', surname: 'Salaudeen', position: 'PRESIDENT', years: '15+ years', initials: 'OAS' },
  { name: 'Olaleye', surname: 'Muhammad', position: 'VICE-PRESIDENT', years: '12+ years', initials: 'OM' },
  { name: 'Badmus Shuaib', surname: 'Alani', position: 'HEAD OF FINANCE', years: '10+ years', initials: 'BSA' },
  { name: 'Ojegbede', surname: 'AbdulKabir', position: 'FINANCE II', years: '8+ years', initials: 'OA' },
  { name: 'Oriolowo Obasanjo', surname: 'Saeed', position: 'HEAD OF IT', years: '8+ years', initials: 'OO' },
  { name: 'Idris Jamiu', surname: 'Abiodun', position: 'IT II', years: '5+ years', initials: 'IJA' },
]

const heroSlides = [
  {
    id: 1,
    tagline: '"Towards a Sustainable Social and Economic Empowerment"',
    title: "Join Halal Progressive Multipurpose Cooperative",
    subtitle: "Your Trusted Partner for Ethical, Sharia-Compliant Financial Growth in Nigeria",
    cta: "Become a Member",
    ctaLink: googleFormLink,
    secondaryCta: "Apply for Loan",
    secondaryCtaLink: googleFormLink,
    stat: "Over 2,500 Members Strong"
  },
  {
    id: 2,
    tagline: '"Empowering Your Financial Future"',
    title: "Interest-Free & Ethical Financing Solutions",
    subtitle: "Qard-al-Hasan | Murabaha Financing | Profit-Sharing Investments | Business Growth Support",
    cta: "Explore Services",
    ctaLink: "/services",
    secondaryCta: "Apply Now",
    secondaryCtaLink: googleFormLink,
    stat: null
  },
  {
    id: 3,
    tagline: '"Building Wealth Together"',
    title: "Join 2,500+ Members Building Wealth Together",
    subtitle: "Licensed Cooperative PL22620 | Transparent Operations | Sharia-Compliant | Member-Focused",
    cta: "Join Us Today",
    ctaLink: googleFormLink,
    secondaryCta: null,
    secondaryCtaLink: null,
    stat: null
  }
]

const heroImages = ['/hero-slide.jpg', '/hero-slide2.jpg', '/hero-slide3.jpg']

const trustBadges = [
  { icon: '🕌', title: 'Sharia-Compliant', subtitle: 'Free from Riba (Interest)' },
  { icon: '📜', title: 'Licensed & Regulated', subtitle: 'PL22620 Govt. Approved' },
  { icon: '👥', title: 'Member-Focused', subtitle: 'Community First Approach' },
  { icon: '⭐', title: 'Secure & Trusted', subtitle: '2,500+ Members' }
]

const services = [
  { icon: '📈', title: 'Savings & Investment', desc: 'Mudarabah-based profit sharing with multiple savings tiers', type: 'Learn More' },
  { icon: '🤝', title: 'Qard-al-Hasan (Benevolent Loan)', desc: 'Interest-free emergency support for medical, education, family needs', type: 'Apply Now' },
  { icon: '💼', title: 'Business & Personal Financing', desc: 'Murabaha-based with transparent profit markup for business growth', type: 'Apply Now' },
  { icon: '🎓', title: 'Empowerment Programs', desc: 'Capacity-building workshops, business development support', type: 'Learn More' },
  { icon: '🏦', title: 'EasyBuy Loan Scheme', desc: 'Installment-based asset acquisition for vehicles, electronics, appliances', type: 'Apply Now' },
  { icon: '🌾', title: 'Agricultural Financing', desc: 'Harvest-aligned repayment for farmers and agribusiness', type: 'Apply Now' }
]

const testimonials = [
  {
    name: 'Oriolowo Saeed Obasanjo',
    since: 'Member since 2019',
    role: 'Head of IT',
    quote: 'HPMC has been a beacon of hope for me and my family. The cooperative provided not just financial support but also a sense of community and belonging. The Sharia-compliant processes give peace of mind knowing that all transactions are ethical and transparent.',
    highlight: 'A trusted partner in financial growth'
  }
]

const milestones = [
  { year: '2014', title: 'Founded', subtitle: 'with 50 Members' },
  { year: '2016', title: '100 Members', subtitle: 'First Loan Disbursed' },
  { year: '2018', title: '500 Members', subtitle: 'First AGM Held' },
  { year: '2020', title: '₦500M Disbursed', subtitle: 'Milestone' },
  { year: '2024', title: '2,500+ Members', subtitle: 'Reached' }
]

const resources = [
  { icon: '📄', title: 'Membership Form', desc: 'Apply Now', link: googleFormLink },
  { icon: '📄', title: 'Guarantor Form', desc: 'Download PDF', link: '/HPMC-GUARANTORS-FORM.pdf' },
  { icon: '📄', title: 'Loan Form', desc: 'Download PDF', link: '/HPMC-LOAN-FORM.pdf' },
  { icon: '📄', title: 'Constitution', desc: 'Download PDF', link: null },
  { icon: '📄', title: 'FAQs', desc: 'Download PDF', link: null },
  { icon: '💬', title: 'Live Chat', desc: 'Chat Now', link: null }
]

const partners = [
  'Cooperative Federation of Nigeria (CFN)',
  'Plateau State Cooperative Federation',
  'National Association of Cooperative Societies (NACS)'
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [countersActive, setCountersActive] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const statsRef = useRef(null)
  const testimonialsRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(testimonialInterval)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCountersActive(true)
        }
      },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  const AnimatedCounter = ({ target, prefix = '', suffix = '' }) => {
    const [count, setCount] = useState(0)
    useEffect(() => {
      if (!countersActive) return
      let start = 0
      const duration = 2500
      const increment = target / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }, [countersActive, target])
    return <span>{prefix}{count}{suffix}</span>
  }

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroImages[index]})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
            
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl">
                  <p className="text-yellow-400 font-medium mb-4 text-lg md:text-xl animate-fadeIn">
                    {slide.tagline}
                  </p>
                  <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight animate-fadeInUp">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl animate-fadeInUp animation-delay-200">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fadeInUp animation-delay-400">
                    <Link 
                      to={slide.ctaLink} 
                      className="bg-yellow-400 text-primary px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-lg text-center"
                    >
                      {slide.cta}
                    </Link>
                    {slide.secondaryCta && (
                      <Link 
                        to={slide.secondaryCtaLink} 
                        className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-center"
                      >
                        {slide.secondaryCta}
                      </Link>
                    )}
                  </div>
                  {slide.stat && (
                    <p className="text-white/80 text-sm animate-fadeIn animation-delay-600">
                      {slide.stat}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slide Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
          <button 
            onClick={() => setCurrentSlide(prev => prev === 0 ? heroSlides.length - 1 : prev - 1)}
            className="w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-all"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex gap-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-yellow-400 w-10 shadow-lg shadow-yellow-400/50' 
                    : 'bg-white/50 hover:bg-white w-3'
                }`}
              />
            ))}
          </div>
          <button 
            onClick={() => setCurrentSlide(prev => (prev + 1) % heroSlides.length)}
            className="w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-all"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-6 border-b-4 border-yellow-400">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-3 justify-center p-4 rounded-xl hover:bg-cream transition-all">
                <span className="text-3xl">{badge.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm md:text-base">{badge.title}</h3>
                  <p className="text-xs text-gray-500">{badge.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* President's Welcome */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="lg:flex">
                <div className="lg:w-2/5 bg-gradient-to-br from-primary to-primary-dark p-8 lg:p-12 flex flex-col items-center text-center">
                  <div className="w-40 h-40 rounded-full border-4 border-yellow-400 overflow-hidden bg-white/20 flex items-center justify-center mb-6 shadow-2xl">
                    <span className="text-4xl font-bold text-yellow-400">OAS</span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white mb-2">Obasanjo Ambali Salaudeen</h3>
                  <p className="text-yellow-400 font-semibold mb-4">PRESIDENT</p>
                  <div className="bg-white/10 rounded-xl p-4 mt-auto">
                    <p className="text-white/80 italic text-sm">
                      "Together we build, together we grow."
                    </p>
                  </div>
                </div>
                <div className="lg:w-3/5 p-8 lg:p-12">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-2">Message from the President</h2>
                  <div className="w-16 h-1 bg-yellow-400 mb-6"></div>
                  <div className="prose prose-lg text-gray-600">
                    <p className="text-lg font-medium mb-4">
                      <span className="text-primary">Assalamu Alaikum Wa Rahmatullahi Wa Barakatuh</span>
                    </p>
                    <p className="mb-4">
                      On behalf of the Executive Committee, I warmly welcome you to Halal Progressive Multipurpose Cooperative Society.
                    </p>
                    <p className="mb-4">
                      Since our founding in 2014, we have remained committed to providing ethical, Sharia-compliant financial services that empower our members and uplift our community.
                    </p>
                    <p className="mb-4">
                      Our journey from 50 to 2,500+ members is a testament to the trust you have placed in us. As we look toward 2026, our vision is to become the leading model for Sharia-compliant cooperatives in West Africa.
                    </p>
                    <p className="mb-6">
                      I invite you to explore our services and join us in building wealth the halal way.
                    </p>
                    <p className="font-semibold text-primary">Jazakallah Khair,</p>
                    <div className="bg-cream rounded-xl p-4 mt-4 inline-block">
                      <p className="font-bold text-gray-800">Obasanjo Ambali Salaudeen</p>
                      <p className="text-primary text-sm">PRESIDENT, HPMC</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Vision */}
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 lg:p-12 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🔭</span>
                </div>
                <h2 className="font-heading text-3xl font-bold">OUR VISION</h2>
              </div>
              <div className="w-20 h-1 bg-yellow-400 mb-6"></div>
              <p className="text-lg leading-relaxed">
                To achieve a sustainable social and economic empowerment for all members by investing collective savings into high-growth, viable business ventures.
              </p>
            </div>
            
            {/* Mission */}
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl p-8 lg:p-12 text-charcoal">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <span className="text-3xl">🎯</span>
                </div>
                <h2 className="font-heading text-3xl font-bold">OUR MISSION</h2>
              </div>
              <div className="w-20 h-1 bg-charcoal mb-6"></div>
              <p className="text-lg leading-relaxed">
                To build a diverse investment portfolio across multiple sectors within Nigeria and internationally, ensuring consistent returns and wealth distribution for every members' prosperity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HPMC Financial Commitment */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">💰 HPMC Financial Commitment</h2>
              <p className="text-lg text-gray-600">Members contribute to three primary funds designed to build capital and secure future assets:</p>
              <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mandatory Savings */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-l-4 border-primary">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <span className="text-3xl">💰</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-primary">Mandatory Savings</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Members contribute a minimum of <span className="font-bold text-primary">₦5,000</span> monthly. After six months of consistent contributions, members are eligible for credit facilities equal to <span className="font-bold text-primary">double their cumulative balance</span>.
                </p>
                <div className="bg-cream rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Example:</span> If you save ₦30,000 over 6 months, you qualify for ₦60,000 in credit facilities.
                  </p>
                </div>
              </div>

              {/* Share Capital */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-l-4 border-yellow-400">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center">
                    <span className="text-3xl">📊</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-yellow-600">Share Capital</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  A one-time mandatory payment of <span className="font-bold text-yellow-600">₦150,000</span>. These funds are deployed into business investments and loan pools.
                </p>
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="text-sm text-red-600">
                    <span className="font-semibold">Important:</span> Share capital is locked until a member exits the cooperative.
                  </p>
                </div>
              </div>

              {/* Real Estate Investment */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-l-4 border-green-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                    <span className="text-3xl">🏠</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-green-600">Real Estate Investment Fund</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  An <span className="font-semibold">optional</span> contribution of <span className="font-bold text-green-600">₦2,000</span> into a dedicated investment account to capitalize on real estate and property development opportunities.
                </p>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm text-green-600">
                    <span className="font-semibold">Benefit:</span> Build wealth through collective real estate investments.
                  </p>
                </div>
              </div>

              {/* Target Savings */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-l-4 border-purple-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-purple-600">Target Savings</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  A <span className="font-semibold">personalized, non-structured</span> and <span className="font-semibold">non-collateralized</span> savings by members. It is <span className="font-bold text-purple-600">withdrawable anytime</span> by simple request.
                </p>
                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="text-sm text-purple-600">
                    <span className="font-semibold">Flexibility:</span> Save at your own pace with instant access when needed.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
                <a href={googleFormLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-white px-10 py-4 rounded-lg font-bold hover:bg-primary-dark transition-all hover:scale-105 shadow-lg">
                  Apply Now
                </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">🎯 What We Offer</h2>
            <p className="text-lg text-gray-600">Comprehensive Islamic Financial Solutions</p>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-cream rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-2 border-transparent hover:border-yellow-400">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="font-heading font-bold text-xl mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <Link 
                    href={service.type === 'Apply Now' ? googleFormLink : '/services'} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block px-6 py-2 rounded-lg font-semibold transition-all ${
                      service.type === 'Apply Now' 
                        ? 'bg-primary text-white hover:bg-primary-dark' 
                        : 'bg-yellow-400 text-primary hover:bg-yellow-500'
                    }`}
                >
                  {service.type}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Products */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">💰 Interest Free Loan Products</h2>
            <p className="text-lg text-gray-600">Choose the Right Financing for Your Needs</p>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {loanProducts.map((loan, index) => (
              <div key={loan.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                <div className="lg:flex">
                  <div className="lg:w-1/3 bg-gradient-to-br from-primary to-primary-dark p-6 text-white">
                    <h3 className="font-heading font-bold text-xl mb-2">{loan.name}</h3>
                    <p className="text-yellow-400 text-sm font-semibold mb-4">{loan.category}</p>
                    <p className="text-white/80 text-sm mb-4">{loan.shortDesc}</p>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-yellow-400">Amount:</span> Up to {loan.maxAmount}</p>
                      <p><span className="text-yellow-400">Tenure:</span> {loan.tenure}</p>
                      <p><span className="text-yellow-400">Profit:</span> {loan.profitMarkup}</p>
                    </div>
                  </div>
                  <div className="lg:w-2/3 p-6">
                    <p className="text-gray-600 mb-4">{loan.purpose}</p>
                    <div className="flex flex-wrap gap-3">
                      <Link to="/services" className="bg-gray-100 text-gray-700 px-5 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-all">
                        Learn More
                      </Link>
                      <a href={googleFormLink} target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-5 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-all">
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">📋 Simple 3-Step Journey to Financial Freedom</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center relative hover:bg-white/20 transition-all group">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-bold text-primary group-hover:scale-110 transition-transform">1</div>
              <h3 className="font-heading font-bold text-xl text-white mt-4 mb-4">Become a Member</h3>
              <p className="text-white/80 mb-4">Complete registration form & pay membership fee to join our community</p>
              <a href={googleFormLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-yellow-400 text-primary px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-all">
                Join Now →
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center relative hover:bg-white/20 transition-all group">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-bold text-primary group-hover:scale-110 transition-transform">2</div>
              <h3 className="font-heading font-bold text-xl text-white mt-4 mb-4">Start Saving</h3>
              <p className="text-white/80 mb-4">Build your savings portfolio to become eligible for benefits</p>
              <Link to="/services" className="inline-block bg-yellow-400 text-primary px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-all">
                Start Now →
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center relative hover:bg-white/20 transition-all group">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-bold text-primary group-hover:scale-110 transition-transform">3</div>
              <h3 className="font-heading font-bold text-xl text-white mt-4 mb-4">Apply for a Loan</h3>
              <p className="text-white/80 mb-4">Access financing for your goals when you need it</p>
              <a href={googleFormLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-yellow-400 text-primary px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-all">
                Apply →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">💬 What Our Members Say</h2>
            <p className="text-lg text-gray-600">Real Stories, Real Impact</p>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-cream rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl text-yellow-400">⭐</span>
                ))}
              </div>
              <div className="text-center">
                {testimonials.map((t, index) => (
                  <div key={index} className={`transition-all duration-500 ${index === currentTestimonial ? 'block' : 'hidden'}`}>
                    <p className="text-lg md:text-xl text-gray-700 italic mb-8 leading-relaxed">
                      "{t.quote}"
                    </p>
                    <div className="bg-white rounded-xl p-4 inline-block shadow-lg">
                      <p className="font-bold text-primary">- {t.name}</p>
                      <p className="text-sm text-gray-500">{t.since} | {t.role}</p>
                      <p className="text-xs text-yellow-600 mt-1">"{t.highlight}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-primary w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Executive Team Preview */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">👥 Dedicated Leadership</h2>
            <p className="text-lg text-gray-600">Committed to Your Success</p>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {executiveTeam.slice(0, 6).map((exec, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 text-center hover:shadow-xl transition-all hover:-translate-y-2 group">
                <div className="w-24 h-24 mx-auto rounded-full border-4 border-yellow-400 overflow-hidden bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <span className="text-2xl font-bold text-yellow-400">{exec.initials}</span>
                </div>
                <h3 className="font-bold text-gray-800 text-sm">{exec.name}</h3>
                <p className="font-semibold text-xs text-primary uppercase tracking-wide">{exec.position}</p>
                <p className="text-xs text-gray-500 mt-1">{exec.years}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/about#leadership" className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-dark transition-all hover:scale-105">
              View Full Leadership Team →
            </Link>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-2">📥 Quick Resources & Downloads</h2>
            <div className="w-16 h-1 bg-yellow-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {resources.map((r, i) => (
              r.link ? (
                <a 
                  key={i} 
                  href={r.link} 
                  target={r.link.startsWith('http') ? '_blank' : '_self'}
                  rel={r.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="bg-cream rounded-xl p-4 text-center hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group block"
                >
                  <span className="text-4xl mb-2 block">{r.icon}</span>
                  <h3 className="font-semibold text-gray-800 text-sm mb-1">{r.title}</h3>
                  <p className="text-xs text-primary group-hover:underline">{r.desc}</p>
                </a>
              ) : (
                <div key={i} className="bg-cream rounded-xl p-4 text-center hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group">
                  <span className="text-4xl mb-2 block">{r.icon}</span>
                  <h3 className="font-semibold text-gray-800 text-sm mb-1">{r.title}</h3>
                  <p className="text-xs text-primary group-hover:underline">{r.desc}</p>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-heading font-bold text-gray-700 mb-2">Our Affiliations</h2>
            <div className="w-16 h-1 bg-yellow-400 mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            {partners.map((p, i) => (
              <div key={i} className="bg-white rounded-xl px-6 py-4 shadow-md">
                <p className="font-medium text-gray-700 text-center text-sm">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey with HPMC?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Join 2,500+ members who trust us for ethical financial growth. Become a member today and experience the difference.
          </p>
          <a href={googleFormLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-yellow-400 text-primary px-10 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-all hover:scale-105 shadow-xl">
            Become a Member Today →
          </a>
        </div>
      </section>

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/2348067170641"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 left-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-xl hover:bg-green-600 hover:scale-110 transition-all z-50 animate-pulse"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  )
}
