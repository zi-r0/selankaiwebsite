import React from 'react';
import { Mail, Phone, MapPin, Code, Briefcase, Users, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">SELANK AI</div>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#about" className="hover:text-blue-600 transition">About</a>
            <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
            <a href="#team" className="hover:text-blue-600 transition">Team</a>
            <a href="#contact" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">Contact Us</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Building the Future, <span className="text-blue-600">Together.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            We deliver innovative solutions that drive growth, efficiency, and success for businesses worldwide.
          </p>
          <a href="#projects" className="inline-flex items-center px-6 py-3 text-lg font-medium bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition">
            See Our Work <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded in 2020, CompanyCo is dedicated to pushing the boundaries of what's possible in tech. We believe in lean development, transparent communication, and shipping products that matter.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our mission is simple: simplify the complex. Whether it's enterprise software or consumer applications, we bring expertise and passion to every line of code.
            </p>
          </div>
          <div className="bg-blue-100 rounded-2xl h-80 flex items-center justify-center">
             <Briefcase className="w-32 h-32 text-blue-300" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Projects Done</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Project Alpha", desc: "A comprehensive e-commerce platform built for scale." },
              { title: "DataFlow", desc: "Real-time analytics dashboard for fintech institutions." },
              { title: "EcoApp", desc: "Mobile application promoting sustainable living habits." }
            ].map((project, idx) => (
              <div key={idx} className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
                <Code className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Meet the Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Jane Doe", role: "CEO & Founder" },
              { name: "John Smith", role: "CTO" },
              { name: "Alice Johnson", role: "Lead Designer" },
              { name: "Bob Williams", role: "Senior Developer" }
            ].map((member, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-blue-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="text-gray-400 mb-12">Ready to start your next project? We'd love to hear from you.</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-blue-500 mb-3" />
              <span>hello@companyco.com</span>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-blue-500 mb-3" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-blue-500 mb-3" />
              <span>123 Tech Lane, NY 10001</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-6 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} CompanyCo. All rights reserved.</p>
      </footer>

    </div>
  );
}