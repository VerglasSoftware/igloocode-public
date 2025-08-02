import { Helmet } from 'react-helmet-async';
import Layout from '@components/Layout';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Code, Globe, Palette, Cpu, BrainCircuit, Binary, Zap } from 'lucide-react';

// Import competition images
import imgTasks from '/images/DSC01857.jpeg';
import imgEncryption from '/images/DSC01856.jpeg';
import imgTyping from '/images/DSC01866.jpeg';
import imgPython from '/images/logos/python.png';
import imgCSS from '/images/logos/css.png';
import imgHTML from '/images/logos/html.png';
import imgScratch from '/images/logos/scratch.png';
import imgMicrobit from '/images/logos/microbit.png';
import imgMBC from '/images/IMG_5830.jpeg';

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
        <title>How does it work? - IglooCode</title>
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
            Our competition
          </h1>
          <p className="text-white text-xl sm:text-3xl font-mono leading-relaxed drop-shadow-lg">
            {"< how everything works />"}
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
              <span className="text-gray-300">Our competition</span>
            </nav>
          </div>
          
          <div id="about" className="space-y-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center items-stretch">
                <div className="group overflow-hidden rounded-xl shadow-lg transition-all duration-300 w-full">
                  <img src={imgTasks} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" alt="Tasks" />
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-white text-3xl sm:text-4xl font-medium font-mono leading-tight">
                  learning through <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">competition</span>.
                </h2>
                <div className="space-y-4">
                  <p className="text-white text-base font-light leading-relaxed font-mono">
                    IglooCode is a Jeopardy-style Capture the Flag competition. Teams are made up of 4 people each, and will log onto our custom-made platform to complete as many tasks
                    as possible.
                  </p>
                  <p className="text-white text-base font-light leading-relaxed font-mono">
                    There are a number of tasks/questions ranging across many different categories (e.g. Scratch, Python, Encryption). The teams gain points for each completed task,
                    with more difficult tasks giving more points.
                  </p>
                  <p className="text-white text-base font-light leading-relaxed font-mono">
                    Some tasks will be singular, and some will be chained, where each part of the task builds on the previous part. The team with the most points at the end of the
                    competition wins.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <h2 className="text-white text-3xl sm:text-4xl font-medium font-mono leading-tight">
                  inclusivity through <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">ability</span>.
                </h2>
                <div className="space-y-4">
                  <p className="text-white text-base font-light leading-relaxed font-mono">
                    IglooCode is a competition for everyone. We believe that IT is a subject which can be enjoyed by everyone - regardless of background, religion, gender, sexuality or
                    any other factors.
                  </p>
                  <p className="text-white text-base font-light leading-relaxed font-mono">
                    There is a large ability range between Year 8 and Year 10 pupils, and depending on schools' IT departments, there may also be a large range of experience with
                    programming and ICT.
                  </p>
                  <p className="text-white text-base font-light leading-relaxed font-mono">
                    Therefore, we will include a wide range of categories to make sure students of all abilities are able to compete. Students can choose any tasks from any categories,
                    and we'll provide information booklets to prepare schools before IglooCode.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-stretch order-1 lg:order-2">
                <div className="group overflow-hidden rounded-xl shadow-lg transition-all duration-300 w-full">
                  <img src={imgTyping} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" style={{ objectPosition: "100% 70%" }} alt="Typing" />
                </div>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center items-stretch">
                <div className="group overflow-hidden rounded-xl shadow-lg transition-all duration-300 w-full">
                  <img src={imgEncryption} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" alt="Encryption" />
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-white text-3xl sm:text-4xl font-medium font-mono leading-tight">
                  something to interest <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">everyone</span>.
                </h2>
                <div className="space-y-4">
                  <p className="text-white text-base font-light leading-relaxed font-mono">
                    We're expecting over 100 kids from across Northern Ireland to take part in IglooCode. That's a huge number of unique people with their own unique interests,
                    personalities and skills.
                  </p>
                  <p className="text-white text-base font-light leading-relaxed font-mono">
                    Our competition features a diverse range of categories designed to challenge students at every skill level, from beginner-friendly visual programming to advanced coding concepts.
                  </p>
                  <p className="text-white text-base font-light leading-relaxed font-mono">
                    Each category offers multiple difficulty levels, ensuring that whether you're just starting your coding journey or you're already experienced, there's something that will both challenge and engage you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <div className="flex w-screen items-center bg-zinc-900 flex-col">
        <section className="py-16 sm:py-20 w-11/12 sm:w-9/12 max-w-screen-lg">
          <div className="text-center mb-16">
            <h2 className="text-white text-3xl sm:text-4xl font-medium font-mono leading-tight mb-6">
              technologies & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">platforms</span>.
            </h2>
            <p className="text-white text-lg font-light leading-relaxed font-mono max-w-3xl mx-auto">
              These are the core technologies and concepts you'll be working with during IglooCode:
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="group p-6 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-purple-500/30 transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <img src={imgPython} className="w-16 h-16 object-cover rounded-lg shadow-md mb-4 group-hover:scale-110 transition-transform duration-300" alt="Python" />
                <span className="text-white text-sm font-mono font-medium">Python</span>
                <span className="text-gray-400 text-xs font-mono mt-1">Programming Language</span>
              </div>
            </div>
            
            <div className="group p-6 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-blue-500/30 transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-700/20 rounded-lg shadow-md mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <Code className="w-8 h-8 text-blue-400" />
                </div>
                <span className="text-white text-sm font-mono font-medium">C#</span>
                <span className="text-gray-400 text-xs font-mono mt-1">Programming Language</span>
              </div>
            </div>
            
            <div className="group p-6 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-orange-500/30 transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <img src={imgHTML} className="w-16 h-16 object-contain rounded-lg shadow-md mb-4 group-hover:scale-110 transition-transform duration-300" alt="HTML" />
                <span className="text-white text-sm font-mono font-medium">HTML</span>
                <span className="text-gray-400 text-xs font-mono mt-1">Web Markup</span>
              </div>
            </div>
            
            <div className="group p-6 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-blue-400/30 transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <img src={imgCSS} className="w-16 h-16 object-cover rounded-lg shadow-md mb-4 group-hover:scale-110 transition-transform duration-300" alt="CSS" />
                <span className="text-white text-sm font-mono font-medium">CSS</span>
                <span className="text-gray-400 text-xs font-mono mt-1">Web Styling</span>
              </div>
            </div>
            
            <div className="group p-6 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-green-500/30 transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <img src={imgScratch} className="w-16 h-16 object-cover rounded-lg shadow-md mb-4 group-hover:scale-110 transition-transform duration-300" alt="Scratch" />
                <span className="text-white text-sm font-mono font-medium">Scratch</span>
                <span className="text-gray-400 text-xs font-mono mt-1">Visual Programming</span>
              </div>
            </div>
            
            <div className="group p-6 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <img src={imgMicrobit} className="w-16 h-16 object-contain rounded-lg shadow-md mb-4 group-hover:scale-110 transition-transform duration-300" alt="Micro:bit" />
                <span className="text-white text-sm font-mono font-medium">Micro:bit</span>
                <span className="text-gray-400 text-xs font-mono mt-1">Hardware Programming</span>
              </div>
            </div>
            
            <div className="group p-6 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-yellow-500/30 transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-yellow-700/20 rounded-lg shadow-md mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-yellow-400" />
                </div>
                <span className="text-white text-sm font-mono font-medium">Logic Gates</span>
                <span className="text-gray-400 text-xs font-mono mt-1">Digital Logic</span>
              </div>
            </div>
            
            <div className="group p-6 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-red-500/30 transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-red-700/20 rounded-lg shadow-md mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <Binary className="w-8 h-8 text-red-400" />
                </div>
                <span className="text-white text-sm font-mono font-medium">Binary</span>
                <span className="text-gray-400 text-xs font-mono mt-1">Data Manipulation</span>
              </div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="group p-8 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-purple-500/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Code className="w-8 h-8 text-purple-400 mr-3" />
                <h3 className="text-white text-xl font-mono font-medium">Programming Languages</h3>
              </div>
              <p className="text-gray-300 text-base font-light leading-relaxed font-mono mb-4">
                Master Python and C# through hands-on coding challenges that range from basic syntax to advanced problem-solving techniques.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-400 rounded font-mono">Python</span>
                <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded font-mono">C#</span>
              </div>
            </div>
            
            <div className="group p-8 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-cyan-500/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-white text-xl font-mono font-medium">Web Technologies</h3>
              </div>
              <p className="text-gray-300 text-base font-light leading-relaxed font-mono mb-4">
                Build and style web pages using HTML for structure and CSS for beautiful, responsive designs.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-orange-500/20 text-orange-400 rounded font-mono">HTML</span>
                <span className="text-xs px-2 py-1 bg-blue-400/20 text-blue-300 rounded font-mono">CSS</span>
              </div>
            </div>
            
            <div className="group p-8 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-green-500/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Cpu className="w-8 h-8 text-green-400 mr-3" />
                <h3 className="text-white text-xl font-mono font-medium">Hardware & Visual Programming</h3>
              </div>
              <p className="text-gray-300 text-base font-light leading-relaxed font-mono mb-4">
                Program physical devices with Micro:bit and create interactive projects using Scratch's visual programming environment.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded font-mono">Scratch</span>
                <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded font-mono">Micro:bit</span>
              </div>
            </div>
            
            <div className="group p-8 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-yellow-500/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <BrainCircuit className="w-8 h-8 text-yellow-400 mr-3" />
                <h3 className="text-white text-xl font-mono font-medium">Digital Logic & Binary</h3>
              </div>
              <p className="text-gray-300 text-base font-light leading-relaxed font-mono mb-4">
                Understand the fundamentals of computer science through logic gates and binary data manipulation challenges.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded font-mono">Logic Gates</span>
                <span className="text-xs px-2 py-1 bg-red-500/20 text-red-400 rounded font-mono">Binary</span>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <div className="flex w-screen items-center bg-zinc-900 flex-col">
        <section className="py-16 sm:py-20 w-11/12 sm:w-9/12 max-w-screen-lg">
          <div className="text-center mb-16">
            <h2 className="text-white text-3xl sm:text-4xl font-medium font-mono leading-tight mb-6">
              multiple difficulty <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">levels</span>.
            </h2>
            <p className="text-white text-lg font-light leading-relaxed font-mono max-w-3xl mx-auto">
              Every category offers tasks ranging from beginner to advanced, ensuring everyone can participate and be challenged at their level.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="group p-8 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-green-500/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <h3 className="text-white text-xl font-mono font-medium">Beginner</h3>
              </div>
              <p className="text-gray-300 text-base font-light leading-relaxed font-mono">
                Perfect for those new to programming. These tasks introduce basic concepts and provide a gentle learning curve.
              </p>
            </div>
            
            <div className="group p-8 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-yellow-500/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                <h3 className="text-white text-xl font-mono font-medium">Intermediate</h3>
              </div>
              <p className="text-gray-300 text-base font-light leading-relaxed font-mono">
                For students with some experience. These challenges require more complex thinking and problem-solving skills.
              </p>
            </div>
            
            <div className="group p-8 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-red-500/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                <h3 className="text-white text-xl font-mono font-medium">Advanced</h3>
              </div>
              <p className="text-gray-300 text-base font-light leading-relaxed font-mono">
                Designed for experienced programmers. These tasks push the boundaries and test advanced concepts.
              </p>
            </div>
          </div>
        </section>
      </div>
      
      <section className="bg-zinc-900 flex items-center flex-col py-20">
        <div className="w-11/12 sm:w-9/12 max-w-screen-lg flex items-center justify-center flex-col text-center space-y-8">
          <h2 className="font-mono text-white text-3xl sm:text-4xl font-medium leading-tight">
            ready to get <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">involved</span>?
          </h2>
          <Link to="/getinvolved" className="group inline-flex items-center text-white hover:text-purple-300 transition-all duration-300 text-lg border-2 border-purple-500/50 hover:border-purple-400 px-8 py-4 rounded-lg bg-purple-600/20 hover:bg-purple-600/30 backdrop-blur-sm hover:scale-105 font-mono">
            YOUR NEXT STEPS
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </section>
      
      <div className="flex w-screen items-center bg-zinc-900 flex-col">
        <section className="py-16 sm:py-20 w-11/12 sm:w-9/12 max-w-screen-lg">
          <div className="text-center mb-16">
            <h2 className="text-white text-3xl sm:text-4xl font-medium mb-4 font-mono leading-tight">
              a valuable experience for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">all</span>.
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <div className="flex justify-center items-stretch">
              <div className="group overflow-hidden rounded-xl shadow-lg transition-all duration-300 w-full">
                <img src={imgMBC} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" alt="Students working" />
              </div>
            </div>
            <div className="space-y-8">
              <div className="group p-8 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-purple-500/30 transition-all duration-300">
                <h3 className="text-white text-xl sm:text-2xl font-mono font-medium mb-4">
                  valuable <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">experience</span>.
                </h3>
                <p className="text-white text-base font-light leading-relaxed font-mono mb-4">
                  No matter who you are, the experience of taking part in an event like IglooCode is such a valuable life lesson. Developing your skills and learning new things,
                  while getting to know people from the different backgrounds and sides of the community, is something you don't want to miss out on.
                </p>
                <Link to="/perks" className="font-mono text-blue-400 hover:text-blue-300 text-sm font-light underline transition-colors">
                  Read more →
                </Link>
              </div>
              
              <div className="group p-8 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-cyan-500/30 transition-all duration-300">
                <h3 className="text-white text-xl sm:text-2xl font-mono font-medium mb-4">
                  getting yourself <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">involved</span>.
                </h3>
                <p className="text-white text-base font-light leading-relaxed font-mono mb-4">
                  IglooCode is an event full of opportunities and experiences for everyone. Are you a teacher that thinks your students would enjoy the competitive environment? Or
                  are you a sixth former who'd like to get some volunteering experience at a fast-paced event? Whichever you are, we have something for you.
                </p>
                <Link to="/getinvolved" className="font-mono text-blue-400 hover:text-blue-300 text-sm font-light underline transition-colors">
                  Read more →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Competition;
