import { PrismaPromise, User } from "@prisma/client";
import { singleton } from "tsyringe";
import { prisma } from "../database/prisma";
import { UsersService } from "./UsersService";
import { PointLogger } from "../utils/DiscordLogger";

@singleton()
export class PointsService {
  constructor(private usersService: UsersService) {}

  add(discordId: string, amount: number): PrismaPromise<User> {
    return prisma.user.upsert({
      where: { discordId },
      update: { mimix: { increment: amount } },
      create: { name, discordId, mimix: amount },
    });
  }

  // show(discordId: string): PrismaPromise<User> {
  //   return prisma.user.upsert({
  //     where: { discordId },
  //     update: {},
  //     create: { name, discordId }
  //   });
  // }

  // async give(amount: number, sender: string, receiver: string): Promise<void> {
  //   const { mimix } = await this.usersService.upsertUser({ discordId: sender });

  //   if (amount > points) {
  //     throw new Error(
  //       `Not enough BANANA points. <@${sender}> has ${points} BANANA, you tried to give <@${receiver}> ${amount} BANANA`
  //     );
  //   }

  //   await prisma.$transaction([
  //     this.add(sender, -amount),
  //     this.add(receiver, amount),
  //     prisma.pointTransaction.create({
  //       data: {
  //         amount,
  //         sender: {
  //           connect: { discordId: sender }
  //         },
  //         receiver: {
  //           connect: { discordId: receiver }
  //         }
  //       }
  //     })
  //   ]);

  //   PointLogger.send(`[Give Transaction] - ${sender} gave ${receiver} **${amount}** BANANA`);
  // }
}
