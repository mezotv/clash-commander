import {
  DiscordMessage,
  DiscordCommand,
  DiscordEmbed,
  DiscordEmbedDescription,
  DiscordQuote,
  DiscordEmbedFields,
  DiscordEmbedField,
  DiscordCustomEmoji,
  DiscordAttachments,
  DiscordActionRow,
  DiscordButton,
  DiscordSystemMessage,
  DiscordReactions,
  DiscordReaction,
} from "@skyra/discord-components-react";
import { profiles } from "../libs/constants";
import dynamic from "next/dynamic";

const DiscordMessages = dynamic(
  () =>
    import("@skyra/discord-components-react").then(
      (module) => module.DiscordMessages
    ),
  {
    ssr: false,
  }
);

export default function PlayerEmbed() {
  return (
    <>
      <DiscordMessages class="rounded-lg  w-auto shadow mb-8">
        <DiscordMessage
          profile="Clash Commander"
          author={profiles[0].clashcommand.author}
          avatar={profiles[0].clashcommand.avatar}
          roleColor={profiles[0].clashcommand.roleColor}
          bot={profiles[0].clashcommand.bot}
          verified={profiles[0].clashcommand.verified}
        >
          <DiscordCommand
            slot="reply"
            profile="dominik"
            author={profiles[0].dominik.author}
            avatar={profiles[0].dominik.avatar}
            roleColor={profiles[0].dominik.roleColor}
            command="/player"
          ></DiscordCommand>
          <DiscordEmbed slot="embeds" embedTitle="Palentier #L8CLV9JUP" color="#1e88e5">
            <DiscordEmbedFields className="inline-block" slot="fields">
              <DiscordEmbedField fieldTitle="Townhall Level" inline inlineIndex={1}>
                <DiscordCustomEmoji
                  name="level"
                  url="/th10.webp"
                  embedEmoji
                />{" "}
                10 | Weapon: 0{" "}
              </DiscordEmbedField>
              <DiscordEmbedField
                fieldTitle="Level"
                inline
                inlineIndex={2}
              >
                {" "}
                <DiscordCustomEmoji
                  name="sapphire"
                  url="/1058110647457546250.webp"
                  embedEmoji
                />{" "}
                100{" "}
              </DiscordEmbedField>
              <DiscordEmbedField
                fieldTitle="Clan"
                inline
                inlineIndex={3}
              >
                 <DiscordCustomEmoji
                  name="sapphire"
                  url="/1058110650351636630.webp"
                  embedEmoji
                />
                {" "}
                N/A{" "}
              </DiscordEmbedField>
              <DiscordEmbedField
                fieldTitle="Trophies"
                inline
                inlineIndex={1}
              >
                <DiscordCustomEmoji
                  name="sapphire"
                  url="/1058110653740626021.webp"
                  embedEmoji
                />
                {" "}
                1743{" "}
              </DiscordEmbedField>

              <DiscordEmbedField
                fieldTitle="Personal Best"
                inline
                inlineIndex={2}
              >
                <DiscordCustomEmoji
                  name="sapphire"
                  url="/1058110650351636630.webp"
                  embedEmoji
                />
                {" "}
                🏆 2182{" "}
              </DiscordEmbedField>
              <DiscordEmbedField
                fieldTitle="War Stars"
                inline
                inlineIndex={3}
              >
                <DiscordCustomEmoji
                  name="sapphire"
                  url="/1121614284259086436.webp"
                  embedEmoji
                />
                {" "}
                 100{" "}
              </DiscordEmbedField>
              <DiscordEmbedField
                fieldTitle="Donations"
                inline
                inlineIndex={1}
              >
                <DiscordCustomEmoji
                  name="sapphire"
                  url="/1058110664830357665.webp"
                  embedEmoji
                />
                {" "}
                0 | Recieved: 0{" "}
              </DiscordEmbedField>
              <DiscordEmbedField
                fieldTitle="Multiplayer Wins"
                inline
                inlineIndex={2}
              >
                <DiscordCustomEmoji
                  name="sapphire"
                  url="/1058061175985803334.webp"
                  embedEmoji
                />
                {" "}
                0{" "}
              </DiscordEmbedField>
              <DiscordEmbedField
                fieldTitle="Versus Wins"
                inline
                inlineIndex={3}
              >
                <DiscordCustomEmoji
                  name="sapphire"
                  url="/1058110650351636630.webp"
                  embedEmoji
                />
                {" "}
                 50{" "}
              </DiscordEmbedField>
              <DiscordEmbedField
                fieldTitle="Clancapital Contributions Wins"
                inline
                inlineIndex={1}
              >
                <DiscordCustomEmoji
                  name="sapphire"
                  url="/1058057404778037288.webp"
                  embedEmoji
                />
                {" "}
                 350{" "}
              </DiscordEmbedField>
              <DiscordEmbedField
                fieldTitle="Builderhall Level"
                inline
                inlineIndex={2}
              >
                <DiscordCustomEmoji
                  name="sapphire"
                  url="/1058111852166529105.webp"
                  embedEmoji
                />
                {" "}
                 6{" "}
              </DiscordEmbedField>
              <DiscordEmbedField
                fieldTitle="Personal Builder Best"
                inline
                inlineIndex={3}
              >
                <DiscordCustomEmoji
                  name="sapphire"
                  url="/1058110680881967158.webp"
                  embedEmoji
                />
                {" "}
                 2150{" "}
              </DiscordEmbedField>
            </DiscordEmbedFields>
          </DiscordEmbed>
          <DiscordAttachments slot="components">
            <DiscordActionRow>
              <DiscordButton
                url="https://www.clashofstats.com/clans/41.er-2J0JVPP2/summary"
                emoji="/1058110656987017246.webp"
                emojiName="1058110656987017246"
              >
                Visit Player Profile
              </DiscordButton>
            </DiscordActionRow>
          </DiscordAttachments>
        </DiscordMessage>
        <DiscordMessage
          profile="Palentier"
          author={profiles[0].palentier.author}
          avatar={profiles[0].palentier.avatar}
          roleColor={profiles[0].palentier.roleColor}
        >
          So, can I join your clan?
        </DiscordMessage>
        <DiscordMessage
          profile="Dominik"
          author={profiles[0].dominik.author}
          avatar={profiles[0].dominik.avatar}
          roleColor={profiles[0].dominik.roleColor}
        >
          Sorry, but you don&apos;t meet the requirements :c
        </DiscordMessage>
      </DiscordMessages>
    </>
  );
}
