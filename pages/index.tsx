// https://realtimecolors.com/?colors=dad5f6-090519-9181e4-0a061d-482dd2

import Navbar from "@/components/Navbar";
import ServerSlider from "@/components/ServerSlider";
import Image from "next/image";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { AiOutlinePlusSquare } from "react-icons/ai";
import Link from "next/link";
import Features from "@/components/Features";
import InviteSection from "@/components/InviteSection";
import Footer from "@/components/Footer";
import { scroller } from "react-scroll";
import dynamic from "next/dynamic";

const Home = ( ) => {
  const servers = [
    {
      id: "1",
      name: "Discord Townhall",
      memberCount: 1000000,
      imageUrl: "/clash_commander.png",
    },
    {
      id: "2",
      name: "Discord Townall",
      memberCount: 1000000,
      imageUrl: "/clash_commander.png",
    },
    {
      id: "3",
      name: "Discord Townhall",
      memberCount: 10000000,
      imageUrl: "/clash_commander.png",
    },
    {
      id: "4",
      name: "Discord Townhall",
      memberCount: 10000000,
      imageUrl: "/clash_commander.png",
    },
    {
      id: "5",
      name: "Discord Townhall",
      memberCount: 10000000,
      imageUrl: "/clash_commander.png",
    },
    {
      id: "6",
      name: "Discord Townhall",
      memberCount: 10000000,
      imageUrl: "/clash_commander.png",
    },
    // Add more server objects as needed
  ];

  const scrollToFeatures = () => {
    scroller.scrollTo("features", {
      duration: 200,
      smooth: "easeInOutQuart",
    });
  };


  return  (
    <div id="hero" className="w-full relative overflow-hidden">
      <Navbar />
      <LazyMotion features={domAnimation} strict>
        <m.div
          id="hero-content"
          className="relative w-full flex flex-col justify-center items-center h-screen min-h-[800px] text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-1/2 lg:text-left mb-8 lg:mb-0 order-2 lg:order-1">
                <m.h1
                  className="text-4xl lg:text-6xl text-white font-bold text-center lg:text-left"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Discord bot for managing your Clash of Clans clan.
                </m.h1>
                <m.p
                  className="text-lg lg:text-2xl text-white mt-4 text-center lg:text-left"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Clash Commander is packed with powerful features to streamline your Clash of Clans clan management.
                </m.p>
                <m.div
                  className="lg:flex lg:flex-row mt-6 flex flex-col items-center lg:items-start"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Link href="#features">
                    <button className="bg-[#9181e4]  text-white font-bold py-4 px-8 rounded mr-0 lg:mr-8 mb-4 lg:mb-0" onClick={scrollToFeatures}>
                      Get Started
                    </button>
                  </Link>
                  <Link href="https://discord.com/oauth2/authorize?client_id=1057995097167368222&scope=bot&permissions=277025770560" target="_blank">
                    <button className="outline outline-2 text-white font-bold py-4 px-8 rounded">
                      <AiOutlinePlusSquare className="inline-block mr-2" /> Invite
                    </button>
                  </Link>
                </m.div>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center mb-[2rem] lg:mb-[8rem] order-1 lg:order-2">
                <Image
                  src="/clash_commander.png"
                  className="w-2/3 max-w-[450px] h-auto rounded-full"
                  alt="Clash Commander Avatar"
                  width={450}
                  height={450}
                />
              </div>
            </div>
            <div className="wave-container absolute inset-x-0 bottom-0 -z-10">
              <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 260">
                <path
                  fill="#f4e1"
                  fillOpacity="1"
                  d="M0,192L60,186.7C120,181,240,171,360,149.3C480,128,600,96,720,90.7C840,85,960,107,1080,117.3C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                ></path>
              </svg>
            </div>
          </div>
        </m.div>
      </LazyMotion>
      <div  className="secondary">
        <div className="container mx-auto px-4">
          <LazyMotion features={domAnimation} strict>
            <div className="mb-4 text-center">
              <h2 className="text-2xl font-bold">Server Slider</h2>
              <p className="text-xl font-bold">
                Clash Commander is in all of your favorite servers....
              </p>
            </div>
            <ServerSlider servers={servers} />
          </LazyMotion>
        </div>
      </div>
      <div>
        <Features />
      </div>
      <Footer />
    </div>
  );
}

export default dynamic (() => Promise.resolve(Home), {ssr: false})