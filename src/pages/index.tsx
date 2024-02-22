import Image from "next/image";
import { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <>
    <div className="overflow-hidden">
    <div className="absolute z-0 overflow-hidden h-screen w-screen top-0 left-0">
      <video className="h-full w-full object-cover" autoPlay loop muted playsInline>
        <source src="https://nolag.host/vendor/videoplayback.webm" type="video/webm" />
        <source src="https://nolag.host/vendor/videoplayback.mp4" type="video/mp4" />
      </video>
    </div>
    <section className="relative overflow-auto bg-[#0b0b0f]/70 backdrop-blur border-b border-white/5">
      <div className="relative z-10 w-full mx-auto max-w-7xl p-5 lg:px-16 md:flex md:items-center md:justify-between md:px-6">
        <div className="relative w-full mx-auto max-w-7xl">
          <div className="relative flex flex-col w-full mx-auto lg:px-16 md:flex-row md:items-center md:justify-between md:px-6">
            <div className="flex flex-row items-center justify-between text-sm text-white lg:justify-start">
                <span className="flex">
                  <img width="40" height="23" src="/ziconweb.png" alt="sluglogo" />
                  <span className="m-4  text-xl">Zebronix</span>
                </span>
              <button className="inline-flex items-center justify-center p-2 text-white focus:outline-none focus:text-black hover:text-black md:hidden" onClick={() => setOpen(!open)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path className={`${open ? 'hidden' : 'inline-flex'}`} d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path className={`${open ? 'inline-flex' : 'hidden'}`} d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
            </div>
            <nav className={`${open ? 'flex' : 'hidden'} md:flex md:flex-row md:justify-end md:pb-0`}>
              <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
                <a href="#service" className="block px-4 py-2 mt-2 text-sm text-white hover:text-white/50 focus:outline-none focus:shadow-outline md:mt-0">
                  Services
                </a>
                <a  className="block px-4 py-2 mt-2 text-sm text-white hover:text-white/50 focus:outline-none focus:shadow-outline md:mt-0">
                  Premium
                </a>
                <a href="https://dash.zebronix.com" className="text-white text-sm py-2 focus:outline-none px-4 active:text-#279f0e bg-[#17181d]/70 backdrop-blur transition hover:bg-[#1b1c22] focus-visible:outline-2 focus-visible:outline-fuchsia-50 focus-visible:outline-offset-2 group inline-flex items-center justify-center rounded-xl">
                  Get started
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
    {/* hero  secrion*/}
    <section className=" overflow-hidden relative items-center justify-center bg-[#0b0b0f]/50 flex h-screen">
      <div className="relative z-10 w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12">
        <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12">
          <div className="max-w-3xl mt-2 mx-auto text-center">
            <div>
              <p className="text-3xl font-medium tracking-tight text-white/70 lg:text-6xl">
                Game server hosting
                <span className="md:block text-white">Fast, simple and freemium</span>
              </p>
              <p className="max-w-xl mx-auto mt-8 text-base lg:text-xl text-gray-400">
                Effortlessly deploy, edit and manage high-performance 24/7 game servers. Create your free or Paid server in under 5min.
              </p>
            </div>
            <div className="flex flex-col justify-center max-w-sm gap-3 mx-auto mt-10 sm:flex-row">
              <a href="https://billing.zebronix.com/" className="text-white focus:outline-none inline-flex items-center justify-center rounded-full bg-[#3d49f5] duration-200 focus-visible:outline-black focus-visible:ring-black font-medium hover:bg-[#1d4ed8] hover:border-white hover:text-white lg:w-auto px-6 py-2 text-center w-full">Premium</a>
              <a href="https://dash.zebronix.com" className="text-white focus:outline-none inline-flex items-center justify-center rounded-full bg-[#3d49f5] duration-200 focus-visible:outline-black focus-visible:ring-black font-medium hover:bg-[#1d4ed8] hover:border-white hover:text-white lg:w-auto px-6 py-2 text-center w-full">Free</a>
            </div>
          </div>
        </div>
      </div>
    </section></div>
    </>
  );
};
