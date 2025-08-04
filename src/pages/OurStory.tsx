import { useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import Layout from "@components/Layout";
import Typewriter from 'typewriter-effect';

export default function OurStory(): JSX.Element {
  useEffect(() => {
      const handleScroll = () => {
      const scrollTop = window.scrollY;
      const navbar = document.getElementById("navbar");
      const content = document.getElementById("content");

      if (content && scrollTop >= content.offsetTop) {
        navbar?.classList.add("bg-zinc-900", "bg-sat");
      } else {
        navbar?.classList.remove("bg-zinc-900", "bg-sat");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Our Story - IglooCode</title>
        <meta name="description" content="The story behind IglooCode - a cross-community programming competition created by sixth-form students to connect the youth of Northern Ireland through code." />
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
            Our Story
          </h1>
          <div className="flex items-center justify-center text-center">
            <Typewriter
              options={{
                strings: ["< connecting the youth of northern ireland through code />"],
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
          <div className="w-11/12 sm:w-9/12 max-w-screen-lg">
            <div className="space-y-20">
              <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                <div 
                  className="group overflow-hidden shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 lg:order-first bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: "url('/images/IMG_3652.png')" }}
                >
                </div>

                <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-8 flex flex-col">
                  <h2 className="font-mono text-white text-3xl sm:text-4xl font-medium leading-tight">
                    The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Beginning</span>
                  </h2>
                  <div className="space-y-4 text-white/80 text-lg font-light leading-relaxed font-mono mt-6">
                    <p>
                      In October 2022, three sixth-form students from Ballymena and Belfast collaborated to create a cross-community programming competition for aspiring IT students across Northern Ireland.
                    </p>
                    <p>
                      We met at a residential at QUB and became close friends. It was a moving experience, proving there's more to education than just work. Our goal is to share our passion for IT and help the next generation make lifelong friendships, just as we did.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-8 flex flex-col lg:order-last">
                  <h2 className="font-mono text-white text-3xl sm:text-4xl font-medium leading-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Success</span> at Last
                  </h2>
                  <div className="space-y-4 text-white/80 text-lg font-light leading-relaxed font-mono mt-6">
                    <p>
                      After gauging interest from schools, we secured financial backing from Liberty IT and Kainos. In March 2023, we welcomed everyone to QUB's Computer Science Building for the first IglooCode.
                    </p>
                    <p>
                      The event was a huge success. With minimal issues and invaluable feedback, we knew IglooCode had to become an annual event, bringing students together year after year.
                    </p>
                  </div>
                </div>
                <div 
                  className="group overflow-hidden shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 lg:order-first bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: "url('/images/IMG_0673.jpg')" }}
                >
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                <div 
                  className="group overflow-hidden shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 lg:order-first bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: "url('/images/DSC01776.jpg')" }}
                >
                </div>
                
                <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-8 flex flex-col">
                  <h2 className="font-mono text-white text-3xl sm:text-4xl font-medium leading-tight">
                    A New <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Chapter</span>
                  </h2>
                  <div className="space-y-4 text-white/80 text-lg font-light leading-relaxed font-mono mt-6">
                    <p>
                      In May 2023, we incorporated as a limited company, Verglas, and began work on releasing our competition software for teachers to use.
                    </p>
                    <p>
                      A new board and outreach committee were formed to manage future events, and planning for IglooCode 2024 began in October, continuing our annual tradition of onboarding schools, sponsors, and volunteers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

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
            The People Behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">It All</span>
          </h2>
          <div className="text-center px-4">
            <a 
              href="https://verglas.io/people"
              target="_blank"
              rel="noopener noreferrer"
              className="relative font-mono text-gray-300 text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 bg-black hover:bg-black transition-all duration-300 hover:scale-105 cursor-pointer inline-block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-[length:300%_100%] animate-[gradient_3s_ease-in-out_infinite] p-[2px]">
                <div className="w-full h-full bg-black"></div>
              </div>
              <div className="relative z-10">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold">Meet The Team →</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}