import { Helmet } from 'react-helmet-async';
import Layout from '@components/Layout';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { FiBook, FiBriefcase, FiCode, FiCoffee, FiLink, FiMinimize } from "react-icons/fi";
import { SiHandshake } from "react-icons/si";

// Import images
import imgMacSB from '/images/DSC01974.jpeg';
import imgRachelle from '/images/IMG_0693.jpg';

const Perks = () => {
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
        <title>Perks for you - IglooCode</title>
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
          <h1 className="w-fit text-transparent text-6xl sm:text-7xl lg:text-8xl font-bold bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 pb-4 font-mono leading-tight animate-gradient">
            Perks for you
          </h1>
          <p className="text-white text-xl sm:text-3xl font-mono leading-relaxed drop-shadow-lg">
            {"< what'll you get out of it? />"}
          </p>
        </div>
      </section>
      
      <div className="flex w-screen items-center bg-zinc-900 flex-col" id="content">
        <section className="py-16 sm:py-20 w-11/12 sm:w-9/12 max-w-screen-lg">
          <div className="relative -top-6 sm:-top-12 mb-8">
            <nav className="text-gray-400 font-mono text-sm">
              <a href="/" className="hover:underline text-blue-400 hover:text-blue-300 transition-colors">
                Home
              </a>
              <span className="mx-2">·</span>
              <span className="text-gray-300">Perks for you</span>
            </nav>
          </div>
          
          <div id="about" className="space-y-16">
            <div className="text-center mb-12">
              <h2 className="text-white text-3xl sm:text-4xl font-medium mb-4 font-mono leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">skills</span> you'll develop.
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="group p-8 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-yellow-400/30 transition-all duration-300">
                <div className="flex flex-row items-center mb-6">
                  <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 backdrop-blur-sm border border-yellow-400/30 w-16 h-16 flex items-center justify-center rounded-full mr-6 flex-none transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-yellow-400/20">
                    <FiCode className="text-yellow-400 w-7 h-7" />
                  </div>
                  <h3 className="text-white text-2xl sm:text-3xl font-mono font-medium">
                    coding <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">experience</span>.
                  </h3>
                </div>
                <div className="space-y-4">
                  <p className="text-white text-base font-light leading-relaxed font-mono">
                    There are going to be people better than you at IglooCode; there are going to be people worse than you; but that doesn't matter. We want to make sure you test your
                    own skills and find <em>your</em> passion.
                  </p>
                  <p className="text-white text-base font-light leading-relaxed font-mono">
                    Spend the entire competition working on tasks you already know how to do, or experiment a little and try something new - it's totally up to you!
                  </p>
                </div>
              </div>
              
              <div className="group p-8 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-red-500/30 transition-all duration-300">
                <div className="flex flex-row items-center mb-6">
                  <div className="bg-gradient-to-br from-red-500/20 to-red-700/20 backdrop-blur-sm border border-red-500/30 w-16 h-16 flex items-center justify-center rounded-full mr-6 flex-none transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-red-500/20">
                    <SiHandshake className="text-red-500 w-7 h-7" />
                  </div>
                  <h3 className="text-white text-2xl sm:text-3xl font-mono font-medium">
                    teamworking <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">skills</span>.
                  </h3>
                </div>
                <div className="space-y-4">
                  <p className="text-white text-base font-light leading-relaxed font-mono">
                    Teamwork is one of the most crucial and desired skills within the IT industry - it's something you need to be able to do to succeed.
                  </p>
                  <p className="text-white text-base font-light leading-relaxed font-mono">
                    At IglooCode, we'll be testing your ability to work together as a team with your friends to be productive as possible, while also interacting and working with those
                    you've never met before - time to get out of your comfort zone!
                  </p>
                </div>
              </div>
              
              <div className="group p-8 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-green-500/30 transition-all duration-300">
                <div className="flex flex-row items-center mb-6">
                  <div className="bg-gradient-to-br from-green-500/20 to-green-700/20 backdrop-blur-sm border border-green-500/30 w-16 h-16 flex items-center justify-center rounded-full mr-6 flex-none transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-green-500/20">
                    <FiMinimize className="text-green-500 w-7 h-7" />
                  </div>
                  <h3 className="text-white text-2xl sm:text-3xl font-mono font-medium">
                    working under <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">pressure</span>.
                  </h3>
                </div>
                <div className="space-y-4">
                  <p className="text-white text-base font-light leading-relaxed font-mono">
                    Coding under a competitive environment isn't easy! It'll get stressful, and tension will rise, but we want to watch you rise to the battle and perform the best you
                    possibly can!
                  </p>
                  <p className="text-white text-base font-light leading-relaxed font-mono">
                    As the competition goes on, you'll find ways to improve your concentration and efficiency, making it much easier to work and get as many tasks completed as possible
                    - a useful skill when working to deadlines!
                  </p>
                </div>
              </div>
              
              <div className="group p-8 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-sky-500/30 transition-all duration-300">
                <div className="flex flex-row items-center mb-6">
                  <div className="bg-gradient-to-br from-sky-500/20 to-sky-700/20 backdrop-blur-sm border border-sky-500/30 w-16 h-16 flex items-center justify-center rounded-full mr-6 flex-none transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-sky-500/20">
                    <FiCoffee className="text-sky-500 w-7 h-7" />
                  </div>
                  <h3 className="text-white text-2xl sm:text-3xl font-mono font-medium">
                    problem <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">solving</span>.
                  </h3>
                </div>
                <div className="space-y-4">
                  <p className="text-white text-base font-light leading-relaxed font-mono">
                    Some of our tasks will be really easy - they'll be the things you learned in the first week of P6 ICT class. Don't be fooled, though - many tasks will be nothing
                    like anything you've experienced before.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <section className="bg-zinc-900 flex items-center flex-col py-20">
        <div className="w-11/12 sm:w-9/12 max-w-screen-lg flex items-center justify-center flex-col text-center space-y-8">
          <h2 className="text-white text-3xl sm:text-4xl font-medium font-mono leading-tight">
            the people behind it <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 animate-gradient">all</span>.
          </h2>
          <Link 
            to="/team" 
            className="group inline-flex items-center text-white hover:text-purple-300 transition-all duration-300 text-lg border-2 border-purple-500/50 hover:border-purple-400 px-8 py-4 rounded-lg bg-purple-600/20 hover:bg-purple-600/30 backdrop-blur-sm hover:scale-105 font-mono"
          >
            MEET THE TEAM 
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </section>
      
      <div className="flex w-screen items-center bg-zinc-900 flex-col">
        <section className="py-16 sm:py-20 w-11/12 sm:w-9/12 max-w-screen-lg">
          <div className="text-center mb-16">
            <h2 className="text-white text-3xl sm:text-4xl font-medium mb-4 font-mono leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">experiences</span> you'll gain.
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-20">
            <div className="space-y-8">
              <div className="group p-8 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-pink-500/30 transition-all duration-300">
                <div className="flex flex-row items-center mb-6">
                  <div className="bg-gradient-to-br from-pink-500/20 to-pink-700/20 backdrop-blur-sm border border-pink-500/30 w-16 h-16 flex items-center justify-center rounded-full mr-6 flex-none transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-pink-500/20">
                    <FiBriefcase className="text-pink-400 w-7 h-7" />
                  </div>
                  <h3 className="text-white text-2xl sm:text-3xl font-mono font-medium">
                    industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">talks</span>.
                  </h3>
                </div>
                <div className="space-y-4">
                  <p className="text-white text-base font-light leading-relaxed font-mono">
                    We have secured the opportunity to hear from industry experts, allowing you to learn top tips on how to enter and succeed in the industry. Grow your budding
                    passion with the field and discover what you're able to do with your newly developed skills.
                  </p>
                  <p className="text-white text-base font-light leading-relaxed font-mono">
                    Hear from experts from Liberty IT, one of the biggest tech companies in Belfast and Dublin. Uncover career opportunities, next steps after KS3 and options with
                    LIT themselves.
                  </p>
                </div>
              </div>
              
              <div className="group p-8 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-orange-500/30 transition-all duration-300">
                <div className="flex flex-row items-center mb-6">
                  <div className="bg-gradient-to-br from-orange-500/20 to-orange-700/20 backdrop-blur-sm border border-orange-500/30 w-16 h-16 flex items-center justify-center rounded-full mr-6 flex-none transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-orange-500/20">
                    <FiLink className="text-orange-400 w-7 h-7" />
                  </div>
                  <h3 className="text-white text-2xl sm:text-3xl font-mono font-medium">
                    cross-<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">community</span>.
                  </h3>
                </div>
                <div className="space-y-4">
                  <p className="text-white text-base font-light leading-relaxed font-mono">
                    The inspiration for this competition originally came from when we met on a Cyber Security course, coming from all parts of Northern Ireland (and even a few
                    people from England).
                  </p>
                  <p className="text-white text-base font-light leading-relaxed font-mono">
                    Our aim is to bring people together from across the country to make new friends through coding, in the same way we were able to.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-stretch">
              <div className="group overflow-hidden rounded-xl shadow-lg transition-all duration-300 w-full">
                <img src={imgRachelle} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" alt="Event participant" />
              </div>
            </div>
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-white text-3xl sm:text-4xl font-medium mb-4 font-mono leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">rewards</span> and prizes.
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <div className="flex justify-center items-stretch order-2 lg:order-1">
              <div className="group overflow-hidden rounded-xl shadow-lg transition-all duration-300 w-full">
                <img src={imgMacSB} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" alt="Event rewards" />
              </div>
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <div className="group p-8 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex flex-row items-center mb-6">
                  <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-sm border border-purple-500/30 w-16 h-16 flex items-center justify-center rounded-full mr-6 flex-none transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/20">
                    <FiBriefcase className="text-purple-400 w-7 h-7" />
                  </div>
                  <h3 className="text-white text-2xl sm:text-3xl font-mono font-medium">
                    amazing <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">prizes</span>.
                  </h3>
                </div>
                <div className="space-y-4">
                  <p className="text-white text-base font-light leading-relaxed font-mono">
                    Thinking about going for the win? If you succeed, you'll be going home victorious, along with state-of-the-art Arduino starter kits, worth £100 each,
                    to further enhance your interest and knowledge of STEM and IT.
                  </p>
                  <p className="text-white text-base font-light leading-relaxed font-mono">
                    Forever go down in history as the first winners of IglooCode - what is there to lose?!
                  </p>
                </div>
              </div>
              
              <div className="group p-8 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-blue-500/30 transition-all duration-300">
                <div className="flex flex-row items-center mb-6">
                  <div className="bg-gradient-to-br from-blue-500/20 to-blue-700/20 backdrop-blur-sm border border-blue-500/30 w-16 h-16 flex items-center justify-center rounded-full mr-6 flex-none transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                    <FiBook className="text-blue-400 w-7 h-7" />
                  </div>
                  <h3 className="text-white text-2xl sm:text-3xl font-mono font-medium">
                    tutorial <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">booklets</span>.
                  </h3>
                </div>
                <div className="space-y-4">
                  <p className="text-white text-base font-light leading-relaxed font-mono">
                    Don't worry - we're not leaving you in the dark! As part of our goal to make sure IglooCode improves your skills, we'll be sending out information booklets to
                    every school involved, with tutorials on how to get started and up to speed on new topics.
                  </p>
                  <p className="text-white text-base font-light leading-relaxed font-mono">
                    Take these home or work through them with your teachers or mentors at school, and maybe you could be coming home with the victory in 2024!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Perks;
