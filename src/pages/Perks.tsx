import { Helmet } from 'react-helmet-async';
import Layout from '@components/Layout';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { FiBook, FiBriefcase, FiCode, FiLink } from "react-icons/fi";
import { Users, Trophy, Target, Lightbulb, Award, Star } from 'lucide-react';

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
        <title>Perks & Benefits - IglooCode</title>
        <meta name="description" content="Discover the amazing perks and benefits of participating in IglooCode - from skill development to industry connections and fantastic prizes." />
        <meta name="theme-color" content="#171717" />
      </Helmet>
      
      <section
        className="w-screen min-h-[70vh] bg-cover flex flex-col justify-center items-center relative text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.80), rgba(0.1,0,0,0.85)), linear-gradient(black, black), url('/images/backdrop.png'), url('/images/DSC01874.jpeg')",
          backgroundBlendMode: "normal, saturation",
        }}
        id="hero"
      >
        <div className="max-w-4xl px-4">
          <h1 className="w-fit text-transparent text-6xl sm:text-7xl lg:text-8xl font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 pb-4 font-mono leading-tight mx-auto">
            Perks & Benefits
          </h1>
          <div className="flex items-center justify-center text-center">
            <Typewriter
              options={{
                strings: ["< skills, connections, and amazing prizes await />"],
                autoStart: true,
                loop: true,
                wrapperClassName: "font-mono text-white text-xl sm:text-2xl lg:text-3xl",
                cursorClassName: "font-mono text-white text-xl sm:text-2xl lg:text-3xl",
                delay: 100,
              }}
            />
          </div>
        </div>
      </section>

      <div className="bg-zinc-900" id="content">
        <section className="flex items-center flex-col py-24">
          <div className="w-11/12 sm:w-9/12 max-w-screen-lg space-y-20">
            
            <div className="text-center space-y-6">
              <h2 className="font-mono text-white text-3xl sm:text-4xl font-medium leading-tight">
                What You'll <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Gain</span>
              </h2>
              <p className="font-mono text-white/80 text-lg font-light leading-relaxed max-w-3xl mx-auto">
                IglooCode isn't just about competing—it's about growing as a programmer, making connections, and discovering what you're truly capable of.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm p-8 border border-yellow-500/20 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <FiCode className="w-6 h-6 text-yellow-400" />
                  <h3 className="font-mono text-white text-2xl font-semibold">Coding Experience</h3>
                </div>
                <p className="font-mono text-white/80 text-lg font-light leading-relaxed">
                  Test your skills in a competitive environment whilst discovering new programming languages and technologies. Whether you're a beginner or have some experience, there's something for everyone.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 backdrop-blur-sm p-8 border border-red-500/20 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-red-400" />
                  <h3 className="font-mono text-white text-2xl font-semibold">Teamwork Skills</h3>
                </div>
                <p className="font-mono text-white/80 text-lg font-light leading-relaxed">
                  Develop essential collaboration skills by working with teammates from different schools and backgrounds. Learn to communicate technical ideas and solve problems together.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-8 flex flex-col">
                <div className="mb-6">
                  <Target className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="font-mono text-white text-2xl sm:text-3xl font-medium leading-tight">
                    Working Under <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Pressure</span>
                  </h3>
                </div>
                <div className="space-y-4 flex-grow">
                  <p className="font-mono text-white/80 text-lg font-light leading-relaxed">
                    Experience the thrill of competitive programming in a fast-paced environment. Learn to maintain focus and productivity when the stakes are high.
                  </p>
                  <p className="font-mono text-white/80 text-lg font-light leading-relaxed">
                    As the competition progresses, you'll develop better concentration and efficiency—invaluable skills for meeting deadlines in your future career.
                  </p>
                </div>
              </div>

              <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-8 flex flex-col">
                <div className="mb-6">
                  <Lightbulb className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="font-mono text-white text-2xl sm:text-3xl font-medium leading-tight">
                    Problem <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Solving</span>
                  </h3>
                </div>
                <div className="space-y-4 flex-grow">
                  <p className="font-mono text-white/80 text-lg font-light leading-relaxed">
                    Face challenges that range from familiar programming tasks to completely new problems you've never encountered before.
                  </p>
                  <p className="font-mono text-white/80 text-lg font-light leading-relaxed">
                    Develop critical thinking skills and learn to approach complex problems with creativity and logic—skills that extend far beyond coding.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              <div className="group overflow-hidden shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 lg:order-last">
                <img
                  src={imgRachelle}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="Students networking and learning from industry professionals"
                />
              </div>

              <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-8 flex flex-col lg:order-first">
                <div className="mb-6">
                  <FiBriefcase className="w-8 h-8 text-pink-400 mb-4" />
                  <h3 className="font-mono text-white text-2xl sm:text-3xl font-medium leading-tight">
                    Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Connections</span>
                  </h3>
                </div>
                <div className="space-y-6 flex-grow">
                  <p className="font-mono text-white/80 text-lg font-light leading-relaxed">
                    Meet professionals from leading tech companies like Liberty IT and Kainos. Learn about career paths, university courses, and what it's really like to work in technology.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-mono text-white font-medium">Expert Talks</p>
                        <p className="font-mono text-white/70 text-sm">Insights from industry leaders and professionals</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FiLink className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-mono text-white font-medium">Cross-Community Networking</p>
                        <p className="font-mono text-white/70 text-sm">Connect with students from across Northern Ireland</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-mono text-white font-medium">Lasting Friendships</p>
                        <p className="font-mono text-white/70 text-sm">Build relationships that extend beyond the competition</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-8 flex flex-col">
                <div className="mb-6">
                  <Trophy className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="font-mono text-white text-2xl sm:text-3xl font-medium leading-tight">
                    Amazing <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Prizes</span>
                  </h3>
                </div>
                <div className="space-y-6 flex-grow">
                  <p className="font-mono text-white/80 text-lg font-light leading-relaxed">
                    Compete for fantastic prizes including state-of-the-art Arduino starter kits worth £100 each, perfect for continuing your STEM journey at home.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-mono text-white font-medium">Winning Team Prizes</p>
                        <p className="font-mono text-white/70 text-sm">Arduino kits and recognition for top performers</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FiBook className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-mono text-white font-medium">Learning Resources</p>
                        <p className="font-mono text-white/70 text-sm">Tutorial booklets to continue learning at home</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-mono text-white font-medium">Legacy Status</p>
                        <p className="font-mono text-white/70 text-sm">Be part of IglooCode history</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
                <img
                  src={imgMacSB}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="Competition prizes and rewards on display"
                />
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-cyan-400/20 to-purple-400/20 blur-lg"></div>
              <div className="relative bg-zinc-800/70 backdrop-blur-sm p-12 border border-zinc-700/50 shadow-2xl text-center">
                <div className="text-center mb-6">
                  <span className="text-4xl">🎯</span>
                </div>
                <h3 className="font-mono text-white text-2xl sm:text-3xl font-medium leading-tight mb-6">
                  The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Complete</span> Experience
                </h3>
                <p className="font-mono text-white/80 text-lg font-light leading-relaxed mb-8 max-w-3xl mx-auto">
                  IglooCode offers more than just a coding competition. It's a comprehensive experience designed to develop your technical skills, build lasting relationships, and provide insights into the technology industry.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div className="space-y-2">
                    <h4 className="font-mono text-cyan-400 font-medium">Skill Development</h4>
                    <p className="font-mono text-white/70 text-sm">From beginner-friendly challenges to advanced problem-solving</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-mono text-purple-400 font-medium">Industry Insight</h4>
                    <p className="font-mono text-white/70 text-sm">Direct access to professionals and career guidance</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-mono text-cyan-400 font-medium">Future Ready</h4>
                    <p className="font-mono text-white/70 text-sm">Skills and connections that will benefit your entire career</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section 
        className="bg-cover flex items-center flex-col py-24"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.80), rgba(0.1,0,0,0.85)), linear-gradient(black, black), url('/images/backdrop.png'), url('/images/DSC01874.jpeg')",
          backgroundBlendMode: "normal, saturation",
        }}
      >
        <div className="w-11/12 sm:w-9/12 max-w-screen-lg text-center space-y-8">
          <h2 className="font-mono text-white text-3xl sm:text-4xl font-medium leading-tight">
            Ready to Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">It All</span>?
          </h2>
          <p className="font-mono text-white/80 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Join us for an unforgettable day of coding, learning, and making connections that will last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/getinvolved"
              className="relative font-mono text-gray-300 text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 bg-black hover:bg-black transition-all duration-300 hover:scale-105 cursor-pointer inline-block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-[length:300%_100%] animate-[gradient_3s_ease-in-out_infinite] p-[2px]">
                <div className="w-full h-full bg-black"></div>
              </div>
              <div className="relative z-10">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold">Get Involved →</span>
              </div>
            </Link>
            <Link 
              to="/team"
              className="relative font-mono text-gray-300 text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 bg-black hover:bg-black transition-all duration-300 hover:scale-105 cursor-pointer inline-block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-[length:300%_100%] animate-[gradient_3s_ease-in-out_infinite] p-[2px]">
                <div className="w-full h-full bg-black"></div>
              </div>
              <div className="relative z-10">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold">Meet the Team →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Perks;
