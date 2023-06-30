import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const InviteSection: React.FC = () => {
  const [serverCount, setServerCount] = useState(300);

  useEffect(() => {
    const fetchServerCount = () => {
      axios
        .get("https://japi.rest/discord/v1/application/1057995097167368222/")
        .then((response) => {
          if (response.data.data.bot.approximate_guild_count === undefined) return setServerCount(0);
          setServerCount(response.data.data.bot.approximate_guild_count);
          console.log(response);
        })
        .catch((error) => {});
    };

    fetchServerCount(); // Initial fetch

    const intervalId = setInterval(fetchServerCount, 60000); // Fetch every 15 seconds

    return () => {
      clearInterval(intervalId); // Cleanup interval on component unmount
    };
  }, []);

  const getOrdinalSuffix = (number: number): string => {
    const suffixes = ["th", "st", "nd", "rd"];
    const lastDigit = number % 10;
    const lastTwoDigits = number % 100;
  
    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
      return "th";
    }
  
    if (lastDigit === 1) {
      return "st";
    }
  
    if (lastDigit === 2) {
      return "nd";
    }
  
    if (lastDigit === 3) {
      return "rd";
    }
  
    return "th";
  };
  return (
    <section className="secondary py-8">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Be the {serverCount + 1}
            <sup>{getOrdinalSuffix(serverCount)}</sup> person to invite Clash Commander!
          </h2>
          <Link href={"https://discord.com/oauth2/authorize?client_id=1057995097167368222&scope=bot&permissions=277025770560"}>
            <button className="bg-purple-300 text-white px-6 py-3 rounded font-semibold shadow hover:bg-purple-500">
              Invite Bot
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InviteSection;
