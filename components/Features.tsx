import { useEffect } from "react";
import { LazyMotion, domAnimation, m, useAnimation } from "framer-motion";
import { AiOutlinePlusSquare } from "react-icons/ai";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import ClanEmbed from "./ClanEmbed";
import PlayerEmbed from "./PlayerEmbed";

const Features = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

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
              <PlayerEmbed />
            </div>
            <div className="w-full lg:w-1/2 order-2">
              <div className="text-left lg:ml-10 mb-3">
                <m.h3
                  className="text-2xl font-bold text-white mb-4 "
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Access Detailed Player Statistics
                </m.h3>
                <m.p
                  className="text-lg text-white"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  The Player Command feature within the Clash Commander bot
                  offers an invaluable resource for players seeking to access
                  detailed statistics about their fellow clan members and
                  opponents. By utilizing this powerful tool, users can gain
                  valuable insights into the performance, progress, and
                  strategies employed by individual players within the game.
                </m.p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center mt-16">
            <div className="w-full lg:w-1/2 order-2">
              <div className="text-left lg:ml-10 mb-3">
                <ClanEmbed />
              </div>
            </div>
            <div className="w-full  lg:w-1/2 order-1">
              <m.h3
                className="text-2xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: -50 }}
                animate={controls}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Uncover In-Depth Clan Details
              </m.h3>
              <m.p
                className="text-lg text-white"
                initial={{ opacity: 0, y: -50 }}
                animate={controls}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                This powerful tool allows you to delve into comprehensive clan
                statistics, including war performance, clan points, and more. By
                harnessing these in-depth clan details, you can gain valuable
                insights into your clan&apos;s strengths, weaknesses, and
                overall progress.
              </m.p>
            </div>
          </div>
          <div className="flex justify-center mt-16">
            <Link
              href={
                "https://discord.com/oauth2/authorize?client_id=1057995097167368222&scope=bot&permissions=277025770560"
              }
            >
              <button
                className="bg-purple-300 hover:bg-purple-500 text-white font-bold py-4 px-8 rounded-full"
                ref={ref}
              >
                <m.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={controls}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <m.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={controls}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Get Started
                  </m.span>
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
