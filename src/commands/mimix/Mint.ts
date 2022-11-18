import type { CommandInteraction, User } from "discord.js";
import { ApplicationCommandOptionType } from "discord.js";
import { Discord, Slash, SlashOption } from "discordx";
import { injectable } from "tsyringe";
import { MimixService } from "../../services/MimixService.js";

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
      await this.mimixService.mint(user.id, amount);
      interaction.reply(`${amount} is minted to ${user}`);
    } else {
      await this.mimixService.mint(interaction.user.id, amount);
      interaction.reply(`${amount} is minted`);
    }
  }
}
