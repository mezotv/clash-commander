import { LazyMotion, domAnimation, m } from "framer-motion";
import { AiOutlinePlusSquare } from "react-icons/ai";
import Link from "next/link";

const Features = () => {
  return (
    <LazyMotion features={domAnimation}>
      <div id="features" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white">
              <m.span
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Features
              </m.span>
            </h2>
            <p className="text-xl text-white mt-4">
              <m.span
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Discover what Clash Commander can do for you
              </m.span>
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center mt-16">
            <div className="w-full lg:w-1/2 order-1">
              <m.img
                src="/image_2.png"
                className="w-full max-w-md mx-auto mb-8 lg:mb-0 rounded-lg"
                alt="Feature Image 2"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>
            <div className="w-full lg:w-1/2 order-2">
              <div className="text-left">
                <m.h3
                  className="text-2xl font-bold text-white mb-4"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Powerful Clan Management
                </m.h3>
                <m.p
                  className="text-lg text-white"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Clash Commander provides you with a set of powerful features to efficiently manage your Clash of Clans clan. From member management and communication tools to event organization and data analysis, we&apos;ve got you covered.
                </m.p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center mt-16">
            <div className="w-full lg:w-1/2 order-2">
              <div className="text-left">
              <m.img
                src="/image_3.png"
                className="w-full max-w-md mx-auto mb-8 lg:mb-0 rounded-lg"
                alt="Feature Image 3"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              </div>
            </div>
            <div className="w-full  lg:w-1/2 order-1">
            <m.h3
                  className="text-2xl font-bold text-white mb-4"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Seamless Integration
                </m.h3>
                <m.p
                  className="text-lg text-white"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Clash Commander seamlessly integrates with Discord, providing you and your clan members with a smooth and efficient experience. Connect your clan server and unlock the full potential of clan management and coordination.
                </m.p>
            </div>
          </div>
          <div className="flex justify-center mt-16">
          <Link href={'https://discord.com/oauth2/authorize?client_id=1057995097167368222&scope=bot&permissions=277025770560'}>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full">
              <m.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Get Started 
              </m.span>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </LazyMotion>
  );
};

export default Features;
