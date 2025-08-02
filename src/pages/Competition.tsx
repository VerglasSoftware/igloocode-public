import { Helmet } from 'react-helmet-async';
import Layout from '@components/Layout';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

// Import competition images
import imgTasks from '/images/DSC01857.jpeg';
import imgEncryption from '/images/DSC01856.jpeg';
import imgTyping from '/images/DSC01866.jpeg';
import imgAppInventor from '/images/logos/appinventor.png';
import imgArduino from '/images/logos/arduino.png';
import imgCSS from '/images/logos/css.png';
import imgHTML from '/images/logos/html.png';
import imgJS from '/images/logos/js.png';
import imgMakeyMakey from '/images/logos/makeymakey.png';
import imgMicrobit from '/images/logos/microbit.png';
import imgMindstorms from '/images/logos/mindstorms.png';
import imgPython from '/images/logos/python.png';
import imgScratch from '/images/logos/scratch.png';
import imgSphero from '/images/logos/sphero.png';
import imgMBC from '/images/IMG_5830.jpeg';
import imgMBC2 from '/images/DSC01750.jpeg';

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
        className="w-screen min-h-[60vh] bg-hero bg-cover flex flex-col justify-end items-left relative pl-6 pr-6 sm:pl-24 pb-6"
        style={{ backgroundBlendMode: "normal, saturation" }}
        id="hero"
      >
        <h1 className="w-fit text-transparent text-7xl font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 pb-3 font-mono">
          Our competition
        </h1>
        <p className="text-white text-3xl font-mono">
          {"< how everything works />"}
        </p>
      </section>
      
      <div className="flex w-screen items-center bg-zinc-900 flex-col" id="content">
        <section className="py-20 w-9/12 max-w-screen-lg justify-start">
          <div className="relative top-[-3rem]">
            <span className="text-gray-400 font-mono">
              <a href="/" className="hover:underline text-blue-500">
                Home
              </a>{" "}
              · Our competition
            </span>
          </div>
          
          <div id="about">
            <div className="grid grid-cols-3">
              <div className="flex flex-col justify-center">
                <img src={imgTasks} className="w-full h-[25rem] shadow-md object-cover" alt="Tasks" />
              </div>
              <div className="col-span-2 pl-16 flex flex-col justify-center">
                <h2 className="text-white text-4xl font-medium mb-6 font-mono">
                  learning through <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">competition</span>.
                </h2>
                <p className="text-white text-md font-thin pt-3 font-mono">
                  IglooCode is a Jeopardy-style Capture the Flag competition. Teams are made up of 4 people each, and will log onto our custom-made platform to complete as many tasks
                  as possible.
                </p>
                <p className="text-white text-md font-thin pt-3 font-mono">
                  There are a number of tasks/questions ranging across many different categories (e.g. Scratch, Python, Encryption). The teams gain points for each completed task,
                  with more difficult tasks giving more points.
                </p>
                <p className="text-white text-md font-thin pt-3 font-mono">
                  Some tasks will be singular, and some will be chained, where each part of the task builds on the previous part. The team with the most points at the end of the
                  competition wins.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 mt-12">
              <div className="col-span-2 pr-16 flex flex-col justify-center">
                <h2 className="text-white text-4xl font-medium mb-6 font-mono">
                  inclusivity through <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">ability</span>.
                </h2>
                <p className="text-white text-md font-thin pt-3 font-mono">
                  IglooCode is a competition for everyone. We believe that IT is a subject which can be enjoyed by everyone - regardless of background, religion, gender, sexuality or
                  any other factors.
                </p>
                <p className="text-white text-md font-thin pt-3 font-mono">
                  There is a large ability range between Year 8 and Year 10 pupils, and depending on schools' IT departments, there may also be a large range of experience with
                  programming and ICT.
                </p>
                <p className="text-white text-md font-thin pt-3 font-mono">
                  Therefore, we will include a wide range of categories to make sure students of all abilities are able to compete. Students can choose any tasks from any categories,
                  and we'll provide information booklets to prepare schools before IglooCode.
                </p>
              </div>
              <div className="flex flex-col justify-center">
                <img src={imgTyping} className="w-full h-[23rem] shadow-md object-cover" style={{ objectPosition: "100% 70%" }} alt="Typing" />
              </div>
            </div>
            
            <div className="grid grid-cols-3 mt-12">
              <div className="flex flex-col justify-center">
                <img src={imgEncryption} className="w-full h-[27rem] shadow-md object-cover" alt="Encryption" />
              </div>
              <div className="col-span-2 pl-16 flex flex-col justify-center">
                <h2 className="text-white text-4xl font-medium mb-6 font-mono">
                  something to interest <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">everyone</span>.
                </h2>
                <p className="text-white text-md font-thin pt-3 font-mono">
                  We're expecting over 100 kids from across Northern Ireland to take part in IglooCode. That's a huge number of unique people with their own unique interests,
                  personalities and skills.
                </p>
                <p className="text-white text-md font-thin pt-3 font-mono">Here's some of the categories we're planning to offer:</p>
                <div className="grid grid-cols-6 gap-6 mt-4 pr-6">
                  <img src={imgPython} className="w-full aspect-square object-cover" alt="Python" />
                  <img src={imgHTML} className="w-full aspect-square object-contain" alt="HTML" />
                  <img src={imgCSS} className="w-full aspect-square object-cover" alt="CSS" />
                  <img src={imgJS} className="w-full aspect-square object-cover" alt="JavaScript" />
                  <img src={imgSphero} className="w-full aspect-square object-cover" alt="Sphero" />
                  <img src={imgMindstorms} className="w-full aspect-square object-cover" alt="Mindstorms" />
                  <img src={imgArduino} className="w-full aspect-square object-cover" alt="Arduino" />
                  <img src={imgScratch} className="w-full aspect-square object-cover" alt="Scratch" />
                  <img src={imgAppInventor} className="w-full aspect-square object-cover" alt="App Inventor" />
                  <img src={imgMakeyMakey} className="w-full aspect-square object-cover" alt="Makey Makey" />
                  <img src={imgMicrobit} className="w-full aspect-square object-contain" alt="Micro:bit" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <section className="bg-hero bg-cover bg-sat flex items-center flex-col">
        <div className="py-16 w-9/12 max-w-screen-lg flex items-center justify-center flex-col">
          <p className="text-white text-4xl font-medium font-mono">
            ready to get <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">involved</span>?
          </p>
          <Link to="/getinvolved" className="text-white hover:underline text-xl mt-4 border-[1px] border-gray-400 p-2 w-1/3 text-center font-mono">
            YOUR NEXT STEPS
          </Link>
        </div>
      </section>
      
      <div className="flex w-screen items-center bg-zinc-900 flex-col">
        <section className="py-20 w-9/12 max-w-screen-lg justify-start">
          <div id="benefits">
            <div className="grid grid-cols-2 gap-16">
              <div className="flex flex-col justify-center">
                <img src={imgMBC} className="w-full h-80 shadow-md object-cover" alt="Students working" />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-white text-4xl font-medium mb-6 text-right font-mono">
                  a valuable experience for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">all</span>.
                </h2>
                <p className="text-white text-md font-thin pt-3 text-right font-mono">
                  No matter who you are, the experience of taking part in an event like IglooCode is such a valuable life lesson. Developing your skills and learning new things,
                  while getting to know people from the different backgrounds and sides of the community, is something you don't want to miss out on.
                </p>
                <Link to="/perks" className="hover:underline text-blue-400 text-md font-thin mt-3 block after:content-['_↗'] text-right font-mono">
                  Read more.
                </Link>
              </div>
            </div>
          </div>
          
          <div id="getinvolved" className="pt-12">
            <div className="grid grid-cols-2 gap-16">
              <div className="flex flex-col justify-center">
                <h2 className="text-white text-4xl font-medium mb-6 font-mono">
                  getting yourself <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">involved</span>.
                </h2>
                <p className="text-white text-md font-thin pt-3 font-mono">
                  IglooCode is an event full of opportunities and experiences for everyone. Are you a teacher that thinks your students would enjoy the competitive environment? Or
                  are you a sixth former who'd like to get some volunteering experience at a fast-paced event? Whichever you are, we have something for you.
                </p>
                <Link to="/getinvolved" className="hover:underline text-blue-400 text-md font-thin mt-3 block after:content-['_↗'] font-mono">
                  Read more.
                </Link>
              </div>
              <div className="flex flex-col justify-center">
                <img src={imgMBC2} className="w-full h-80 shadow-md object-cover" alt="Event setup" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Competition;
