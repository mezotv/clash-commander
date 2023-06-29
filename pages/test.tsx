import { FC } from "react";
import ServerSlider from "../components/ServerSlider";
const servers = [
  {
    id: "1",
    name: "Discord Townhall",
    memberCount: 1000000,
    imageUrl: "/clash_commander.png",
  },
  {
    id: "2",
    name: "Server 2",
    memberCount: 200,
    imageUrl: "/clash_commander.png",
  },
  // Add more server objects as needed
];

const Test: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 flex flex-col justify-center items-center">My Discord Servers</h1>
      <div className="flex flex-col items-center">
        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4">
          <ServerSlider servers={servers} />
        </div>
      </div>
    </div>
  );
};

export default Test;
