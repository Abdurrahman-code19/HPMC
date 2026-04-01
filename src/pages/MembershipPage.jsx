import { useState } from 'react'
import { tagline } from '../data/websiteData'

const requirements = [
  'Valid means of identification (National ID, Driver\'s License, or Passport)',
  'Passport photograph (2 copies)',
  'Proof of address (utility bill or tenancy agreement)',
  'Minimum share contribution of ₦10,000',
  'Monthly contribution commitment of at least ₦5,000',
  'Two passport photographs of a guarantor',
  'Guarantor\'s valid ID'
]

export default function MembershipPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    occupation: '',
    monthlyIncome: '',
    shareAmount: '10000',
    acceptTerms: false
  })
  const [submitted, setSubmitted] = useState(false)
  const [step, setStep] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-cream py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="font-heading text-3xl font-bold mb-4">Application Submitted!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for applying to join HPMC. Your application is now being reviewed by our team.
              We will contact you within 2-3 business days to complete the registration process.
            </p>
            <div className="bg-cream rounded-xl p-6 mb-6">
              <h3 className="font-semibold mb-2">Next Steps:</h3>
              <ul className="text-left text-gray-600 space-y-2">
                <li>1. Check your email for confirmation</li>
                <li>2. Prepare required documents</li>
                <li>3. Visit our office for verification</li>
                <li>4. Make initial share contribution</li>
                <li>5. Attend member orientation</li>
              </ul>
            </div>
            <a href="/" className="btn-primary inline-block">
              Return to Home
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-yellow-400 font-medium mb-2 tracking-wide">{tagline}</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Membership Application</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Join HPMC today and become part of Nigeria's fastest growing Sharia-compliant cooperative
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Progress Steps */}
            <div className="flex items-center justify-between mb-12">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step >= s ? 'bg-primary text-white' : 'bg-gray-300 text-gray-600'
                  }`}>
                    {s}
                  </div>
                  {s < 3 && (
                    <div className={`w-20 h-1 mx-2 ${step > s ? 'bg-primary' : 'bg-gray-300'}`} />
                  )}
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              {/* Step 1: Personal Info */}
              {step === 1 && (
                <div>
                  <h2 className="font-heading text-2xl font-bold mb-6">Personal Information</h2>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Residential Address *</label>
                      <textarea
                        required
                        rows={3}
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Occupation *</label>
                        <input
                          type="text"
                          required
                          value={formData.occupation}
                          onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Monthly Income *</label>
                        <select
                          required
                          value={formData.monthlyIncome}
                          onChange={(e) => setFormData({ ...formData, monthlyIncome: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Select range</option>
                          <option value="below50k">Below ₦50,000</option>
                          <option value="50k-100k">₦50,000 - ₦100,000</option>
                          <option value="100k-250k">₦100,000 - ₦250,000</option>
                          <option value="250k-500k">₦250,000 - ₦500,000</option>
                          <option value="above500k">Above ₦500,000</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button onClick={() => setStep(2)} className="btn-primary">
                      Next: Share Contribution →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Share Contribution */}
              {step === 2 && (
                <div>
                  <h2 className="font-heading text-2xl font-bold mb-6">Share Contribution</h2>
                  
                  <div className="bg-cream rounded-xl p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-semibold">Minimum Share Required:</span>
                      <span className="font-bold text-primary text-xl">₦10,000</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      As a member, you must purchase at least one share (₦10,000) to become an active member.
                      You may purchase additional shares up to the maximum allowed.
                    </p>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Share Amount *</label>
                    <select
                      required
                      value={formData.shareAmount}
                      onChange={(e) => setFormData({ ...formData, shareAmount: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="10000">₦10,000 (1 Share)</option>
                      <option value="20000">₦20,000 (2 Shares)</option>
                      <option value="30000">₦30,000 (3 Shares)</option>
                      <option value="50000">₦50,000 (5 Shares)</option>
                      <option value="100000">₦100,000 (10 Shares)</option>
                    </select>
                  </div>

                  <div className="bg-primary/10 rounded-xl p-6 mb-6">
                    <h3 className="font-semibold mb-3">Membership Commitment</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">✓</span>
                        Monthly contribution of at least ₦5,000
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">✓</span>
                        Active participation in general meetings
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">✓</span>
                        Compliance with HPMC constitution and rules
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">✓</span>
                        Sharia-compliant business activities
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 flex justify-between">
                    <button onClick={() => setStep(1)} className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300">
                      ← Back
                    </button>
                    <button onClick={() => setStep(3)} className="btn-primary">
                      Next: Documents →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Documents & Submit */}
              {step === 3 && (
                <div>
                  <h2 className="font-heading text-2xl font-bold mb-6">Required Documents</h2>
                  
                  <div className="bg-cream rounded-xl p-6 mb-6">
                    <h3 className="font-semibold mb-4">Please prepare the following:</h3>
                    <ul className="space-y-3">
                      {requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-primary font-bold text-sm">{index + 1}</span>
                          </div>
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.acceptTerms}
                        onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.value })}
                        className="w-5 h-5 mt-1"
                      />
                      <span className="text-gray-700">
                        I confirm that the information provided is accurate and I agree to abide by 
                        the HPMC Constitution, rules, and Sharia principles. *
                      </span>
                    </label>
                  </div>

                  <div className="bg-gold/20 rounded-xl p-6 mb-6">
                    <h3 className="font-semibold mb-2">Note:</h3>
                    <p className="text-gray-600 text-sm">
                      After submission, our team will review your application and contact you within 
                      2-3 business days. You will need to visit our office with original documents 
                      for verification and make your initial share contribution.
                    </p>
                  </div>

                  <div className="mt-8 flex justify-between">
                    <button onClick={() => setStep(2)} className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300">
                      ← Back
                    </button>
                    <button onClick={handleSubmit} className="btn-primary">
                      Submit Application
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Help Box */}
            <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Need Help?</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    If you have any questions about the membership process, please contact us:
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a href="tel:+2348031234567" className="text-primary hover:underline">
                      +234 803 123 4567
                    </a>
                    <a href="mailto:info@hpmc.coop" className="text-primary hover:underline">
                      info@hpmc.coop
                    </a>
                    <a href="https://wa.me/2348031234567" className="text-green-600 hover:underline">
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
