import { Link } from 'react-router-dom'
import { tagline } from '../data/websiteData'

const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSc2zhTuP8v43Pz2rtzSnP-c4HDhMytMsHADksDExt6g-_j8pQ/viewform?pli=1"

const loanProducts = [
  {
    id: 1,
    name: 'Micro Business Loan',
    category: 'Product 1',
    maxAmount: '₦200,000',
    tenure: '3–10 months',
    equityContribution: '20%',
    profitSharing: 'Based on business performance (approx. 15% threshold)',
    shortDesc: 'Perfect for small-scale businesses and entrepreneurs',
    purpose: 'Working capital, inventory purchase, equipment acquisition',
    structure: 'Profit-loss sharing model (Mudarabah)',
    disbursement: 'Within 7 business days',
    requirements: 'Application letter, business proposal, guarantor, valid ID',
    eligibility: 'Active members with minimum 3 months contribution'
  },
  {
    id: 2,
    name: 'Business Growth Loan',
    category: 'Product 2',
    maxAmount: '₦500,000',
    tenure: 'Up to 18 months',
    interestRate: '0%',
    transactionCost: '1%',
    formFee: '₦1,000',
    shortDesc: 'Expand your business with Sharia-compliant financing',
    purpose: 'Business expansion, capital investment, asset acquisition',
    structure: 'Murabaha (cost-plus profit)',
    disbursement: 'Within 14 business days',
    requirements: 'Application letter, business proposal, guarantor, valid ID, collateral',
    eligibility: 'Active members with minimum 6 months contribution'
  }
]

const requiredDocs = [
  'Application Letter (must include loan amount, bank details, repayment duration)',
  'Business Proposal (must include nature, cost, revenue, profit projection, risks)',
  'Guarantor Letter',
  'Identification (NIN)'
]

const optionalDocs = [
  'Collateral',
  'CAC Registration'
]

export default function LoanDetailsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-yellow-400 font-medium mb-2 tracking-wide">{tagline}</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Loan Products</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Sharia-compliant financing designed to help your business grow
          </p>
        </div>
      </section>

      {/* Loan Products */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Choose Your Loan</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Two flexible options to meet your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {loanProducts.map((loan) => (
              <div key={loan.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-br from-primary to-primary-dark p-8 text-white">
                  <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">{loan.category}</span>
                  <h3 className="font-heading text-2xl font-bold mt-2 mb-4">{loan.name}</h3>
                  <p className="text-white/80 mb-6">{loan.shortDesc}</p>
                  <a 
                    href={googleFormLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-400 text-primary px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-all"
                  >
                    Apply Now
                  </a>
                </div>
                <div className="p-8">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b pb-3">
                      <span className="text-gray-600">Maximum Amount</span>
                      <span className="font-bold text-primary text-lg">{loan.maxAmount}</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-3">
                      <span className="text-gray-600">Tenure</span>
                      <span className="font-semibold">{loan.tenure}</span>
                    </div>
                    {loan.equityContribution && (
                      <div className="flex justify-between items-center border-b pb-3">
                        <span className="text-gray-600">Equity Contribution</span>
                        <span className="font-semibold">{loan.equityContribution}</span>
                      </div>
                    )}
                    {loan.profitSharing && (
                      <div className="border-b pb-3">
                        <span className="text-gray-600 block mb-1">Profit Sharing</span>
                        <span className="font-semibold text-sm">{loan.profitSharing}</span>
                      </div>
                    )}
                    {loan.transactionCost && (
                      <div className="flex justify-between items-center border-b pb-3">
                        <span className="text-gray-600">Transaction Cost</span>
                        <span className="font-semibold">{loan.transactionCost}</span>
                      </div>
                    )}
                    {loan.formFee && (
                      <div className="flex justify-between items-center border-b pb-3">
                        <span className="text-gray-600">Form Fee</span>
                        <span className="font-semibold">{loan.formFee}</span>
                      </div>
                    )}
                    {loan.interestRate !== undefined && (
                      <div className="flex justify-between items-center border-b pb-3">
                        <span className="text-gray-600">Interest Rate</span>
                        <span className="font-semibold text-green-600">{loan.interestRate}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">Document Requirements</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-cream rounded-xl p-6">
                <h3 className="font-bold text-lg text-primary mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm">✓</span>
                  Required Documents
                </h3>
                <ul className="space-y-3">
                  {requiredDocs.map((doc, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <span className="text-primary font-medium">{index + 1}.</span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-lg text-primary mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-gray-400 text-white rounded-full flex items-center justify-center text-sm">+</span>
                  Optional Documents
                </h3>
                <ul className="space-y-3">
                  {optionalDocs.map((doc, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <span className="text-gray-400 font-medium">{index + 1}.</span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a 
                href={googleFormLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-dark transition-all hover:scale-105"
              >
                Start Application
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">Need Help Choosing?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Our team is ready to help you find the right loan product for your business
          </p>
          <Link to="/contact" className="inline-block bg-yellow-400 text-primary px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-all">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}