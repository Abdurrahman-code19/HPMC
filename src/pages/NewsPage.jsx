import { news, tagline } from '../data/websiteData'

const allNews = [
  {
    id: 1,
    title: 'Annual General Meeting 2024',
    date: 'December 15, 2024',
    category: 'Events',
    image: 'agm',
    content: `We are pleased to announce our Annual General Meeting for 2024. This important gathering will review our year's performance, present financial statements, and elect new board members for the upcoming term. All members are encouraged to attend.`,
    highlights: [
      'Review of 2024 annual report',
      'Financial statement presentation',
      'Board elections',
      'Q&A session with leadership',
      'Networking opportunities'
    ]
  },
  {
    id: 2,
    title: 'New Hajj Package Announcement - 2025',
    date: 'November 20, 2024',
    category: 'Announcements',
    image: 'hajj',
    content: `HPMC is excited to announce special Hajj 2025 packages exclusively for our members. We've extended payment plans to make your pilgrimage journey more accessible and affordable.`,
    highlights: [
      '12-month installment plan',
      'Early bird discount available',
      'Comprehensive packages include visa, flights, and accommodation',
      'Pre-departure training sessions'
    ]
  },
  {
    id: 3,
    title: 'Business Development Workshop',
    date: 'October 5, 2024',
    category: 'Training',
    image: 'training',
    content: `A free business development training workshop for all HPMC members. Learn essential skills for growing your business, managing finances, and marketing your products effectively.`,
    highlights: [
      'Financial management basics',
      'Marketing strategies for small businesses',
      'Customer service excellence',
      'Digital marketing introduction',
      'Certificate of participation'
    ]
  },
  {
    id: 4,
    title: 'Quarterly Dividend Distribution',
    date: 'September 30, 2024',
    category: 'Financial',
    image: 'dividend',
    content: `The Board is pleased to announce the distribution of quarterly dividends to all qualifying members. This distribution reflects our commitment to sharing profits fairly among members.`,
    highlights: [
      'Dividend rate: 8% per annum',
      'Credit to member accounts by October 7',
      'Statement updates available online',
      'Questions? Contact our finance team'
    ]
  },
  {
    id: 5,
    title: 'New Member Orientation Session',
    date: 'September 15, 2024',
    category: 'Events',
    image: 'orientation',
    content: `Welcome to all new members who joined HPMC this quarter! Our orientation session will cover everything you need to know about maximizing your membership benefits.`,
    highlights: [
      'Introduction to HPMC services',
      'How to apply for loans',
      'Understanding your account',
      'Meeting schedules and participation',
      'Q&A with board members'
    ]
  },
  {
    id: 6,
    title: 'Health Insurance Partnership Launch',
    date: 'August 1, 2024',
    category: 'Announcements',
    image: 'health',
    content: `HPMC has partnered with halal-compliant health insurance providers to offer members access to quality healthcare at subsidized rates. Learn more about this exciting new benefit.`,
    highlights: [
      'Coverage for members and families',
      'Access to network hospitals',
      'Affordable premium rates',
      'Halal-compliant healthcare providers',
      'Enrollment begins August 15'
    ]
  }
]

const categories = ['All', 'Events', 'Announcements', 'Training', 'Financial']

export default function NewsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-yellow-400 font-medium mb-2 tracking-wide">{tagline}</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">News & Announcements</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Stay updated with the latest from HPMC - events, announcements, and opportunities
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-cream rounded-2xl overflow-hidden shadow-lg">
              <div className="md:flex">
                <div className="md:w-2/5 bg-gradient-to-br from-primary to-gold flex items-center justify-center p-12">
                  <div className="text-center text-white">
                    <span className="text-6xl font-heading font-bold">15</span>
                    <p className="text-xl">Dec 2024</p>
                  </div>
                </div>
                <div className="md:w-3/5 p-8">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Featured Event
                  </span>
                  <h2 className="font-heading text-2xl font-bold mb-4">Annual General Meeting 2024</h2>
                  <p className="text-gray-600 mb-6">
                    Join us for our most important gathering of the year. Review our achievements, 
                    participate in board elections, and network with fellow members.
                  </p>
                  <a href="#" className="text-primary font-semibold hover:underline">
                    Read Full Details →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All News */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {allNews.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-gradient-to-br from-primary/20 to-gold/20 flex items-center justify-center p-8">
                      <div className="text-center">
                        <span className="text-4xl font-heading font-bold text-primary/50">
                          {item.title.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-sm text-gray-500">{item.date}</span>
                        <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="font-heading text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.content}</p>
                      <button className="text-primary font-semibold hover:underline">
                        Read More →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Categories */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-heading font-bold text-xl mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((cat, index) => (
                    <li key={index}>
                      <button className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        cat === 'All' ? 'bg-primary text-white' : 'hover:bg-gray-100'
                      }`}>
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-heading font-bold text-xl mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-primary">
                      <span>→</span> Download AGM Notice
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-primary">
                      <span>→</span> Hajj 2025 Registration
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-primary">
                      <span>→</span> Workshop Registration
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-primary">
                      <span>→</span> Annual Report 2023
                    </a>
                  </li>
                </ul>
              </div>

              {/* Newsletter */}
              <div className="bg-primary rounded-2xl p-6 text-white">
                <h3 className="font-heading font-bold text-xl mb-4">Stay Updated</h3>
                <p className="text-white/80 mb-4">
                  Subscribe to receive news and updates directly in your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg text-charcoal mb-3"
                />
                <button className="w-full bg-gold text-charcoal font-semibold py-3 rounded-lg hover:bg-gold-dark transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
