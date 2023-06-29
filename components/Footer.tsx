import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className=" py-4">
      <div className="container mx-auto text-center text-gray-400">
        <p>
          This website was made with{" "}
          <span className="text-red-500">❤️</span> using{" "}
          <span className="text-blue-500">Tailwind CSS</span> and{" "}
          <span className="text-blue-500">Next.js</span> and developed by Palentier.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
