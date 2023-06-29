import { FC, useEffect, useRef } from "react";
import Slider from "react-slick";
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
    }, 2500); // Adjust the interval duration for smoother sliding

    return () => {
      clearInterval(interval);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000, // Adjust slide transition speed for smoother motion
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: true,
    swipeToSlide: true,
    lazyLoad: "ondemand",
    arrows: false,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 2500, // Adjust the autoplay interval for smoother sliding
  };

  return (
    <div className="relative w-full h-1/2 mb-4">
      <Slider {...settings} ref={sliderRef}>
        {servers.map((server) => (
          <m.div
            key={server.id}
            style={{
              display: "flex",
              alignItems: "center",
              height: "150px",
              padding: "0.5rem",
              marginBottom: "1rem",
            }}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-[#f72ae611] rounded-lg shadow-lg mx-2 mb-10 p-4 flex items-center">
              <img
                src={server.imageUrl}
                alt={server.name}
                className="w-14 h-14 rounded-full object-cover mr-3"
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
