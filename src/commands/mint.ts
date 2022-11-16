import type { CommandInteraction, User } from "discord.js";
import { ApplicationCommandOptionType } from "discord.js";
import { Discord, Slash, SlashOption } from "discordx";
import { injectable } from "tsyringe";
import { MimixService } from "../services/MimixService.js";

@Discord()
@injectable()
export class Mint {
  constructor(private mimixService: MimixService) {}

  @Slash({ description: "mint points" })
  async minting(
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
      const displayName = user.username + user.discriminator;
      await this.mimixService.mint(displayName, user.id, amount);
      interaction.reply(`${amount} is minted to ${user}`);
    } else {
      const displayName =
        interaction.user.username + interaction.user.discriminator;
      await this.mimixService.mint(displayName, interaction.user.id, amount);
      interaction.reply(`${amount} is minted`);
    }
  }
}
