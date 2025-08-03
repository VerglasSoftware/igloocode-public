import { Helmet } from 'react-helmet-async';
import Layout from '@components/Layout';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { Zap, Award, Target, BarChart, Users } from 'lucide-react';

// Import competition images
import imgTasks from '/images/DSC01857.jpeg';
import imgTyping from '/images/DSC01866.jpeg';

const Competition = (): JSX.Element => {
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
        <title>The Competition - IglooCode</title>
        <meta name="description" content="Learn how the IglooCode competition works. A jeopardy-style coding event for pupils aged 11-14, with challenges for all skill levels." />
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
            The Competition
          </h1>
          <div className="flex items-center justify-center text-center">
            <Typewriter
              options={{
                strings: ["< how it all works />"],
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
      
      <div id="content">
        <section className="bg-zinc-900 flex items-center flex-col py-24" id="how-it-works">
          <div className="w-11/12 sm:w-9/12 max-w-screen-lg text-center space-y-16">
            <div className="space-y-6">
              <h2 className="font-mono text-white text-3xl sm:text-4xl font-medium leading-tight">
                Learning Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Competitive Fun</span>
              </h2>
              <h3 className="font-mono text-white text-xl sm:text-2xl font-light">
                A Deep Dive into the IglooCode Format
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-gradient-to-br from-purple-500/10 to-cyan-400/10 backdrop-blur-sm p-8 border border-purple-500/20 space-y-4">
                <h4 className="font-mono text-white text-2xl font-semibold flex items-center gap-3">
                  <Zap className="w-6 h-6 text-cyan-400" />
                  The Format
                </h4>
                <p className="font-mono text-white/80 text-lg font-light leading-relaxed">
                  IglooCode is a Jeopardy-style competition. In teams of four, you'll log onto our bespoke platform and face a board of challenges across various categories. Pick a challenge, solve it, and score points for your team! Some tasks are standalone, while others form part of a larger chain.
                </p>
              </div>
              <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm p-8 border border-yellow-500/20 space-y-4">
                <h4 className="font-mono text-white text-2xl font-semibold flex items-center gap-3">
                  <Users className="w-6 h-6 text-yellow-400" />
                  Built for All Abilities
                </h4>
                <p className="font-mono text-white/80 text-lg font-light leading-relaxed">
                  We champion inclusivity. Recognising the diverse range of experience between Year 8-10 pupils, our challenges are designed to be accessible and engaging for everyone, regardless of their prior coding knowledge. We provide prep materials to get everyone up to speed.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-zinc-900 flex items-center flex-col py-24">
          <div className="w-11/12 sm:w-9/12 max-w-screen-lg space-y-20">
            <div className="text-center">
              <h2 className="font-mono text-white text-3xl sm:text-4xl font-medium leading-tight mb-8">
                A Platform for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Growth</span>
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="group overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 h-80">
                <img src={imgTasks} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Competition Scoreboard" />
              </div>
              <div className="space-y-6 text-left">
                <h3 className="font-mono text-white text-2xl sm:text-3xl font-medium leading-tight">
                  Something to Interest <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Everyone</span>
                </h3>
                <p className="font-mono text-white/80 text-lg font-light leading-relaxed">
                  Our competition is designed not just to test your skills, but to expand them. By tackling a wide range of challenges, you'll discover new areas of computing and strengthen your problem-solving abilities in a fun, fast-paced environment.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 text-left lg:order-last">
                <h3 className="font-mono text-white text-2xl sm:text-3xl font-medium leading-tight">
                  Valuable <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Experience</span>
                </h3>
                <p className="font-mono text-white/80 text-lg font-light leading-relaxed">
                  Taking part in an event like IglooCode is a valuable life lesson. You'll develop new skills, learn to collaborate under pressure, and connect with peers from different backgrounds—all while having a brilliant time.
                </p>
              </div>
              <div className="group overflow-hidden shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 h-80 lg:order-first">
                <img src={imgTyping} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Competition Environment" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-zinc-900 flex items-center flex-col py-24">
          <div className="w-11/12 sm:w-9/12 max-w-screen-lg">
            <div className="text-center mb-16">
              <h2 className="font-mono text-white text-3xl sm:text-4xl font-medium leading-tight">
                Challenge <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Difficulties</span>
              </h2>
              <p className="font-mono text-white/80 text-lg font-light mt-4 max-w-3xl mx-auto">
                Every category offers tasks from beginner to advanced, ensuring everyone is challenged at their own level.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group p-8 bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-green-500/30 transition-all duration-300 text-center">
                <Award className="w-10 h-10 text-green-400 mx-auto mb-4" />
                <h3 className="text-white text-2xl font-mono font-medium mb-2">Beginner</h3>
                <p className="text-white/70 text-base font-light leading-relaxed font-mono">
                  Perfect for those new to programming. These tasks introduce basic concepts with a gentle learning curve.
                </p>
              </div>
              
              <div className="group p-8 bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-yellow-500/30 transition-all duration-300 text-center">
                <BarChart className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-white text-2xl font-mono font-medium mb-2">Intermediate</h3>
                <p className="text-white/70 text-base font-light leading-relaxed font-mono">
                  For pupils with some experience. These challenges require more complex thinking and problem-solving skills.
                </p>
              </div>
              
              <div className="group p-8 bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-red-500/30 transition-all duration-300 text-center">
                <Target className="w-10 h-10 text-red-400 mx-auto mb-4" />
                <h3 className="text-white text-2xl font-mono font-medium mb-2">Advanced</h3>
                <p className="text-white/70 text-base font-light leading-relaxed font-mono">
                  Designed for confident programmers. These tasks will push your boundaries and test your mastery of advanced concepts.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section 
          className="bg-cover flex items-center flex-col py-24 w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.80), rgba(0.1,0,0,0.85)), linear-gradient(black, black), url('/images/backdrop.png'), url('/images/DSC01874.jpeg')",
            backgroundBlendMode: "normal, saturation",
          }}
        >
          <div className="w-11/12 sm:w-9/12 max-w-screen-lg text-center">
            <h2 className="font-mono text-white text-3xl sm:text-4xl font-medium leading-tight mb-8">
              Ready to Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Challenge</span>?
            </h2>
            <div className="text-center px-4">
              <Link 
                to="/getinvolved"
                className="relative font-mono text-gray-300 text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 bg-black hover:bg-black transition-all duration-300 hover:scale-105 cursor-pointer inline-block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-[length:300%_100%] animate-[gradient_3s_ease-in-out_infinite] p-[2px]">
                  <div className="w-full h-full bg-black"></div>
                </div>
                <div className="relative z-10">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold">Express Your Interest →</span>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Competition;
