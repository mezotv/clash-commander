import React from "react";
import { useState } from "react";
import DiscordEmbed from "./DiscordEmbed";

const DiscordBackground = () => {
  const [slashCommand, setSlashCommand] = useState("");
  const [botResponse, setBotResponse] = useState("");

  const handleSlashCommandChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSlashCommand(event.target.value);
  };

  const handleBotResponseChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setBotResponse(event.target.value);
  };

  return (
    <div
      style={{
        width: "350px",
        margin: "0 auto",
        background: "#2C2F33",
      }}
    >
      <DiscordEmbed
        title="Slash Command"
        description="Enter a slash command"
        imageUrl="/clash_commander.png"
        author="Your Name"
        button={{
          label: "Submit",
          url: "/",
        }}
      />
      <input
        type="text"
        placeholder="Slash Command"
        value={slashCommand}
        onChange={handleSlashCommandChange}
      />
      <br />
      <input
        type="text"
        placeholder="Bot Response"
        value={botResponse}
        onChange={handleBotResponseChange}
      />
      <br />
      <button onClick={() => {
        setBotResponse("`" + slashCommand + "`");
      }}>
        Reply
      </button>
    </div>
  );
};

export default DiscordBackground;