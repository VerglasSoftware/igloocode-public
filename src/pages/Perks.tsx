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
        className="w-screen min-h-[60vh] bg-hero bg-cover flex flex-col justify-end items-left relative pl-6 pr-6 sm:pl-24 pb-6"
        style={{ backgroundBlendMode: "normal, saturation" }}
        id="hero"
      >
        <h1 className="w-fit text-transparent text-7xl font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 pb-3 font-mono">
          Perks for you
        </h1>
        <p className="text-white text-3xl font-mono">
          {"< what'll you get out of it? />"}
        </p>
      </section>
      
      <div className="flex w-screen items-center bg-zinc-900 flex-col" id="content">
        <section className="py-20 w-9/12 max-w-screen-lg justify-start">
          <div className="relative top-[-3rem]">
            <span className="text-gray-400 font-mono">
              <a href="/" className="hover:underline text-blue-500">
                Home
              </a>{" "}
              · Perks for you
            </span>
          </div>
          
          <div id="about">
            <h2 className="text-white text-4xl font-medium mb-6 font-mono">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">skills</span>.
            </h2>
            <div className="grid grid-cols-2 gap-12">
              <div className="flex flex-col justify-center">
                <div className="flex flex-row items-center mb-6">
                  <div className="bg-[#111113] w-16 h-16 flex items-center justify-center rounded-full mr-5 flex-none">
                    <FiCode className="text-yellow-400 w-7 h-7" />
                  </div>
                  <h2 className="text-white text-3xl font-mono">
                    coding <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">experience</span>.
                  </h2>
                </div>
                <p className="text-white text-md font-thin pt-3 font-mono">
                  There are going to be people better than you at IglooCode; there are going to be people worse than you; but that doesn't matter. We want to make sure you test your
                  own skills and find <em>your</em> passion.
                </p>
                <p className="text-white text-md font-thin pt-3 font-mono">
                  Spend the entire competition working on tasks you already know how to do, or experiment a little and try something new - it's totally up to you!
                </p>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex flex-row items-center mb-6">
                  <div className="bg-[#111113] w-16 h-16 flex items-center justify-center rounded-full mr-5 flex-none">
                    <SiHandshake className="text-red-600 w-7 h-7" />
                  </div>
                  <h2 className="text-white text-3xl font-mono">
                    teamworking <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">skills</span>.
                  </h2>
                </div>
                <p className="text-white text-md font-thin pt-3 font-mono">
                  Teamwork is one of the most crucial and desired skills within the IT industry - it's something you need to be able to do to succeed.
                </p>
                <p className="text-white text-md font-thin pt-3 font-mono">
                  At IglooCode, we'll be testing your ability to work together as a team with your friends to be productive as possible, while also interacting and working with those
                  you've never met before - time to get out of your comfort zone!
                </p>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex flex-row items-center mb-6">
                  <div className="bg-[#111113] w-16 h-16 flex items-center justify-center rounded-full mr-5 flex-none">
                    <FiMinimize className="text-green-600 w-7 h-7" />
                  </div>
                  <h2 className="text-white text-3xl font-mono">
                    working under <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">pressure</span>.
                  </h2>
                </div>
                <p className="text-white text-md font-thin pt-3 font-mono">
                  Coding under a competitive environment isn't easy! It'll get stressful, and tension will rise, but we want to watch you rise to the battle and perform the best you
                  possibly can!
                </p>
                <p className="text-white text-md font-thin pt-3 font-mono">
                  As the competition goes on, you'll find ways to improve your concentration and efficiency, making it much easier to work and get as many tasks completed as possible
                  - a useful skill when working to deadlines!
                </p>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex flex-row items-center mb-6">
                  <div className="bg-[#111113] w-16 h-16 flex items-center justify-center rounded-full mr-5 flex-none">
                    <FiCoffee className="text-sky-600 w-7 h-7" />
                  </div>
                  <h2 className="text-white text-3xl font-mono">
                    problem <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">solving</span>.
                  </h2>
                </div>
                <p className="text-white text-md font-thin pt-3 font-mono">
                  Some of our tasks will be really easy - they'll be the things you learned in the first week of P6 ICT class. Don't be fooled, though - many tasks will be nothing
                  like anything you've experienced before.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <section className="bg-hero bg-cover bg-sat flex items-center flex-col">
        <div className="py-16 w-9/12 max-w-screen-lg flex items-center justify-center flex-col">
          <p className="text-white text-4xl font-medium font-mono">
            the people behind it <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">all</span>.
          </p>
          <Link to="/team" className="text-white hover:underline text-xl mt-4 border-[1px] border-gray-400 p-2 w-1/3 text-center font-mono">
            MEET THE TEAM
          </Link>
        </div>
      </section>
      
      <div className="flex w-screen items-center bg-zinc-900 flex-col">
        <section className="py-20 w-9/12 max-w-screen-lg justify-start">
          <div id="about">
            <h2 className="text-white text-4xl font-medium mb-6 font-mono">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">experiences</span>.
            </h2>
            <div className="grid grid-cols-2 gap-12">
              <div>
                <div className="flex flex-col justify-center pb-12">
                  <div className="flex flex-row items-center mb-6">
                    <div className="bg-[#111113] w-16 h-16 flex items-center justify-center rounded-full mr-5 flex-none">
                      <FiBriefcase className="text-pink-400 w-7 h-7" />
                    </div>
                    <h2 className="text-white text-3xl font-mono">
                      industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">talks</span>.
                    </h2>
                  </div>
                  <p className="text-white text-md font-thin pt-3 font-mono">
                    We have secured the opportunity to hear from industry experts, allowing you to learn top tips on how to enter and succeed in the industry. Grow your budding
                    passion with the field and discover what you're able to do with your newly developed skills.
                  </p>
                  <p className="text-white text-md font-thin pt-3 font-mono">
                    Hear from experts from Liberty IT, one of the biggest tech companies in Belfast and Dublin. Uncover career opportunities, next steps after KS3 and options with
                    LIT themselves.
                  </p>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex flex-row items-center mb-6">
                    <div className="bg-[#111113] w-16 h-16 flex items-center justify-center rounded-full mr-5 flex-none">
                      <FiLink className="text-orange-400 w-7 h-7" />
                    </div>
                    <h2 className="text-white text-3xl font-mono">
                      cross-<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">community</span>.
                    </h2>
                  </div>
                  <p className="text-white text-md font-thin pt-3 font-mono">
                    The inspiration for this competition originally came from when we met on a Cyber Security course, coming from all parts of Northern Ireland (and even a few
                    people from England).
                  </p>
                  <p className="text-white text-md font-thin pt-3 font-mono">
                    Our aim is to bring people together from across the country to make new friends through coding, in the same way we were able to.
                  </p>
                </div>
              </div>
              <div>
                <img src={imgRachelle} className="w-full h-[43rem] shadow-md object-cover" alt="Event participant" />
              </div>
            </div>
          </div>
          
          <div id="about" className="mt-20 flex flex-col">
            <div className="grid grid-cols-2 gap-12">
              <h2 className="text-white text-4xl font-medium mb-6 self-end font-mono">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">rewards</span>.
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-12">
              <div>
                <img src={imgMacSB} className="w-full h-[41rem] shadow-md object-cover" alt="Event rewards" />
              </div>
              <div>
                <div className="flex flex-col justify-center pb-12">
                  <div className="flex flex-row items-center mb-6">
                    <div className="bg-[#111113] w-16 h-16 flex items-center justify-center rounded-full mr-5 flex-none">
                      <FiBriefcase className="text-purple-400 w-7 h-7" />
                    </div>
                    <h2 className="text-white text-3xl font-mono">
                      amazing <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">prizes</span>.
                    </h2>
                  </div>
                  <p className="text-white text-md font-thin pt-3 font-mono">
                    Thinking about going for the win? If you succeed, you'll be going home victorious, along with state-of-the-art Arduino starter kits, worth £100 each,
                    to further enhance your interest and knowledge of STEM and IT.
                  </p>
                  <p className="text-white text-md font-thin pt-3 font-mono">
                    Forever go down in history as the first winners of IglooCode - what is there to lose?!
                  </p>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex flex-row items-center mb-6">
                    <div className="bg-[#111113] w-16 h-16 flex items-center justify-center rounded-full mr-5 flex-none">
                      <FiBook className="text-blue-400 w-7 h-7" />
                    </div>
                    <h2 className="text-white text-3xl font-mono">
                      tutorial <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">booklets</span>.
                    </h2>
                  </div>
                  <p className="text-white text-md font-thin pt-3 font-mono">
                    Don't worry - we're not leaving you in the dark! As part of our goal to make sure IglooCode improves your skills, we'll be sending out information booklets to
                    every school involved, with tutorials on how to get started and up to speed on new topics.
                  </p>
                  <p className="text-white text-md font-thin pt-3 font-mono">
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
