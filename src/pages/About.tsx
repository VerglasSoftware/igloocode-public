import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import Layout from "@components/Layout";

export default function About(): JSX.Element {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const navbar = document.getElementById("navbar");
      const content = document.getElementById("content");

      if (content && scrollTop >= content.offsetTop) {
        navbar?.classList.add("bg-zinc-900", "bg-sat");
      } else {
        navbar?.classList.remove("bg-zinc-900", "bg-sat");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Our story - IglooCode</title>
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
            Our Story
          </h1>
          <p className="text-white text-xl sm:text-3xl font-mono leading-relaxed drop-shadow-lg">
            {"< connecting the youth of northern ireland through code />"}
          </p>
        </div>
      </section>

      <div
        className="flex w-screen items-center bg-zinc-900 flex-col"
        id="content"
      >
        <section className="py-16 sm:py-20 w-11/12 sm:w-9/12 max-w-screen-lg">
          <div className="relative -top-6 sm:-top-12 mb-8">
            <nav className="font-mono text-gray-400 text-sm">
              <Link
                to="/"
                className="hover:underline text-blue-400 hover:text-blue-300 transition-colors"
              >
                Home
              </Link>
              <span className="mx-2">·</span>
              <span className="text-gray-300">Our story</span>
            </nav>
          </div>

          <div id="about" className="space-y-16">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-2 space-y-6">
                <h2 className="font-mono text-white text-3xl sm:text-4xl font-medium leading-tight">
                  the{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
                    beginning
                  </span>{" "}
                  of igloocode.
                </h2>
                <div className="space-y-4 text-white text-base leading-relaxed">
                  <p className="font-mono font-light">
                    Back in October 2022, three sixth form students from
                    Ballymena and Belfast, had the idea to collaborate to
                    organise a cross-community programming competition for
                    aspiring IT students across Northern Ireland.
                  </p>
                  <p className="font-mono font-light">
                    We met at QA's CyberFirst Advanced course during August 2022
                    - a week-long residential at QUB, where we became close
                    friends both during and after the week.
                  </p>
                  <p className="font-mono font-light">
                    It was an extremely moving experience coming together with
                    people who shared the same interests as us, but also a
                    phenomenal week of memories to look back on with new
                    friends, proving that there is so much more to education
                    than a constant stream of work.
                  </p>
                  <p className="font-mono font-light">
                    Our goal is to encourage the next generation to get further
                    involved in the industry, by spreading our love and passion
                    for IT, but also to meet other like-minded individuals and
                    have the opportunity to make lifelong friendships just like
                    we did.
                  </p>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="group overflow-hidden rounded-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
                  <img
                    src="/images/IMG_3652.png"
                    className="w-full max-w-sm lg:max-w-none lg:w-full h-64 lg:h-80 xl:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                    alt="Open day event showcasing student collaboration"
                  />
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                <div className="group overflow-hidden rounded-xl shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500">
                  <img
                    src="/images/IMG_0673.jpg"
                    className="w-full max-w-sm lg:max-w-none lg:w-full h-64 lg:h-80 xl:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: "100% 70%" }}
                    alt="Peter Froggott speaking at the event"
                  />
                </div>
              </div>
              <div className="lg:col-span-2 space-y-6 order-1 lg:order-2">
                <h2 className="font-mono text-white text-3xl sm:text-4xl font-medium leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
                    success
                  </span>{" "}
                  at last.
                </h2>
                <div className="space-y-4 text-white text-base leading-relaxed">
                  <p className="font-mono font-light">
                    Throughout November 2022, we drafted basic plans for a CTF
                    competition for schools, and sent emails to 65 secondary
                    schools to gauge interest. After only a week we received
                    responses from over 14 schools, totalling to almost 200
                    pupils interested in attending.
                  </p>
                  <p className="font-mono font-light">
                    Then, we reached out to Liberty IT and Kainos who very
                    kindly gave us a financial contribution to be able to run
                    the event. In March 2023, after an early 6am start, we
                    welcomed everyone to QUB's Computer Science Building for
                    IglooCode.
                  </p>
                  <p className="font-mono font-light">
                    Six hours of event later, we were relieved as IglooCode came
                    to a close. With only minimal problems and some very
                    valuable feedback from teachers and students alike, we were
                    confident that IglooCode would become an annual event.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-2 space-y-6">
                <h2 className="font-mono text-white text-3xl sm:text-4xl font-medium leading-tight">
                  a new{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
                    chapter
                  </span>
                  .
                </h2>
                <div className="space-y-4 text-white text-base leading-relaxed">
                  <p className="font-mono font-light">
                    In May 2023, the main people involved in IglooCode decided
                    to incorporate into a limited company, and we started work
                    on releasing our highly-acclaimed competition software to
                    teachers to use across the country for their own classes.
                  </p>
                  <p className="font-mono font-light">
                    In August, we decided to rename our company to Verglas, and
                    the shareholders elected a new Board of Directors and
                    Outreach Committee of 2 sixth-formers and 3 first-year
                    degree apprentices to be in charge of events such as
                    IglooCode.
                  </p>
                  <p className="font-mono font-light">
                    IglooCode 2024 planning began in early October. We held a
                    meeting to discuss improvements and plans for the next year,
                    and we again started our annual process of onboarding
                    schools, sponsors and volunteers.
                  </p>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="group overflow-hidden rounded-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
                  <img
                    src="/images/DSC01776.jpg"
                    className="w-full max-w-sm lg:max-w-none lg:w-full h-64 lg:h-80 xl:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                    alt="Competition organization and setup"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-zinc-900 flex items-center flex-col py-20">
        <div className="w-11/12 sm:w-9/12 max-w-screen-lg flex items-center justify-center flex-col text-center space-y-8">
          <h2 className="font-mono text-white text-3xl sm:text-4xl font-medium leading-tight">
            the people behind it{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
              all
            </span>
            .
          </h2>
          <Link
            to="/team"
            className="group inline-flex items-center text-white hover:text-purple-300 transition-all duration-300 text-lg border-2 border-purple-500/50 hover:border-purple-400 px-8 py-4 rounded-lg bg-purple-600/20 hover:bg-purple-600/30 backdrop-blur-sm hover:scale-105 font-mono"
          >
            MEET THE TEAM
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
