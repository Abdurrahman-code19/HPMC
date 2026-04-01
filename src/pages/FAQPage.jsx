import { useState } from 'react'
import { faqs, tagline } from '../data/websiteData'

const categories = [
  { id: 'general', label: 'General', icon: '?' },
  { id: 'membership', label: 'Membership', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
  { id: 'loans', label: 'Loans', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { id: 'sharia', label: 'Sharia Compliance', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064' },
]

const allFaqs = [
  {
    category: 'general',
    question: 'What is HPMC?',
    answer: 'HPMC (Halal Progressive Multipurpose Cooperative Society) is a Sharia-compliant cooperative society registered in Jos, Plateau State, Nigeria. We provide ethical financial services including savings, loans, and business support to our members.'
  },
  {
    category: 'general',
    question: 'What does "Sharia-compliant" mean?',
    answer: 'Sharia-compliant means our operations follow Islamic financial principles. This includes avoiding interest (riba), excessive uncertainty (gharar), and investments in prohibited industries (haram). All our transactions are reviewed by our Sharia Advisory Board.'
  },
  {
    category: 'membership',
    question: 'What is the minimum amount to join?',
    answer: 'The minimum share contribution is ₦10,000. Monthly contributions start from ₦5,000. Registration is free, but you must purchase at least one share to become an active member.'
  },
  {
    category: 'membership',
    question: 'How do I become a member?',
    answer: 'Complete our membership application form, provide required documents (ID, passport photo, proof of address), purchase your minimum shares, and attend an orientation session. Approval typically takes 2-3 business days.'
  },
  {
    category: 'membership',
    question: 'Is HPMC registered with the government?',
    answer: 'Yes, HPMC is registered and licensed by the Plateau State Ministry of Commerce under license number PL22620. We comply with all relevant cooperative society regulations.'
  },
  {
    category: 'membership',
    question: 'What are the benefits of becoming a member?',
    answer: 'Members enjoy access to low-interest loans, annual dividends on savings, business development support, Hajj packages, educational scholarships, and a supportive community of like-minded individuals.'
  },
  {
    category: 'loans',
    question: 'How do I apply for a loan?',
    answer: 'Submit your loan application with required documents (account statements, purpose statement, guarantor information). Our loan committee reviews applications within 3-5 business days.'
  },
  {
    category: 'loans',
    question: 'What types of loans are available?',
    answer: 'We offer Business Loans (up to ₦500,000), Quick Loans (up to ₦100,000 with 24-hour approval), Education Loans, and Agricultural Loans. All loans are profit-based, not interest-based.'
  },
  {
    category: 'loans',
    question: 'What is the repayment period?',
    answer: 'Repayment periods range from 1 to 12 months depending on the loan type and amount. We offer flexible repayment schedules tailored to your cash flow.'
  },
  {
    category: 'loans',
    question: 'Do you charge interest on loans?',
    answer: 'No, we do not charge interest (riba) as it is prohibited in Islam. Instead, we charge a profit rate that is transparent and agreed upon before the loan is disbursed.'
  },
  {
    category: 'sharia',
    question: 'How does HPMC ensure Sharia compliance?',
    answer: 'We have a dedicated Sharia Advisory Board comprising Islamic scholars who review all our products, contracts, and operations to ensure they comply with Islamic principles.'
  },
  {
    category: 'sharia',
    question: 'Is my money invested in halal businesses?',
    answer: 'Yes, our investment portfolio is screened to exclude companies involved in alcohol, gambling, pork products, and other haram industries. We focus on ethical, community-focused investments.'
  },
  {
    category: 'sharia',
    question: 'Can non-Muslims join HPMC?',
    answer: 'Yes, HPMC is open to all people of good character regardless of religion. Our services are designed to be ethical and beneficial to all members of our community.'
  },
]

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('general')
  const [openFaq, setOpenFaq] = useState(null)

  const filteredFaqs = allFaqs.filter(faq => faq.category === activeCategory)

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-yellow-400 font-medium mb-2 tracking-wide">{tagline}</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Find answers to common questions about HPMC and our services
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id)
                    setOpenFaq(null)
                  }}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                    activeCategory === cat.id
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={cat.icon} />
                  </svg>
                  {cat.label}
                </button>
              ))}
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <span className="font-semibold text-lg pr-4">{faq.question}</span>
                    <svg
                      className={`w-6 h-6 text-primary flex-shrink-0 transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-5">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-12 bg-primary rounded-2xl p-8 text-white text-center">
              <h3 className="font-heading text-2xl font-bold mb-4">
                Still have questions?
              </h3>
              <p className="text-white/80 mb-6">
                Our team is ready to help you with any other questions you might have.
              </p>
              <a href="/contact" className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
