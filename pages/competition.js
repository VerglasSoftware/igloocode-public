import { Red_Hat_Mono } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React from "react";
import Layout, { siteTitle } from "../components/public/layout";
import imgTasks from "../public/images/IMG_6551.jpeg";
import imgEncryption from "../public/images/IMG_6562.jpeg";
import imgTyping from "../public/images/IMG_7214.png";
import imgAppInventor from "../public/images/logos/appinventor.png";
import imgArduino from "../public/images/logos/arduino.png";
import imgCSS from "../public/images/logos/css.png";
import imgHTML from "../public/images/logos/html.png";
import imgJS from "../public/images/logos/js.png";
import imgMakeyMakey from "../public/images/logos/makeymakey.png";
import imgMicrobit from "../public/images/logos/microbit.png";
import imgMindstorms from "../public/images/logos/mindstorms.png";
import imgPython from "../public/images/logos/python.png";
import imgScratch from "../public/images/logos/scratch.png";
import imgSphero from "../public/images/logos/sphero.png";
import imgMBC from "../public/images/Media,793462,en.jpg";
const red_hat_mono = Red_Hat_Mono({ subsets: ["latin"] });

function Index() {
	return (
		<Layout>
			<Head>
				<title>How does it work? - {siteTitle}</title>
				<meta name="theme-color" content="#171717" />
			</Head>
			<Script id="update-header">
				{`window.onscroll = function() {
					var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
					var navbar = document.getElementById("navbar");
					if (scrollTop >= document.getElementById("content").offsetTop) {
						navbar.classList.add("bg-zinc-900");
						navbar.classList.add("bg-sat");
					} else {
						navbar.classList.remove("bg-zinc-900");
						navbar.classList.remove("bg-sat");
					}
				}`}
			</Script>
			<section
				className="w-screen min-h-[60vh] bg-hero bg-cover flex flex-col justify-end items-left relative pl-6 pr-6 sm:pl-24 pb-6"
				style={{
					backgroundBlendMode: "normal, saturation",
				}}
				id="hero">
				<h1 className={`${red_hat_mono.className} w-fit text-transparent text-7xl font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 pb-3`}>Our competition</h1>
				<p className={`${red_hat_mono.className} text-white text-3xl`}>{"< how everything works />"}</p>
			</section>
			<div className="flex w-screen items-center bg-zinc-900 flex-col" id="content">
				<section className="py-20 w-9/12 max-w-screen-lg justify-start">
					<div className="relative top-[-3rem]">
						<span className={`${red_hat_mono.className} text-gray-400`}>
							<a href="/" className="hover:underline text-blue-500">
								Home
							</a>{" "}
							· Our competition
						</span>
					</div>
					<div id="about">
						<div className="grid grid-cols-3">
							<div className="flex flex-col justify-center">
								<Image src={imgTasks} className="w-full h-[25rem] shadow-md object-cover" />
							</div>
							<div className="col-span-2 pl-16 flex flex-col justify-center">
								<h2 className={`${red_hat_mono.className} text-white text-4xl font-medium mb-6`}>
									learning through <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">competition</span>.
								</h2>
								<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
									IglooCode is a Jeopardy-style Capture the Flag competition. Teams are made up of 4 people each, and will log onto our custom-made platform to complete as many tasks
									as possible.
								</p>
								<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
									There are a number of tasks/questions ranging across many different categories (e.g. Scratch, Python, Encryption). The teams gain points for each completed task,
									with more difficult tasks giving more points.
								</p>
								<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
									Some tasks will be singular, and some will be chained, where each part of the task builds on the previous part. The team with the most points at the end of the
									competition wins.
								</p>
							</div>
						</div>
						<div className="grid grid-cols-3 mt-12">
							<div className="col-span-2 pr-16 flex flex-col justify-center">
								<h2 className={`${red_hat_mono.className} text-white text-4xl font-medium mb-6`}>
									inclusivity through <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">ability</span>.
								</h2>
								<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
									IglooCode is a competition for everyone. We believe that IT is a subject which can be enjoyed by everyone - regardless of background, religion, gender, sexuality or
									any other factors.
								</p>
								<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
									There is a large ability range between Year 8 and Year 10 pupils, and depending on schools' IT departments, there may also be a large range of experience with
									programming and ICT.
								</p>
								<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
									Therefore, we will include a wide range of categories to make sure students of all abilities are able to compete. Students can choose any tasks from any categories,
									and we'll provide information booklets to prepare schools before IglooCode.
								</p>
							</div>
							<div className="flex flex-col justify-center">
								<Image src={imgTyping} className="w-full h-[23rem] shadow-md object-cover" style={{ objectPosition: "100% 70%" }} />
							</div>
						</div>
						<div className="grid grid-cols-3 mt-12">
							<div className="flex flex-col justify-center">
								<Image src={imgEncryption} className="w-full h-[27rem] shadow-md object-cover" />
							</div>
							<div className="col-span-2 pl-16 flex flex-col justify-center">
								<h2 className={`${red_hat_mono.className} text-white text-4xl font-medium mb-6`}>
									something to interest <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">everyone</span>.
								</h2>
								<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
									We're expecting over 100 kids from across Northern Ireland to take part in IglooCode. That's a huge number of unique people with their own unique interests,
									personalities and skills.
								</p>
								<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>Here's some of the categories we're planning to offer:</p>
								<div className="grid grid-cols-6 gap-6 mt-4 pr-6">
									<Image src={imgPython} className="w-full aspect-square object-cover" />
									<Image src={imgHTML} className="w-full aspect-square object-contain" />
									<Image src={imgCSS} className="w-full aspect-square object-cover" />
									<Image src={imgJS} className="w-full aspect-square object-cover" />
									<Image src={imgSphero} className="w-full aspect-square object-cover" />
									<Image src={imgMindstorms} className="w-full aspect-square object-cover" />
									<Image src={imgArduino} className="w-full aspect-square object-cover" />
									<Image src={imgScratch} className="w-full aspect-square object-cover" />
									<Image src={imgAppInventor} className="w-full aspect-square object-cover" />
									<Image src={imgMakeyMakey} className="w-full aspect-square object-cover" />
									<Image src={imgMicrobit} className="w-full aspect-square object-contain" />
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<section className="bg-hero bg-cover bg-sat flex items-center flex-col">
				<div className="py-16 w-9/12 max-w-screen-lg flex items-center justify-center flex-col">
					<p className={`${red_hat_mono.className} text-white text-4xl font-medium`}>
						ready to get <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">involved</span>?
					</p>
					<Link href="/getinvolved" className={`${red_hat_mono.className} text-white hover:underline text-xl mt-4 border-[1px] border-gray-400 p-2 w-1/3 text-center`}>
						YOUR NEXT STEPS
					</Link>
				</div>
			</section>
			<div className="flex w-screen items-center bg-zinc-900 flex-col" id="content">
				<section className="py-20 w-9/12 max-w-screen-lg justify-start">
					<div id="benefits">
						<div className="grid grid-cols-2 gap-16">
							<div className="flex flex-col justify-center">
								<Image src={imgMBC} className="w-full h-80 shadow-md object-cover" />
							</div>
							<div className="flex flex-col justify-center">
								<h2 className={`${red_hat_mono.className} text-white text-4xl font-medium mb-6 text-right`}>
									a valuable experience for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">all</span>.
								</h2>
								<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3 text-right`}>
									No matter who you are, the experience of taking part in an event like IglooCode is such a valuable life lesson. Developing your skills and learning new things,
									while getting to know people from the different backgrounds and sides of the community, is something you don't want to miss out on.
								</p>
								<Link href="/perks" className={`${red_hat_mono.className} hover:underline text-blue-400 text-md font-thin mt-3 block after:content-['_↗'] text-right`}>
									Read more.
								</Link>
							</div>
						</div>
					</div>
					<div id="getinvolved" className="pt-12">
						<div className="grid grid-cols-2 gap-16">
							<div className="flex flex-col justify-center">
								<h2 className={`${red_hat_mono.className} text-white text-4xl font-medium mb-6`}>
									getting yourself <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">involved</span>.
								</h2>
								<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
									IglooCode is an event full of opportunities and experiences for everyone. Are you a teacher that thinks your students would enjoy the competitive environment? Or
									are you a sixth former who'd like to get some volunteering experience at a fast-paced event? Whichever you are, we have something for you.
								</p>
								<Link href="/getinvolved" className={`${red_hat_mono.className} hover:underline text-blue-400 text-md font-thin mt-3 block after:content-['_↗']`}>
									Read more.
								</Link>
							</div>
							<div className="flex flex-col justify-center">
								<Image src={imgMBC} className="w-full h-80 shadow-md object-cover" />
							</div>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	);
}

export default Index;
