import { Red_Hat_Mono } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React from "react";
import { FiAward, FiBriefcase, FiCoffee, FiLifeBuoy } from "react-icons/fi";
import Layout, { siteTitle } from "../../components/public/layout";
import imgKaty from "../../public/images/DSC01864.jpeg";
import imgQueens from "../../public/images/IMG_0660.jpeg";
import imgMacSB from "../../public/images/DSC01908.jpeg";
import imgSam from "../../public/images/DSC01890.jpeg";
const red_hat_mono = Red_Hat_Mono({ subsets: ["latin"] });

function Index() {
	return (
		<Layout>
			<Head>
				<title>Sixth Form - Get involved - {siteTitle}</title>
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
				style={{ backgroundBlendMode: "normal, saturation" }}
				id="hero">
				<h1 className={`${red_hat_mono.className} w-fit text-transparent text-7xl font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 pb-3`}>Join the team</h1>
				<p className={`${red_hat_mono.className} text-white text-3xl`}>{"< think you have what it takes? />"}</p>
			</section>
			<div className="flex w-screen items-center bg-zinc-900 flex-col" id="content">
				<section className="py-20 w-9/12 max-w-screen-lg justify-start">
					<div className="relative top-[-3rem]">
						<span className={`${red_hat_mono.className} text-gray-400`}>
							<a href="/" className="hover:underline text-blue-500">
								Home
							</a>{" "}
							·{" "}
							<a href="/getinvolved" className="hover:underline text-blue-500">
								Get involved
							</a>{" "}
							· Join the team
						</span>
					</div>
					<div id="about">
						<div className="grid grid-cols-3 gap-12">
							<div className="flex flex-col justify-cente col-span-2">
								<h2 className={`${red_hat_mono.className} text-white text-4xl font-medium`}>
									what are we <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">looking</span> for?
								</h2>
								<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
									We're looking for sixth formers with a passion for IT and programming to give us a hand at IglooCode. We're a friendly bunch of Year 13s and 14s and we'd be
									delighted to get to know you and welcome you to our team!
								</p>
								<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
									<strong className="font-semibold">Can't code? Don't worry! </strong>
									If you're interested in technology and computing, that's all we need. We're looking for people who are keen to learn new things, and we hope you can take away
									something from the day as well.
								</p>
								<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
									We'll be inviting teachers, students and professionals from across the country to IglooCode and we want to make it an enjoyable time for all. If you're friendly,
									respectful and reliable, you'll make a great addition to our team.
									<strong className="font-semibold"> Good with kids? Even better.</strong>
								</p>
							</div>
							<div className="flex justify-center items-center">
								<Image src={imgSam} className="w-full h-[22rem] shadow-md object-cover my-3" />
							</div>
						</div>
						<div className="grid grid-cols-3 gap-12 mt-12">
							<div className="flex justify-center items-center">
								<Image src={imgKaty} className="w-full h-[24rem] shadow-md object-cover my-3" />
							</div>
							<div className="flex flex-col justify-cente col-span-2">
								<h2 className={`${red_hat_mono.className} text-white text-4xl font-medium`}>
									what'll you be <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">doing</span>?
								</h2>
								<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
									At the start of the day, you'll be helping us to welcome the schools to the venue and getting the participants logged on and comfortable.
								</p>
								<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
									Throughout competition time, you'll be given a login to our custom mobile app, where you'll be able to respond to hint requests from participants. You'll get a
									guidebook and step by step instructions of how to complete each task, allowing you to provide help to anyone who needs it.
								</p>
								<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
									You'll also be running around every time a team completes a task, checking it's been done right and assigning points to the person who finished it.
								</p>
								<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
									<strong className="font-semibold">It might sound complicated, but trust us, it's not. </strong> We've done taster sessions with people who aren't techy at all and
									they've done a perfect job!
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
			<section className="bg-hero bg-cover bg-sat flex items-center flex-col">
				<div className="py-16 w-9/12 max-w-screen-lg flex items-center justify-center flex-col">
					<p className={`${red_hat_mono.className} text-white text-4xl font-medium`}>
						inspiring the next <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">generation</span>.
					</p>
					<Link href="/about" className={`${red_hat_mono.className} text-white hover:underline text-xl mt-4 border-[1px] border-gray-400 p-2 w-1/3 text-center`}>
						READ THE STORY
					</Link>
				</div>
			</section>
			<div className="flex w-screen items-center bg-zinc-900 flex-col" id="content">
				<section className="py-20 w-9/12 max-w-screen-lg justify-start">
					<div id="about">
						<div className="grid grid-cols-2 gap-12">
							<div className="flex flex-col justify-center items-center">
								<h2 className={`${red_hat_mono.className} text-white text-4xl font-medium`}>
									what'll you get out of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">igloocode</span>?
								</h2>
								<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
									In addition to having an amazing, energy-filled day out with new friends, IglooCode has many benefits waiting for you if you choose to join our team.
								</p>
								<div className="flex flex-row items-center justify-center mt-3">
									<div className="bg-[#111113] w-16 h-16 flex items-center justify-center rounded-full mr-5 flex-none">
										<FiLifeBuoy className="text-lime-400 w-7 h-7" />
									</div>
									<div>
										<p className={`${red_hat_mono.className} text-white text-lg`}>Volunteering experience</p>
										<p className={`${red_hat_mono.className} text-gray-400 text-sm`}>Learn what it's like to help keep a pretty big, fast-paced event running smoothly.</p>
									</div>
								</div>
								<div className="flex flex-row items-center justify-center mt-3">
									<div className="bg-[#111113] w-16 h-16 flex items-center justify-center rounded-full mr-5 flex-none">
										<FiBriefcase className="text-red-500 w-7 h-7" />
									</div>
									<div>
										<p className={`${red_hat_mono.className} text-white text-lg`}>Industry links</p>
										<p className={`${red_hat_mono.className} text-gray-400 text-sm`}>
											Chat to people from some of the biggest IT companies in NI, and new friends who could be working with you in the future.
										</p>
									</div>
								</div>
								<div className="flex flex-row items-center justify-center mt-3">
									<div className="bg-[#111113] w-16 h-16 flex items-center justify-center rounded-full mr-5 flex-none">
										<FiAward className="text-sky-400 w-7 h-7" />
									</div>
									<div>
										<p className={`${red_hat_mono.className} text-white text-lg`}>Something for UCAS</p>
										<p className={`${red_hat_mono.className} text-gray-400 text-sm`}>A fun day out and something to stick on your uni applications... what's not to lose?</p>
									</div>
								</div>
								<div className="flex flex-row items-center justify-center mt-4">
									<div className="bg-[#111113] w-16 h-16 flex items-center justify-center rounded-full mr-5 flex-none">
										<FiCoffee className="text-yellow-400 w-7 h-7" />
									</div>
									<div>
										<p className={`${red_hat_mono.className} text-white text-lg`}>Free food!</p>
										<p className={`${red_hat_mono.className} text-gray-400 text-sm`}>Grab some pizza and boba with us, or whatever else we choose to Deliveroo on the day.</p>
									</div>
								</div>
							</div>
							<div className="flex justify-center items-center">
								<Image src={imgQueens} className="w-full h-[35rem] shadow-md object-cover" />
							</div>
						</div>
						<div className="grid grid-cols-2 gap-12 mt-16">
							<div className="flex justify-center items-center">
								<Image src={imgMacSB} className="w-full h-[37rem] shadow-md object-cover my-3" />
							</div>
							<div className="flex flex-col justify-center">
								<h2 className={`${red_hat_mono.className} text-white text-4xl font-medium`}>
									so... ready to get <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">started</span>?
								</h2>
								<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
									Think you'd make a good addition to our team? You'll need to apply through your IT teacher so we know you aren't just skiving for us! Here's how:
								</p>
								<div className="flex flex-row items-center justify-center mt-4">
									<div className="bg-[#111113] w-16 h-16 flex items-center justify-center rounded-full mr-5 flex-none">
										<span className={`${red_hat_mono.className} text-sky-400 text-2xl font-medium`}>1</span>
									</div>
									<div>
										<p className={`${red_hat_mono.className} text-gray-300 text-sm`}>
											Check that your school will allow you to take a day out for volunteering / vocational activities without getting marked as absent.
										</p>
									</div>
								</div>
								<div className="flex flex-row items-center justify-center mt-4">
									<div className="bg-[#111113] w-16 h-16 flex items-center justify-center rounded-full mr-5 flex-none">
										<span className={`${red_hat_mono.className} text-purple-400 text-2xl font-medium`}>2</span>
									</div>
									<div>
										<p className={`${red_hat_mono.className} text-gray-300 text-sm`}>
											Speak to your IT or Careers teacher to express your interest in volunteering to help at IglooCode.
										</p>
									</div>
								</div>
								<div className="flex flex-row items-center justify-center mt-4">
									<div className="bg-[#111113] w-16 h-16 flex items-center justify-center rounded-full mr-5 flex-none">
										<span className={`${red_hat_mono.className} text-sky-400 text-2xl font-medium`}>3</span>
									</div>
									<div>
										{/* <p className={`${red_hat_mono.className} text-gray-300 text-sm`}>
											Get your teacher to send an email to <span className="font-bold">volunteeratigloocode@verglas.io</span> to say you're interested in taking part and ask them to CC in
											your C2k email.
										</p> */}
										<p className={`${red_hat_mono.className} text-gray-300 text-sm`}>
											Fill in the application form at <Link href="/f/volunteer" className="font-bold underline">https://iglooco.de/f/volunteer</Link> and submit it before December 21st.
										</p>
									</div>
								</div>
								<div className="flex flex-row items-center justify-center mt-4">
									<div className="bg-[#111113] w-16 h-16 flex items-center justify-center rounded-full mr-5 flex-none">
										<span className={`${red_hat_mono.className} text-purple-400 text-2xl font-medium`}>4</span>
									</div>
									<div>
										<p className={`${red_hat_mono.className} text-gray-300 text-sm`}>
											We'll get back to you as soon as possible and invite you to the IglooCode Discord server to welcome you to the team!
										</p>
									</div>
								</div>
								<p className={`${red_hat_mono.className} text-white text-md font-thin pt-4`}>
									Please note that our volunteer applications are first-come first-served - we can only fit so many people in the venue!
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	);
}

export default Index;
