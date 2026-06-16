export default function Home() {
  return (
    <div className="bg-[#FFF] min-h-screen w-full relative overflow-x-hidden flex flex-col items-center pb-24">
      {/* Background Decorative Images */}
      <div className="absolute top-0 left-0 w-full h-[766px] bg-[#FFF] -z-10" />
      <img
        src="/ChatgptImageJun12202608_40_28Pm1.png"
        className="w-full h-[675px] absolute left-0 top-[138px] max-w-none opacity-40 object-cover -z-10"
        alt="Background Pattern 1"
      />
      <img
        src="/ChatgptImageJun12202609_19_24Pmphotoroom1.png"
        className="w-full h-[180px] absolute left-0 top-0 max-w-none opacity-20 object-cover -z-10"
        alt="Background Pattern 2"
      />

      {/* Navigation Bar */}
      <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center z-10">
        {/* Brand Logo */}
        <div className="flex items-center gap-3 bg-[rgba(188,188,188,0.10)] px-5 py-2.5 rounded-[20px] backdrop-blur-sm border border-neutral-200/30">
          <img
            src="/Image2.png"
            className="rounded-[20px] w-[42px] h-[42px] object-cover"
            alt="Synthica Logo"
          />
          <p className="text-[#000] font-googleSansFlex text-xl font-medium tracking-tight">
            Synthica
          </p>
        </div>

        {/* Menu Links */}
        <div className="flex items-center gap-6 bg-[rgba(188,188,188,0.10)] px-6 py-3 rounded-[20px] backdrop-blur-sm border border-neutral-200/30 text-[#4B4B4B] font-googleSansFlex text-base md:text-lg">
          <a href="#" className="hover:text-black transition-colors">Home</a>
          <a href="#" className="hover:text-black transition-colors">About</a>
          <a href="#" className="hover:text-black transition-colors">Journal</a>
          <a href="#" className="hover:text-black transition-colors">Program</a>
          <a href="#" className="hover:text-black transition-colors">Work with us</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="w-full max-w-5xl mx-auto px-4 pt-16 pb-24 flex flex-col items-center justify-center text-center z-10">
        <h1 className="text-[#000] font-instrumentSerif text-5xl md:text-[80px] leading-tight text-center">
          Research made approachable for <i>you</i>
        </h1>
        <p className="text-[#535353] font-googleSansFlex text-lg md:text-[25px] max-w-4xl text-center mt-8 leading-relaxed">
          Synthica creates a playground for high school students to conduct
          research and participate in competitions regardless of their levels.
        </p>
        <div className="relative mt-10 cursor-pointer hover:scale-105 transition-transform">
          <svg
            width="157"
            height="54"
            viewBox="0 0 157 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[157px] h-[54px]"
          >
            <rect
              width="156.753"
              height="53.7859"
              rx="26.8929"
              fill="#B1DBFE"
            />
          </svg>
          <p className="text-[#244A73] font-googleSansFlex text-xl font-semibold absolute inset-0 flex items-center justify-center">
            Join us now
          </p>
        </div>
      </header>

      {/* Sub-banner Highlight Section */}
      <section className="w-full bg-gradient-to-r from-[#B0DBFD]/10 to-[#0070C8]/10 py-8 mb-16 text-center">
        <p className="text-[#4B4B4B] font-googleSansFlex text-2xl md:text-[40px] px-4 font-medium">
          At Synthica, we kickstart your Research Career.
        </p>
      </section>

      {/* Stats & Interactive Badges Dashboard Block */}
      <main className="w-full max-w-6xl mx-auto px-6 mb-24">
        <div className="rounded-[50px] bg-[#F4F5F7] p-8 md:p-12 flex flex-col lg:flex-row gap-8 items-stretch shadow-sm">
          {/* Dashboard Left Side Component */}
          <div className="rounded-[25px] bg-[#FFF] flex-1 min-h-[300px] border border-neutral-100 shadow-inner p-6 flex flex-col justify-between">
            <p className="text-[#4B4B4B] font-googleSansFlex text-xl md:text-2xl leading-snug">
              Learn how Synthica works and become a part of us.
            </p>
            <div className="w-full h-px bg-neutral-100 my-4" />
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#244A73]" />
                <span className="text-neutral-600 text-sm">Global Student Forums</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#B1DBFE]" />
                <span className="text-neutral-600 text-sm">International Mentorship Grid</span>
              </div>
            </div>
          </div>

          {/* Dashboard Right Side Component */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Stats Graphic Box */}
            <div className="relative rounded-[25px] overflow-hidden group min-h-[200px] bg-neutral-200">
              <img
                src="/Rectangle9.png"
                className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500"
                alt="Global Network Graphic"
              />
              <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px] p-6 flex flex-col justify-center items-center text-center">
                <h3 className="text-[#000] font-googleSansFlex text-4xl md:text-[40px] font-bold">
                  16000+
                </h3>
                <p className="text-[#000] font-googleSansFlex text-base md:text-[19px] mt-2 max-w-sm">
                  Researchers as members of Synthica worldwide
                </p>
              </div>
            </div>

            {/* Badges Container Grid */}
            <div className="rounded-[25px] border border-[#DCEBFA] bg-[#EAF4FF] p-6 flex flex-wrap gap-2.5 content-start">
              {/* Core Interest Badges */}
              <div className="rounded-[50px] bg-[#D2E4F8] border border-[#DCEBFA] px-4 py-2 flex items-center gap-2 text-[#244A73] font-medium text-sm shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                Community
              </div>
              <div className="rounded-[50px] bg-[#D2E4F8] border border-[#DCEBFA] px-4 py-2 flex items-center gap-2 text-[#244A73] font-medium text-sm shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Opportunities
              </div>
              <div className="rounded-[50px] bg-[#D2E4F8] border border-[#DCEBFA] px-4 py-2 flex items-center gap-2 text-[#244A73] font-medium text-sm shadow-sm">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                Competitions
              </div>

              {/* Auxiliary Pill Blocks for visual depth */}
              <div className="rounded-[50px] bg-[#DCEBFA] h-[33px] w-[77px]" />
              <div className="rounded-[50px] bg-[#DCEBFA] h-[33px] w-[105px]" />
              <div className="rounded-[50px] bg-[#DCEBFA] h-[33px] w-[65px]" />
              <div className="rounded-[50px] bg-[#DCEBFA] h-[33px] w-[131px]" />
              <div className="rounded-[50px] bg-[#DCEBFA] h-[33px] w-[78px]" />
            </div>
          </div>
        </div>
      </main>

      {/* Workflow 4 Steps Section */}
      <section className="w-full max-w-4xl mx-auto px-6">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-[#000] font-googleSansFlex text-3xl md:text-[40px] font-medium mb-3">
            Learn how we work in 4 simple steps.
          </h2>
          <p className="text-[#4B4B4B] font-googleSansFlex text-lg">
            Follow our structured pathway to streamline your high school research.
          </p>
        </div>

        {/* Vertical Flow of Connected Adaptive Blocks */}
        <div className="flex flex-col gap-8">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row gap-6 items-center bg-[#F4F5F7] p-6 md:p-8 rounded-[30px] border border-neutral-100 shadow-sm">
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-full bg-[#244A73] w-10 h-10 flex items-center justify-center text-[#FFF] font-bold text-xl shadow-sm">
                  1
                </div>
                <h4 className="text-[#000] font-bold text-lg md:text-xl">Global Integration</h4>
              </div>
              <p className="text-[#000] font-googleSansFlex text-[16px] md:text-[17px] leading-relaxed text-neutral-600 mb-6 max-w-md">
                Become part of our global network of student researchers by joining
                our Discord server and connecting with peers.
              </p>
              <div className="rounded-[30px] bg-[#FFF] border border-neutral-200/60 shadow-sm px-6 py-3 cursor-pointer hover:bg-neutral-50 transition-colors">
                <span className="text-[#000] font-googleSansFlex text-sm font-medium">
                  Join our Research Community
                </span>
              </div>
            </div>
            <div className="flex-1 w-full max-w-sm">
              <img
                src="/Rectangle25.png"
                className="rounded-[20px] w-full h-auto object-cover border border-neutral-200/50"
                alt="Step 1 Illustration"
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row gap-6 items-center bg-[#F4F5F7] p-6 md:p-8 rounded-[30px] border border-neutral-100 shadow-sm">
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-full bg-[#244A73] w-10 h-10 flex items-center justify-center text-[#FFF] font-bold text-xl shadow-sm">
                  2
                </div>
                <h4 className="text-[#000] font-bold text-lg md:text-xl">Foundation Training</h4>
              </div>
              <p className="text-[#000] font-googleSansFlex text-[16px] md:text-[17px] leading-relaxed text-neutral-600 mb-6 max-w-md">
                Access our high-quality research curriculum and learn the foundations
                of academic research at your own pace.
              </p>
              <div className="rounded-[30px] bg-[#FFF] border border-neutral-200/60 shadow-sm px-6 py-3 cursor-pointer hover:bg-neutral-50 transition-colors">
                <span className="text-[#000] font-googleSansFlex text-sm font-medium">
                  Explore Learning Portal
                </span>
              </div>
            </div>
            <div className="flex-1 w-full max-w-sm">
              <img
                src="/Rectangle25(1).png"
                className="rounded-[20px] w-full h-auto object-cover border border-neutral-200/50"
                alt="Step 2 Illustration"
              />
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row gap-6 items-center bg-[#F4F5F7] p-6 md:p-8 rounded-[30px] border border-neutral-100 shadow-sm">
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-full bg-[#244A73] w-10 h-10 flex items-center justify-center text-[#FFF] font-bold text-xl shadow-sm">
                  3
                </div>
                <h4 className="text-[#000] font-bold text-lg md:text-xl">Guided Iteration</h4>
              </div>
              <p className="text-[#000] font-googleSansFlex text-[16px] md:text-[17px] leading-relaxed text-neutral-600 mb-6 max-w-md">
                Develop experimental methodologies and collect data alongside peer review boards configured dynamically for your subject matter.
              </p>
              <div className="rounded-[30px] bg-[#FFF] border border-neutral-200/60 shadow-sm px-6 py-3 cursor-pointer hover:bg-neutral-50 transition-colors">
                <span className="text-[#000] font-googleSansFlex text-sm font-medium">
                  Find a Mentor Panel
                </span>
              </div>
            </div>
            <div className="flex-1 w-full bg-neutral-200/40 rounded-[20px] min-h-[180px] flex items-center justify-center text-neutral-400 font-medium">
              Mentorship Platform Preview
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row gap-6 items-center bg-[#F4F5F7] p-6 md:p-8 rounded-[30px] border border-neutral-100 shadow-sm">
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-full bg-[#244A73] w-10 h-10 flex items-center justify-center text-[#FFF] font-bold text-xl shadow-sm">
                  4
                </div>
                <h4 className="text-[#000] font-bold text-lg md:text-xl">Publication & Exhibit</h4>
              </div>
              <p className="text-[#000] font-googleSansFlex text-[16px] md:text-[17px] leading-relaxed text-neutral-600 mb-6 max-w-md">
                Submit completed works to global science conferences, international journals, and highly vetted student symposium networks.
              </p>
              <div className="rounded-[30px] bg-[#FFF] border border-neutral-200/60 shadow-sm px-6 py-3 cursor-pointer hover:bg-neutral-50 transition-colors">
                <span className="text-[#000] font-googleSansFlex text-sm font-medium">
                  View Success Stories
                </span>
              </div>
            </div>
            <div className="flex-1 w-full bg-neutral-200/40 rounded-[20px] min-h-[180px] flex items-center justify-center text-neutral-400 font-medium">
              Competition Portal Preview
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
