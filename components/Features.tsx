import { useEffect } from "react";
import { LazyMotion, domAnimation, m, useAnimation } from "framer-motion";
import { AiOutlinePlusSquare } from "react-icons/ai";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import ClanEmbed from "./ClanEmbed";
import PlayerEmbed from "./PlayerEmbed";
import InviteSection from "./InviteSection";

const Features = () => {
  const [refPlayer, inViewPlayer] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [refClan, inViewClan] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animationControlsPlayer = useAnimation();
  const animationControlsClan = useAnimation();

  useEffect(() => {
    if (inViewPlayer) {
      animationControlsPlayer.start("visible");
    }
    if (inViewClan) {
      animationControlsClan.start("visible");
    }
  }, [inViewPlayer, inViewClan]);

  return (
    <LazyMotion features={domAnimation}>
      <div id="features" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white">
              <span>Features</span>
            </h2>
            <p className="text-xl text-white mt-4">
              <span>Discover what Clash Commander can do for you</span>
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center mt-16">
            <div className="w-full lg:w-1/2 order-1">
              <PlayerEmbed />
            </div>
            <div className="w-full lg:w-1/2 order-2">
              <m.div
                ref={refPlayer}
                initial="hidden"
                animate={animationControlsPlayer}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -100 },
                }}
                transition={{ duration: 0.5 }}
                className="text-left lg:ml-10 mb-3"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  Access Detailed Player Statistics
                </h3>
                <p className="text-lg text-white">
                  The Player Command feature within the Clash Commander bot offers an invaluable resource for players seeking to access detailed statistics about their fellow clan members and opponents. By utilizing this powerful tool, users can gain valuable insights into the performance, progress, and strategies employed by individual players within the game.
                </p>
              </m.div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center mt-16">
            <div className="w-full lg:w-1/2 order-2">
              <div className="text-left lg:ml-10 mb-3">
                <ClanEmbed />
              </div>
            </div>
            <div className="w-full  lg:w-1/2 order-1">
              <m.div
                ref={refClan}
                initial="hidden"
                animate={animationControlsClan}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: 100 },
                }}
                transition={{ duration: 0.5 }}
                className="text-left lg:ml-10 mb-3"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  Uncover In-Depth Clan Details
                </h3>
                <p className="text-lg text-white">
                  This powerful tool allows you to delve into comprehensive clan statistics, including war performance, clan points, and more. By harnessing these in-depth clan details, you can gain valuable insights into your clan's strengths, weaknesses, and overall progress.
                </p>
              </m.div>
            </div>
          </div>
          <div className="flex justify-center mt-16">
            <Link
              href="https://discord.com/oauth2/authorize?client_id=1057995097167368222&scope=bot&permissions=277025770560"
            >
              <InviteSection />
            </Link>
          </div>
        </div>
      </div>
    </LazyMotion>
  );
};

export default Features;
