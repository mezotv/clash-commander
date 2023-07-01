import { useEffect } from "react";

const Invite = () => {
  useEffect(() => {
    window.location.href = "https://discord.com/oauth2/authorize?client_id=bot-client-id&scope=bot&permissions=bot-permissions";
  }, []);

  return null;
};

export default Invite;
