import { m, LazyMotion, domAnimation } from "framer-motion";
import { AiOutlinePlusSquare } from "react-icons/ai";

export default function Home() {
  return (
    <div id="hero" className="w-full relative overflow-hidden">
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
              <div className="w-full lg:w-1/2 lg:text-left mb-8 lg:mb-0">
                <m.h1
                  className="text-4xl lg:text-6xl text-white font-bold"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  The ultimate Discord bot for managing your Clash of Clans
                  clan.
                </m.h1>
                <m.p
                  className="text-lg lg:text-2xl text-white mt-4"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Clash Commander is packed with powerful features to streamline
                  your Clash of Clans clan management.
                </m.p>
                <m.div
                  className="flex flex-row mt-6"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-8 rounded mr-8">
                    Get Started
                  </button>
                  <button className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-4 px-8 rounded">
                    <AiOutlinePlusSquare className="inline-block mr-2" /> Get
                    Started
                  </button>
                </m.div>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center  mb-[2rem] lg:mb-[8rem]">
                <m.img
                  src="/clash_commander.png"
                  className="w-2/3 max-w-[450px] h-auto rounded-full"
                  alt="Clash Commander Avatar"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </div>
            </div>
            <div className="wave-container absolute inset-x-0 bottom-0 -z-10">
              <svg
                className="wave"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#5000ca"
                  fillOpacity="1"
                  d="M0,192L60,186.7C120,181,240,171,360,149.3C480,128,600,96,720,90.7C840,85,960,107,1080,117.3C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                ></path>
              </svg>
            </div>
          </div>
        </m.div>
      </LazyMotion>
      <div className="secondary">
        <div className="container mx-auto px-4">
          he
        </div>
      </div>
    </div>
  );
}
