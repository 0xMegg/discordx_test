import { CommandInteraction, ApplicationCommandOptionType } from "discord.js";
import { Discord, Slash, SlashChoice, SlashOption } from "discordx";
import { injectable } from "tsyringe";
import data from "../database/menu.json" assert { type: "json" };

@Discord()
@injectable()
export class Suggestion {
  @Slash({ description: "점메추" })
  suggestion(
    @SlashChoice({ name: "비건", value: "veg" })
    @SlashChoice({ name: "논비건", value: "notveg" })
    @SlashOption({
      description: "비건?",
      name: "veg",
      required: true,
      type: ApplicationCommandOptionType.String,
    })
    veg: string,
    @SlashChoice({ name: "한식", value: "kor" })
    @SlashChoice({ name: "중식", value: "chi" })
    @SlashChoice({ name: "일식", value: "jap" })
    @SlashChoice({ name: "양식", value: "wes" })
    @SlashChoice({ name: "그 외", value: "another" })
    @SlashOption({
      description: "어느 나라?",
      name: "nation",
      required: true,
      type: ApplicationCommandOptionType.String,
    })
    nation: string,
    @SlashChoice({ name: "밥", value: "rice" })
    @SlashChoice({ name: "면", value: "noodle" })
    @SlashChoice({ name: "빵", value: "bread" })
    @SlashChoice({ name: "그 외", value: "another" })
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
    const availableMenus = data.filter(
      (item) =>
        item.veg === veg && item.nation === nation && item.style === style
    );
    const rand = Math.floor(Math.random() * availableMenus.length);
    const result = availableMenus[rand].name;
    interaction.reply(`<@${user}>의 오늘 점심 메뉴는 **${result}!!!!!** `);
  }
}
