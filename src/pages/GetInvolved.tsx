import { Helmet } from 'react-helmet-async';
import Layout from '@components/Layout';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

// Import images
import imgCosmo from '/images/IMG_0679.jpeg';
import imgHands from '/images/60A456C6-0BA2-43F1-B30E-97211DF2C6D9.jpeg';

const GetInvolved = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const navbar = document.getElementById("navbar");
      const content = document.getElementById("content");
      
      if (navbar && content && scrollTop >= content.offsetTop) {
        navbar.classList.add("bg-zinc-900", "bg-sat");
      } else if (navbar) {
        navbar.classList.remove("bg-zinc-900", "bg-sat");
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Get involved - IglooCode</title>
        <meta name="theme-color" content="#171717" />
      </Helmet>
      
      <section
        className="w-screen min-h-[70vh] bg-cover flex flex-col justify-end items-left relative pl-6 pr-6 sm:pl-24 pb-8"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.80), rgba(0.1,0,0,0.85)), linear-gradient(black, black), url('/images/backdrop.png'), url('/images/DSC01874.jpeg')",
          backgroundBlendMode: "normal, saturation",
        }}
        id="hero"
      >
        <div className="max-w-4xl">
          <h1 className="w-fit text-transparent text-6xl sm:text-7xl lg:text-8xl font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 pb-4 font-mono leading-tight">
            Get involved
          </h1>
          <p className="text-white text-xl sm:text-3xl font-mono leading-relaxed">
            {"< a worthwhile experience for all />"}
          </p>
        </div>
      </section>
      
      <div className="flex w-screen items-center bg-zinc-900 flex-col" id="content">
        <section className="py-16 sm:py-20 w-11/12 sm:w-9/12 max-w-screen-lg">
          <div className="relative -top-6 sm:-top-12 mb-8">
            <nav className="font-mono text-gray-400 text-sm">
              <a href="/" className="hover:underline text-blue-400 hover:text-blue-300 transition-colors">
                Home
              </a>
              <span className="mx-2">·</span>
              <span className="text-gray-300">Get involved</span>
            </nav>
          </div>
          
          <div id="about" className="space-y-16">
            <div className="text-center mb-16">
              <h2 className="text-white text-3xl sm:text-4xl font-medium mb-4 font-mono leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">opportunities</span> for everyone.
              </h2>
              <p className="text-white text-lg font-light font-mono leading-relaxed max-w-3xl mx-auto">
                Whether you're a teacher looking to inspire your students or a sixth former wanting to make a difference, IglooCode has something for you.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="group p-8 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-purple-500/30 transition-all duration-300">
                <div className="relative overflow-hidden rounded-xl shadow-2xl mb-6 group-hover:shadow-purple-500/20 transition-all duration-500">
                  <img src={imgHands} className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105" alt="Hands working together" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-white text-2xl sm:text-3xl font-mono font-medium mb-4">
                  for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">teachers</span>.
                </h3>
                <p className="text-white text-base font-light leading-relaxed mb-6 font-mono">
                  Give your students a day out to practice their skills in the real world, while making new friends and getting a first-hand insight to the industry.
                </p>
                <div className="text-white text-lg border-2 border-gray-400 p-4 w-full text-center font-mono rounded-lg backdrop-blur-sm bg-zinc-800/50">
                  2026 APPLICATIONS COMING SOON
                </div>
              </div>
              
              <div className="group p-8 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-cyan-500/30 transition-all duration-300">
                <div className="relative overflow-hidden rounded-xl shadow-2xl mb-6 group-hover:shadow-cyan-500/20 transition-all duration-500">
                  <img src={imgCosmo} className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105" alt="Students working" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-white text-2xl sm:text-3xl font-mono font-medium mb-4">
                  for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">sixth formers</span>.
                </h3>
                <p className="text-white text-base font-light leading-relaxed mb-6 font-mono">
                  We're looking for keen sixth formers with a passion for IT and programming to give us a hand on the big day. Think you have what it takes?
                </p>
                <Link to="/getinvolved/sixthform" className="group inline-flex items-center text-white hover:text-cyan-300 transition-all duration-300 text-lg border-2 border-cyan-500/50 hover:border-cyan-400 px-8 py-4 rounded-lg bg-cyan-600/20 hover:bg-cyan-600/30 backdrop-blur-sm hover:scale-105 font-mono w-full justify-center">
                  JOIN THE TEAM
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <section className="bg-zinc-900 flex items-center flex-col py-20">
        <div className="w-11/12 sm:w-9/12 max-w-screen-lg flex items-center justify-center flex-col text-center space-y-8">
          <h2 className="font-mono text-white text-3xl sm:text-4xl font-medium leading-tight">
            designed for your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">enjoyment</span>.
          </h2>
          <Link to="/perks" className="group inline-flex items-center text-white hover:text-purple-300 transition-all duration-300 text-lg border-2 border-purple-500/50 hover:border-purple-400 px-8 py-4 rounded-lg bg-purple-600/20 hover:bg-purple-600/30 backdrop-blur-sm hover:scale-105 font-mono">
            DISCOVER PERKS
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default GetInvolved;
