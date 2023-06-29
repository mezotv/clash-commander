import { FC, useEffect, useRef } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyMotion, domAnimation, m } from "framer-motion";

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
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 1000); // Adjust the interval duration for smoother sliding

    return () => {
      clearInterval(interval);
    };
  }, []);

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 1000, // Adjust slide transition speed for smoother motion
    slidesToShow: 3, // Show 3 cards on desktop
    slidesToScroll: 1,
    rtl: true,
    swipeToSlide: true,
    lazyLoad: "ondemand" as const, // Provide the correct type for lazyLoad
    arrows: false,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 1000, // Adjust the autoplay interval for smoother sliding
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show only 1 card on smaller screens
        },
      },
    ],
  };

  return (
    <div className="relative w-full h-1/2 mb-4">
      <Slider {...settings} ref={sliderRef}>
        {servers.map((server) => (
          <m.div
            key={server.id}
            className="flex items-center justify-center w-full h-full p-2 sm:p-4"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-[#f72ae611] w-full sm:w-96 rounded-lg shadow-lg flex items-center p-4">
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
      </Slider>
    </div>
  );
};

export default ServerSlider;
