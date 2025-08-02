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
import imgBlank from '/images/pfp.webp';

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
        className="w-screen min-h-[60vh] bg-hero bg-cover flex flex-col justify-end items-left relative pl-6 pr-6 sm:pl-24 pb-6"
        style={{ backgroundBlendMode: "normal, saturation" }}
        id="hero"
      >
        <h1 className="w-fit text-transparent text-7xl font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 pb-3 font-mono">
          Our team
        </h1>
        <p className="text-white text-3xl font-mono">
          {"< meet the people behind it all />"}
        </p>
      </section>
      
      <div className="flex w-screen items-center bg-zinc-900 flex-col" id="content">
        <section className="py-20 w-9/12 max-w-screen-lg justify-start">
          <div className="relative top-[-3rem]">
            <span className="text-gray-400 font-mono">
              <a href="/" className="hover:underline text-blue-500">
                Home
              </a>{" "}
              · Our team
            </span>
          </div>
          
          <div id="organisers">
            <h2 className="text-white text-4xl font-medium mb-2 font-mono">
              the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">event coordinators</span>.
            </h2>
            <p className="text-white text-lg font-light mb-12 font-mono">
              the event coordinators are made up of the verglas board of directors and outreach committee. they are responsible for relations between external parties, the planning of the event and overall project management.
            </p>

            <div className="flex flex-col gap-y-4">
              <div className="flex flex-row justify-start items-center">
                <img src={imgDan} className="aspect-square rounded-full shadow-md object-cover w-40 h-40" alt="Dan" />
                <div className="flex flex-col ms-8">
                  <p className="text-white text-2xl font-medium font-mono">
                    Dan <span className="brightness-50">– Lead Event Coordinator</span>
                  </p>
                  <p className="text-gray-200 text-sm font-light mt-2 font-mono">
                    Ever since my mum told me that websites were made with code when I was in P2, I've been hooked. Throughout the past 10 years, I've been committed to developing my
                    skills and experiences with different programming languages. I help to run the Code Club in my school, and in the next few years I dream of studying Computer
                    Science at the University of Reykjavík.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-row justify-start items-center">
                <img src={imgAideen} className="aspect-square rounded-full shadow-md object-cover w-40 h-40" alt="Aideen" />
                <div className="flex flex-col ms-8">
                  <p className="text-white text-2xl font-medium font-mono">
                    Aideen <span className="brightness-50">– Lead Speaker</span>
                  </p>
                  <p className="text-gray-200 text-sm font-light mt-2 font-mono">
                    I've been passionate about technology and coding since primary school; so much so that I was called the ICT Co-ordinator by teachers. When I'm not at school
                    volunteering with the Code Club or the Rocket Club, I'm a member of the NICCY Youth Panel, where I have represented young people from NI in Brussels regarding
                    Children's Digital Rights.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-row justify-start items-center">
                <img src={imgJake} className="aspect-square rounded-full shadow-md object-cover w-40" alt="Jake" />
                <div className="flex flex-col ms-8">
                  <p className="text-white text-2xl font-medium font-mono">
                    Jake <span className="brightness-50">– Software Developer</span>
                  </p>
                  <p className="text-gray-200 text-sm font-light mt-2 font-mono">
                    I love programming. I use languages like C/C++, Java, C# and Python for creating apps, scripts and programs. I also have interests in hardware and music.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-row justify-start items-center">
                <img src={imgMa} className="aspect-square rounded-full shadow-md object-cover w-40" alt="Matthew H" />
                <div className="flex flex-col ms-8">
                  <p className="text-white text-2xl font-medium font-mono">
                    Matthew H <span className="brightness-50">– Lead Photographer</span>
                  </p>
                  <p className="text-gray-200 text-sm font-light mt-2 font-mono">
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div id="volunteers" className="mt-16">
            <h2 className="text-white text-4xl font-medium mb-2 font-mono">
              the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">volunteers</span>.
            </h2>
            <p className="text-white text-lg font-light mb-12 font-mono">
              The volunteers are the people that will be on the floor at IglooCode - we'll be bringing one mentor per team to make sure the event runs smoothly, and to help with any
              problems the students may have.
            </p>
            
            <div className="grid grid-cols-5 gap-28 gap-y-8">
              <div className="flex flex-col justify-center items-center">
                <img src={imgAxel} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Autumn" />
                <p className="text-white text-2xl font-medium mt-4 font-mono">Autumn</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={imgAxel} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Axel" />
                <p className="text-white text-2xl font-medium mt-4 font-mono">Axel</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={imgBlank} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Bébhinn" />
                <p className="text-white text-2xl font-medium mt-4 font-mono">Bébhinn</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={imgBenF} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Ben F" />
                <p className="text-white text-2xl font-medium mt-4 font-mono">Ben F</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={imgBenT} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Ben T" />
                <p className="text-white text-2xl font-medium mt-4 font-mono">Ben T</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={imgChris} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Chris" />
                <p className="text-white text-2xl font-medium mt-4 font-mono">Chris</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={imgConnlaith} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Connlaith" />
                <p className="text-white text-2xl font-medium mt-4 font-mono">Connlaith</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={imgDylan} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Dylan" />
                <p className="text-white text-2xl font-medium mt-4 font-mono">Dylan</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={imgEliza} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Eliza" />
                <p className="text-white text-2xl font-medium mt-4 font-mono">Eliza</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={imgEmma} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Emma" />
                <p className="text-white text-2xl font-medium mt-4 font-mono">Emma</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={imgGrainne} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Gráinne" />
                <p className="text-white text-2xl font-medium mt-4 font-mono">Gráinne</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={imgHollie} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Holly" />
                <p className="text-white text-2xl font-medium mt-4 font-mono">Holly</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={imgBlank} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Josh" />
                <p className="text-white text-2xl font-medium mt-4 font-mono">Josh</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={imgJosephi} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Josephi" />
                <p className="text-white text-2xl font-medium mt-4 font-mono">Josephi</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={imgKayla} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Kayla" />
                <p className="text-white text-2xl font-medium mt-4 font-mono">Kayla</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={imgBlank} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Michael" />
                <p className="text-white text-2xl font-medium mt-4 font-mono">Michael</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={imgBlank} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Nikki" />
                <p className="text-white text-2xl font-medium mt-4 font-mono">Nikki</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={imgBlank} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Odhran" />
                <p className="text-white text-2xl font-medium mt-4 font-mono">Odhran</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={imgRyan} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Ryan" />
                <p className="text-white text-2xl font-medium mt-4 font-mono">Ryan</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={imgBlank} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Samuel B" />
                <p className="text-white text-2xl font-medium mt-4 font-mono">Samuel B</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={imgBlank} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Sarah" />
                <p className="text-white text-2xl font-medium mt-4 font-mono">Sarah</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={imgBlank} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Seth" />
                <p className="text-white text-2xl font-medium mt-4 font-mono">Seth</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={imgBlank} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Vivian" />
                <p className="text-white text-2xl font-medium mt-4 font-mono">Vivian</p>
              </div>
            </div>
            
            <div className="flex justify-center items-center mt-6">
              <p className="text-white text-md font-light mt-4 font-mono">
                Can you see yourself in our team?{" "}
                <a className="text-sky-500 hover:underline hover:text-sky-600" href="/getinvolved/sixthform">
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
