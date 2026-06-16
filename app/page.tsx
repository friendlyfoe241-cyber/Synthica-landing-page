export default function Home() {
  return (
    <div className="bg-[#FFF] min-h-screen w-full relative overflow-x-hidden flex flex-col items-center pb-12">
      {/* Background Decorative Images */}
      <div className="absolute top-0 left-0 w-full h-[766px] bg-[#FFF] -z-10" />
      <img
        src="/ChatgptImageJun12202608_40_28Pm1.png"
        className="w-full h-[675px] absolute left-0 top-[138px] object-cover opacity-60 -z-10"
        alt="Background Pattern 1"
      />
      <img
        src="/ChatgptImageJun12202609_19_24Pmphotoroom1.png"
        className="w-full h-[180px] absolute left-0 top-0 object-cover opacity-30 -z-10"
        alt="Background Pattern 2"
      />

      {/* Navigation Bar */}
      <nav className="w-full max-w-7xl mx-auto px-6 py-8 flex justify-between items-center z-10">
        <div className="flex items-center gap-3 bg-[rgba(188,188,188,0.10)] px-5 py-2.5 rounded-[20px] backdrop-blur-sm">
          <img
            src="/Image2.png"
            className="rounded-[20px] w-[42px] h-[42px] object-cover"
            alt="Synthica Logo"
          />
          <p className="text-[#000] font-googleSansFlex text-xl font-medium">
            Synthica
          </p>
        </div>

        <div className="hidden md:flex items-center gap-8 bg-[rgba(188,188,188,0.10)] px-8 py-4 rounded-[20px] backdrop-blur-sm text-[#4B4B4B] font-googleSansFlex text-lg">
          <a href="#" className="hover:text-black">Home</a>
          <a href="#" className="hover:text-black">About</a>
          <a href="#" className="hover:text-black">Journal</a>
          <a href="#" className="hover:text-black">Program</a>
          <a href="#" className="hover:text-black">Work with us</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="w-full max-w-5xl mx-auto px-4 pt-12 pb-32 flex flex-col items-center justify-center text-center z-10">
        <h1 className="text-[#000] font-instrumentSerif text-[60px] md:text-[80px] leading-tight">
          Research made approachable for <i>you</i>
        </h1>
        <p className="text-[#535353] font-googleSansFlex text-xl md:text-[25px] max-w-4xl mt-8">
          Synthica creates a playground for high school students to conduct
          research and participate in competitions regardless of their levels.
        </p>
        <div className="relative mt-12 cursor-pointer hover:opacity-90">
          <svg
            width="157"
            height="54"
            viewBox="0 0 157 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="156.753" height="53.7859" rx="26.8929" fill="#B1DBFE" />
          </svg>
          <p className="text-[#244A73] font-googleSansFlex text-xl absolute inset-0 flex items-center justify-center font-medium">
            Join us now
          </p>
        </div>
      </header>

      {/* Sub-banner */}
      <section className="w-full bg-gradient-to-r from-[#B0DBFD] to-[#0070C8]/20 py-6 mb-20">
        <p className="text-[#4B4B4B] font-googleSansFlex text-2xl md:text-[40px] text-center px-4">
          At Synthica, we kickstart your Research Career.
        </p>
      </section>

      {/* Dashboard & Stats Block */}
      <section className="w-full max-w-6xl mx-auto px-6 mb-24">
        <div className="rounded-[50px] bg-[#F4F5F7] p-8 md:p-10 flex flex-col lg:flex-row gap-8">
          
          {/* Left Info Panel */}
          <div className="rounded-[25px] bg-[#FFF] flex-1 p-8 shadow-sm flex flex-col justify-between min-h-[300px]">
            <p className="text-[#4B4B4B] font-googleSansFlex text-[28px] leading-tight mb-8">
              Learn how Synthica works and become a part of us.
            </p>
            <div className="space-y-4">
               {/* Decorative dots to match original abstract UI */}
               <div className="w-12 h-12 bg-[#DCEBFA] rounded-full" />
            </div>
          </div>

          {/* Right Stats & Tags Panel */}
          <div className="flex-[1.5] flex flex-col gap-6">
            <div className="relative rounded-[25px] overflow-hidden bg-neutral-200 h-[220px]">
              <img
                src="/Rectangle9.png"
                className="w-full h-full object-cover absolute inset-0"
                alt="Global Network Graphic"
              />
              <div className="absolute top-1/2 left-8 -translate-y-1/2">
                <h3 className="text-[#000] font-googleSansFlex text-[40px] font-medium leading-none mb-2">
                  16000+
                </h3>
                <p className="text-[#000] font-googleSansFlex text-[19px]">
                  Researchers as members of Synthica worldwide
                </p>
              </div>
            </div>

            {/* Abstract Pill Tags Array */}
            <div className="rounded-[25px] border border-[#DCEBFA] bg-[#EAF4FF] p-6 flex flex-wrap gap-3">
              <div className="rounded-[50px] bg-[#DCEBFA] h-[33px] w-[77px]" />
              <div className="rounded-[50px] bg-[#DCEBFA] h-[33px] w-[105px]" />
              <div className="rounded-[50px] bg-[#D2E4F8] border border-[#DCEBFA] px-4 py-1.5 flex items-center gap-2 text-[#244A73] font-medium text-sm">
                Community
              </div>
              <div className="rounded-[50px] bg-[#DCEBFA] h-[33px] w-[65px]" />
              <div className="rounded-[50px] bg-[#DCEBFA] h-[33px] w-[131px]" />
              <div className="rounded-[50px] bg-[#D2E4F8] border border-[#DCEBFA] px-4 py-1.5 flex items-center gap-2 text-[#244A73] font-medium text-sm">
                Opportunities
              </div>
              <div className="rounded-[50px] bg-[#DCEBFA] h-[33px] w-[110px]" />
              <div className="rounded-[50px] bg-[#DCEBFA] h-[33px] w-[78px]" />
              <div className="rounded-[50px] bg-[#D2E4F8] border border-[#DCEBFA] px-4 py-1.5 flex items-center gap-2 text-[#244A73] font-medium text-sm">
                Competitions
              </div>
              <div className="rounded-[50px] bg-[#DCEBFA] h-[33px] w-[141px]" />
            </div>
          </div>
        </div>
      </section>

      {/* 4 Steps Section */}
      <section className="w-full max-w-5xl mx-auto px-6 mb-32 relative">
        <h2 className="text-[#000] font-googleSansFlex text-[40px] font-medium mb-16 max-w-md bg-gradient-to-r from-[#B0DBFD] to-[#0070C8]/20 pr-4 rounded-r-lg">
          Learn how we work in 4 simple steps.
        </h2>

        {/* Vertical Line Connector */}
        <div className="hidden md:block absolute left-[56px] top-[200px] bottom-0 w-0.5 bg-[#D9D9D9] -z-10" />

        <div className="flex flex-col gap-16">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="bg-[#244A73] text-white w-10 h-10 rounded-full flex items-center justify-center font-googleSansFlex text-2xl shrink-0 z-10">
              1
            </div>
            <div className="bg-[#F4F5F7] rounded-[20px] p-8 flex flex-col items-center w-full max-w-lg">
              <p className="text-[#000] font-googleSansFlex text-[17px] text-center mb-6">
                Become part of our global network of student researchers by joining our Discord server and connecting with peers.
              </p>
              <img src="/Rectangle25.png" className="w-full h-[234px] object-cover rounded-[20px] mb-6" alt="Step 1" />
              <div className="bg-[#FFF] shadow-md rounded-[30px] w-full py-4 text-center text-[#000] font-googleSansFlex text-xl">
                Join our Research Community
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="bg-[#244A73] text-white w-10 h-10 rounded-full flex items-center justify-center font-googleSansFlex text-2xl shrink-0 z-10">
              2
            </div>
            <div className="bg-[#F4F5F7] rounded-[20px] p-8 flex flex-col items-center w-full max-w-lg">
              <p className="text-[#000] font-googleSansFlex text-[17px] text-center mb-6">
                Access our high-quality research curriculum and learn the foundations of academic research at your own pace.
              </p>
              <img src="/Rectangle25(1).png" className="w-full h-[234px] object-cover rounded-[20px] mb-6" alt="Step 2" />
              <div className="bg-[#FFF] shadow-md rounded-[30px] w-full py-4 text-center text-[#000] font-googleSansFlex text-xl">
                Learn from our Expert Curriculum
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="bg-[#244A73] text-white w-10 h-10 rounded-full flex items-center justify-center font-googleSansFlex text-2xl shrink-0 z-10">
              3
            </div>
            <div className="bg-[#F4F5F7] rounded-[20px] p-8 flex flex-col items-center w-full max-w-lg">
              <p className="text-[#000] font-googleSansFlex text-[17px] text-center mb-6">
                Apply what you've learned to create your own original research project, with guidance from our community resources.
              </p>
              <img src="/Rectangle25(2).png" className="w-full h-[234px] object-cover rounded-[20px] mb-6" alt="Step 3" />
              <div className="bg-[#FFF] shadow-md rounded-[30px] w-full py-4 text-center text-[#000] font-googleSansFlex text-xl">
                Develop your Research Project
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="bg-[#244A73] text-white w-10 h-10 rounded-full flex items-center justify-center font-googleSansFlex text-2xl shrink-0 z-10">
              4
            </div>
            <div className="bg-[#F4F5F7] rounded-[20px] p-8 flex flex-col items-center w-full max-w-lg">
              <p className="text-[#000] font-googleSansFlex text-[17px] text-center mb-6">
                Showcase your findings at our international research competitions and earn recognition for your work.
              </p>
              <img src="/Rectangle25(3).png" className="w-full h-[234px] object-cover rounded-[20px] mb-6" alt="Step 4" />
              <div className="bg-[#FFF] shadow-md rounded-[30px] w-full py-4 text-center text-[#000] font-googleSansFlex text-xl">
                Participate in Competitions
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Information Cards Section */}
      <section className="w-full max-w-6xl mx-auto px-6 mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-4 p-7 rounded-xl border border-[#E7E7E7] bg-[#FFF] shadow-sm">
          <div className="flex p-1.5 justify-center items-center rounded bg-[#D2E4F8] w-8 h-8">
             <span className="text-[#244A73] font-bold text-xs">✓</span>
          </div>
          <p className="text-[#131313] font-googleSansFlex text-xl leading-tight">
            Zero money spent
          </p>
        </div>

        <div className="flex flex-col gap-4 p-7 rounded-xl border border-[#E7E7E7] bg-[#FFF] shadow-sm">
          <div className="flex p-1.5 justify-center items-center rounded bg-[#D2E4F8] w-8 h-8">
             <span className="text-[#244A73] font-bold text-xs">✓</span>
          </div>
          <p className="text-[#131313] font-googleSansFlex text-xl leading-tight">
            Open to all high school students
          </p>
        </div>

        <div className="flex flex-col gap-4 p-7 rounded-xl border border-[#E7E7E7] bg-[#FFF] shadow-sm">
          <div className="flex p-1.5 justify-center items-center rounded bg-[#D2E4F8] w-8 h-8">
             <span className="text-[#244A73] font-bold text-xs">✓</span>
          </div>
          <p className="text-[#131313] font-googleSansFlex text-xl leading-tight">
            Research Leadership Opportunity
          </p>
        </div>
      </section>

      {/* Zero Cost Banner */}
      <section className="w-full flex justify-center mb-24">
        <div className="bg-gradient-to-r from-[#B0DBFD] to-[#0070C8]/50 text-[#4B4B4B] font-googleSansFlex text-[32px] md:text-[42px] py-2 px-8 text-center rounded-sm">
          Zero cost. Non-selective Program.
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-6xl mx-auto px-6 mb-24">
        <h2 className="text-center text-[#000] font-googleSansFlex text-[40px] md:text-[49px] font-medium mb-12">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          <div className="rounded-[20px] border border-[#D1D1D1] bg-[#FFF] p-6 flex justify-between items-center shadow-sm">
            <p className="text-[#1E1E1E] font-googleSansFlex text-[19px]">What is Synthica?</p>
            <span className="text-2xl font-light">+</span>
          </div>
          <div className="rounded-[20px] border border-[#D1D1D1] bg-[#FFF] p-6 flex justify-between items-center shadow-sm">
            <p className="text-[#1E1E1E] font-googleSansFlex text-[19px]">Do I need prior research experience?</p>
            <span className="text-2xl font-light">+</span>
          </div>
          <div className="rounded-[20px] border border-[#D1D1D1] bg-[#FFF] p-6 flex justify-between items-center shadow-sm">
            <p className="text-[#1E1E1E] font-googleSansFlex text-[19px]">How much does it cost to join Synthica?</p>
            <span className="text-2xl font-light">+</span>
          </div>
          <div className="rounded-[20px] border border-[#D1D1D1] bg-[#FFF] p-6 flex justify-between items-center shadow-sm">
            <p className="text-[#1E1E1E] font-googleSansFlex text-[19px]">More faq</p>
            <span className="text-2xl font-light">+</span>
          </div>
          <div className="rounded-[20px] border border-[#D1D1D1] bg-[#FFF] p-6 flex justify-between items-center shadow-sm">
            <p className="text-[#1E1E1E] font-googleSansFlex text-[19px]">How can I join the community?</p>
            <span className="text-2xl font-light">+</span>
          </div>
          <div className="rounded-[20px] border border-[#D1D1D1] bg-[#FFF] p-6 flex justify-between items-center shadow-sm">
            <p className="text-[#1E1E1E] font-googleSansFlex text-[19px]">more faq</p>
            <span className="text-2xl font-light">+</span>
          </div>
          <div className="rounded-[20px] border border-[#D1D1D1] bg-[#FFF] p-6 flex justify-between items-center shadow-sm">
            <p className="text-[#1E1E1E] font-googleSansFlex text-[19px]">What is the Global Research Challenge?</p>
            <span className="text-2xl font-light">+</span>
          </div>
        </div>
      </section>

      {/* Pre-Footer Image Block */}
      <section className="w-full border-t border-b border-black py-16 flex justify-center bg-[#FFF]">
        <div className="w-full max-w-6xl px-6">
          <img
            src="/Backgroundborder.png"
            className="w-full h-auto max-h-[600px] object-contain border border-black"
            alt="Synthica Interface Example"
          />
        </div>
      </section>

      {/* True Footer */}
      <footer className="w-full border-b border-black py-4 bg-[#FFF]">
        <div className="w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#000] font-googleSansFlex text-lg md:text-[21px] font-medium text-center md:text-left">
            © 2026 Synthica. All rights reserved. Platform developed with
          </p>
          {/* Abstract dotted icon to represent the original SVGs */}
          <div className="grid grid-cols-3 gap-1">
             <div className="w-1.5 h-1.5 bg-black rounded-full" />
             <div className="w-1.5 h-1.5 bg-black rounded-full" />
             <div className="w-1.5 h-1.5 bg-black rounded-full" />
             <div className="w-1.5 h-1.5 bg-black rounded-full" />
             <div className="w-1.5 h-1.5 bg-black rounded-full opacity-0" />
             <div className="w-1.5 h-1.5 bg-black rounded-full" />
          </div>
        </div>
      </footer>
    </div>
  );
}