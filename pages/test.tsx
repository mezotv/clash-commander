import DiscordEmbed from "@/components/DiscordEmbed"

export default function Test() {
    return(
        <>  
        <DiscordEmbed
  title="My Discord Server"
  description="Join my Discord server to chat and hang out!"
  imageUrl="/discord_embed_image.png"
  author="User123"
  button={{ label: "Join Server", url: "https://discord.gg/example" }}
/>
        </>
    )
}