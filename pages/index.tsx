import { m, LazyMotion, domAnimation } from "framer-motion";
import { AiOutlinePlusSquare } from "react-icons/ai";

export default function Home() {
  return (
    <div id="hero" className="w-full relative overflow-hidden">
      <LazyMotion features={domAnimation} strict>
        <m.div
          id="hero-content"
          className="relative w-full flex flex-col justify-center items-center h-screen min-h-[800px] text-center"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center">
              <div className="w-2/5">
                <h1 className="text-4xl lg:text-6xl text-left text-white">
                  The ultimate Discord bot for managing your Clash of Clans
                  clan.
                </h1>
                <p className="text-lg lg:text-2xl text-left text-white mt-4">
                  Clash Commander is packed with powerful features to streamline
                  your Clash of Clans clan management.
                </p>
                <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-8 rounded mt-8">
                  Get Started
                </button>
                <button className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-4 px-8 rounded mt-8">
                  <AiOutlinePlusSquare className="inline-block mr-2" /> Get
                  Started
                </button>
              </div>
              <div className="w-3/5 flex justify-end">
                <img
                  src="/clash_commander.png"
                  className="w-2/3 max-w-[500px] h-auto rounded-full animate-bounce"
                  alt="Clash Commander Avatar"
                />
              </div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#5000ca"
              fillOpacity="1"
              d="M0,192L48,181.3C96,171,192,149,288,160C384,171,480,213,576,208C672,203,768,149,864,154.7C960,160,1056,224,1152,208C1248,192,1344,96,1392,48L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <div
            className="absolute bottom-0 w-full bg-[#5000ca]"
            style={{
              height: "50px",
            }}
          ></div>
        </m.div>
      </LazyMotion>
      <div className="secondary">
        <div className="container mx-auto px-4 ">
          <h2 className="text-3xl lg:text-4xl text-white font-bold mb-8">
            Template Content
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-white text-lg font-medium mb-2">Feature 1</h3>
              <p className="text-gray-400 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                feugiat mauris sit amet enim placerat, ac volutpat mi lacinia.
              </p>
              <a
                href="#"
                className="text-purple-500 hover:text-purple-600 font-medium"
              >
                Learn More
              </a>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-white text-lg font-medium mb-2">Feature 2</h3>
              <p className="text-gray-400 mb-2">
                Sed posuere, ipsum non gravida facilisis, mi nisi ultricies
                lorem, in semper justo nisl non nunc.
              </p>
              <a
                href="#"
                className="text-purple-500 hover:text-purple-600 font-medium"
              >
                Learn More
              </a>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-white text-lg font-medium mb-2">Feature 3</h3>
              <p className="text-gray-400 mb-2">
                Vestibulum congue nulla nec elit egestas, nec vulputate nisi
                gravida. Integer in ligula vel risus tristique rhoncus.
              </p>
              <a
                href="#"
                className="text-purple-500 hover:text-purple-600 font-medium"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
