import { useState } from 'react'
import { tagline } from '../data/websiteData'

const resources = [
  { id: 1, title: 'Financial Management Guide', type: 'PDF', category: 'Finance' },
  { id: 2, title: 'Business Proposal Template', type: 'PDF', category: 'Business' },
  { id: 3, title: 'Sharia Compliance Guide', type: 'PDF', category: 'Islamic Finance' },
  { id: 4, title: 'Record Keeping Best Practices', type: 'PDF', category: 'Finance' },
  { id: 5, title: 'Marketing Your Business', type: 'Video', category: 'Marketing' },
  { id: 6, title: 'Customer Service Excellence', type: 'Video', category: 'Marketing' },
]

const categories = ['All', 'Finance', 'Business', 'Islamic Finance', 'Marketing']

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [showUploadModal, setShowUploadModal] = useState(false)

  const filteredResources = activeCategory === 'All' 
    ? resources 
    : resources.filter(r => r.category === activeCategory)

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-yellow-400 font-medium mb-2 tracking-wide">{tagline}</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Resources & Training</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Access guides, templates, and training materials to help your business grow
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-primary/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <div key={resource.id} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    resource.type === 'PDF' ? 'bg-red-100' : 'bg-blue-100'
                  }`}>
                    <span className={`font-bold ${
                      resource.type === 'PDF' ? 'text-red-600' : 'text-blue-600'
                    }`}>
                      {resource.type === 'PDF' ? '📄' : '🎬'}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {resource.category}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-gray-500">{resource.type}</span>
                  <button className="text-primary font-medium text-sm hover:underline flex items-center gap-1">
                    {resource.type === 'PDF' ? 'Download' : 'Watch'}
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No resources found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Upload Section (for admin) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">Have Resources to Share?</h2>
            <p className="text-gray-600 mb-6">
              Contact our team to upload training materials and guides for members
            </p>
            <a href="mailto:info@hpmc.coop" className="btn-primary">
              Contact Admin
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}