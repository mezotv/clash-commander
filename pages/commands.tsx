import { useState } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { commands } from '../libs/constants';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Commands = () => {
  const [openedCommand, setOpenedCommand] = useState<string>('');

  const openCommand = (commandName: string) => {
    setOpenedCommand(openedCommand === commandName ? '' : commandName);
  };

  return (
    <LazyMotion strict features={domAnimation}>
      <Navbar />
      <div className="flex flex-col justify-center items-center min-h-screen py-8">
        <h1 className="text-3xl font-bold mb-4">Commands List</h1>
        <h3 className="text-xl text-gray-500 mb-8">All The Commands Would You Has To Offer!</h3>

        <div className="flex flex-col w-full gap-4">
          {commands.map((command) => (
            <div
              key={command.name}
              className={`secondary p-6 rounded-lg shadow-md w-full md:w-auto mb-8 md:mb-0 md:mr-8 ${
                openedCommand === command.name ? 'open' : ''
              }`}
              onClick={() => openCommand(command.name)}
            >
              <div className="flex justify-between items-center cursor-pointer mb-4">
                <h4 className="text-lg font-bold">{command.name}</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  className={`transition-transform duration-300 ${
                    openedCommand === command.name ? 'rotate-180' : ''
                  }`}
                >
                  <path
                    fill="#666"
                    d="M15 20.938a.93.93 0 0 1-.663-.275l-8.75-8.75a.938.938 0 1 1 1.327-1.327L15 18.674l8.088-8.088a.938.938 0 1 1 1.326 1.327l-8.75 8.75a.94.94 0 0 1-.665.274Z"
                  />
                </svg>
              </div>
              <p className="text-gray-600">{command.description}</p>
              {openedCommand === command.name && (
                <div className="mt-4">
                  <div className="flex items-center mb-2">
                    <h5 className="font-semibold mr-2">Usage:</h5>
                    <h6>{command.usage}</h6>
                  </div>
                  <div className="flex items-center">
                    <h5 className="font-semibold mr-2">Subcommands:</h5>
                    <h6>{command.subcommands ? command.subcommands : 'None'}</h6>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </LazyMotion>
  );
};

export default Commands;
