import React from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Code, Briefcase, Users, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans selection:bg-[#C5A059] selection:text-black">
      
      {/* Navigation */}
      <nav className="fixed w-full bg-black/80 backdrop-blur-md border-b border-[#C5A059]/20 z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center group cursor-pointer">
            {/* Logo Image */}
            <div className="relative w-10 h-10 mr-3 overflow-hidden rounded-full border border-[#C5A059]/50 group-hover:border-[#C5A059] transition-colors duration-500">
              <Image 
                src="/selanklogo.jpeg" 
                alt="Selank AI Logo" 
                fill
                className="object-cover"
              />
            </div>
            <div className="text-2xl font-bold tracking-widest text-[#C5A059]">SELANK AI</div>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium items-center">
            <a href="#about" className="hover:text-[#C5A059] transition-colors duration-300">About</a>
            <a href="#projects" className="hover:text-[#C5A059] transition-colors duration-300">Projects</a>
            <a href="#team" className="hover:text-[#C5A059] transition-colors duration-300">Team</a>
            <a href="#contact" className="px-5 py-2 bg-transparent border border-[#C5A059] text-[#C5A059] rounded-md hover:bg-[#C5A059] hover:text-black transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_15px_rgba(197,160,89,0)] hover:shadow-[0_0_15px_rgba(197,160,89,0.4)]">
              Contact Us
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-4 text-center bg-black relative overflow-hidden">
        {/* Subtle glowing orb in the background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C5A059] rounded-full blur-[150px] opacity-10 pointer-events-none animate-pulse duration-1000"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white">
            Building the Future, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] to-[#ebd197]">Together.</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 font-light tracking-wide">
            We deliver innovative solutions that drive growth, efficiency, and success for businesses worldwide.
          </p>
          <a href="#projects" className="inline-flex items-center px-8 py-3 text-lg font-medium bg-[#C5A059] text-black rounded-sm hover:bg-[#ebd197] transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(197,160,89,0.3)]">
            See Our Work <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
              <span className="w-8 h-[2px] bg-[#C5A059] mr-4 block"></span> About Us
            </h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Founded in 2025 by a bunch of unemployed peeps, SelankAI is dedicated to pushing the boundaries of what's possible in tech. We believe in lean development, transparent communication, and shipping products that matter.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our mission is simple: simplify the complex. Whether it's enterprise software or consumer applications, we bring expertise and passion to every line of code.
            </p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl h-80 flex items-center justify-center group hover:border-[#C5A059]/50 transition-all duration-500">
             <Briefcase className="w-24 h-24 text-zinc-700 group-hover:text-[#C5A059] transition-colors duration-500 transform group-hover:scale-110" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Projects Done</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Unique ID for some dumahh place", desc: "A comprehensive identification system built for scale." },
              { title: "Medapp", desc: "Matching Docs with weakass patients" },
              { title: "Taxibot", desc: "Chat and voice bot for the dumbest taxi app users" }
            ].map((project, idx) => (
              <div key={idx} className="p-8 bg-black border border-zinc-800 rounded-xl hover:border-[#C5A059] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(197,160,89,0.1)] group">
                <Code className="w-10 h-10 text-zinc-600 group-hover:text-[#C5A059] mb-6 transition-colors duration-300" />
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#C5A059] transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-white">Meet the Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Raja Ramesh Dumahh", role: "CEO & Founder" },
              { name: "Avik Marlboro Mallik", role: "CTO" },
              { name: "Edwin Mathews", role: "Lead Designer" },
              { name: "Rajeev", role: "Senior Developer" }
            ].map((member, idx) => (
              <div key={idx} className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800/50 hover:bg-zinc-900 transition-colors duration-300 group">
                <div className="w-24 h-24 bg-black border border-zinc-800 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:border-[#C5A059] transition-colors duration-300">
                  <Users className="w-10 h-10 text-zinc-600 group-hover:text-[#C5A059] transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-lg text-white">{member.name}</h3>
                <p className="text-[#C5A059] text-sm mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-zinc-950 border-t border-zinc-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="text-gray-400 mb-12 font-light">Ready to start your next project? We'd love to hear from you.</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center p-6 rounded-lg hover:bg-zinc-900 transition-colors duration-300 group">
              <div className="w-16 h-16 rounded-full bg-black border border-zinc-800 flex items-center justify-center mb-4 group-hover:border-[#C5A059] group-hover:shadow-[0_0_15px_rgba(197,160,89,0.2)] transition-all duration-300">
                <Mail className="w-6 h-6 text-[#C5A059]" />
              </div>
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">rajaramesh@voicemail.com</span>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg hover:bg-zinc-900 transition-colors duration-300 group">
              <div className="w-16 h-16 rounded-full bg-black border border-zinc-800 flex items-center justify-center mb-4 group-hover:border-[#C5A059] group-hover:shadow-[0_0_15px_rgba(197,160,89,0.2)] transition-all duration-300">
                <Phone className="w-6 h-6 text-[#C5A059]" />
              </div>
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">+1 (555) 123-4567</span>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg hover:bg-zinc-900 transition-colors duration-300 group">
              <div className="w-16 h-16 rounded-full bg-black border border-zinc-800 flex items-center justify-center mb-4 group-hover:border-[#C5A059] group-hover:shadow-[0_0_15px_rgba(197,160,89,0.2)] transition-all duration-300">
                <MapPin className="w-6 h-6 text-[#C5A059]" />
              </div>
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">somewhere in nagercoil</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 text-center text-zinc-600 text-sm border-t border-zinc-900">
        <p>&copy; {new Date().getFullYear()} SELANK AI. All rights reserved.</p>
      </footer>

    </div>
  );
}