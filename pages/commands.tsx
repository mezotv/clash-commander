import React from "react";
import Navbar from "@/components/Navbar";
import { LazyMotion, domAnimation, m } from "framer-motion";

interface Command {
  name: string;
  description: string;
  permissions: string;
}

const Commands: React.FC = () => {
  const commands: Command[] = [
    {
      name: "/clan",
      description: "Display info about a clan",
      permissions: "None",
    },
    {
      name: "/player",
      description: "Display info about a player",
      permissions: "None",
    },
    {
      name: "/goldpass",
      description: "Display info about a player",
      permissions: "None",
    },
    {
      name: "/help",
      description: "The help command",
      permissions: "None",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Commands</h1>
        <LazyMotion features={domAnimation}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {commands.map((command: Command, index: number) => (
              <m.div
                key={index}
                className="bg-[#f72ae611] rounded shadow p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <h2 className="text-xl font-bold mb-2">{command.name}</h2>
                <div className="mb-2">
                  <p className="font-bold text-gray-500">Description:</p>
                  <p className="text-white font-semibold">
                    {command.description}
                  </p>
                </div>
                <div className="mb-2">
                  <p className="font-bold text-gray-500">Permissions:</p>
                  <p className="text-white font-semibold">
                    {command.permissions}
                  </p>
                </div>
              </m.div>
            ))}
          </div>
        </LazyMotion>
      </div>
    </div>
  );
};

export default Commands;
