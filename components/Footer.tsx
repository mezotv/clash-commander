import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" py-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
            <div className="flex items-center">
              <img src="/clash_commander.png" alt="Logo" className="w-12 h-12 mr-2 rounded-full" draggable={false} />
              <p className="text-white text-xl font-bold">WouldYou</p>
            </div>
            <p className="text-gray-300 mt-4">
             Manage your Clash of Clans Clan with ease.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <h4 className="text-white font-bold mb-2">Recommended</h4>
            <Link href="/" passHref>
              <p className="text-gray-300 hover:text-white block mb-2">Home</p>
            </Link>
            <Link href="/commands" passHref>
              <p className="text-gray-300 hover:text-white block mb-2">Commands</p>
            </Link>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <h4 className="text-white font-bold mb-2">Legal</h4>
            <Link href="/imprint" passHref>
              <p className="text-gray-300 hover:text-white block mb-2">Imprint</p>
            </Link>
            <Link href="/privacy" passHref>
              <p className="text-gray-300 hover:text-white block mb-2">Privacy Policy</p>
            </Link>
            <Link href="/terms" passHref>
              <p className="text-gray-300 hover:text-white block mb-2">Terms of Service</p>
            </Link>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <h4 className="text-white font-bold mb-2">Links</h4>
            <Link href="/discord" passHref>
              <p className="text-gray-300 hover:text-white block mb-2" target="_blank" rel="noopener noreferrer">Support Server</p>
            </Link>
            <Link href="/invite" passHref>
              <p className="text-gray-300 hover:text-white block mb-2" target="_blank" rel="noopener noreferrer">Invite</p>
            </Link>
            <Link href="/vote" passHref>
              <p className="text-gray-300 hover:text-white block mb-2" target="_blank" rel="noopener noreferrer">Vote</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-600 mt-8 pt-8">
        <div className="container mx-auto">
          <p className="text-gray-300 text-center">
            Made With ♥ By{" "}
            <Link href="https://github.com/MarcWebDev" target="_blank" rel="noopener noreferrer">
              Palentier
            </Link>{" "}
            using{" "}
            <Link href="https://github.com/mezotv" target="_blank" rel="noopener noreferrer">
              NextJS
            </Link>{" "}
            For clashcommander.xyz
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
