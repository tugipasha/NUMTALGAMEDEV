import Spline from '@splinetool/react-spline';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                NUMTAL
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-purple-400 transition-colors">Home</a>
              <a href="#services" className="text-gray-300 hover:text-purple-400 transition-colors">Services</a>
              <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">About</a>
              <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Spline */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 z-0">
          <Spline scene="https://prod.spline.design/hQ9bWKwi0X0uJsvC/scene.splinecode" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
            Building Immersive Worlds
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            NUMTAL - Crafting unforgettable gaming experiences with cutting-edge technology and creative design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105">
              Explore Services
            </a>
            <a href="#contact" className="px-8 py-4 border-2 border-purple-400 rounded-full font-semibold text-lg hover:bg-purple-400/20 transition-all">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Services
          </h3>
          <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
            From concept to launch, we deliver end-to-end game development solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Game Design', desc: 'Crafting compelling gameplay mechanics and engaging narratives.' },
              { title: 'Development', desc: 'Building robust, high-performance games for all platforms.' },
              { title: '3D Art & Animation', desc: 'Creating stunning visuals and fluid animations that bring worlds to life.' }
            ].map((service, i) => (
              <div key={i} className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/50 transition-all hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                <div className="text-4xl mb-4">🎮</div>
                <h4 className="text-2xl font-semibold mb-3 text-purple-300">{service.title}</h4>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                About NUMTAL
              </h3>
              <p className="text-gray-300 text-lg mb-4">
                Founded with a passion for gaming and innovation, NUMTAL brings together a team of talented developers, designers, and artists dedicated to pushing the boundaries of interactive entertainment.
              </p>
              <p className="text-gray-400 text-lg">
                Our mission is to create games that inspire, challenge, and captivate players worldwide.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl p-12 border border-purple-500/30">
              <div className="text-6xl text-center">✨</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Contact Us
          </h3>
          <p className="text-center text-gray-400 text-lg mb-12">
            Have a project in mind? Let's create something amazing together.
          </p>
          <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
            {formSubmitted && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-400/50 rounded-lg text-green-300">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all"
                placeholder="Your name"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-purple-500/20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto text-center">
          <h4 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            NUMTAL
          </h4>
          <p className="text-gray-500">© 2026 NUMTAL Game Development. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
