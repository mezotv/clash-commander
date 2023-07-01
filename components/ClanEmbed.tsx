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

export default function ClanEmbed() {
    return(
        <>
                        <DiscordMessages class="rounded-lg w-auto shadow mb-8 ">
                  <DiscordMessage
                    profile="wouldyou"
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
                      command="/clan"
                    ></DiscordCommand>
                    <DiscordEmbed
                      slot="embeds"
                      embedTitle="41.er"
                      color="#1e88e5"
                    >
                      <DiscordEmbedDescription slot="description">
                        <DiscordQuote>
                          Clankrieg, Clankriegsliga, Clanspiele und
                          Überfallwochenende: Aktive Spieler sind immer
                          willkommen. Seid ein Teil der 41.er 💪🏻 Clankrieg wird
                          aktuell wegen Prüfungsvorbereitung ausgesetzt!
                        </DiscordQuote>
                      </DiscordEmbedDescription>
                      <DiscordEmbedFields
                        className="inline-block"
                        slot="fields"
                      >
                        <DiscordEmbedField
                          fieldTitle="Clan Level"
                          inline
                          inlineIndex={1}
                        >
                          <DiscordCustomEmoji
                            name="level"
                            url="/1058110647457546250.webp"
                            embedEmoji
                          />{" "}
                          16{" "}
                        </DiscordEmbedField>
                        <DiscordEmbedField
                          fieldTitle="Clan Points"
                          inline
                          inlineIndex={2}
                        >
                          {" "}
                          
                          🏆 25952{" "}
                        </DiscordEmbedField>
                        <DiscordEmbedField
                          fieldTitle="Clan Versus Points"
                          inline
                          inlineIndex={3}
                        >
                          <DiscordCustomEmoji
                            name="level"
                            url="/1058110680881967158.webp"
                            embedEmoji
                          />
                          {" "}
                          30055{" "}
                        </DiscordEmbedField>
                        <DiscordEmbedField
                          fieldTitle="Clan Capital Points"
                          inline
                          inlineIndex={1}
                        >
                          <DiscordCustomEmoji
                            name="level"
                            url="/1058057404778037288.webp"
                            embedEmoji
                          />
                          {" "}
                           1576{" "}
                        </DiscordEmbedField>

                        <DiscordEmbedField
                          fieldTitle="Required Trophies "
                          inline
                          inlineIndex={2}
                        >
                          <DiscordCustomEmoji
                            name="level"
                            url="/1058110680881967158.webp"
                            embedEmoji
                          />
                          {" "}
                          1800{" "}
                        </DiscordEmbedField>
                        <DiscordEmbedField
                          fieldTitle="War Win Streak"
                          inline
                          inlineIndex={3}
                        >
                          <DiscordCustomEmoji
                            name="level"
                            url="/1058061175985803334.webp"
                            embedEmoji
                          />
                          {" "}
                          🏆 8{" "}
                        </DiscordEmbedField>
                        <DiscordEmbedField
                          fieldTitle="Clan War Win"
                          inline
                          inlineIndex={1}
                        >
                          <DiscordCustomEmoji
                            name="level"
                            url="/1058062963690442762.webp"
                            embedEmoji
                          />
                          {" "}
                           245{" "}
                        </DiscordEmbedField>
                        <DiscordEmbedField
                          fieldTitle="Clan War Tie"
                          inline
                          inlineIndex={2}
                        >
                          <DiscordCustomEmoji
                            name="level"
                            url="/1058062965049413763.webp"
                            embedEmoji
                          />
                          {" "}
                           0{" "}
                        </DiscordEmbedField>
                        <DiscordEmbedField
                          fieldTitle="War Win Lose"
                          inline
                          inlineIndex={3}
                        >
                          <DiscordCustomEmoji
                            name="level"
                            url="/1058110647457546250.webp"
                            embedEmoji
                          />
                          {" "}
                           0{" "}
                        </DiscordEmbedField>
                      </DiscordEmbedFields>
                    </DiscordEmbed>
                    <DiscordAttachments slot="components">
                      <DiscordActionRow>
                        <DiscordButton
                          url="https://www.clashofstats.com/clans/41.er-2J0JVPP2/summary"
                          emoji="/coc.webp"
                          emojiName="coc"
                        >
                          Link
                        </DiscordButton>
                      </DiscordActionRow>
                    </DiscordAttachments>
                  </DiscordMessage>
                </DiscordMessages>
        </>
    )
}