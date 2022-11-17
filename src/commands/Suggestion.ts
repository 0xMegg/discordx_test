import {
  CommandInteraction,
  ApplicationCommandOptionType,
  User,
} from "discord.js";
import { Discord, Slash, SlashChoice, SlashOption } from "discordx";
import { injectable } from "tsyringe";
import fs from "fs";

@Discord()
@injectable()
export class Suggestion {
  @Slash({ description: "점메추" })
  suggestion(
    @SlashChoice({ name: "비건", value: "비건" })
    @SlashChoice({ name: "논비건", value: "논비건" })
    @SlashOption({
      description: "비건?",
      name: "veg",
      required: true,
      type: ApplicationCommandOptionType.String,
    })
    veg: string,
    @SlashChoice({ name: "한식", value: "한식" })
    @SlashChoice({ name: "중식", value: "중식" })
    @SlashChoice({ name: "일식", value: "일식" })
    @SlashChoice({ name: "양식", value: "양식" })
    @SlashChoice({ name: "그 외", value: "그 외" })
    @SlashOption({
      description: "어느 나라?",
      name: "nation",
      required: true,
      type: ApplicationCommandOptionType.String,
    })
    nation: string,
    @SlashChoice({ name: "밥", value: "밥" })
    @SlashChoice({ name: "면", value: "면" })
    @SlashChoice({ name: "빵", value: "빵" })
    @SlashChoice({ name: "그 외", value: "그 외" })
    @SlashOption({
      description: "밥? 면? 빵?",
      name: "style",
      required: true,
      type: ApplicationCommandOptionType.String,
    })
    style: string,
    interaction: CommandInteraction
  ) {
    const user = interaction.user.id;
    // fs.readFile("./menu.csv", "utf-8", (e, data)=> {
    //   const
    // })
    interaction.reply(
      `<@${user}>의 오늘 점심 메뉴는 **${veg}${style}${nation}!!!!!** `
    );
  }
}
