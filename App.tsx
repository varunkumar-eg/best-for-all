
import React, { useState, useRef, useEffect } from 'react';
import Marquee from './components/Marquee';
import HeroSlider from './components/HeroSlider';
import RunningReel from './components/RunningReel';
import ContactForm from './components/ContactForm';
import { SERVICES } from './constants.tsx';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'services'>('home');
  const [customLogo, setCustomLogo] = useState<string | null>(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load saved logo from localStorage on mount - This ensures it's "Permanent"
  useEffect(() => {
    const savedLogo = localStorage.getItem('egintech_custom_logo');
    if (savedLogo) {
      setCustomLogo(savedLogo);
    }
  }, []);

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCustomLogo(reader.result as string);
        setHasUnsavedChanges(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const saveLogo = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (customLogo) {
      localStorage.setItem('egintech_custom_logo', customLogo);
      setHasUnsavedChanges(false);
      alert('Logo saved permanently to your browser storage! 🚀');
    }
  };

  const triggerLogoUpload = () => {
    fileInputRef.current?.click();
  };

  const resetLogo = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('Are you sure you want to remove your custom logo and return to default?')) {
      setCustomLogo(null);
      localStorage.removeItem('egintech_custom_logo');
      setHasUnsavedChanges(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col scroll-smooth relative">
      {/* Hidden File Input for Logo */}
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleLogoUpload} 
        accept="image/*" 
        className="hidden" 
      />

      {/* Floating Buttons - Extra Bold & Large */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/916289733426" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white px-7 py-5 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group border-4 border-white"
          title="Chat on WhatsApp"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.141 1.419 4.767 1.42 5.313 0 9.636-4.323 9.639-9.637.002-2.574-1.002-4.993-2.825-6.816-1.821-1.822-4.238-2.827-6.815-2.827-5.317 0-9.641 4.323-9.644 9.637-.001 1.83.499 3.61 1.446 5.161l-.944 3.447 3.536-.928zM17.367 14.39c-.31-.156-1.834-.905-2.112-1.006-.279-.101-.481-.151-.684.152-.202.302-.783 1.006-.96 1.208-.177.202-.354.227-.663.071-.31-.156-1.31-.482-2.492-1.538-.919-.82-1.539-1.832-1.719-2.145-.18-.313-.019-.482.136-.636.14-.139.31-.363.465-.545.155-.181.206-.31.31-.516.103-.207.052-.387-.026-.543-.078-.156-.684-1.65-1.041-2.507-.27-.65-.546-.543-.751-.543h-.63c-.228 0-.598.086-.911.429-.313.344-1.197 1.171-1.197 2.857 0 1.687 1.233 3.315 1.405 3.543.172.228 2.428 3.708 5.882 5.201.821.354 1.462.566 1.961.724.824.263 1.574.226 2.167.137.661-.1 2.035-.832 2.321-1.637.286-.805.286-1.494.201-1.637-.086-.144-.316-.228-.626-.384z"/>
          </svg>
          <span className="ml-3 font-black text-xl tracking-tighter">WHATSAPP</span>
        </a>

        {/* Call Button */}
        <a 
          href="tel:+916289733426" 
          className="bg-blue-600 text-white px-7 py-5 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group border-4 border-white"
          title="Call Us Now"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          <span className="ml-3 font-black text-xl tracking-tighter">CALL NOW</span>
        </a>
      </div>

      {/* Header Info Bar - Extreme Font Size for Visibility */}
      <div className="bg-gray-900 text-white py-4 px-6 flex flex-col md:flex-row justify-center md:justify-between items-center border-b border-gray-800 space-y-4 md:space-y-0">
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-10 items-center">
          <a href="tel:+916289733426" className="font-black flex items-center text-xl md:text-2xl hover:text-green-400 transition-all">
            <span className="mr-2 text-green-500 bg-white/10 p-1 rounded-lg">📞</span> Mob: 6289733426
          </a>
          <span className="font-bold flex items-center text-base md:text-lg text-gray-300">
            <span className="mr-2 text-green-500">✉️</span> info@egintech.in
          </span>
        </div>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 items-center">
           <a href="https://www.egintech.in" target="_blank" className="text-lg md:text-2xl font-black text-green-400 tracking-tight hover:underline transition-all">
             www.egintech.in
           </a>
           <span className="bg-green-600 text-white px-4 py-1.5 rounded-full uppercase tracking-tighter text-xs font-black border-2 border-green-500 shadow-lg shadow-green-900/50">EGINTECH®</span>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-28 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            {/* Logo Uploading Option - Extreme Focus on Permanent Saving */}
            <div className="flex items-center space-x-4 group bg-gray-100 p-3 rounded-[1.5rem] border border-gray-200 shadow-inner">
              <div className="flex flex-col items-center">
                <div 
                  className="relative cursor-pointer w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-4xl overflow-hidden border-2 border-green-500 shadow-lg transition-all hover:scale-105 active:scale-95"
                  onClick={triggerLogoUpload}
                  title="Click to manually upload your custom company logo"
                >
                  {customLogo ? (
                    <img src={customLogo} alt="EGINTECH Custom Logo" className="w-full h-full object-contain p-2" />
                  ) : (
                    <span className="animate-pulse">🌱</span>
                  )}
                  
                  {/* Upload Overlay */}
                  <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity text-white text-[10px] font-black uppercase text-center px-2">
                    <svg className="w-8 h-8 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    CHANGE LOGO
                  </div>
                </div>
              </div>

              {/* Logo Controls - Improved UI for Permanence */}
              <div className="flex flex-col space-y-2 min-w-[100px]">
                {hasUnsavedChanges ? (
                  <button 
                    onClick={saveLogo}
                    className="bg-green-600 text-white px-4 py-2 rounded-xl text-xs font-black uppercase shadow-xl shadow-green-200 hover:bg-green-700 transition-all hover:scale-105 active:scale-95 animate-bounce"
                    title="Click to SAVE PERMANENTLY"
                  >
                    💾 SAVE NOW
                  </button>
                ) : customLogo ? (
                  <div className="text-green-700 text-[10px] font-black text-center px-2 py-1 bg-green-100 rounded-lg border border-green-200 flex flex-col">
                    <span>PERMANENTLY</span>
                    <span>SAVED ✅</span>
                  </div>
                ) : (
                   <span className="text-gray-400 text-[9px] font-black uppercase text-center">Default Logo</span>
                )}
                
                {customLogo && (
                  <button 
                    onClick={resetLogo}
                    className="bg-gray-300 text-gray-700 px-4 py-1.5 rounded-xl text-[10px] font-black uppercase shadow-sm hover:bg-red-500 hover:text-white transition-all"
                    title="Remove custom logo"
                  >
                    RESET
                  </button>
                )}
              </div>
            </div>

            <div onClick={() => { setView('home'); window.scrollTo(0,0); }} className="cursor-pointer">
              <h1 className="text-4xl md:text-5xl font-black text-green-700 tracking-tighter leading-none flex items-center">
                EGINTECH<span className="text-lg align-top ml-1 font-bold text-green-600" title="Registered Trade Mark">®</span>
              </h1>
              <span className="text-[11px] md:text-[13px] text-gray-500 uppercase tracking-widest font-black block mt-2">Excellent Growth Information Technology</span>
            </div>
          </div>

          <nav className="hidden lg:flex space-x-12 font-black text-gray-700">
            <button 
              onClick={() => { setView('home'); window.scrollTo(0,0); }} 
              className={`transition-all uppercase tracking-widest text-sm py-2 px-1 ${view === 'home' ? 'text-green-600 border-b-4 border-green-600' : 'hover:text-green-600'}`}
            >
              Home
            </button>
            <button 
              onClick={() => { setView('services'); window.scrollTo(0,0); }} 
              className={`transition-all uppercase tracking-widest text-sm py-2 px-1 ${view === 'services' ? 'text-green-600 border-b-4 border-green-600' : 'hover:text-green-600'}`}
            >
              Services
            </button>
            <a 
              href="https://egintech-exam-portal.vercel.app" 
              target="_blank"
              className="bg-orange-500 text-white px-8 py-3 rounded-2xl hover:bg-orange-600 transition-all text-sm font-black uppercase tracking-widest shadow-xl active:scale-95 border-2 border-white"
            >
              Exam Portal
            </a>
          </nav>
        </div>
      </header>

      {/* Welcome Marquee */}
      <Marquee speed="60s" text="🌟 WELCOME TO EGINTECH® AI BASED CONSULTANCY - EXCELLENCE IN GROWTH, INNOVATION IN TECHNOLOGY! 🌟 ONLINE TEST EXAM PORTAL IS LIVE! VISIT NOW! 🌟 RIGHT EDUCATION - RIGHT CAREER 🌟 DMIT TEST & REPORT ANALYSIS 🌟 WEBSITE & APP DEVELOPMENT 🌟 NEW GENERATION BUSINESS OPPORTUNITY 🌟" />

      {view === 'home' ? (
        <main>
          <HeroSlider />

          <div className="relative">
            <RunningReel />
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 px-8 py-2.5 rounded-full font-black text-sm shadow-xl z-10 border-2 border-white uppercase tracking-wider">
              TRUSTED AI PARTNERS ®
            </div>
          </div>

          {/* Special Feature Section - Online Test Exam Portal */}
          <section className="bg-orange-500 py-24 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            <div className="max-w-7xl mx-auto px-4 text-center">
              <div className="inline-block p-12 bg-white/10 backdrop-blur-2xl rounded-[4rem] border-4 border-white/20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]">
                <div className="mb-6 flex justify-center">
                  <span className="bg-white text-orange-600 px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest animate-pulse">Live Portal</span>
                </div>
                <h2 className="text-6xl md:text-8xl font-black mb-8 uppercase tracking-tighter leading-none">
                   ONLINE TEST EXAM <br className="hidden md:block"/> PORTAL IS LIVE!
                </h2>
                <div className="w-40 h-3 bg-white/40 mx-auto mb-10 rounded-full"></div>
                <p className="text-orange-50 text-2xl md:text-4xl font-black max-w-4xl mx-auto leading-tight mb-12">
                  Access the smartest AI-driven examination portal by <span className="underline decoration-white/30">EGINTECH®</span>. Click below to start your journey.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-8">
                  <a 
                    href="https://egintech-exam-portal.vercel.app"
                    target="_blank"
                    className="bg-white text-orange-600 px-16 py-6 rounded-[2.5rem] font-black text-3xl hover:bg-orange-50 transition-all shadow-2xl active:scale-95 uppercase tracking-widest border-4 border-orange-200 flex items-center justify-center"
                  >
                    🚀 VISIT PORTAL
                  </a>
                  <a 
                    href="tel:+916289733426"
                    className="bg-blue-600 text-white px-16 py-6 rounded-[2.5rem] font-black text-2xl hover:bg-blue-700 transition-all shadow-2xl active:scale-95 flex items-center justify-center uppercase tracking-widest border-4 border-blue-400"
                  >
                    📞 ENQUIRY
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter uppercase leading-none">Connect with EGINTECH®</h2>
                <div className="w-32 h-4 bg-blue-600 mx-auto mt-8 rounded-full"></div>
              </div>
              <ContactForm />
            </div>
          </section>
        </main>
      ) : (
        <main className="bg-white py-24 animate-in fade-in zoom-in-95 duration-700">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-32">
              <h2 className="text-7xl md:text-9xl font-black text-gray-900 mb-8 tracking-tighter uppercase leading-none">Our Services</h2>
              <div className="w-60 h-5 bg-green-500 mx-auto rounded-full mb-12"></div>
              <p className="text-3xl md:text-4xl text-gray-600 max-w-6xl mx-auto font-black leading-tight italic">
                Cutting-edge AI consultancy and technological innovations from <span className="text-green-600 font-black underline underline-offset-[12px] decoration-green-300 decoration-8">EGINTECH®</span>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-32">
              {SERVICES.map((service) => (
                <div 
                  key={service.id} 
                  className="group p-12 rounded-[4rem] bg-gray-50 hover:bg-white hover:shadow-[0_60px_100px_rgba(34,197,94,0.2)] transition-all duration-500 border-4 border-gray-100 hover:border-green-100 flex flex-col"
                >
                  <div className="w-28 h-28 bg-white rounded-[2.5rem] shadow-xl flex items-center justify-center text-7xl mb-12 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 border-2 border-gray-50">
                    {service.icon}
                  </div>
                  <h3 className="text-4xl font-black text-gray-900 mb-6 uppercase tracking-tighter leading-none">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-12 flex-grow text-2xl font-black">{service.description}</p>
                  <div className="w-full h-80 rounded-[3rem] overflow-hidden mb-12 border-[12px] border-white shadow-2xl">
                     <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  </div>
                  <a href={`https://wa.me/916289733426?text=Hi EGINTECH®, I am interested in ${service.title}`} target="_blank" className="w-full py-6 bg-green-600 text-white rounded-[2.5rem] font-black text-2xl text-center hover:bg-green-700 transition-all shadow-2xl active:scale-95 uppercase tracking-widest border-4 border-green-400">
                    ENQUIRE NOW
                  </a>
                </div>
              ))}
            </div>

            <div id="contact" className="mt-20">
              <div className="text-center mb-16">
                <h3 className="text-6xl font-black text-gray-900 uppercase tracking-tighter leading-none">Reach Out Today</h3>
                <p className="text-3xl text-gray-500 mt-6 font-black uppercase tracking-widest">Achieve Excellence with EGINTECH®</p>
              </div>
              <ContactForm />
            </div>
          </div>
        </main>
      )}

      {/* Footer - Extreme Visibility for Contact and Site Links */}
      <footer className="bg-gray-900 text-white pt-40 pb-16 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-500/5 rounded-full blur-[150px] -mr-[400px] -mt-[400px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] -ml-[300px] -mb-[300px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-24 relative z-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-8 mb-16">
              <div className="text-8xl bg-white/5 p-6 rounded-[3rem] border-2 border-white/10 shadow-3xl">🌱</div>
              <div>
                <h2 className="text-7xl font-black text-green-500 tracking-tighter flex items-center leading-none">
                  EGINTECH<span className="text-3xl align-top ml-2 font-bold">®</span>
                </h2>
                <span className="text-lg font-black text-gray-500 uppercase tracking-[0.6em] block mt-4">GROWTH • INNOVATION • TECH</span>
              </div>
            </div>
            <p className="text-gray-400 text-4xl font-black max-w-xl leading-tight mb-20">
              Leading the future of AI-driven success and excellence.
            </p>
            <div className="flex space-x-10">
              {['FB', 'IG', 'TW', 'LN'].map(social => (
                <div key={social} className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center hover:bg-green-600 hover:text-white text-gray-400 cursor-pointer transition-all hover:-translate-y-4 font-black text-2xl border-2 border-white/10 shadow-2xl">
                  {social}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-3xl font-black mb-16 text-green-500 uppercase tracking-widest border-b-4 border-green-500/20 pb-6 inline-block">Navigation</h4>
            <ul className="space-y-10 text-3xl font-black">
              <li><button onClick={() => { setView('home'); window.scrollTo(0,0); }} className="text-gray-400 hover:text-white transition-all hover:translate-x-4 inline-block">HOME</button></li>
              <li><button onClick={() => { setView('services'); window.scrollTo(0,0); }} className="text-gray-400 hover:text-white transition-all hover:translate-x-4 inline-block">SERVICES</button></li>
              <li><a href="https://egintech-exam-portal.vercel.app" target="_blank" className="text-orange-500 hover:text-orange-400 transition-all hover:translate-x-4 inline-block">EXAM PORTAL</a></li>
              <li><a href="http://www.egintech.in" target="_blank" className="text-gray-400 hover:text-white transition-all hover:translate-x-4 inline-block">OFFICIAL</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-3xl font-black mb-16 text-green-500 uppercase tracking-widest border-b-4 border-green-500/20 pb-6 inline-block">Contact Info</h4>
            <div className="space-y-14">
              <div className="group">
                <p className="text-green-500 text-sm font-black uppercase tracking-[0.4em] mb-4">Call Our Experts</p>
                <a href="tel:+916289733426" className="text-white text-4xl md:text-5xl font-black group-hover:text-green-400 transition-all block tracking-tighter">
                  6289733426
                </a>
              </div>
              
              <div className="group">
                <p className="text-green-500 text-sm font-black uppercase tracking-[0.4em] mb-4">Official Website</p>
                <a href="https://www.egintech.in" target="_blank" rel="noopener noreferrer" className="text-white text-3xl md:text-4xl font-black break-words group-hover:text-green-400 transition-all block tracking-tight">
                  www.egintech.in
                </a>
              </div>

              <div className="p-10 bg-white/5 rounded-[3rem] border-4 border-white/10 shadow-3xl relative overflow-hidden group/card">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover/card:scale-150 transition-all duration-700"></div>
                <p className="text-[13px] text-gray-500 uppercase font-black mb-8 tracking-[0.6em]">CERTIFIED REGISTRATION</p>
                <div className="space-y-6 relative z-10">
                  <p className="text-2xl font-black flex flex-col"><span className="text-green-500 text-xs font-black uppercase mb-2">UDYAM REG:</span> MH-20-0168995</p>
                  <p className="text-2xl font-black flex flex-col"><span className="text-green-500 text-xs font-black uppercase mb-2">TRADE MARK NO:</span> 5704353</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 mt-40 pt-16 border-t-4 border-white/5 flex flex-col lg:flex-row justify-between items-center text-gray-500 font-black tracking-widest text-base text-center lg:text-left">
          <p className="uppercase mb-8 lg:mb-0">&copy; {new Date().getFullYear()} EGINTECH® CONSULTANCY. EXCELLENCE GUARANTEED WORLDWIDE.</p>
          <div className="flex space-x-16">
            <span className="hover:text-white cursor-pointer uppercase transition-all hover:scale-110">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer uppercase transition-all hover:scale-110">Legal Terms</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
