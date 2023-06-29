import React from "react";

interface ButtonOption {
  label: string;
  url: string;
}

interface DiscordEmbedProps {
  title: string;
  description: string;
  imageUrl: string;
  author: string;
  button?: ButtonOption;
}

const DiscordEmbed: React.FC<DiscordEmbedProps> = ({ title, description, imageUrl, author, button }) => {
  return (
    <div
      className="border border-gray-800 rounded-lg p-4 bg-gray-700 text-white"
      style={{
        width: "350px",
        margin: "0 auto",
      }}
    >
      <div className="flex items-center mb-4">
        <img
          className="w-8 h-8 mr-2"
          src="/clash_commander.png"
          alt="Discord Logo"
          style={{
            width: "32px",
            height: "32px",
          }}
        />
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
      <div className="bg-gray-600 p-2 rounded-lg mb-4">
        <p className="text-gray-400 mb-2">
          <span className="text-blue-400 font-semibold">/{author}</span>
        </p>
        <p className="text-white">{description}</p>
      </div>
      {button && (
        <div className="flex justify-center">
          <a
            href={button.url}
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            {button.label}
          </a>
        </div>
      )}
      <div className="flex justify-center">
        <img
          className="w-full max-w-sm rounded-lg"
          src={imageUrl}
          alt="Discord Embed Image"
          style={{
            width: "200px",
            height: "200px",
          }}
        />
      </div>
    </div>
  );
};

export default DiscordEmbed;