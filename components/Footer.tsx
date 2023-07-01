/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="secondary py-8 ">
      <div className="container mx-auto mt-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
            <div className="flex items-center justify-center md:justify-start">
              <img
                src="/clash_commander.png"
                alt="Logo"
                className="w-12 h-12 mr-2 rounded-full"
                draggable={false}
              />
              <p className="text-white text-2xl font-bold">Clash Commander</p>
            </div>
            <p className="text-gray-300 mt-4 text-center md:text-left">
              Manage your Clash of Clans Clan with ease.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4  flex flex-col justify-center ">
            <h4 className="text-white font-bold mb-2">Recommended</h4>
            <ul className="text-gray-300">
              <li>
                <Link href="/" passHref>
                  <span className="block mb-2 cursor-pointer hover:text-white">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/commands" passHref>
                  <span className="block mb-2 cursor-pointer hover:text-white">Commands</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <h4 className="text-white font-bold mb-2">Legal</h4>
            <ul className="text-gray-300">
              <li>
                <Link href="/imprint" passHref>
                  <span className="block mb-2 cursor-pointer hover:text-white">Imprint</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy" passHref>
                  <span className="block mb-2 cursor-pointer hover:text-white">Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link href="/terms" passHref>
                  <span className="block mb-2 cursor-pointer hover:text-white">Terms of Service</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <h4 className="text-white font-bold mb-2">Links</h4>
            <ul className="text-gray-300">
              <li>
                <Link href="/discord" passHref>
                  <span className="block mb-2 cursor-pointer hover:text-white" rel="noopener noreferrer">
                    Support Server
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/invite" passHref>
                  <span className="block mb-2 cursor-pointer hover:text-white" rel="noopener noreferrer">Invite</span>
                </Link>
              </li>
              <li>
                <Link href="/vote" passHref>
                  <span className="block mb-2 cursor-pointer hover:text-white" rel="noopener noreferrer">Vote</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-600 mt-8 pt-8">
        <div className="container mx-auto">
          <p className="text-gray-300 text-center">
            Made With ♥ By{" "}
            <Link href="https://github.com/palentier" target="_blank" rel="noopener noreferrer">
              <span className="text-blue-400 cursor-pointer">Palentier</span>
            </Link>{" "}
            using{" "}
            <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
              <span className="text-blue-400 cursor-pointer">NextJS</span>
            </Link>{" "}
            for clashcommander.xyz
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
