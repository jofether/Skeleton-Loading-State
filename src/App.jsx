import React, { useState } from 'react';

function App() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      emoji: "⚡",
      title: "Lightning Fast",
      description: "Optimized performance with sub-100ms load times and seamless interactions."
    },
    {
      emoji: "👥",
      title: "Team Collaboration",
      description: "Built-in tools for teams to work together in real-time across projects."
    },
    {
      emoji: "🚀",
      title: "Scale Effortlessly",
      description: "Handles millions of requests with auto-scaling infrastructure."
    },
  ];

  const projects = [
    {
      id: 1,
      title: "AI Content Generator",
      category: "AI/ML",
      image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      rating: 4.9,
      reviews: 284,
      price: "$29/mo"
    },
    {
      id: 2,
      title: "Data Analytics Dashboard",
      category: "Analytics",
      image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      rating: 4.8,
      reviews: 156,
      price: "$49/mo"
    },
    {
      id: 3,
      title: "Security Suite Pro",
      category: "Security",
      image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      rating: 4.95,
      reviews: 412,
      price: "$99/mo"
    },
    {
      id: 4,
      title: "Automation Framework",
      category: "DevOps",
      image: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      rating: 4.7,
      reviews: 203,
      price: "$39/mo"
    },
    {
      id: 5,
      title: "Cloud Manager",
      category: "Cloud",
      image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      rating: 4.85,
      reviews: 345,
      price: "$59/mo"
    },
    {
      id: 6,
      title: "API Integration Hub",
      category: "Integration",
      image: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
      rating: 4.9,
      reviews: 267,
      price: "$44/mo"
    },
  ];

  const teamMembers = [
    { name: "Sarah Chen", role: "CEO & Founder", image: "👩‍💼" },
    { name: "Marcus Johnson", role: "Chief Technology Officer", image: "👨‍💻" },
    { name: "Elena Rodriguez", role: "Head of Design", image: "👩‍🎨" },
    { name: "James Park", role: "Lead Developer", image: "👨‍🚀" },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">
      {/* Navigation */}
      {/* [BUG - LAYERS] z-index reduced from 50 to 10, nav appears behind content */}
      {/* [FIX] z-10 should be z-50 */}
      <nav className="sticky top-0 z-10 backdrop-blur-md bg-slate-900/80 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            <span className="text-3xl">🚀</span>
            Nexus
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-blue-400 transition">Features</a>
            <a href="#products" className="hover:text-blue-400 transition">Products</a>
            <a href="#team" className="hover:text-blue-400 transition">Team</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold transition">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      {/* [BUG - LAYERS] absolute positioning without proper top/left values misaligns content */}
      {/* [FIX] remove absolute or add proper positioning (top-0 left-0 right-0) */}
      <section className="absolute max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-blue-500/20 border border-blue-500/50 px-4 py-2 rounded-full text-sm mb-6">
              ✨ Welcome to the Future
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Build Amazing Things <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Together</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Experience the next generation of development tools. Collaborate seamlessly, deploy instantly, and scale infinitely with our comprehensive platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105">
                Start Free Trial →
              </button>
              {/* [BUG - LAYOUT] flex-col-reverse incorrectly reverses button order */}
              {/* [FIX] flex-col-reverse should be removed, no flex utility needed */}
              <button className="border border-slate-600 hover:border-slate-400 px-8 py-3 rounded-lg font-semibold transition flex-col-reverse">
                Learn More
              </button>
            </div>
            <div className="flex gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold">10M+</div>
                <div className="text-slate-400">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold">99.99%</div>
                <div className="text-slate-400">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold">50+</div>
                <div className="text-slate-400">Countries</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-2xl backdrop-blur-sm border border-blue-500/20 flex items-center justify-center">
              <div className="text-7xl">🚀</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* [BUG - LAYOUT] grid-cols-1 forces all features into single column */}
      {/* [FIX] grid-cols-1 should be removed, keep md:grid-cols-3 for proper 3-column layout */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Powerful Features</h2>
        <div className="grid grid-cols-1 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-slate-800/50 border border-slate-700/50 p-8 rounded-xl hover:border-blue-500/50 transition transform hover:scale-105">
              <div className="text-5xl mb-4">{feature.emoji}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products/Services Section */}
      <section id="products" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-slate-300 text-lg">Explore our comprehensive suite of solutions</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            // [BUG - TYPO] "gap-6x" is invalid Tailwind class (x suffix doesn't exist)
            // [FIX] "gap-6x" should be removed or "gap-6" used correctly
            <div
              key={project.id}
              className="group bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden hover:border-blue-500/50 transition cursor-pointer transform hover:scale-105 gap-6x"
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className="w-full h-48 bg-gradient-to-br relative overflow-hidden"
                style={{ background: project.image }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
              </div>
              <div className="p-6">
                <span className="inline-block bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm mb-3">
                  {project.category}
                </span>
                {/* [BUG - TYPO] "tex-xl" missing the 't' in text */}
                {/* [FIX] "tex-xl" should be "text-xl" */}
                <h3 className="tex-xl font-bold mb-2">{project.title}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                  </div>
                  <span className="text-sm text-slate-400">({project.reviews})</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-400">{project.price}</span>
                  <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm transition">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      {/* [BUG - SPACING] -m-12 creates massive negative margins causing overlap with previous section */}
      {/* [FIX] -m-12 should be removed, or changed to positive margin like m-0 or mt-4 */}
      <section id="team" className="max-w-7xl mx-auto px-6 py-20 -m-12">
        <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            // [BUG - SPACING] pt-32 adds excessive padding breaking card proportions
            // [FIX] pt-32 should be removed or reduced to pt-0 or pt-4
            <div key={idx} className="bg-slate-800/50 border border-slate-700/50 p-8 rounded-xl text-center hover:border-purple-500/50 transition pt-32">
              <div className="text-6xl mb-4">{member.image}</div>
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-slate-400">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        {/* [BUG - COLOR & CONTRAST] bg-white with text-white makes text invisible */}
        {/* [FIX] bg-white should be bg-gradient-to-r from-blue-500 to-purple-600 or text-white changed to text-slate-900 */}
        <div className="bg-white rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Workflow?</h2>
          <p className="text-lg mb-8 text-blue-100">Join thousands of users already experiencing the difference.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-3 rounded-lg font-semibold transition">
              Start Your Free Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Nexus</h3>
              {/* [BUG - COLOR & CONTRAST] text-slate-700 on dark bg barely readable, too dark */}
              {/* [FIX] text-slate-700 should be text-slate-300 or text-slate-400 for better contrast */}
              <p className="text-slate-700 text-sm">Building the future of development</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-4 text-2xl">
                <span className="cursor-pointer hover:opacity-80 transition">🐙</span>
                <span className="cursor-pointer hover:opacity-80 transition">💼</span>
                <span className="cursor-pointer hover:opacity-80 transition">𝕏</span>
                <span className="cursor-pointer hover:opacity-80 transition">✉️</span>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700/50 pt-8 flex justify-between items-center">
            <p className="text-slate-400 text-sm">&copy; 2026 Nexus. All rights reserved.</p>
            <div className="flex gap-6 text-slate-400 text-sm">
              <a href="#" className="hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-white transition">Terms</a>
              <a href="#" className="hover:text-white transition">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
