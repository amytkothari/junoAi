"use client";

import Logo from "./logo";

export default function Header() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    button.style.setProperty('--mouse-x', `${x}px`);
    button.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-3">
            <button
              onClick={scrollToFeatures}
              onMouseMove={handleMouseMove}
              className="group border-0 outline-none relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 backdrop-blur-sm rounded-2xl px-6 py-3 text-sm font-medium text-gray-200 hover:text-white transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-500/20 focus:outline-none focus:scale-[1.02] active:scale-[0.98]"
              style={{ '--mouse-x': '50%', '--mouse-y': '50%' } as React.CSSProperties}
            >
              {/* Subtle shimmer effect */}
              <div className="absolute border-none  inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              
              {/* Dynamic cursor-following glow */}
              <div 
                className="absolute  rounded-full bg-gradient-to-r from-gray-400/15 via-white/10 to-gray-400/15 blur-2xl opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 pointer-events-none"
                style={{
                  width: '100px',
                  height: '100px',
                  left: 'calc(var(--mouse-x) - 50px)',
                  top: 'calc(var(--mouse-y) - 50px)',
                  transform: 'translate(-50%, -50%)',
                  transition: 'left 0.1s ease-out, top 0.1s ease-out'
                }}
              />
              
              <div className="relative border-none flex items-center gap-2.5">
                <span className="tracking-wide">
                  Features
                </span>
                
              </div>
              
              {/* Elegant bottom border accent */}
              <div className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-gradient-to-r from-purple-300/90 to-purple-500/30 group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out" />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
