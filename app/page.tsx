"use client";

import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#FFF] min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="rounded-[20px] bg-[rgba(188,188,188,0.10)] backdrop-blur-md px-4 py-2">
              <div className="flex items-center gap-2">
                <img src="/Image2.png" className="w-10 h-10 rounded-[20px]" alt="Logo" />
                <span className="text-[#000] font-googleSansFlex font-medium hidden sm:block">Synthica</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="rounded-[20px] bg-[rgba(188,188,188,0.10)] backdrop-blur-md px-6 py-3">
              <div className="flex items-center gap-6">
                <a href="#" className="text-[#4B4B4B] font-googleSansFlex hover:text-[#244A73] transition-colors">Home</a>
                <a href="#" className="text-[#4B4B4B] font-googleSansFlex hover:text-[#244A73] transition-colors">About</a>
                <a href="#" className="text-[#4B4B4B] font-googleSansFlex hover:text-[#244A73] transition-colors">Journal</a>
                <a href="#" className="text-[#4B4B4B] font-googleSansFlex hover:text-[#244A73] transition-colors">Program</a>
                <a href="#" className="text-[#4B4B4B] font-googleSansFlex hover:text-[#244A73] transition-colors">Work with us</a>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="rounded-[20px] bg-[rgba(188,188,188,0.10)] backdrop-blur-md px-6 py-4 flex flex-col gap-4">
              <a href="#" className="text-[#4B4B4B] font-googleSansFlex">Home</a>
              <a href="#" className="text-[#4B4B4B] font-googleSansFlex">About</a>
              <a href="#" className="text-[#4B4B4B] font-googleSansFlex">Journal</a>
              <a href="#" className="text-[#4B4B4B] font-googleSansFlex">Program</a>
              <a href="#" className="text-[#4B4B4B] font-googleSansFlex">Work with us</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen">
        {/* Background Images */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/ChatgptImageJun12202609_19_24Pmphotoroom1.png" 
            className="w-full h-48 sm:h-64 md:h-80 lg:h-[180px] object-cover" 
            alt="Header" 
          />
          <img 
            src="/ChatgptImageJun12202608_40_28Pm1.png" 
            className="w-full h-[60vh] sm:h-[70vh] md:h-[675px] object-cover -mt-4 sm:-mt-8 md:-mt-12" 
            alt="Hero Background" 
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-32 sm:pt-40 md:pt-48 lg:pt-32">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[80px] font-instrumentSerif text-[#000] text-center leading-tight mb-4 md:mb-8">
            Research made approachable for <i>you</i>
          </h1>
          <p className="text-sm sm:text-lg md:text-xl lg:text-[25px] text-[#535353] font-googleSansFlex text-center max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-[985px] mb-6 md:mb-8">
            Synthica creates a playground for high school students to conduct
            research and participate in competitions regardless of their levels.
          </p>
          <button className="relative">
            <svg
              width="157"
              height="54"
              viewBox="0 0 157 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-32 sm:w-40 md:w-48 lg:w-[157px] h-auto"
            >
              <rect
                width="156.753"
                height="53.7859"
                rx="26.8929"
                fill="#B1DBFE"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[#244A73] font-googleSansFlex text-sm sm:text-base md:text-lg lg:text-xl">
              Join us now
            </span>
          </button>
        </div>
      </section>

      {/* Kickstart Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-googleSansFlex text-[#4B4B4B] text-center bg-gradient-to-r from-[#B0DBFD] to-[#0070C8] bg-clip-text text-transparent">
          At Synthica, we kickstart your Research Career.
        </h2>
      </section>

      {/* How It Works Section */}
      <section className="py-8 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-googleSansFlex font-medium text-[#000] mb-8 lg:mb-12">
            Learn how we work in 4 simple steps.
          </h2>

          {/* Container with gray background */}
          <div className="rounded-[50px] bg-[#F4F5F7] p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              {/* Steps Card - Left Side */}
              <div className="rounded-[25px] bg-[#FFF] p-6 lg:p-8 w-full lg:w-[390px] shrink-0">
                {/* Step 1 */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#244A73] flex items-center justify-center shrink-0">
                    <span className="text-[#FFF] font-googleSansFlex font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-googleSansFlex font-medium text-[#000] mb-1">Sign Up</h3>
                    <p className="text-[#535353] text-sm">Create your free account and join our community</p>
                  </div>
                </div>
                {/* Step 2 */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#244A73] flex items-center justify-center shrink-0">
                    <span className="text-[#FFF] font-googleSansFlex font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-googleSansFlex font-medium text-[#000] mb-1">Choose Program</h3>
                    <p className="text-[#535353] text-sm">Select from our range of research programs</p>
                  </div>
                </div>
                {/* Step 3 */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#244A73] flex items-center justify-center shrink-0">
                    <span className="text-[#FFF] font-googleSansFlex font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-googleSansFlex font-medium text-[#000] mb-1">Start Learning</h3>
                    <p className="text-[#535353] text-sm">Access resources and begin your research journey</p>
                  </div>
                </div>
                {/* Step 4 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#244A73] flex items-center justify-center shrink-0">
                    <span className="text-[#FFF] font-googleSansFlex font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-googleSansFlex font-medium text-[#000] mb-1">Publish & Compete</h3>
                    <p className="text-[#535353] text-sm">Share your work and participate in competitions</p>
                  </div>
                </div>
              </div>

              {/* Image and Stats - Right Side */}
              <div className="flex-1 space-y-6">
                {/* Image Card */}
                <div className="rounded-[25px] overflow-hidden shadow-lg">
                  <img src="/Rectangle9.png" alt="Research" className="w-full h-48 sm:h-64 md:h-80 lg:h-[204px] object-cover" />
                </div>

                {/* Stats Card */}
                <div className="rounded-[25px] border border-[#DCEBFA] bg-[#EAF4FF] p-6 lg:p-8">
                  <div className="text-center mb-6">
                    <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-googleSansFlex font-medium text-[#000]">16000+</span>
                    <p className="text-[#535353] font-googleSansFlex mt-2 text-sm sm:text-base">Researchers as members of Synthica worldwide</p>
                  </div>

                  {/* Progress Bars - Original Style */}
                  <div className="space-y-2">
                    {/* Community Progress */}
                    <div className="flex items-center gap-3 flex-wrap">
                      <div className="flex gap-1 flex-wrap">
                        {[...Array(6)].map((_, i) => (
                          <div key={`comm-${i}`} className={`h-6 lg:h-[33px] rounded-[50px] ${i < 3 ? 'bg-[#D2E4F8]' : 'bg-[#DCEBFA]'} px-2 lg:px-3 flex items-center`}>
                            {i === 0 && (
                              <div className="flex items-center gap-1">
                                <div className="w-3 h-3 bg-[#FFF] rounded-full flex items-center justify-center">
                                  <span className="text-[8px] text-[#000]">✓</span>
                                </div>
                                <span className="text-[10px] lg:text-xs text-[#244A73] font-googleSansFlex font-medium whitespace-nowrap">Community</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Opportunities Progress */}
                    <div className="flex items-center gap-3 flex-wrap">
                      <div className="flex gap-1 flex-wrap">
                        {[...Array(6)].map((_, i) => (
                          <div key={`opp-${i}`} className={`h-6 lg:h-[33px] rounded-[50px] ${i < 4 ? 'bg-[#D2E4F8]' : 'bg-[#DCEBFA]'} px-2 lg:px-3 flex items-center`}>
                            {i === 0 && (
                              <div className="flex items-center gap-1">
                                <div className="w-3 h-3 bg-[#000] rounded-full"></div>
                                <span className="text-[10px] lg:text-xs text-[#244A73] font-googleSansFlex font-medium whitespace-nowrap">Opportunities</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Competitions Progress */}
                    <div className="flex items-center gap-3 flex-wrap">
                      <div className="flex gap-1 flex-wrap">
                        {[...Array(6)].map((_, i) => (
                          <div key={`comp-${i}`} className={`h-6 lg:h-[33px] rounded-[50px] ${i < 5 ? 'bg-[#D2E4F8]' : 'bg-[#DCEBFA]'} px-2 lg:px-3 flex items-center`}>
                            {i === 0 && (
                              <div className="flex items-center gap-1">
                                <div className="w-3 h-3 bg-[#000] rounded"></div>
                                <span className="text-[10px] lg:text-xs text-[#244A73] font-googleSansFlex font-medium whitespace-nowrap">Competitions</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-googleSansFlex bg-gradient-to-r from-[#B0DBFD] to-[#0070C8] bg-clip-text text-transparent">
            Zero cost. Non-selective Program.
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="flex p-6 lg:p-7 flex-col items-start gap-2.5 rounded-xl border border-[#E7E7E7] bg-[#FFF]">
            <div className="flex p-1.5 justify-center items-center rounded bg-[#D2E4F8] w-8 h-8">
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.23529L4.84 9L13 1" stroke="#244A73" strokeWidth="1.5"/>
              </svg>
            </div>
            <h3 className="text-[#131313] font-googleSansFlex text-lg lg:text-xl">Zero money spent</h3>
            <p className="text-[#535353] text-sm">All programs are completely free</p>
          </div>

          {/* Feature 2 */}
          <div className="flex p-6 lg:p-7 flex-col items-start gap-2.5 rounded-xl border border-[#E7E7E7] bg-[#FFF]">
            <div className="flex p-1.5 justify-center items-center rounded bg-[#D2E4F8] w-8 h-8">
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.23529L4.84 9L13 1" stroke="#244A73" strokeWidth="1.5"/>
              </svg>
            </div>
            <h3 className="text-[#131313] font-googleSansFlex text-lg lg:text-xl">Open to all high school students</h3>
            <p className="text-[#535353] text-sm">No prerequisites required</p>
          </div>

          {/* Feature 3 */}
          <div className="flex p-6 lg:p-7 flex-col items-start gap-2.5 rounded-xl border border-[#E7E7E7] bg-[#FFF] md:col-span-2 lg:col-span-1">
            <div className="flex p-1.5 justify-center items-center rounded bg-[#D2E4F8] w-8 h-8">
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.23529L4.84 9L13 1" stroke="#244A73" strokeWidth="1.5"/>
              </svg>
            </div>
            <h3 className="text-[#131313] font-googleSansFlex text-lg lg:text-xl">Research Leadership Opportunity</h3>
            <p className="text-[#535353] text-sm">Lead your own research projects</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[49px] font-googleSansFlex font-medium text-[#000] text-center mb-8 lg:mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <details className="rounded-[20px] border border-[#D1D1D1] bg-[#FFF] overflow-hidden">
              <summary className="p-4 lg:p-6 cursor-pointer flex items-center justify-between">
                <span className="text-[#1E1E1E] font-googleSansFlex">What is Synthica?</span>
                <svg className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </summary>
              <div className="px-4 lg:px-6 pb-4 lg:pb-6 border-t border-[#F4F5F7]">
                <p className="text-[#535353]">Synthica is a platform that helps high school students start their research careers through workshops, mentorship, and competitions.</p>
              </div>
            </details>

            <details className="rounded-[20px] border border-[#D1D1D1] bg-[#FFF] overflow-hidden">
              <summary className="p-4 lg:p-6 cursor-pointer flex items-center justify-between">
                <span className="text-[#1E1E1E] font-googleSansFlex">How much does it cost to join Synthica?</span>
                <svg className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </summary>
              <div className="px-4 lg:px-6 pb-4 lg:pb-6 border-t border-[#F4F5F7]">
                <p className="text-[#535353]">Nothing! All Synthica programs are completely free for high school students.</p>
              </div>
            </details>

            <details className="rounded-[20px] border border-[#D1D1D1] bg-[#FFF] overflow-hidden">
              <summary className="p-4 lg:p-6 cursor-pointer flex items-center justify-between">
                <span className="text-[#1E1E1E] font-googleSansFlex">How can I join the community?</span>
                <svg className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </summary>
              <div className="px-4 lg:px-6 pb-4 lg:pb-6 border-t border-[#F4F5F7]">
                <p className="text-[#535353]">Simply sign up on our website and you'll gain immediate access to all community resources and events.</p>
              </div>
            </details>

            <details className="rounded-[20px] border border-[#D1D1D1] bg-[#FFF] overflow-hidden">
              <summary className="p-4 lg:p-6 cursor-pointer flex items-center justify-between">
                <span className="text-[#1E1E1E] font-googleSansFlex">What is the Global Research Challenge?</span>
                <svg className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </summary>
              <div className="px-4 lg:px-6 pb-4 lg:pb-6 border-t border-[#F4F5F7]">
                <p className="text-[#535353]">Our annual competition where students showcase their research projects and compete for recognition and prizes.</p>
              </div>
            </details>

            <details className="rounded-[20px] border border-[#D1D1D1] bg-[#FFF] overflow-hidden">
              <summary className="p-4 lg:p-6 cursor-pointer flex items-center justify-between">
                <span className="text-[#1E1E1E] font-googleSansFlex">Do I need prior research experience?</span>
                <svg className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </summary>
              <div className="px-4 lg:px-6 pb-4 lg:pb-6 border-t border-[#F4F5F7]">
                <p className="text-[#535353]">Not at all! We welcome students of all experience levels and provide guidance from beginner to advanced.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-[#E7E7E7]">
        <div className="max-w-6xl mx-auto text-center text-[#535353] text-sm">
          <p>© 2024 Synthica. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
