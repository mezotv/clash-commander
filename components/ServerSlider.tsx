import { FC } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Marquee from "react-marquee";


interface Server {
  id: string;
  name: string;
  memberCount: number;
  imageUrl: string;
}

interface ServerSliderProps {
  servers: Server[];
}

const ServerSlider: FC<ServerSliderProps> = ({ servers }) => {
  return (
    <div className="relative w-full h-1/2">
      <Marquee velocity={50} direction="rtl" resetAfterTries={0}>
        {servers.map((server) => (
          <m.div
            key={server.id}
            style={{
              display: "flex",
              alignItems: "center",
              height: "200px",
              padding: "1rem",
            }}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-[#f72ae611] rounded-lg shadow-lg mx-4 p-4 flex items-center">
              <img
                src={server.imageUrl}
                alt={server.name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">{server.name}</h3>
                <p className="text-gray-500 text-sm">{`${server.memberCount} members`}</p>
              </div>
            </div>
          </m.div>
        ))}
      </Marquee>
    </div>
  );
};

export default ServerSlider;
