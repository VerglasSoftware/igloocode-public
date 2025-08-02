import { Helmet } from 'react-helmet-async';
import Layout from '@components/Layout';
import { useEffect } from 'react';

// Import team member images
import imgAideen from '/images/team/aideen.png';
import imgAxel from '/images/team/axel.png';
import imgBenF from '/images/team/benf.png';
import imgBenT from '/images/team/bent.png';
import imgDan from '/images/team/dan.png';
import imgDylan from '/images/team/dylan.png';
import imgEliza from '/images/team/eliza.png';
import imgEmma from '/images/team/emma.png';
import imgGrainne from '/images/team/grainne.png';
import imgJake from '/images/team/jake.png';
import imgJosephi from '/images/team/josephi.png';
import imgMa from '/images/team/ma.png';
import imgRyan from '/images/team/ryan.png';
import imgConnlaith from '/images/team/connlaith.png';
import imgChris from '/images/team/chris.png';
import imgKayla from '/images/team/kayla.png';
import imgHollie from '/images/hollie.jpg';

const Team = (): JSX.Element => {
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
        <title>Meet the team - IglooCode</title>
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
            Our team
          </h1>
          <p className="text-white text-xl sm:text-3xl font-mono leading-relaxed drop-shadow-lg">
            {"< meet the people behind it all />"}
          </p>
        </div>
      </section>
      
      <div className="flex w-screen items-center bg-zinc-900 flex-col" id="content">
        <section className="py-16 sm:py-20 w-11/12 sm:w-9/12 max-w-screen-lg">
          <div className="relative -top-6 sm:-top-12 mb-8">
            <nav className="text-gray-400 font-mono text-sm">
              <a href="/" className="hover:text-cyan-400 transition-colors duration-200">
                Home
              </a>
              <span className="mx-2 text-gray-500">·</span>
              <span className="text-white">Our team</span>
            </nav>
          </div>
          
          <div id="organisers" className="space-y-12">
            <div className="text-center mb-16">
              <h2 className="text-white text-3xl sm:text-4xl font-medium mb-4 font-mono leading-tight">
                the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">event coordinators</span>.
              </h2>
              <p className="text-white text-lg font-light font-mono leading-relaxed max-w-3xl mx-auto">
                the event coordinators are made up of the verglas board of directors and outreach committee. they are responsible for relations between external parties, the planning of the event and overall project management.
              </p>
            </div>

            <div className="space-y-8">
              <div className="group flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-purple-500/30 transition-all duration-300">
                <div className="relative overflow-hidden rounded-full shadow-2xl group-hover:shadow-purple-500/30 transition-all duration-300 flex-shrink-0">
                  <img src={imgDan} className="w-32 h-32 sm:w-40 sm:h-40 object-cover transition-transform duration-300 group-hover:scale-105" alt="Dan" />
                </div>
                <div className="flex flex-col text-center sm:text-left flex-1">
                  <h3 className="text-white text-xl sm:text-2xl font-medium font-mono mb-2">
                    Dan Adams <span className="text-gray-400 font-light">– Lead Event Coordinator</span>
                  </h3>
                  <p className="text-gray-200 text-sm font-light leading-relaxed font-mono">
                    Ever since my mum told me that websites were made with code when I was in P2, I've been hooked. Throughout the past 10 years, I've been committed to developing my
                    skills and experiences with different programming languages. I help to run the Code Club in my school, and in the next few years I dream of studying Computer
                    Science at the University of Reykjavík.
                  </p>
                </div>
              </div>
              
              <div className="group flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-cyan-500/30 transition-all duration-300">
                <div className="relative overflow-hidden rounded-full shadow-2xl group-hover:shadow-cyan-500/30 transition-all duration-300 flex-shrink-0">
                  <img src={imgDylan} className="w-32 h-32 sm:w-40 sm:h-40 object-cover transition-transform duration-300 group-hover:scale-105" alt="Aideen" />
                </div>
                <div className="flex flex-col text-center sm:text-left flex-1">
                  <h3 className="text-white text-xl sm:text-2xl font-medium font-mono mb-2">
                    Dylan McKenzie <span className="text-gray-400 font-light">– Volunteer Coordinator & Logistics</span>
                  </h3>
                  <p className="text-gray-200 text-sm font-light leading-relaxed font-mono">
                    I've been passionate about technology and coding since primary school; so much so that I was called the ICT Co-ordinator by teachers. When I'm not at school
                    volunteering with the Code Club or the Rocket Club, I'm a member of the NICCY Youth Panel, where I have represented young people from NI in Brussels regarding
                    Children's Digital Rights.
                  </p>
                </div>
              </div>

              <div className="group flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-purple-500/30 transition-all duration-300">
                <div className="relative overflow-hidden rounded-full shadow-2xl group-hover:shadow-purple-500/30 transition-all duration-300 flex-shrink-0">
                  <img src={imgAxel} className="w-32 h-32 sm:w-40 sm:h-40 object-cover transition-transform duration-300 group-hover:scale-105" alt="Jake" />
                </div>
                <div className="flex flex-col text-center sm:text-left flex-1">
                  <h3 className="text-white text-xl sm:text-2xl font-medium font-mono mb-2">
                    Axel Graham <span className="text-gray-400 font-light">– Marketing</span>
                  </h3>
                  <p className="text-gray-200 text-sm font-light leading-relaxed font-mono">
                    I love programming. I use languages like C/C++, Java, C# and Python for creating apps, scripts and programs. I also have interests in hardware and music.
                  </p>
                </div>
              </div>
              
              <div className="group flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-purple-500/30 transition-all duration-300">
                <div className="relative overflow-hidden rounded-full shadow-2xl group-hover:shadow-purple-500/30 transition-all duration-300 flex-shrink-0">
                  <img src={imgJake} className="w-32 h-32 sm:w-40 sm:h-40 object-cover transition-transform duration-300 group-hover:scale-105" alt="Jake" />
                </div>
                <div className="flex flex-col text-center sm:text-left flex-1">
                  <h3 className="text-white text-xl sm:text-2xl font-medium font-mono mb-2">
                    Jake Gilly <span className="text-gray-400 font-light">– Developer</span>
                  </h3>
                  <p className="text-gray-200 text-sm font-light leading-relaxed font-mono">
                    I love programming. I use languages like C/C++, Java, C# and Python for creating apps, scripts and programs. I also have interests in hardware and music.
                  </p>
                </div>
              </div>
              
              <div className="group flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-cyan-500/30 transition-all duration-300">
                <div className="relative overflow-hidden rounded-full shadow-2xl group-hover:shadow-cyan-500/30 transition-all duration-300 flex-shrink-0">
                  <img src={imgMa} className="w-32 h-32 sm:w-40 sm:h-40 object-cover transition-transform duration-300 group-hover:scale-105" alt="Matthew H" />
                </div>
                <div className="flex flex-col text-center sm:text-left flex-1">
                  <h3 className="text-white text-xl sm:text-2xl font-medium font-mono mb-2">
                    Matthew Hoey <span className="text-gray-400 font-light">– Photographer</span>
                  </h3>
                  <p className="text-gray-200 text-sm font-light leading-relaxed font-mono">
                    Passionate about capturing the energy and excitement of coding events through photography.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div id="volunteers" className="mt-20">
            <div className="text-center mb-16">
              <h2 className="text-white text-3xl sm:text-4xl font-medium mb-4 font-mono leading-tight">
                the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">volunteers</span>.
              </h2>
              <p className="text-white text-lg font-light mb-12 font-mono leading-relaxed max-w-3xl mx-auto">
                The volunteers are the people that will be on the floor at IglooCode - we'll be bringing one mentor per team to make sure the event runs smoothly, and to help with any
                problems the students may have.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
              <div className="group flex flex-col items-center text-center p-4 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-purple-500/30 transition-all duration-300">
                <div className="relative overflow-hidden rounded-full shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300 mb-4">
                  <img src={imgAxel} className="w-20 h-20 sm:w-24 sm:h-24 object-cover transition-transform duration-300 group-hover:scale-105" alt="Autumn" />
                </div>
                <h3 className="text-white text-lg font-medium font-mono">Autumn</h3>
              </div>
              <div className="group flex flex-col items-center text-center p-4 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-cyan-500/30 transition-all duration-300">
                <div className="relative overflow-hidden rounded-full shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300 mb-4">
                  <img src={imgAxel} className="w-20 h-20 sm:w-24 sm:h-24 object-cover transition-transform duration-300 group-hover:scale-105" alt="Axel" />
                </div>
                <h3 className="text-white text-lg font-medium font-mono">Axel</h3>
              </div>
              <div className="group flex flex-col items-center text-center p-4 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-purple-500/30 transition-all duration-300">
                <div className="relative overflow-hidden rounded-full shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300 mb-4">
                  <img src={imgAxel} className="w-20 h-20 sm:w-24 sm:h-24 object-cover transition-transform duration-300 group-hover:scale-105" alt="Bébhinn" />
                </div>
                <h3 className="text-white text-lg font-medium font-mono">Bébhinn</h3>
              </div>
              <div className="group flex flex-col items-center text-center p-4 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-cyan-500/30 transition-all duration-300">
                <div className="relative overflow-hidden rounded-full shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300 mb-4">
                  <img src={imgBenF} className="w-20 h-20 sm:w-24 sm:h-24 object-cover transition-transform duration-300 group-hover:scale-105" alt="Ben F" />
                </div>
                <h3 className="text-white text-lg font-medium font-mono">Ben F</h3>
              </div>
              <div className="group flex flex-col items-center text-center p-4 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-purple-500/30 transition-all duration-300">
                <div className="relative overflow-hidden rounded-full shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300 mb-4">
                  <img src={imgBenT} className="w-20 h-20 sm:w-24 sm:h-24 object-cover transition-transform duration-300 group-hover:scale-105" alt="Ben T" />
                </div>
                <h3 className="text-white text-lg font-medium font-mono">Ben T</h3>
              </div>
              <div className="group flex flex-col items-center text-center p-4 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-cyan-500/30 transition-all duration-300">
                <div className="relative overflow-hidden rounded-full shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300 mb-4">
                  <img src={imgChris} className="w-20 h-20 sm:w-24 sm:h-24 object-cover transition-transform duration-300 group-hover:scale-105" alt="Chris" />
                </div>
                <h3 className="text-white text-lg font-medium font-mono">Chris</h3>
              </div>
              <div className="group flex flex-col items-center text-center p-4 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-purple-500/30 transition-all duration-300">
                <div className="relative overflow-hidden rounded-full shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300 mb-4">
                  <img src={imgConnlaith} className="w-20 h-20 sm:w-24 sm:h-24 object-cover transition-transform duration-300 group-hover:scale-105" alt="Connlaith" />
                </div>
                <h3 className="text-white text-lg font-medium font-mono">Connlaith</h3>
              </div>
              <div className="group flex flex-col items-center text-center p-4 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-cyan-500/30 transition-all duration-300">
                <div className="relative overflow-hidden rounded-full shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300 mb-4">
                  <img src={imgDylan} className="w-20 h-20 sm:w-24 sm:h-24 object-cover transition-transform duration-300 group-hover:scale-105" alt="Dylan" />
                </div>
                <h3 className="text-white text-lg font-medium font-mono">Dylan</h3>
              </div>
              <div className="group flex flex-col items-center text-center p-4 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-purple-500/30 transition-all duration-300">
                <div className="relative overflow-hidden rounded-full shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300 mb-4">
                  <img src={imgEliza} className="w-20 h-20 sm:w-24 sm:h-24 object-cover transition-transform duration-300 group-hover:scale-105" alt="Eliza" />
                </div>
                <h3 className="text-white text-lg font-medium font-mono">Eliza</h3>
              </div>
              <div className="group flex flex-col items-center text-center p-4 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-cyan-500/30 transition-all duration-300">
                <div className="relative overflow-hidden rounded-full shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300 mb-4">
                  <img src={imgAxel} className="w-20 h-20 sm:w-24 sm:h-24 object-cover transition-transform duration-300 group-hover:scale-105" alt="Emma" />
                </div>
                <h3 className="text-white text-lg font-medium font-mono">Fam</h3>
              </div>
              <div className="group flex flex-col items-center text-center p-4 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-purple-500/30 transition-all duration-300">
                <div className="relative overflow-hidden rounded-full shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300 mb-4">
                  <img src={imgGrainne} className="w-20 h-20 sm:w-24 sm:h-24 object-cover transition-transform duration-300 group-hover:scale-105" alt="Gráinne" />
                </div>
                <h3 className="text-white text-lg font-medium font-mono">Gráinne</h3>
              </div>
              <div className="group flex flex-col items-center text-center p-4 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-cyan-500/30 transition-all duration-300">
                <div className="relative overflow-hidden rounded-full shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300 mb-4">
                  <img src={imgHollie} className="w-20 h-20 sm:w-24 sm:h-24 object-cover transition-transform duration-300 group-hover:scale-105" alt="Holly" />
                </div>
                <h3 className="text-white text-lg font-medium font-mono">Holly</h3>
              </div>
              <div className="group flex flex-col items-center text-center p-4 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-purple-500/30 transition-all duration-300">
                <div className="relative overflow-hidden rounded-full shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300 mb-4">
                  <img src={imgAxel} className="w-20 h-20 sm:w-24 sm:h-24 object-cover transition-transform duration-300 group-hover:scale-105" alt="Josh" />
                </div>
                <h3 className="text-white text-lg font-medium font-mono">Josh</h3>
              </div>
              <div className="group flex flex-col items-center text-center p-4 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-cyan-500/30 transition-all duration-300">
                <div className="relative overflow-hidden rounded-full shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300 mb-4">
                  <img src={imgJosephi} className="w-20 h-20 sm:w-24 sm:h-24 object-cover transition-transform duration-300 group-hover:scale-105" alt="Josephi" />
                </div>
                <h3 className="text-white text-lg font-medium font-mono">Josephi</h3>
              </div>
              <div className="group flex flex-col items-center text-center p-4 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-purple-500/30 transition-all duration-300">
                <div className="relative overflow-hidden rounded-full shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300 mb-4">
                  <img src={imgKayla} className="w-20 h-20 sm:w-24 sm:h-24 object-cover transition-transform duration-300 group-hover:scale-105" alt="Kayla" />
                </div>
                <h3 className="text-white text-lg font-medium font-mono">Kayla</h3>
              </div>
              <div className="group flex flex-col items-center text-center p-4 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-cyan-500/30 transition-all duration-300">
                <div className="relative overflow-hidden rounded-full shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300 mb-4">
                  <img src={imgAxel} className="w-20 h-20 sm:w-24 sm:h-24 object-cover transition-transform duration-300 group-hover:scale-105" alt="Michael" />
                </div>
                <h3 className="text-white text-lg font-medium font-mono">Michael</h3>
              </div>
              <div className="group flex flex-col items-center text-center p-4 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-purple-500/30 transition-all duration-300">
                <div className="relative overflow-hidden rounded-full shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300 mb-4">
                  <img src={imgAxel} className="w-20 h-20 sm:w-24 sm:h-24 object-cover transition-transform duration-300 group-hover:scale-105" alt="Nikki" />
                </div>
                <h3 className="text-white text-lg font-medium font-mono">Nikki</h3>
              </div>
              <div className="group flex flex-col items-center text-center p-4 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-cyan-500/30 transition-all duration-300">
                <div className="relative overflow-hidden rounded-full shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300 mb-4">
                  <img src={imgAxel} className="w-20 h-20 sm:w-24 sm:h-24 object-cover transition-transform duration-300 group-hover:scale-105" alt="Odhran" />
                </div>
                <h3 className="text-white text-lg font-medium font-mono">Odhran</h3>
              </div>
              <div className="group flex flex-col items-center text-center p-4 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-purple-500/30 transition-all duration-300">
                <div className="relative overflow-hidden rounded-full shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300 mb-4">
                  <img src={imgRyan} className="w-20 h-20 sm:w-24 sm:h-24 object-cover transition-transform duration-300 group-hover:scale-105" alt="Ryan" />
                </div>
                <h3 className="text-white text-lg font-medium font-mono">Ryan</h3>
              </div>
              <div className="group flex flex-col items-center text-center p-4 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-cyan-500/30 transition-all duration-300">
                <div className="relative overflow-hidden rounded-full shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300 mb-4">
                  <img src={imgAxel} className="w-20 h-20 sm:w-24 sm:h-24 object-cover transition-transform duration-300 group-hover:scale-105" alt="Samuel B" />
                </div>
                <h3 className="text-white text-lg font-medium font-mono">Samuel B</h3>
              </div>
              <div className="group flex flex-col items-center text-center p-4 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-purple-500/30 transition-all duration-300">
                <div className="relative overflow-hidden rounded-full shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300 mb-4">
                  <img src={imgAxel} className="w-20 h-20 sm:w-24 sm:h-24 object-cover transition-transform duration-300 group-hover:scale-105" alt="Sarah" />
                </div>
                <h3 className="text-white text-lg font-medium font-mono">Sarah</h3>
              </div>
              <div className="group flex flex-col items-center text-center p-4 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-cyan-500/30 transition-all duration-300">
                <div className="relative overflow-hidden rounded-full shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300 mb-4">
                  <img src={imgAxel} className="w-20 h-20 sm:w-24 sm:h-24 object-cover transition-transform duration-300 group-hover:scale-105" alt="Seth" />
                </div>
                <h3 className="text-white text-lg font-medium font-mono">Seth</h3>
              </div>
              <div className="group flex flex-col items-center text-center p-4 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-purple-500/30 transition-all duration-300">
                <div className="relative overflow-hidden rounded-full shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300 mb-4">
                  <img src={imgAxel} className="w-20 h-20 sm:w-24 sm:h-24 object-cover transition-transform duration-300 group-hover:scale-105" alt="Vivian" />
                </div>
                <h3 className="text-white text-lg font-medium font-mono">Vivian</h3>
              </div>
            </div>
            
            <div className="text-center mt-12 p-8 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50">
              <p className="text-white text-lg font-light font-mono leading-relaxed">
                Can you see yourself in our team?{" "}
                <a className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 hover:from-purple-400 hover:to-cyan-300 transition-all duration-300 font-medium" href="/getinvolved/sixthform">
                  Join now!
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Team;
