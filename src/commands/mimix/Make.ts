import type { CommandInteraction } from "discord.js";
import { Discord, Slash } from "discordx";
import { injectable } from "tsyringe";
import { UsersService } from "../../services/UsersService.js";

@Discord()
@injectable()
export class Make {
  constructor(private usersService: UsersService) {}

  @Slash({ description: "make db with every user" })
  async make(interaction: CommandInteraction) {
    const data = await interaction.guild?.members.fetch();
    data?.filter((e) => {
      this.usersService.createUsers({
        discordId: e.id,
      });
    });
    interaction.reply(`made`);
  }
}
