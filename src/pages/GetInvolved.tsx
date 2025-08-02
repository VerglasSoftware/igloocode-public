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
        className="w-screen min-h-[60vh] bg-hero bg-cover flex flex-col justify-end items-left relative pl-6 pr-6 sm:pl-24 pb-6"
        style={{ backgroundBlendMode: "normal, saturation" }}
        id="hero"
      >
        <h1 className="w-fit text-transparent text-7xl font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 pb-3 font-mono">
          Get involved
        </h1>
        <p className="text-white text-3xl font-mono">
          {"< a worthwhile experience for all />"}
        </p>
      </section>
      
      <div className="flex w-screen items-center bg-zinc-900 flex-col" id="content">
        <section className="py-20 w-9/12 max-w-screen-lg justify-start">
          <div className="relative top-[-3rem]">
            <span className="text-gray-400 font-mono">
              <a href="/" className="hover:underline text-blue-500">
                Home
              </a>{" "}
              · Get involved
            </span>
          </div>
          
          <div id="about">
            <div className="grid grid-cols-2 gap-12">
              <div className="flex flex-col justify-center">
                <h2 className="text-white text-4xl font-medium font-mono">
                  for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">teachers</span>.
                </h2>
                <img src={imgHands} className="w-full h-[24rem] shadow-md object-cover my-6" alt="Hands working together" />
                <p className="text-white text-center text-md font-thin pt-3 font-mono">
                  Give your students a day out to practice their skills in the real world, while making new friends and getting a first-hand insight to the industry.
                </p>
                <Link to="/f/school-interest" className="text-white hover:underline text-xl mt-4 border-[1px] border-gray-400 p-2 w-full text-center font-mono">
                  ENTER YOUR SCHOOL
                </Link>
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-white text-4xl font-medium font-mono">
                  for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">sixth formers</span>.
                </h2>
                <img src={imgCosmo} className="w-full h-[24rem] shadow-md object-cover my-6" alt="Students working" />
                <p className="text-white text-center text-md font-thin pt-3 font-mono">
                  We're looking for keen sixth formers with a passion for IT and programming to give us a hand on the big day. Think you have what it takes?
                </p>
                <Link to="/getinvolved/sixthform" className="text-white hover:underline text-xl mt-4 border-[1px] border-gray-400 p-2 w-full text-center font-mono">
                  JOIN THE TEAM
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <section className="bg-hero bg-cover bg-sat flex items-center flex-col">
        <div className="py-16 w-9/12 max-w-screen-lg flex items-center justify-center flex-col">
          <p className="text-white text-4xl font-medium font-mono">
            designed for your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">enjoyment</span>.
          </p>
          <Link to="/perks" className="text-white hover:underline text-xl mt-4 border-[1px] border-gray-400 p-2 w-1/3 text-center font-mono">
            PERKS FOR YOU
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default GetInvolved;
