import { Helmet } from 'react-helmet-async';
import Layout from '@components/Layout';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { Users, GraduationCap, Heart, Award, Calendar, Clock } from 'lucide-react';

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
        <title>Get Involved - IglooCode</title>
        <meta name="description" content="Join IglooCode as a teacher or volunteer. Give your students an unforgettable coding experience or help make the event amazing as a sixth form volunteer." />
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
            Get Involved
          </h1>
          <div className="flex items-center justify-center text-center">
            <Typewriter
              options={{
                strings: ["< opportunities for teachers and volunteers />"],
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
                Be Part of Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Special</span>
              </h2>
              <p className="font-mono text-white/80 text-lg font-light leading-relaxed max-w-3xl mx-auto">
                IglooCode brings together the brightest young minds in Northern Ireland for a day of coding, collaboration, and creativity. Join us and help shape the next generation of programmers.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-8 flex flex-col">
                <div className="mb-6">
                  <Users className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="font-mono text-white text-2xl sm:text-3xl font-medium leading-tight">
                    For <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Teachers</span>
                  </h3>
                </div>
                <div className="space-y-6 flex-grow">
                  <p className="font-mono text-white/80 text-lg font-light leading-relaxed">
                    Give your KS3 students an unforgettable experience where they can showcase their coding skills, collaborate with peers, and gain real-world industry insights.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-mono text-white font-medium">Perfect for KS3 Students</p>
                        <p className="font-mono text-white/70 text-sm">Ages 11-14 with any coding experience</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-mono text-white font-medium">Full Day Experience</p>
                        <p className="font-mono text-white/70 text-sm">Refreshments provided</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-mono text-white font-medium">Industry Exposure</p>
                        <p className="font-mono text-white/70 text-sm">Meet professionals and see real applications</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="text-white text-lg border-2 border-purple-500/50 p-4 w-full text-center font-mono bg-purple-600/10 backdrop-blur-sm">
                    2026 APPLICATIONS COMING SOON
                  </div>
                </div>
              </div>

              <div className="group overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
                <img
                  src={imgHands}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="Students collaborating on coding challenges"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              <div className="group overflow-hidden shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 lg:order-last">
                <img
                  src={imgCosmo}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="Sixth form volunteers helping participants"
                />
              </div>

              <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-8 flex flex-col lg:order-first">
                <div className="mb-6">
                  <GraduationCap className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="font-mono text-white text-2xl sm:text-3xl font-medium leading-tight">
                    For <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Sixth Formers</span>
                  </h3>
                </div>
                <div className="space-y-6 flex-grow">
                  <p className="font-mono text-white/80 text-lg font-light leading-relaxed">
                    Join our volunteer team and gain valuable experience whilst helping to inspire the next generation of coders. Perfect for your UCAS applications and CV.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-mono text-white font-medium">Make a Difference</p>
                        <p className="font-mono text-white/70 text-sm">Mentor younger students and share your passion</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-mono text-white font-medium">Build Your Network</p>
                        <p className="font-mono text-white/70 text-sm">Connect with industry professionals and peers</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-mono text-white font-medium">Enhance Your Applications</p>
                        <p className="font-mono text-white/70 text-sm">Valuable experience for university and job applications</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link 
                    to="/getinvolved/sixthform"
                    className="relative font-mono text-gray-300 text-lg px-8 py-4 bg-black hover:bg-black transition-all duration-300 hover:scale-105 cursor-pointer inline-block w-full text-center"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-[length:300%_100%] animate-[gradient_3s_ease-in-out_infinite] p-[2px]">
                      <div className="w-full h-full bg-black"></div>
                    </div>
                    <div className="relative z-10">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold">JOIN THE TEAM →</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-cyan-400/20 to-purple-400/20 blur-lg"></div>
              <div className="relative bg-zinc-800/70 backdrop-blur-sm p-12 border border-zinc-700/50 shadow-2xl text-center">
                <div className="text-center mb-6">
                  <span className="text-4xl">🎯</span>
                </div>
                <h3 className="font-mono text-white text-2xl sm:text-3xl font-medium leading-tight mb-6">
                  Why Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Involved</span>?
                </h3>
                <p className="font-mono text-white/80 text-lg font-light leading-relaxed mb-8 max-w-3xl mx-auto">
                  IglooCode isn't just another competition-it's a celebration of creativity, problem-solving, and the incredible potential of young minds. Whether you're bringing students or volunteering, you'll be part of something that makes a real difference.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div className="space-y-2">
                    <h4 className="font-mono text-cyan-400 font-medium">Cross-Community</h4>
                    <p className="font-mono text-white/70 text-sm">Bringing together students from all backgrounds across Northern Ireland</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-mono text-purple-400 font-medium">Industry-Led</h4>
                    <p className="font-mono text-white/70 text-sm">Supported by leading tech companies and professionals</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-mono text-cyan-400 font-medium">Future-Focused</h4>
                    <p className="font-mono text-white/70 text-sm">Preparing the next generation for careers in technology</p>
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
            Ready to Make a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Difference</span>?
          </h2>
          <p className="font-mono text-white/80 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Applications for IglooCode 2026 will open soon. Be the first to know when registration begins.
          </p>
          <div className="space-y-4">
            <Link 
              to="/perks"
              className="relative font-mono text-gray-300 text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 bg-black hover:bg-black transition-all duration-300 hover:scale-105 cursor-pointer inline-block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-[length:300%_100%] animate-[gradient_3s_ease-in-out_infinite] p-[2px]">
                <div className="w-full h-full bg-black"></div>
              </div>
              <div className="relative z-10">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold">Discover the Perks →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GetInvolved;
