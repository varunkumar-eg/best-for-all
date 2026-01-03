
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
      alert('Logo saved permanently to your browser! 🚀');
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
          <span className="ml-3 font-black text-xl">WHATSAPP</span>
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
          <span className="ml-3 font-black text-xl">CALL NOW</span>
        </a>
      </div>

      {/* Header Info Bar - Increased Font Size */}
      <div className="bg-gray-900 text-gray-200 py-3 px-6 flex flex-col md:flex-row justify-center md:justify-between items-center text-sm border-b border-gray-800 space-y-2 md:space-y-0">
        <div className="flex space-x-8">
          <span className="font-black flex items-center text-base md:text-lg">
            <span className="mr-2 text-green-500">📞</span> Mob: 6289733426
          </span>
          <span className="font-bold flex items-center text-sm md:text-base">
            <span className="mr-2 text-green-500">✉️</span> info@egintech.in
          </span>
        </div>
        <div className="flex space-x-6 items-center font-black">
           <span className="text-sm md:text-lg tracking-tight hover:text-green-400 transition-colors">Official Website: www.egintech.in</span>
           <span className="bg-green-600 text-white px-3 py-1 rounded-full uppercase tracking-tighter text-[11px] border border-green-500 shadow-sm shadow-green-900/50">EGINTECH®</span>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Logo Uploading Option - Enhanced UI */}
            <div className="flex items-center space-x-3 group bg-gray-50 p-2 rounded-2xl border border-gray-100 shadow-inner">
              <div className="flex flex-col items-center">
                <div 
                  className="relative cursor-pointer w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-4xl overflow-hidden border-2 border-green-500 shadow-md transition-all hover:scale-105 active:scale-95"
                  onClick={triggerLogoUpload}
                  title="Click to manually upload your custom company logo"
                >
                  {customLogo ? (
                    <img src={customLogo} alt="EGINTECH Custom Logo" className="w-full h-full object-contain p-1" />
                  ) : (
                    <span className="animate-pulse">🌱</span>
                  )}
                  
                  {/* Upload Overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity text-white text-[10px] font-black uppercase text-center px-1">
                    <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    UPLOAD
                  </div>
                </div>
              </div>

              {/* Logo Controls */}
              <div className="flex flex-col space-y-1.5 min-w-[80px]">
                {hasUnsavedChanges ? (
                  <button 
                    onClick={saveLogo}
                    className="bg-green-600 text-white px-3 py-1.5 rounded-xl text-[11px] font-black uppercase shadow-lg shadow-green-200 hover:bg-green-700 transition-all hover:scale-105 active:scale-95 animate-pulse"
                    title="Click to save logo permanently to your device"
                  >
                    SAVE LOGO
                  </button>
                ) : customLogo ? (
                  <span className="text-green-600 text-[10px] font-black text-center px-2 py-1 bg-green-50 rounded-lg border border-green-100">
                    LOGO SAVED ✅
                  </span>
                ) : null}
                
                {customLogo && (
                  <button 
                    onClick={resetLogo}
                    className="bg-gray-400 text-white px-3 py-1.5 rounded-xl text-[10px] font-black uppercase shadow-sm hover:bg-red-500 transition-all hover:scale-105"
                    title="Remove custom logo and restore default"
                  >
                    RESET
                  </button>
                )}
              </div>
            </div>

            <div onClick={() => { setView('home'); window.scrollTo(0,0); }} className="cursor-pointer">
              <h1 className="text-3xl md:text-4xl font-black text-green-700 tracking-tighter leading-none flex items-center">
                EGINTECH<span className="text-sm align-top ml-1 font-bold text-green-600" title="Registered Trade Mark">®</span>
              </h1>
              <span className="text-[10px] md:text-[11px] text-gray-500 uppercase tracking-widest font-black block mt-1">Excellent Growth Information Technology</span>
            </div>
          </div>

          <nav className="hidden lg:flex space-x-10 font-black text-gray-700">
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
            <a href="#contact" className="bg-green-600 text-white px-8 py-3 rounded-2xl hover:bg-green-700 transition-all text-sm font-black uppercase tracking-widest shadow-xl hover:shadow-green-200 active:scale-95 border-2 border-white">
              Get Quote
            </a>
          </nav>
        </div>
      </header>

      {/* Welcome Marquee */}
      <Marquee speed="60s" text="🌟 WELCOME TO EGINTECH® AI BASED CONSULTANCY - EXCELLENCE IN GROWTH, INNOVATION IN TECHNOLOGY! 🌟 ONLINE TEST EXAM COMING SOON - STAY TUNED! 🌟 RIGHT EDUCATION - RIGHT CAREER 🌟 DMIT TEST & REPORT ANALYSIS 🌟 WEBSITE & APP DEVELOPMENT 🌟 NEW GENERATION BUSINESS OPPORTUNITY 🌟" />

      {view === 'home' ? (
        <main>
          <HeroSlider />

          <div className="relative">
            <RunningReel />
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 px-8 py-2.5 rounded-full font-black text-sm shadow-xl z-10 border-2 border-white uppercase tracking-wider">
              TRUSTED AI PARTNERS ®
            </div>
          </div>

          {/* Special Feature Section */}
          <section className="bg-orange-500 py-20 text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <div className="inline-block p-10 bg-white/10 backdrop-blur-xl rounded-[3rem] border-2 border-white/20 shadow-2xl">
                <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
                  🚀 ONLINE TEST EXAM <br className="hidden md:block"/> COMING SOON!
                </h2>
                <div className="w-24 h-2 bg-white/40 mx-auto mb-8 rounded-full"></div>
                <p className="text-orange-50 text-xl md:text-3xl font-black max-w-3xl mx-auto leading-relaxed">
                  Join EGINTECH® for the most advanced AI-powered examination portal. Elevate your assessment standards with our next-gen platform.
                </p>
                <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
                  <button 
                    onClick={() => { setView('services'); window.scrollTo(0,0); }}
                    className="bg-white text-orange-600 px-12 py-5 rounded-[2rem] font-black text-2xl hover:bg-orange-50 transition-all shadow-2xl active:scale-95 uppercase tracking-widest border-4 border-orange-200"
                  >
                    EXPLORE SERVICES
                  </button>
                  <a 
                    href="tel:+916289733426"
                    className="bg-blue-600 text-white px-12 py-5 rounded-[2rem] font-black text-2xl hover:bg-blue-700 transition-all shadow-2xl active:scale-95 flex items-center justify-center uppercase tracking-widest border-4 border-blue-400"
                  >
                    CALL FOR INQUIRY
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase leading-none">Connect with EGINTECH®</h2>
                <div className="w-32 h-3 bg-blue-600 mx-auto mt-6 rounded-full"></div>
              </div>
              <ContactForm />
            </div>
          </section>
        </main>
      ) : (
        <main className="bg-white py-20 animate-in fade-in zoom-in-95 duration-700">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-24">
              <h2 className="text-6xl md:text-8xl font-black text-gray-900 mb-6 tracking-tighter uppercase leading-none">Our Services</h2>
              <div className="w-40 h-4 bg-green-500 mx-auto rounded-full mb-10"></div>
              <p className="text-2xl md:text-3xl text-gray-600 max-w-5xl mx-auto font-bold leading-tight">
                Cutting-edge AI consultancy and technological innovations from <span className="text-green-600 font-black underline underline-offset-8">EGINTECH®</span>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
              {SERVICES.map((service) => (
                <div 
                  key={service.id} 
                  className="group p-10 rounded-[3rem] bg-gray-50 hover:bg-white hover:shadow-[0_40px_80px_rgba(34,197,94,0.18)] transition-all duration-500 border-2 border-gray-100 hover:border-green-100 flex flex-col"
                >
                  <div className="w-24 h-24 bg-white rounded-[2rem] shadow-lg flex items-center justify-center text-6xl mb-10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 border border-gray-50">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-5 uppercase tracking-tighter leading-tight">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-10 flex-grow text-xl font-bold">{service.description}</p>
                  <div className="w-full h-64 rounded-[2rem] overflow-hidden mb-10 border-8 border-white shadow-2xl">
                     <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <a href={`https://wa.me/916289733426?text=Hi EGINTECH®, I am interested in ${service.title}`} target="_blank" className="w-full py-5 bg-green-600 text-white rounded-[1.5rem] font-black text-xl text-center hover:bg-green-700 transition-all shadow-xl active:scale-95 uppercase tracking-widest border-2 border-green-400">
                    ENQUIRE NOW
                  </a>
                </div>
              ))}
            </div>

            <div id="contact" className="mt-20">
              <div className="text-center mb-16">
                <h3 className="text-5xl font-black text-gray-900 uppercase tracking-tighter leading-none">Get Started with EGINTECH®</h3>
                <p className="text-2xl text-gray-500 mt-4 font-black">Fill the form below and achieve your growth targets.</p>
              </div>
              <ContactForm />
            </div>
          </div>
        </main>
      )}

      {/* Footer - Significantly Larger Font Size for Contact */}
      <footer className="bg-gray-900 text-white pt-32 pb-12 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[100px] -mr-[250px] -mt-[250px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-6 mb-12">
              <div className="text-7xl bg-white/5 p-4 rounded-[2rem] border border-white/10 shadow-2xl">🌱</div>
              <div>
                <h2 className="text-6xl font-black text-green-500 tracking-tighter flex items-center leading-none">
                  EGINTECH<span className="text-2xl align-top ml-1 font-bold">®</span>
                </h2>
                <span className="text-sm font-black text-gray-500 uppercase tracking-[0.4em] block mt-2">GROWTH • INNOVATION • TECH</span>
              </div>
            </div>
            <p className="text-gray-400 text-3xl font-black max-w-md leading-tight mb-14">
              Building the future with AI and Excellence.
            </p>
            <div className="flex space-x-8">
              {['FB', 'IG', 'TW', 'LN'].map(social => (
                <div key={social} className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-green-600 hover:text-white text-gray-400 cursor-pointer transition-all hover:-translate-y-2 font-black text-xl border border-white/10 shadow-xl">
                  {social}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-2xl font-black mb-12 text-green-500 uppercase tracking-widest border-b-2 border-green-500/20 pb-4 inline-block">Navigation</h4>
            <ul className="space-y-8 text-2xl font-black">
              <li><button onClick={() => { setView('home'); window.scrollTo(0,0); }} className="text-gray-400 hover:text-white transition-colors">HOME</button></li>
              <li><button onClick={() => { setView('services'); window.scrollTo(0,0); }} className="text-gray-400 hover:text-white transition-colors">SERVICES</button></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">SUPPORT</a></li>
              <li><a href="http://www.egintech.in" target="_blank" className="text-gray-400 hover:text-white transition-colors">OFFICIAL</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-2xl font-black mb-12 text-green-500 uppercase tracking-widest border-b-2 border-green-500/20 pb-4 inline-block">Contact Info</h4>
            <div className="space-y-10">
              <div className="group">
                <p className="text-green-500 text-xs font-black uppercase tracking-[0.3em] mb-2">Call Us Now</p>
                <a href="tel:+916289733426" className="text-white text-3xl font-black group-hover:text-green-400 transition-colors">
                  Mob: 6289733426
                </a>
              </div>
              
              <div className="group">
                <p className="text-green-500 text-xs font-black uppercase tracking-[0.3em] mb-2">Visit Official Website</p>
                <a href="http://www.egintech.in" target="_blank" rel="noopener noreferrer" className="text-white text-2xl font-black break-words group-hover:text-green-400 transition-colors">
                  www.egintech.in
                </a>
              </div>

              <div className="p-8 bg-white/5 rounded-[2.5rem] border-2 border-white/10 shadow-3xl relative overflow-hidden">
                <p className="text-[11px] text-gray-500 uppercase font-black mb-6 tracking-[0.4em]">REGISTRATION</p>
                <div className="space-y-5">
                  <p className="text-xl font-black flex flex-col"><span className="text-green-500 text-xs uppercase mb-1">UDYAM:</span> MH-20-0168995</p>
                  <p className="text-xl font-black flex flex-col"><span className="text-green-500 text-xs uppercase mb-1">TRADE MARK:</span> 5704353</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 mt-32 pt-12 border-t-2 border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 font-black tracking-widest text-sm text-center md:text-left">
          <p className="uppercase mb-6 md:mb-0">&copy; {new Date().getFullYear()} EGINTECH® CONSULTANCY. EXCELLENCE IN GROWTH & INNOVATION.</p>
          <div className="flex space-x-12">
            <span className="hover:text-white cursor-pointer uppercase transition-all hover:scale-105">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer uppercase transition-all hover:scale-105">Legal Terms</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
