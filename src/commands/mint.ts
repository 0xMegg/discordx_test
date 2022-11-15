import type { CommandInteraction, User } from "discord.js";
import { ApplicationCommandOptionType } from "discord.js";
import { Discord, Slash, SlashOption } from "discordx";

@Discord()
export class Mint {
  @Slash({ description: "mint points" })
  minting(
    @SlashOption({
      description: "amount",
      name: "amount",
      required: true,
      type: ApplicationCommandOptionType.Integer,
    })
    amount: number,
    @SlashOption({
      description: "user",
      name: "user",
      type: ApplicationCommandOptionType.User,
    })
    user: User,
    interaction: CommandInteraction
  ) {
    if (user) {
      interaction.reply(`${amount} is minted to ${user}`);
    } else {
      interaction.reply(`${amount} is minted`);
    }
  }
}
