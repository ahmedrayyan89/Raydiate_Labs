import React, { useState, useEffect, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Zap, 
  Bot, 
  Users, 
  Cog, 
  Link2, 
  Target,
  Phone,
  Lightbulb,
  Rocket,
  Menu,
  X,
  Linkedin,
  Twitter,
  Mail,
  ChevronDown,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import logoImage from './assets/new-logo.svg';
import heroBackground from './assets/rl-image.png';
import n8nLogo from './assets/n8n-color.svg';
import makeLogo from './assets/make-color.svg';
import zapierLogo from './assets/zapier.svg';
import flowiseLogo from './assets/flowise-logo.png'; 
import simLogo from './assets/sim-logo.png'; 


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'process', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        to_email: "ahmedrayyan295@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        message: formData.message
      };
      
      await emailjs.send(
        "service_ed06t8v", // Your EmailJS service ID
        "template_mc587ek", // Your EmailJS template ID
        templateParams,
        "I9YRrWQ-kvZaLg07H" // Your EmailJS public key
      );
      
      setFormStatus({
        submitted: true,
        success: true,
        message: "Your message has been sent successfully! We'll get back to you soon."
      });
      
      // Reset form data
      setFormData({
        name: '',
        company: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setFormStatus({
        submitted: true,
        success: false,
        message: "Failed to send your message. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Business Process Automation",
      description: "Streamline your operations with intelligent workflows that eliminate manual tasks and boost productivity."
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Customer Support Agents",
      description: "Deploy smart chatbots and virtual assistants that provide 24/7 customer support with human-like interactions."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Lead Capture & Sales Automation",
      description: "Automatically capture, nurture, and convert leads with sophisticated sales funnel automation systems."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Custom Workflow Design",
      description: "Bespoke automation solutions tailored to your unique business requirements and operational challenges."
    },
    {
      icon: <Link2 className="w-8 h-8" />,
      title: "System Integration",
      description: "Connect all your tools and platforms seamlessly, creating a unified ecosystem that works in perfect harmony."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI-Powered Optimization",
      description: "Leverage advanced AI algorithms to continuously optimize your processes and maximize efficiency gains."
    }
  ];

  const processSteps = [
    {
      number: "01",
      icon: <Phone className="w-8 h-8" />,
      title: "Discovery Call",
      description: "We dive deep into your business processes to identify automation opportunities and pain points."
    },
    {
      number: "02",
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Strategy & Build",
      description: "Our experts design and develop custom automation workflows tailored to your specific needs."
    },
    {
      number: "03",
      icon: <Rocket className="w-8 h-8" />,
      title: "Launch & Support",
      description: "We deploy your solutions and provide ongoing support to ensure optimal performance and growth."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
<nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-20">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          {/* This code is now perfect because `logoImage` is linked to your new SVG! */}
          <img src={logoImage} alt="Raydiate Labs Logo" className="h-36 w-auto" />
        </div>
      </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {[
                  { name: 'Services', id: 'services' },
                  { name: 'Our Process', id: 'process' },
                  { name: 'About', id: 'about' },
                  { name: 'Contact', id: 'contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-blue-400 ${
                      activeSection === item.id
                        ? 'text-blue-400 border-b-2 border-blue-400'
                        : 'text-gray-300'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { name: 'Services', id: 'services' },
                { name: 'Our Process', id: 'process' },
                { name: 'About', id: 'about' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-blue-400 hover:bg-slate-700 rounded-md transition-all duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
<section 
  id="hero" 
  style={{ backgroundImage: `url(${heroBackground})` }} 
  className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-white mb-2">Your Innovation &</span>
            <span className="block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Automation Partner
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We design and build intelligent automation systems that give your business superpowers.
          </p>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="group inline-flex items-center px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
          >
            Get a Free Analysis
            <ChevronDown className="ml-2 w-5 h-5 group-hover:animate-bounce" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* Trusted Toolkit Section */}
<section className="py-20 bg-slate-800/50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Trusted Toolkit</h2>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
    </div>
    
    <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20">
      {/* n8n Logo */}
      <div className="flex flex-col items-center group">
        <div className="w-32 h-32 bg-slate-700/50 rounded-2xl flex items-center justify-center group-hover:bg-slate-600/50 transition-all duration-300 group-hover:scale-105">
          <img
            src={n8nLogo}
            alt="n8n Logo"
            className="w-16 h-16"
          />
        </div>
        <span className="text-gray-300 font-semibold mt-4">n8n</span>
      </div>
      
      {/* Make.com Logo */}
      <div className="flex flex-col items-center group">
        <div className="w-32 h-32 bg-slate-700/50 rounded-2xl flex items-center justify-center group-hover:bg-slate-600/50 transition-all duration-300 group-hover:scale-105">
          <img
            src={makeLogo}
            alt="Make.com Logo"
            className="w-16 h-16"
          />
        </div>
        <span className="text-gray-300 font-semibold mt-4">Make.com</span>
      </div>
      
      {/* Zapier Logo */}
<div className="flex flex-col items-center group">
  <div className="w-32 h-32 bg-slate-700/50 rounded-2xl flex items-center justify-center group-hover:bg-slate-600/50 transition-all duration-300 group-hover:scale-105">
    <img
      src={zapierLogo} // This is now correctly linked to zapier.svg!
      alt="Zapier Logo"
      className="w-16 h-16"
    />
  </div>
  <span className="text-gray-300 font-semibold mt-4">Zapier</span>
</div>

      {/* FlowiseAI Logo */}
      <div className="flex flex-col items-center group">
        <div className="w-32 h-32 bg-slate-700/50 rounded-2xl flex items-center justify-center group-hover:bg-slate-600/50 transition-all duration-300 group-hover:scale-105">
          <img
            src={flowiseLogo}
            alt="FlowiseAI Logo"
            className="w-20 h-20"
          />
        </div>
        <span className="text-gray-300 font-semibold mt-4">FlowiseAI</span>
      </div>

      {/* Sim AI Logo */}
      <div className="flex flex-col items-center group">
        <div className="w-32 h-32 bg-slate-700/50 rounded-2xl flex items-center justify-center group-hover:bg-slate-600/50 transition-all duration-300 group-hover:scale-105">
          <img
            src={simLogo}
            alt="Sim AI Logo"
            className="w-16 h-16"
          />
        </div>
        <span className="text-gray-300 font-semibold mt-4">Sim AI</span>
      </div>
    </div>
  </div>
</section>
      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mb-6 group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our 3-Step Path to Efficiency</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 z-0"></div>
                )}
                
                <div className="relative z-10 text-center group">
                  <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6 group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300 group-hover:scale-110">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center text-sm font-bold text-blue-400 border-2 border-blue-500">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">About Raydiate Labs</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-12"></div>
          
          <div className="bg-slate-800/50 rounded-3xl p-8 lg:p-12 border border-slate-700/50">
            <p className="text-lg text-gray-300 leading-relaxed">
              Hi, I'm <span className="text-blue-400 font-semibold">Rayyan Ahmed</span>, I started Raydiate Labs for one simple reason: I love the challenge of taking a complex, messy business process and making it simple, streamlined, and smart through automation.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-6">
  My belief is that technology shouldn't be a burden; it should be a tool that gives you back your freedom. Here at the Lab, our entire focus is on building the intelligent workflows that handle the repetitive work, so you and your team can focus on the ideas and strategies that truly <span className="text-purple-400 font-semibold">drive your business forward.</span>
</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get Your Free Analysis</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-slate-800/50 rounded-3xl p-8 lg:p-12 border border-slate-700/50">
            {formStatus.submitted ? (
              <div className={`p-6 rounded-xl ${formStatus.success ? 'bg-green-500/20 border border-green-500/50' : 'bg-red-500/20 border border-red-500/50'} flex items-center`}>
                {formStatus.success ? 
                  <CheckCircle className="w-8 h-8 text-green-500 mr-4" /> : 
                  <AlertCircle className="w-8 h-8 text-red-500 mr-4" />
                }
                <p className="text-lg">{formStatus.message}</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your company"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@company.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Tell us about your project</label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Describe your automation needs and current challenges..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-8 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
<footer className="bg-slate-900 border-t border-slate-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Left Side: Logo and Tagline */}
      <div className="md:col-span-1">
        <a href="#hero" onClick={() => scrollToSection('hero')}>
          <img src={logoImage} alt="Raydiate Labs Logo" className="h-32 w-auto mb-4" />
        </a>
        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
          Raydiate Labs unleashes intelligent automation & supercharges your growth.
        </p>
      </div>

      {/* Right Side: Links */}
      <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Site Links */}
        <div>
          <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Navigate</h3>
          <ul className="mt-4 space-y-4">
            <li><button onClick={() => scrollToSection('services')} className="text-base text-gray-400 hover:text-blue-400 transition-colors">Services</button></li>
            <li><button onClick={() => scrollToSection('process')} className="text-base text-gray-400 hover:text-blue-400 transition-colors">Our Process</button></li>
            <li><button onClick={() => scrollToSection('about')} className="text-base text-gray-400 hover:text-blue-400 transition-colors">About</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="text-base text-gray-400 hover:text-blue-400 transition-colors">Contact</button></li>
          </ul>
        </div>
        
        {/* Connect Links */}
        <div>
          <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Connect</h3>
          <ul className="mt-4 space-y-4">
            <li className="flex items-center">
              <a href="https://www.linkedin.com/in/rayyanahmedr1/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                <Linkedin className="w-5 h-5 mr-3" /> LinkedIn
              </a>
            </li>
            <li className="flex items-center">
              <a href="https://x.com/wateryoudoin69" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                <Twitter className="w-5 h-5 mr-3" /> Twitter
              </a>
            </li>
            <li className="flex items-center">
              <a href="mailto:ahmedrayyan295@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                <Mail className="w-5 h-5 mr-3" /> Email
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    {/* Bottom Bar: Copyright */}
    <div className="mt-12 pt-8 border-t border-slate-800 text-center">
      <p className="text-gray-500 text-sm">
        © 2025 Raydiate Labs. All rights reserved.
      </p>
    </div>
    
  </div>
</footer>
    </div>
  );
}

export default App;